import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import * as admin from "firebase-admin";

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

    // 1. Store in Firestore (must succeed)
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

    // 2. Send Email Notifications (wrapped in try/catch to not block success if they fail)
    try {
      if (process.env.RESEND_API_KEY) {
        // Use the notification email from env, fallback to onboarding if undefined during local testing
        const notificationEmail = process.env.NOTIFICATION_EMAIL || "onboarding@resend.dev";
        // Sender MUST be from verified domain in production, or onboarding@resend.dev in testing
        const sender = "LenV <onboarding@resend.dev>"; 
        
        // --- HTML TEMPLATES ---

        // Confirmation Email to the user who requested the demo
        const confirmationHtml = `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #000; padding: 20px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">LenV</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #111; margin-top: 0;">Demo Request Received</h2>
              <p>Dear ${data.fullName},</p>
              <p>Thank you for your interest in LenV.</p>
              <p>We have successfully received your demo request and our team will review your requirements shortly.</p>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0;">
                <h3 style="margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Request Summary</h3>
                <p><strong>Institution:</strong> ${data.schoolName}</p>
                <p><strong>Contact Person:</strong> ${data.fullName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Preferred Demo Date:</strong> ${data.preferredDate || 'Not specified'}</p>
                <p><strong>Preferred Demo Time:</strong> ${data.preferredTime || 'Not specified'}</p>
              </div>
              
              <p>A member of our team will contact you soon to schedule and personalize your demonstration.</p>
              <p>We look forward to helping your institution transform learning and administration with LenV.</p>
              
              <p style="margin-bottom: 0;">Regards,</p>
              <p style="margin-top: 5px; font-weight: bold;">Team LenV</p>
            </div>
            <div style="background-color: #f4f4f5; padding: 20px; text-align: center; border-top: 1px solid #eaeaea;">
              <a href="mailto:support@lenv.in" style="color: #666; text-decoration: none; font-size: 14px;">support@lenv.in</a>
            </div>
          </div>
        `;

        // Notification Email to the LenV Team
        const notificationHtml = `
          <div style="font-family: sans-serif; color: #333;">
            <h2 style="color: #16a34a;">🚀 NEW DEMO REQUEST</h2>
            
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Contact Person:</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Designation:</strong> ${data.designation}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">School Information:</h3>
            <p><strong>School Name:</strong> ${data.schoolName}</p>
            <p><strong>Institution Type:</strong> ${data.institutionType}</p>
            <p><strong>Board:</strong> ${data.board}</p>
            <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
            <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
            
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">School Size:</h3>
            <p><strong>Students:</strong> ${data.totalStudents || 'N/A'}</p>
            <p><strong>Teachers:</strong> ${data.totalTeachers || 'N/A'}</p>
            <p><strong>Campuses:</strong> ${data.campuses || 'N/A'}</p>
            
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Preferred Demo:</h3>
            <p><strong>Date:</strong> ${data.preferredDate || 'N/A'}</p>
            <p><strong>Time:</strong> ${data.preferredTime || 'N/A'}</p>
            
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Additional Requirements:</h3>
            <p>${data.message || 'None provided'}</p>
          </div>
        `;

        // Send Confirmation to User
        const confirmationResponse = await getResend().emails.send({
          from: sender,
          to: data.email,
          subject: "Thank You for Requesting a LenV Demo",
          html: confirmationHtml,
        });
        
        if (confirmationResponse.error) {
          console.error("Failed to send confirmation email:", confirmationResponse.error);
        }

        // Send Notification to LenV Team
        const notificationResponse = await getResend().emails.send({
          from: sender,
          to: notificationEmail,
          subject: "🚀 New LenV Demo Request",
          html: notificationHtml,
        });

        if (notificationResponse.error) {
          console.error("Failed to send internal notification email:", notificationResponse.error);
        }
      }
    } catch (emailError) {
      // Log the error but DO NOT throw. 
      // The lead is safely stored in Firestore, so we return success to the user.
      console.error("Email processing encountered a critical error:", emailError);
    }

    // Return success to the client
    return NextResponse.json({ success: true, id: docId });
    
  } catch (error: any) {
    console.error("Demo Request Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
