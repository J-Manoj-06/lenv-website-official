import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidAuroraBackground from "@/components/LiquidAuroraBackground";
import { cn } from "@/lib/utils";
import { DemoModalProvider } from "@/context/DemoModalContext";
import RequestDemoModal from "@/components/RequestDemoModal";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lenv1.app"),
  title: "LenV – All-in-One School Management Software & Education Platform",
  description:
    "LenV is a smart school management platform connecting schools, teachers, parents, and students. Features include attendance tracking, homework management, timetable scheduling, parent-teacher communication, student progress analytics, and more. Request a free demo today.",
  keywords: [
    "school management software",
    "school management system",
    "education platform",
    "school app",
    "parent app",
    "teacher app",
    "student app",
    "attendance tracking app",
    "homework management",
    "timetable management",
    "parent teacher communication",
    "school ERP",
    "learning management system",
    "student performance tracking",
    "school communication app",
    "institute management software",
    "smart school software",
    "school administration software",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lenv1.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lenv1.app",
    siteName: "LenV",
    title: "LenV – All-in-One School Management Software & Education Platform",
    description:
      "Smart school management platform for attendance, communication, academics, and more. Built for schools, teachers, parents, and students. Request a free demo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LenV – All-in-One School Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LenV – All-in-One School Management Software",
    description:
      "Smart education platform connecting schools, teachers, parents & students. Attendance, communication, academics – all in one app.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, outfit.variable)}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-black dark:selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <DemoModalProvider>
            {/* Gemini-style Flowing Animated Border */}
            <div className="gemini-animated-border" />
            
            <LiquidAuroraBackground />
            <SmoothScroll>
              {children}
            </SmoothScroll>
            
            <RequestDemoModal />
          </DemoModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
