"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Jenkins",
    role: "School Principal",
    content: "LenV has completely transformed how our institution operates. The level of insight I have into school-wide performance is unprecedented.",
    avatar: "S"
  },
  {
    name: "Michael Chen",
    role: "Senior Teacher",
    content: "I save at least 5 hours a week on administrative tasks. The automated grading and attendance features are a lifesaver.",
    avatar: "M"
  },
  {
    name: "Elena Rodriguez",
    role: "Parent",
    content: "I've never felt more connected to my child's education. The real-time updates and direct messaging with teachers give me peace of mind.",
    avatar: "E"
  },
  {
    name: "David Thompson",
    role: "High School Student",
    content: "Having all my assignments, grades, and schedule in one app makes staying organized so much easier. The interface is actually cool.",
    avatar: "D"
  },
  {
    name: "Amanda White",
    role: "School Administrator",
    content: "The seamless communication between all departments has eliminated confusion. It truly is one connected ecosystem.",
    avatar: "A"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Loved by <span className="text-gradient">Educators</span>
          </motion.h2>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <div className="flex gap-6 overflow-hidden relative w-full">
         <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: [0, -1035] }} // Adjust based on content width
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         >
            {/* Duplicate list for seamless looping */}
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className="w-[350px] md:w-[450px] p-8 rounded-3xl glass-card flex flex-col gap-6 border border-foreground/5">
                <div className="flex text-gold gap-1">
                  {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-foreground/50">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
         </motion.div>
         {/* Gradient Masks */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
