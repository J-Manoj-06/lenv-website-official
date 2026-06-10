"use client";

import Link from "next/link";
import { useState } from "react";
import LegalModal from "./LegalModal";

// --- Modal Contents ---

const PrivacyPolicyContent = (
  <div className="space-y-6">
    <p>LenV values your privacy and is committed to protecting your information.</p>
    
    <div>
      <h3 className="text-lg font-bold text-white mb-2">Information We Collect:</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Institution Information</li>
        <li>Usage Analytics</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">How We Use Information:</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide LenV services</li>
        <li>Improve platform experience</li>
        <li>Respond to inquiries</li>
        <li>Send important updates</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Data Security:</h3>
      <p>We implement industry-standard security measures to protect your information.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Third-Party Services:</h3>
      <p>LenV may use trusted third-party services such as Firebase and analytics providers.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Contact:</h3>
      <p>For privacy-related questions contact:<br/><a href="mailto:support@lenv.in" className="text-primary hover:underline">support@lenv.in</a></p>
    </div>
  </div>
);

const TermsOfServiceContent = (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-bold text-white mb-2">Acceptance of Terms:</h3>
      <p>By using LenV, you agree to these terms.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Platform Usage:</h3>
      <p>Users must use LenV responsibly and comply with applicable laws.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Account Responsibility:</h3>
      <p>Users are responsible for maintaining the confidentiality of their account credentials.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Intellectual Property:</h3>
      <p>All LenV content, branding, and software remain the property of LenV.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Service Availability:</h3>
      <p>We strive to provide uninterrupted service but cannot guarantee continuous availability.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Limitation of Liability:</h3>
      <p>LenV shall not be liable for indirect damages arising from platform usage.</p>
    </div>
  </div>
);

const CookiePolicyContent = (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-bold text-white mb-2">What Are Cookies:</h3>
      <p>Cookies help improve website functionality and user experience.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">How We Use Cookies:</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Authentication</li>
        <li>Session Management</li>
        <li>Analytics</li>
        <li>Performance Monitoring</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Third-Party Cookies:</h3>
      <p>Some third-party integrations may use cookies for analytics and functionality.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Managing Cookies:</h3>
      <p>Users can manage cookie preferences through browser settings.</p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-white mb-2">Consent:</h3>
      <p>By continuing to use LenV, you consent to our cookie usage practices.</p>
    </div>
  </div>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // State for Legal Modals
  const [modalConfig, setModalConfig] = useState<{isOpen: boolean, title: string, content: React.ReactNode}>({
    isOpen: false,
    title: "",
    content: null
  });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalConfig({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <footer className="bg-background text-foreground py-16 border-t border-foreground/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-md mx-auto mb-16">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <span className="font-heading font-bold text-lg leading-none">L</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">LenV</span>
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm mb-6 leading-relaxed">
              One Connected Ecosystem for Modern Education. Transforming how schools, teachers, parents, and students collaborate.
            </p>
            <div className="flex items-center justify-center gap-4 text-foreground/40">
              <a href="#" className="hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
            <p>© {currentYear} LenV Technologies Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => openModal("Privacy Policy", PrivacyPolicyContent)}
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openModal("Terms of Service", TermsOfServiceContent)}
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openModal("Cookie Policy", CookiePolicyContent)}
                className="hover:text-foreground transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Legal Modal */}
      <LegalModal 
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        content={modalConfig.content}
      />
    </>
  );
}
