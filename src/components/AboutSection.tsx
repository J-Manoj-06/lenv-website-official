"use client";

import { motion } from "framer-motion";
import { Network, ShieldCheck, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Centralized Communication",
    description: "Break down silos with a single platform for announcements, messaging, and updates across all roles.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Better Collaboration",
    description: "Seamlessly connect teachers, students, and parents to support the educational journey together.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Increased Efficiency",
    description: "Automate administrative tasks, attendance tracking, and grading to focus more on teaching.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Improved Visibility",
    description: "Real-time insights into academic progress, attendance, and institutional performance.",
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
            What is <span className="text-gradient">LenV?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            LenV is a unified education ecosystem designed to simplify communication, administration, academic management, student engagement, and institutional operations. We bring everyone together.
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
              className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
