"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import ConnectedEcosystem from "./ConnectedEcosystem";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Connected Ecosystem Image */}
          <div className="w-full lg:w-1/2 relative z-10 order-2 lg:order-1 -mt-16 lg:-mt-32 xl:-mt-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-h-[600px]"
            >
              <ConnectedEcosystem />
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:pl-12">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Future of Education is Here</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-4"
            >
              Only 3 out of 50 students<br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold"> make the topper list.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground/80 mb-8"
            >
              We're here for the other 47.
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-foreground/70 max-w-xl mb-12 leading-relaxed"
            >
              The complete platform connecting schools, teachers, parents, and students in one intelligent ecosystem designed to elevate everyone.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-primary to-gold p-[1px] transition-transform hover:scale-105 active:scale-95">
                <span className="relative flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all group-hover:bg-opacity-0">
                  Explore LenV <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 text-foreground/90 font-medium hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Play size={18} className="text-white ml-1" />
                </div>
                View Dashboards
              </button>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FF7A00]/10 to-transparent pointer-events-none" />
    </section>
  );
}
