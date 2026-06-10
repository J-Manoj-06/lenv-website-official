"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function CTA() {
  const { openModal } = useDemoModal();
  return (
    <section className="py-24 relative z-10 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0c00] to-[#0a0a0a]" />
          <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-color-dodge" />
          
          <div className="absolute -top-1/2 -right-1/4 w-[100%] h-[150%] rounded-full bg-[#FF7A00]/20 blur-[150px] pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[100%] h-[150%] rounded-full bg-[#FFB347]/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 max-w-4xl text-white">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">Transform</span> Your School?
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
              Join hundreds of institutions worldwide that have modernized their educational management with LenV.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={openModal}
                className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-primary to-gold p-[1px] transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-gold px-10 py-4 text-base font-bold text-black transition-all hover:opacity-90">
                  Request Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
