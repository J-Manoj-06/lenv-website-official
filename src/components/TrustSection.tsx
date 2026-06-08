"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustSection() {

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Student Test Assignment Showcase */}
        <div className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide uppercase">
              Student Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Seamless Test & <br/>Assignment Management
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Empower students with a clear, intuitive dashboard for all their academic needs. 
              Track upcoming tests, submit assignments on time, and monitor progress effortlessly 
              within the unified LenV ecosystem.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Real-time deadline notifications",
                "Direct assignment submissions",
                "Instant grade feedback & analytics"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,122,0,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gold/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/test-assignment.png" 
                alt="Student Test Assignment Interface" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>

        {/* Student Rewards Showcase */}
        <div className="mb-32 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold font-semibold text-sm tracking-wide uppercase">
              Gamified Learning
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Convert Knowledge into <br/>Real-Time Rewards
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Motivate students to excel by turning their academic achievements into tangible rewards. 
              Every test conquered and milestone reached is instantly recognized, building confidence 
              and making the learning journey incredibly fun.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Earn points for high test scores",
                "Unlock exclusive digital badges & ranks",
                "Redeem achievements in the student store"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,215,0,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-primary/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/student-taking-test.png" 
                alt="Student taking test and earning rewards" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>

        {/* Leaderboard Showcase */}
        <div className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold text-sm tracking-wide uppercase">
              Competitive Edge
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Climb the Ranks & <br/>Showcase Excellence
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Foster healthy competition and peer-to-peer inspiration. Our dynamic leaderboard 
              tracks overall performance, celebrating top achievers and encouraging every student 
              to reach their full academic potential.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Classroom & school-wide rankings",
                "Weekly performance highlights",
                "Transparent, point-based progression"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/leaderboard.png" 
                alt="LenV Student Leaderboard" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>

        {/* Daily Challenge Showcase */}
        <div className="mb-32 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-sm tracking-wide uppercase">
              Consistent Growth
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Build Habits with <br/>Daily Challenges
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Encourage consistent learning routines. Daily bite-sized mini-assessments keep students 
              engaged with fresh content, reinforcing their knowledge drop-by-drop and maintaining 
              momentum every single day.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Bite-sized daily academic tasks",
                "Reward multipliers for active streaks",
                "Adaptive difficulty scaling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/daily-challenge.png" 
                alt="LenV Daily Challenges" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>

        {/* Unified Messaging Showcase */}
        <div className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm tracking-wide uppercase">
              Unified Communication
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Connect Every Role <br/>Seamlessly
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Experience WhatsApp-like instant messaging designed exclusively for your education ecosystem. 
              Chats and groups are automatically created and organized, ensuring students, teachers, 
              parents, and institutions stay perfectly synced from anywhere.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Familiar, fast chat interface",
                "Auto-generated role-based groups",
                "Secure, centralized communication"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/messaging.png" 
                alt="LenV Unified Messaging Interface" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>

        {/* Attendance Showcase */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold text-sm tracking-wide uppercase">
              Parental Peace of Mind
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Real-Time Attendance <br/>Monitoring
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Keep parents informed and involved every step of the way. With live attendance tracking, 
              parents can monitor their child's daily presence directly from home, ensuring safety and 
              peace of mind through seamless school-to-home connection.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Instant absent/present notifications",
                "Historical attendance analytics",
                "Direct leave requests & approvals"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(244,63,94,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-orange-500/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              <Image 
                src="/attendance.png" 
                alt="LenV Attendance Monitoring" 
                width={800} 
                height={600}
                className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-500/30 blur-[40px] rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
