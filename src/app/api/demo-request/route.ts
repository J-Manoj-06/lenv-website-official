import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Firebase Admin safely
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Handle newline characters in private key string securely
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic Server-side validation
    if (!data.fullName || !data.email || !data.phone || !data.schoolName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let docId = "pending";

    // 1. Store in Firestore (only if Firebase is configured)
    if (process.env.FIREBASE_PROJECT_ID) {
      const db = admin.firestore();
      const docRef = await db.collection("demo_requests").add({
        ...data,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      docId = docRef.id;
    } else {
      console.warn("FIREBASE_PROJECT_ID not set. Skipping Firestore save.");
    }

    // 2. Send Email Notification (only if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      const emailHtml = `
        <h2>New Demo Request</h2>
        
        <h3>Contact Person:</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Designation:</strong> ${data.designation}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>School Information:</h3>
        <p><strong>School Name:</strong> ${data.schoolName}</p>
        <p><strong>Institution Type:</strong> ${data.institutionType}</p>
        <p><strong>Board:</strong> ${data.board}</p>
        <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
        
        <h3>School Size:</h3>
        <p><strong>Students:</strong> ${data.totalStudents || 'N/A'}</p>
        <p><strong>Teachers:</strong> ${data.totalTeachers || 'N/A'}</p>
        <p><strong>Campuses:</strong> ${data.campuses || 'N/A'}</p>
        
        <h3>Preferred Demo:</h3>
        <p><strong>Date:</strong> ${data.preferredDate || 'N/A'}</p>
        <p><strong>Time:</strong> ${data.preferredTime || 'N/A'}</p>
        
        <h3>Additional Requirements:</h3>
        <p>${data.message || 'N/A'}</p>
      `;

      await resend.emails.send({
        // Note: Unless a custom domain is verified in Resend, you must use onboarding@resend.dev
        // and the 'to' email must be the one registered with your Resend account during testing.
        from: "LenV Website <onboarding@resend.dev>", 
        to: "contact@lenv.in",
        subject: "New LenV Demo Request",
        html: emailHtml,
      });
    } else {
      console.warn("RESEND_API_KEY not set. Skipping Email notification.");
    }

    return NextResponse.json({ success: true, id: docId });
    
  } catch (error: any) {
    console.error("Demo Request Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
