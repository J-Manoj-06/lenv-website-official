import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import CoreFeatures from "@/components/CoreFeatures";
import DashboardShowcase from "@/components/DashboardShowcase";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <TrustSection />
      <AboutSection />
      <CoreFeatures />
      <DashboardShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
