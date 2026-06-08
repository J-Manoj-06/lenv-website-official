"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Dashboards", href: "#dashboards" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            isScrolled ? "glass-card" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="text-black font-heading font-black text-2xl md:text-3xl leading-none">L</span>
            </div>
            <span className="font-heading font-black text-3xl md:text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">LenV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden rounded-full bg-foreground text-background px-6 py-2.5 font-medium text-sm transition-transform hover:scale-105 active:scale-95 group">
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl glass-card border border-white/10 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/90 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full rounded-full bg-gradient-to-r from-primary to-gold text-black px-6 py-3 font-semibold mt-4">
            Request Demo
          </button>
        </motion.div>
      )}
    </header>
  );
}
