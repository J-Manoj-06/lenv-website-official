import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import CoreFeatures from "@/components/CoreFeatures";
import DashboardShowcase from "@/components/DashboardShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <main className="flex min-h-screen flex-col">
        <Header />
        
        {/* Cinematic Transition Zone spanning Hero and Core Features */}
        <div className="relative w-full">
          {/* Unified Atmospheric Background */}
          <div className="absolute top-0 left-0 right-0 h-full pointer-events-none overflow-hidden z-0">
            {/* Hero Orange Glow continuing downward */}
            <div className="absolute top-[40vh] -left-[10%] w-[60vw] h-[1200px] bg-gradient-to-br from-[#FF7A00]/15 to-transparent blur-[120px] rounded-full mix-blend-screen" />
            
            {/* Green Glow creeping up into the transition zone */}
            <div className="absolute top-[60vh] -right-[10%] w-[50vw] h-[1000px] bg-gradient-to-bl from-[#22c55e]/10 to-transparent blur-[150px] rounded-full mix-blend-screen" />
            
            {/* Subtle noise texture to bind the sections together cinematically */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-color-dodge" />
          </div>

          <div className="relative z-10">
            <Hero />
            <TrustSection />
          </div>
        </div>

        <AboutSection />
        <CoreFeatures />
        <DashboardShowcase />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

