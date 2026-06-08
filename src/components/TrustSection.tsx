"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";

function Counter({ value, label }: { value: number; label: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (nodeRef.current) {
      nodeRef.current.textContent = Math.round(latest).toLocaleString() + (value > 1000 ? "+" : "");
    }
  });

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center p-6 rounded-2xl glass hover:bg-white/5 transition-colors duration-300">
      <span ref={nodeRef} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold mb-2">
        0
      </span>
      <span className="text-foreground/70 font-medium">{label}</span>
    </div>
  );
}

export default function TrustSection() {
  const stats = [
    { value: 500, label: "Schools Using LenV" },
    { value: 15000, label: "Teachers Connected" },
    { value: 250000, label: "Parents Engaged" },
    { value: 500000, label: "Students Supported" },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Counter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
