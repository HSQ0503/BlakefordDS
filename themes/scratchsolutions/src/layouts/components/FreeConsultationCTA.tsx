"use client";

import { motion } from "motion/react";
import Link from "next/link";

const FreeConsultationCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-500/20 to-cyan-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

      {/* Animated glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* FREE badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <span className="bg-emerald-500 text-black font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wider">
              100% Free — No Strings Attached
            </span>
          </motion.div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Get Your </span>
            <span className="text-emerald-400">Free Workflow</span>
            <br />
            <span className="text-emerald-400">Consultation</span>
            <span className="text-white"> Today</span>
          </h2>

          {/* Value props */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            In just 30 minutes, we'll identify <span className="text-white font-semibold">5-15 hours</span> of work
            you can automate every week — and show you exactly how to do it.
          </p>

          {/* What you get list */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Full workflow analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Personalized AI tool recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Actionable improvement plan</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg md:text-xl px-10 py-5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Book Your Free Consultation →
            </Link>
          </motion.div>

          <p className="mt-6 text-gray-400 text-sm">
            No credit card required • No sales pressure • Just helpful insights
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeConsultationCTA;
