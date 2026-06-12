"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Users, BookOpen, Shield, CheckSquare, Calendar, LineChart, FileText, Activity, MessageSquare, Bell, Clock } from "lucide-react";

const CharacterCard = ({ 
  title, 
  imageSrc, 
  colorHex, 
  subtext, 
  delay 
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center"
    >
      {/* Animated Glow Behind Character */}
      <div 
        className="absolute top-0 w-32 h-32 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"
        style={{ backgroundColor: colorHex }}
      />
      
      {/* Character Image */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-36 h-48 md:w-48 md:h-64 z-10"
      >
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          sizes="(max-width: 768px) 150px, 200px"
        />
      </motion.div>

      {/* Badge / Label */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative z-20 -mt-6 px-6 py-3 rounded-2xl flex flex-col items-center shadow-xl border border-white/10 backdrop-blur-md"
        style={{ 
          background: `linear-gradient(to bottom, ${colorHex}dd, ${colorHex}99)`
        }}
      >
        <h3 className="text-white font-bold tracking-widest uppercase text-base md:text-lg mb-1 drop-shadow-md">
          {title}
        </h3>
        <div className="w-full h-px bg-white/30 mb-1" />
        <span className="text-white/90 text-[10px] md:text-xs font-medium tracking-wide drop-shadow-sm">
          {subtext}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default function ConnectedEcosystem() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center overflow-visible">
      
      {/* Ambient Glow behind the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-primary/20 to-gold/20 blur-[100px] pointer-events-none" />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full z-10 flex items-center justify-center scale-110"
      >
        <Image 
          src="/final-overall-image.png" 
          alt="LenV school management platform ecosystem showing connected dashboards for students, teachers, parents, and administrators" 
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(255,122,0,0.3)]"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* Golden 3D Premium LenV Text */}
        <div className="absolute z-30 flex items-center justify-center">
          <div className="px-6 py-2 md:px-8 md:py-3 rounded-2xl md:rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(255,122,0,0.4),inset_0_0_15px_rgba(255,122,0,0.2)]">
            <span 
              className="text-3xl md:text-5xl font-heading font-black tracking-wider text-transparent bg-clip-text block"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FFFDE7, #FFD700 40%, #FF8C00 80%, #B8860B)",
                filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.8)) drop-shadow(0px 0px 15px rgba(255,165,0,0.6))",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)"
              }}
              aria-hidden="true"
            >
              LenV
            </span>
            <div className="absolute -inset-[1px] md:-inset-[2px] rounded-2xl md:rounded-3xl border border-[#FFD700]/30 animate-pulse pointer-events-none" />
          </div>
        </div>
      </motion.div>

    </div>
  );
}
