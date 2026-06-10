"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoModal } from "@/context/DemoModalContext";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  designation: string;
  email: string;
  phone: string;
  schoolName: string;
  institutionType: string;
  board: string;
  location: string;
  website: string;
  totalStudents: string;
  totalTeachers: string;
  campuses: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  designation: "",
  email: "",
  phone: "",
  schoolName: "",
  institutionType: "School",
  board: "CBSE",
  location: "",
  website: "",
  totalStudents: "",
  totalTeachers: "",
  campuses: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function RequestDemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
      isValid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid Official Email is required";
      isValid = false;
    }
    if (!formData.phone.trim() || !/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Valid Mobile Number is required";
      isValid = false;
    }
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School Name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
      
      // Reset after animation
      setTimeout(() => {
        closeModal();
        setTimeout(() => {
          setStatus("idle");
          setFormData(initialFormData);
        }, 300); // Wait for modal exit animation
      }, 3000);
      
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-dark-gray/90 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
                Request a LenV Demo
              </h2>
              <button
                onClick={closeModal}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div 
              className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar"
              data-lenis-prevent="true"
            >
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-foreground/70 text-lg max-w-md">
                    Your demo request has been received successfully.
                    <br/><br/>
                    Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* SECTION 1: Contact Person */}
                  <section>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-white/5">1. Contact Person</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Full Name *</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                        {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Designation / Role *</label>
                        <input type="text" name="designation" value={formData.designation} onChange={handleChange} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Principal / Director" />
                        {errors.designation && <p className="text-red-400 text-xs">{errors.designation}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Official Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@school.edu" />
                        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Mobile Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="+1 234 567 8900" />
                        {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                      </div>
                    </div>
                  </section>

                  {/* SECTION 2: School Information */}
                  <section>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-white/5">2. School Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-white/80">School Name *</label>
                        <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Global International Academy" />
                        {errors.schoolName && <p className="text-red-400 text-xs">{errors.schoolName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Institution Type</label>
                        <select name="institutionType" value={formData.institutionType} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                          <option value="School">School</option>
                          <option value="College">College</option>
                          <option value="Coaching Center">Coaching Center</option>
                          <option value="Training Institute">Training Institute</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Board / Curriculum</label>
                        <select name="board" value={formData.board} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                          <option value="CBSE">CBSE</option>
                          <option value="ICSE">ICSE</option>
                          <option value="State Board">State Board</option>
                          <option value="IB">IB</option>
                          <option value="Cambridge">Cambridge</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Location (City, State, Country)</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="New York, NY, USA" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Website (Optional)</label>
                        <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="https://www.school.edu" />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 3: School Size */}
                  <section>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-white/5">3. School Size</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Total Students</label>
                        <input type="number" name="totalStudents" value={formData.totalStudents} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="e.g. 1500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Total Teachers</label>
                        <input type="number" name="totalTeachers" value={formData.totalTeachers} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="e.g. 120" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Number of Campuses</label>
                        <input type="number" name="campuses" value={formData.campuses} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="e.g. 2" />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 4: Demo Scheduling */}
                  <section>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-white/5">4. Demo Scheduling</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Preferred Date</label>
                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Preferred Time</label>
                        <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 5: Additional Requirements */}
                  <section>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-white/5">5. Additional Requirements</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">How can we help you?</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about specific challenges you want to solve..." />
                    </div>
                  </section>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Action */}
                  <div className="pt-6 border-t border-white/10 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-gold p-[1px] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      <span className="relative flex items-center justify-center gap-2 rounded-full bg-black px-10 py-3.5 text-sm font-bold text-white transition-all group-hover:bg-opacity-0">
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          "Request My Demo"
                        )}
                      </span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
