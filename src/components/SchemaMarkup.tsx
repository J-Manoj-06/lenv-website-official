export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LenV",
    url: "https://lenv1.app",
    logo: "https://lenv1.app/og-image.png",
    description:
      "LenV is an all-in-one school management platform that connects schools, teachers, parents, and students through intelligent tools for attendance, communication, academics, and administration.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@lenv.in",
      contactType: "customer support",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LenV",
    url: "https://lenv1.app",
    description:
      "All-in-one school management software and education platform for modern schools.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lenv1.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LenV",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      "Smart school management software with attendance tracking, homework management, timetable scheduling, parent-teacher communication, student progress analytics, leaderboards, and real-time messaging.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free demo available. Contact us for pricing.",
    },
    featureList: [
      "Attendance Management",
      "Assignment & Homework Tracking",
      "Timetable Management",
      "Parent-Teacher Communication",
      "Student Progress Analytics",
      "Leaderboards & Gamification",
      "Instant Messaging",
      "Academic Reports",
      "Daily Challenges",
      "Interactive Mindmaps",
      "Multi-role Dashboards",
      "Real-time Notifications",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LenV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LenV is a comprehensive school management platform designed to connect schools, teachers, parents, and students in one intelligent ecosystem. It includes tools for attendance tracking, homework management, timetable scheduling, parent-teacher communication, student progress analytics, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Who is LenV designed for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LenV is built for entire educational institutions — including school administrators and principals, teachers, parents, and students. Each role gets a dedicated dashboard tailored to their specific needs, from managing classrooms to tracking a child's academic progress.",
        },
      },
      {
        "@type": "Question",
        name: "How does LenV help with attendance tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Teachers can mark attendance directly from their mobile app. Parents receive instant notifications when their child is marked absent or present. The system also maintains historical attendance analytics, and parents can submit leave requests digitally for quick approval.",
        },
      },
      {
        "@type": "Question",
        name: "Can parents communicate directly with teachers on LenV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. LenV includes a secure, WhatsApp-like messaging system designed exclusively for education. Role-based groups are automatically created, so parents and teachers can communicate instantly without sharing personal phone numbers.",
        },
      },
      {
        "@type": "Question",
        name: "Is LenV available as a mobile app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, LenV is available on Android, iOS, and the web. The mobile app provides real-time push notifications, offline access to schedules, and a fast, intuitive interface for all user roles.",
        },
      },
      {
        "@type": "Question",
        name: "How can I request a demo of LenV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a free demo by clicking the 'Request Demo' button on our website. Fill in your school name, contact details, and the number of students, and our team will schedule a personalized walkthrough of the platform.",
        },
      },
      {
        "@type": "Question",
        name: "What makes LenV different from other school management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LenV goes beyond traditional school ERPs by combining academic management with gamified learning features like leaderboards, daily challenges, a smart Mistake Book for spaced repetition, and interactive mindmaps. It's designed to engage students, not just manage records.",
        },
      },
      {
        "@type": "Question",
        name: "Is LenV secure and cloud-based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. LenV is fully cloud-based with enterprise-grade security, encrypted messaging, role-based access controls, and secure data storage. Your institution's data is always protected and accessible from anywhere.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
