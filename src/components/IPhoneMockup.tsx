"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export default function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  return (
    <div className={cn("relative w-[300px] h-[620px] rounded-[3rem] p-[8px] bg-[#1A1A1A] shadow-2xl shrink-0", className)}>
      {/* Outer Bezel */}
      <div className="absolute inset-0 rounded-[3rem] border border-[#2A2A2A] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none" />
      
      {/* Inner Screen Container */}
      <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden border border-black relative">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-between px-2">
          <div className="w-2 h-2 rounded-full bg-[#111] border border-[#222]" />
          <div className="w-2 h-2 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
        </div>

        {/* Screen Content */}
        <div className="absolute inset-0 z-10 overflow-hidden bg-background">
          {children}
        </div>

        {/* Glossy Screen Reflection */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform -skew-x-12 opacity-50" />
      </div>

      {/* Buttons */}
      <div className="absolute left-[-2px] top-24 w-1 h-8 bg-[#1A1A1A] rounded-l-md" />
      <div className="absolute left-[-2px] top-36 w-1 h-12 bg-[#1A1A1A] rounded-l-md" />
      <div className="absolute left-[-2px] top-52 w-1 h-12 bg-[#1A1A1A] rounded-l-md" />
      <div className="absolute right-[-2px] top-32 w-1 h-16 bg-[#1A1A1A] rounded-r-md" />
    </div>
  );
}
