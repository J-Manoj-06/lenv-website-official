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
  title: "LenV | Transform Education",
  description: "The complete platform connecting schools, teachers, parents, and students in one intelligent ecosystem.",
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
