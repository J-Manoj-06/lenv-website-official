"use client";

import { motion } from "framer-motion";
import { Network, ShieldCheck, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Centralized Communication",
    description: "Eliminate communication silos with a unified platform for announcements, instant messaging, and updates across teachers, parents, and students — your complete school communication app.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Better Collaboration",
    description: "Strengthen parent-teacher communication and student engagement by connecting every stakeholder on one smart education platform.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Increased Efficiency",
    description: "Automate administrative tasks like attendance tracking, timetable scheduling, and grading so your staff can focus on what matters most — teaching.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Improved Visibility",
    description: "Access real-time student performance tracking, attendance analytics, and institutional reports from a single school administration dashboard.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            What is <span className="text-gradient">LenV?</span>{" "}
            <span className="block text-2xl md:text-3xl font-semibold text-foreground/70 mt-2">The All-in-One School Management Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            LenV is a unified school management system designed to simplify communication, administration, academic management, student engagement, and institutional operations. From homework and attendance to timetables and reports — we bring schools, teachers, parents, and students together in one smart ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-card hover:bg-foreground/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
