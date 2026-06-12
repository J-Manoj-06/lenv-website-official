"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import IPhoneMockup from "./IPhoneMockup";
import { BookOpen, GraduationCap, Users, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const dashboards = [
  {
    id: "student",
    title: "Student Dashboard",
    icon: <GraduationCap size={20} />,
    color: "from-blue-500 to-cyan-400",
    description: "The student app for tracking assignments, viewing timetables, and monitoring academic progress — all in one place.",
    ui: (
      <div className="h-full bg-[#0a0a0a] text-white flex flex-col pt-12 p-4 gap-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/50">Good morning,</div>
            <div className="font-bold">Alex Johnson</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50" />
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-4 shadow-lg shadow-blue-500/20">
          <div className="text-white/80 text-sm mb-1">Today's Attendance</div>
          <div className="text-2xl font-bold">Present</div>
        </div>
        <div className="flex-1 rounded-t-3xl bg-[#151515] p-4 mt-2">
          <div className="font-bold mb-4">Upcoming Assignments</div>
          <div className="flex flex-col gap-3">
             <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-sm font-medium">Math Homework</div>
                <div className="text-xs text-white/50 mt-1">Due Today, 11:59 PM</div>
             </div>
             <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-sm font-medium">History Essay</div>
                <div className="text-xs text-white/50 mt-1">Due Tomorrow</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "teacher",
    title: "Teacher Dashboard",
    icon: <BookOpen size={20} />,
    color: "from-orange-500 to-amber-400",
    description: "The teacher dashboard for managing classes, marking attendance, communicating with parents, and grading assignments.",
    ui: (
      <div className="h-full bg-[#0a0a0a] text-white flex flex-col pt-12 p-4 gap-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-white/50">Welcome back,</div>
            <div className="font-bold">Mr. Smith</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/50" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
             <div className="text-2xl font-bold text-orange-400">4</div>
             <div className="text-xs text-white/50">Classes Today</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
             <div className="text-2xl font-bold text-green-400">32</div>
             <div className="text-xs text-white/50">Assignments to Grade</div>
          </div>
        </div>
        <div className="flex-1 rounded-t-3xl bg-[#151515] p-4 mt-2">
          <div className="font-bold mb-4">Quick Actions</div>
          <div className="grid grid-cols-2 gap-3">
             <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><BookOpen size={16} className="text-primary" /></div>
                <span className="text-xs font-medium">Mark Attendance</span>
             </div>
             <div className="aspect-square rounded-xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center"><Users size={16} className="text-gold" /></div>
                <span className="text-xs font-medium">Message Class</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "parent",
    title: "Parent Dashboard",
    icon: <Users size={20} />,
    color: "from-purple-500 to-pink-500",
    description: "The parent app for monitoring attendance, tracking academic progress, and staying informed about school activities.",
    ui: (
      <div className="h-full bg-[#0a0a0a] text-white flex flex-col pt-12 p-4 gap-4">
        <div className="flex items-center gap-3 bg-white/5 rounded-full p-1 pr-4 border border-white/10">
          <div className="w-8 h-8 rounded-full bg-purple-500/20" />
          <span className="text-sm font-medium">Viewing Alex Johnson</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg shadow-purple-500/20">
          <div className="text-white/80 text-sm mb-1">Current Grade Average</div>
          <div className="text-3xl font-bold">A-</div>
        </div>
        <div className="flex-1 rounded-t-3xl bg-[#151515] p-4 mt-2">
          <div className="font-bold mb-4">Recent Updates</div>
          <div className="flex flex-col gap-3">
             <div className="p-3 rounded-xl bg-white/5 border border-white/5 border-l-2 border-l-purple-500">
                <div className="text-sm font-medium">Mid-term Report Card</div>
                <div className="text-xs text-white/50 mt-1">Available for download</div>
             </div>
             <div className="p-3 rounded-xl bg-white/5 border border-white/5 border-l-2 border-l-pink-500">
                <div className="text-sm font-medium">Parent-Teacher Meeting</div>
                <div className="text-xs text-white/50 mt-1">Scheduled for Friday, 4PM</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "principal",
    title: "Principal Dashboard",
    icon: <Building size={20} />,
    color: "from-emerald-500 to-teal-400",
    description: "The principal dashboard for monitoring institution-wide performance, staff management, and operational oversight.",
    ui: (
      <div className="h-full bg-[#0a0a0a] text-white flex flex-col pt-12 p-4 gap-4">
        <div className="font-bold text-lg">Institution Overview</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/20 p-3">
             <div className="text-xs text-emerald-400 mb-1">Total Attendance</div>
             <div className="text-2xl font-bold">96.5%</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
             <div className="text-xs text-white/50 mb-1">Active Staff</div>
             <div className="text-2xl font-bold">142</div>
          </div>
        </div>
        <div className="flex-1 rounded-t-3xl bg-[#151515] p-4 mt-2">
          <div className="font-bold mb-4">Analytics</div>
          <div className="h-32 flex items-end gap-2 pb-2">
             {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-500/50 rounded-t-sm" style={{ height: `${h}%` }} />
             ))}
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 mt-4">
             <div className="text-sm font-medium">Important Notices (2)</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(dashboards[0].id);

  return (
    <section id="dashboards" className="py-24 relative z-10 bg-background/40 border-y border-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Dedicated Dashboards for <span className="text-gradient">Every Role</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Every school app user gets a tailored mobile experience — students, teachers, parents, and principals each see exactly what they need.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => setActiveTab(dashboard.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium",
                activeTab === dashboard.id 
                  ? "bg-foreground/10 border border-foreground/20 text-foreground shadow-lg" 
                  : "bg-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {dashboard.icon}
              {dashboard.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Carousel / Display Area */}
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Dynamic Details Area */}
          <div className="flex-1 md:pr-12 text-center md:text-left">
            {dashboards.map((dashboard) => (
              dashboard.id === activeTab && (
                <motion.div
                  key={dashboard.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={cn("inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-gradient-to-br bg-opacity-10", dashboard.color)}>
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                        {dashboard.icon}
                     </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{dashboard.title}</h3>
                  <p className="text-xl text-foreground/60 leading-relaxed mb-8">
                    {dashboard.description}
                  </p>
                  
                  <ul className="flex flex-col gap-4 text-left">
                     {["Intuitive mobile app", "Real-time sync", "Push notifications"].map((feature, i) => (
                       <li key={i} className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                         <span>{feature}</span>
                       </li>
                     ))}
                  </ul>
                </motion.div>
              )
            ))}
          </div>

          {/* Device Mockup Display */}
          <div className="flex-shrink-0 relative">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <IPhoneMockup>
                {dashboards.find(d => d.id === activeTab)?.ui}
              </IPhoneMockup>
            </motion.div>
            
            {/* Aesthetic Glow Behind Phone */}
            <div className={cn(
              "absolute inset-0 bg-gradient-to-r blur-[100px] -z-10 opacity-30 transition-colors duration-700",
              dashboards.find(d => d.id === activeTab)?.color
            )} />
          </div>

        </div>
      </div>
    </section>
  );
}
