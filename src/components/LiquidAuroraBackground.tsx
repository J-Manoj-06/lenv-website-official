"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LiquidAuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-background transition-colors duration-500"
    >
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        {/* Deep Orange Blob */}
        <motion.div
          animate={{
            x: ["0%", "15%", "-10%", "0%"],
            y: ["0%", "-20%", "10%", "0%"],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#FF7A00] blur-[120px] opacity-70"
        />

        {/* Amber Gold Blob */}
        <motion.div
          animate={{
            x: ["0%", "-25%", "20%", "0%"],
            y: ["0%", "15%", "-15%", "0%"],
            scale: [1, 0.9, 1.3, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-[#FFB347] blur-[140px] opacity-60"
        />

        {/* Soft Accent Glow */}
        <motion.div
          animate={{
            x: ["-10%", "30%", "-20%", "-10%"],
            y: ["20%", "-10%", "30%", "20%"],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#ff5500] blur-[150px] opacity-40"
        />
        
        {/* Extra Slow Moving Background Layer */}
        <motion.div
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full border-[100px] border-[#FF7A00]/5 blur-[100px]"
        />
      </div>

      {/* Noise Overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
