"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface FeatureData {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  svg: string;
  img: string;
  isReversed: boolean;
  colors: {
    badgeBg: string;
    badgeText: string;
    glowPrimary: string;
    glowSecondary: string;
    shadow: string;
    glow1: string;
    glow2: string;
    iconBg: string;
  };
}

const features: FeatureData[] = [
  {
    badge: "Student Experience",
    title: "Seamless Test & <br/>Assignment Management",
    description: "Empower students with a clear, intuitive dashboard for all their academic needs. Track upcoming tests, submit assignments on time, and monitor progress effortlessly within the unified LenV ecosystem.",
    bullets: ["Real-time deadline notifications", "Direct assignment submissions", "Instant grade feedback & analytics"],
    svg: "M5 13l4 4L19 7",
    img: "/test-assignment.png",
    isReversed: false,
    colors: {
      badgeBg: "bg-primary/10 border-primary/20",
      badgeText: "text-primary",
      glowPrimary: "from-primary/20",
      glowSecondary: "to-gold/20",
      shadow: "shadow-[0_0_50px_rgba(255,122,0,0.15)]",
      glow1: "bg-primary/30",
      glow2: "bg-gold/20",
      iconBg: "bg-primary/20 text-primary"
    }
  },
  {
    badge: "Gamified Learning",
    title: "Convert Knowledge into <br/>Real-Time Rewards",
    description: "Motivate students to excel by turning their academic achievements into tangible rewards. Every test conquered and milestone reached is instantly recognized, building confidence and making the learning journey incredibly fun.",
    bullets: ["Earn points for high test scores", "Unlock exclusive digital badges & ranks", "Redeem achievements in the student store"],
    svg: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    img: "/student-taking-test.png",
    isReversed: true,
    colors: {
      badgeBg: "bg-gold/10 border-gold/20",
      badgeText: "text-gold",
      glowPrimary: "from-gold/20",
      glowSecondary: "to-primary/20",
      shadow: "shadow-[0_0_50px_rgba(255,215,0,0.15)]",
      glow1: "bg-gold/30",
      glow2: "bg-primary/20",
      iconBg: "bg-gold/20 text-gold"
    }
  },
  {
    badge: "Competitive Edge",
    title: "Climb the Ranks & <br/>Showcase Excellence",
    description: "Foster healthy competition and peer-to-peer inspiration. Our dynamic leaderboard tracks overall performance, celebrating top achievers and encouraging every student to reach their full academic potential.",
    bullets: ["Classroom & school-wide rankings", "Weekly performance highlights", "Transparent, point-based progression"],
    svg: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    img: "/leaderboard.png",
    isReversed: false,
    colors: {
      badgeBg: "bg-purple-500/10 border-purple-500/20",
      badgeText: "text-purple-400",
      glowPrimary: "from-purple-500/20",
      glowSecondary: "to-pink-500/20",
      shadow: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
      glow1: "bg-purple-500/30",
      glow2: "bg-pink-500/20",
      iconBg: "bg-purple-500/20 text-purple-400"
    }
  },
  {
    badge: "Consistent Growth",
    title: "Build Habits with <br/>Daily Challenges",
    description: "Encourage consistent learning routines. Daily bite-sized mini-assessments keep students engaged with fresh content, reinforcing their knowledge drop-by-drop and maintaining momentum every single day.",
    bullets: ["Bite-sized daily academic tasks", "Reward multipliers for active streaks", "Adaptive difficulty scaling"],
    svg: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    img: "/daily-challenge.png",
    isReversed: true,
    colors: {
      badgeBg: "bg-cyan-500/10 border-cyan-500/20",
      badgeText: "text-cyan-400",
      glowPrimary: "from-cyan-500/20",
      glowSecondary: "to-blue-500/20",
      shadow: "shadow-[0_0_50px_rgba(6,182,212,0.15)]",
      glow1: "bg-cyan-500/30",
      glow2: "bg-blue-500/20",
      iconBg: "bg-cyan-500/20 text-cyan-400"
    }
  },
  {
    badge: "Unified Communication",
    title: "Connect Every Role <br/>Seamlessly",
    description: "Experience WhatsApp-like instant messaging designed exclusively for your education ecosystem. Chats and groups are automatically created and organized, ensuring students, teachers, parents, and institutions stay perfectly synced from anywhere.",
    bullets: ["Familiar, fast chat interface", "Auto-generated role-based groups", "Secure, centralized communication"],
    svg: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    img: "/messaging.png",
    isReversed: false,
    colors: {
      badgeBg: "bg-emerald-500/10 border-emerald-500/20",
      badgeText: "text-emerald-400",
      glowPrimary: "from-emerald-500/20",
      glowSecondary: "to-teal-500/20",
      shadow: "shadow-[0_0_50px_rgba(16,185,129,0.15)]",
      glow1: "bg-emerald-500/30",
      glow2: "bg-teal-500/20",
      iconBg: "bg-emerald-500/20 text-emerald-400"
    }
  },
  {
    badge: "Parental Peace of Mind",
    title: "Real-Time Attendance <br/>Monitoring",
    description: "Keep parents informed and involved every step of the way. With live attendance tracking, parents can monitor their child's daily presence directly from home, ensuring safety and peace of mind through seamless school-to-home connection.",
    bullets: ["Instant absent/present notifications", "Historical attendance analytics", "Direct leave requests & approvals"],
    svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    img: "/attendance.png",
    isReversed: true,
    colors: {
      badgeBg: "bg-rose-500/10 border-rose-500/20",
      badgeText: "text-rose-400",
      glowPrimary: "from-rose-500/20",
      glowSecondary: "to-orange-500/20",
      shadow: "shadow-[0_0_50px_rgba(244,63,94,0.15)]",
      glow1: "bg-rose-500/30",
      glow2: "bg-orange-500/20",
      iconBg: "bg-rose-500/20 text-rose-400"
    }
  },
  {
    badge: "Adaptive Learning",
    title: "The Smart <br/>Mistake Book",
    description: "Turn errors into opportunities for mastery. When a student makes a mistake on a test, the question is automatically saved to their personalized Mistake Book and dynamically reassigned every week until they confidently conquer it.",
    bullets: ["Auto-capture of incorrect test answers", "Weekly spaced repetition for mastery", "Personalized focus areas for every student"],
    svg: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    img: "/mistake.png",
    isReversed: false,
    colors: {
      badgeBg: "bg-indigo-500/10 border-indigo-500/20",
      badgeText: "text-indigo-400",
      glowPrimary: "from-indigo-500/20",
      glowSecondary: "to-blue-500/20",
      shadow: "shadow-[0_0_50px_rgba(99,102,241,0.15)]",
      glow1: "bg-indigo-500/30",
      glow2: "bg-blue-500/20",
      iconBg: "bg-indigo-500/20 text-indigo-400"
    }
  },
  {
    badge: "Visual Learning",
    title: "Interactive Mindmaps <br/>for Instant Revision",
    description: "Simplify complex topics and accelerate exam preparation. Teachers can easily build dynamic, interactive mindmaps and instantly share them directly to class groups, making revision highly visual, organized, and much easier to digest.",
    bullets: ["Intuitive drag-and-drop mindmap builder", "Instant sharing to student groups", "Boosts retention through visual learning"],
    svg: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    img: "/mindmap.png",
    isReversed: true,
    colors: {
      badgeBg: "bg-amber-500/10 border-amber-500/20",
      badgeText: "text-amber-400",
      glowPrimary: "from-amber-500/20",
      glowSecondary: "to-yellow-500/20",
      shadow: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
      glow1: "bg-amber-500/30",
      glow2: "bg-yellow-500/20",
      iconBg: "bg-amber-500/20 text-amber-400"
    }
  }
];

function FeatureRow({ feature }: { feature: FeatureData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this specific row for the premium scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 40%"]
  });

  // Calculate dynamic visual states based on scroll focus
  const rowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.3, 1, 1, 0.3]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]);

  // Content always slides from left (-100) if !isReversed, else from right (100)
  const contentInitialX = feature.isReversed ? 100 : -100;
  // Image always slides from right (100) if !isReversed, else from left (-100)
  const imageInitialX = feature.isReversed ? -100 : 100;

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity: rowOpacity }}
      className={`mb-40 flex flex-col lg:${feature.isReversed ? 'flex-row-reverse' : 'flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: contentInitialX, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <div className={`inline-block px-4 py-1.5 rounded-full border ${feature.colors.badgeBg} ${feature.colors.badgeText} font-semibold text-sm tracking-wide uppercase`}>
          {feature.badge}
        </div>
        <h2 
          className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight" 
          dangerouslySetInnerHTML={{ __html: feature.title }} 
        />
        <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
          {feature.description}
        </p>
        <ul className="space-y-4 pt-4">
          {feature.bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${feature.colors.iconBg}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={feature.svg} />
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: imageInitialX, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }} // slight stagger
        className="flex-1 w-full relative"
      >
        <motion.div 
          style={{ scale: imgScale }}
          className={`relative rounded-2xl overflow-hidden border border-white/10 ${feature.colors.shadow} group transform origin-center`}
        >
          <div className={`absolute inset-0 bg-gradient-to-tr ${feature.colors.glowPrimary} ${feature.colors.glowSecondary} mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500`} />
          <Image 
            src={feature.img} 
            alt={feature.badge} 
            width={800} 
            height={600}
            className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          style={{ opacity: glowOpacity }} 
          className={`absolute -top-6 ${feature.isReversed ? '-left-6' : '-right-6'} w-24 h-24 ${feature.colors.glow1} blur-[40px] rounded-full z-[-1] transition-opacity duration-300`} 
        />
        <motion.div 
          style={{ opacity: glowOpacity }} 
          className={`absolute -bottom-6 ${feature.isReversed ? '-right-6' : '-left-6'} w-32 h-32 ${feature.colors.glow2} blur-[50px] rounded-full z-[-1] transition-opacity duration-300`} 
        />
      </motion.div>
    </motion.div>
  );
}


export default function TrustSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide uppercase mb-6"
          >
            What's Inside
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6"
          >
            Core Features of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">LenV</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70"
          >
            Discover the powerful tools designed to seamlessly connect and elevate students, teachers, parents, and institutions in one intelligent ecosystem.
          </motion.p>
        </div>

        {/* Dynamic Feature Rows */}
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
