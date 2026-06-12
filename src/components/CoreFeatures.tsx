"use client";

import { motion } from "framer-motion";
import { 
  CalendarCheck, BookOpen, CheckSquare, LineChart, Bell, 
  MessageSquare, Users, Clock, FileText, Activity, 
  Rss, Lock, Shield, RefreshCw, Cloud
} from "lucide-react";

const features = [
  { icon: <CalendarCheck />, title: "Attendance Management", desc: "Automated daily attendance tracking and reporting for teachers, with instant notifications sent to parents." },
  { icon: <BookOpen />, title: "Assignment Tracking", desc: "Distribute, collect, and grade assignments digitally. Students and parents see deadlines in real time." },
  { icon: <CheckSquare />, title: "Homework Management", desc: "Manage daily homework across all classes. Students submit online; teachers review from one dashboard." },
  { icon: <LineChart />, title: "Student Progress Tracking", desc: "Monitor academic growth over time with visual analytics and performance trend reports." },
  { icon: <Bell />, title: "Push Notifications", desc: "Instant alerts for attendance, grades, announcements, and important school updates." },
  { icon: <Rss />, title: "School Announcements", desc: "Broadcast notices and circulars institution-wide to all stakeholders instantly." },
  { icon: <Users />, title: "Parent-Teacher Communication", desc: "Secure messaging between parents and teachers — no personal numbers needed." },
  { icon: <Clock />, title: "Timetable Management", desc: "Create, update, and share class schedules efficiently across the entire school." },
  { icon: <FileText />, title: "Academic Reports", desc: "Generate detailed report cards and performance summaries for students and parents." },
  { icon: <Activity />, title: "Performance Analytics", desc: "Data-driven insights to help schools identify strengths, weaknesses, and areas for improvement." },
  { icon: <MessageSquare />, title: "Secure Messaging", desc: "End-to-end encrypted chat for all roles — students, teachers, parents, and administrators." },
  { icon: <Shield />, title: "Multi-role Access Control", desc: "Role-based permissions ensure each user sees only what they need — nothing more, nothing less." },
  { icon: <RefreshCw />, title: "Real-time Sync", desc: "All data syncs instantly across devices so everyone always has the latest information." },
  { icon: <Cloud />, title: "Cloud-based Platform", desc: "Access LenV securely from any device, anywhere — no installations or local servers required." }
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Complete School Management Features,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">Built-In</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            A comprehensive school management system with every tool your institution needs — from attendance and timetables to communication and analytics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass-card border border-foreground/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/80 group-hover:text-primary transition-colors mb-4 group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-gold transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
