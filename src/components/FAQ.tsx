"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is LenV?",
    answer:
      "LenV is a comprehensive school management platform designed to connect schools, teachers, parents, and students in one intelligent ecosystem. It includes tools for attendance tracking, homework management, timetable scheduling, parent-teacher communication, student progress analytics, and more — all accessible from a single app.",
  },
  {
    question: "Who is LenV designed for?",
    answer:
      "LenV is built for entire educational institutions. School administrators and principals get institution-wide analytics and oversight. Teachers get tools for attendance, assignments, and classroom communication. Parents stay informed with real-time updates on their child's progress. Students get an engaging dashboard with gamified learning features.",
  },
  {
    question: "How does LenV help with attendance tracking?",
    answer:
      "Teachers can mark attendance directly from their mobile app in seconds. Parents receive instant push notifications when their child is marked absent or present. The system maintains historical attendance analytics with visual reports, and parents can submit digital leave requests for quick approval by teachers.",
  },
  {
    question: "Can parents communicate directly with teachers?",
    answer:
      "Yes. LenV includes a secure, WhatsApp-like messaging system designed exclusively for education. Role-based groups are automatically created and organized, so parents and teachers can communicate instantly without sharing personal phone numbers. All messages are encrypted and stored securely.",
  },
  {
    question: "Is LenV available as a mobile app?",
    answer:
      "Yes, LenV is available on Android, iOS, and the web. The mobile app provides real-time push notifications, offline access to schedules, and a fast, intuitive interface tailored for each user role — whether you're a student checking assignments or a parent reviewing attendance reports.",
  },
  {
    question: "How can I request a demo of LenV?",
    answer:
      "You can request a free demo by clicking the 'Request Demo' button anywhere on our website. Simply fill in your school name, contact details, and the approximate number of students, and our team will schedule a personalized walkthrough of the entire platform tailored to your institution's needs.",
  },
  {
    question: "What makes LenV different from other school management software?",
    answer:
      "Unlike traditional school ERPs that focus only on administration, LenV combines academic management with student engagement features like leaderboards, daily challenges, a smart Mistake Book for spaced repetition learning, and interactive mindmaps for visual revision. It's designed to actively improve learning outcomes, not just manage records.",
  },
  {
    question: "Is LenV secure and cloud-based?",
    answer:
      "Absolutely. LenV is fully cloud-based with enterprise-grade security, end-to-end encrypted messaging, role-based access controls, and secure data storage on trusted infrastructure. Your institution's data is always protected, backed up, and accessible from any device, anywhere.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Everything you need to know about LenV — the all-in-one school management platform for modern education.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-2xl glass-card border border-foreground/5 hover:border-primary/30 transition-all duration-300 group"
                aria-expanded={openIndex === index}
                id={`faq-question-${index}`}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className="text-foreground/40 group-hover:text-primary transition-colors"
                    />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-foreground/60 leading-relaxed border-t border-foreground/5 mt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
