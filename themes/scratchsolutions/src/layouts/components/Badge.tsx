"use client";
import { motion } from "motion/react";
import { useMemo } from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
  const letters = useMemo(() => {
    const text = typeof children === "string" ? children : String(children);
    return text.split("");
  }, [children]);

  return (
    <div className="badge">
      <svg
        width="7"
        height="6"
        viewBox="0 0 7 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3.5" cy="3" r="3" fill="white" />
      </svg>
      <motion.span 
        className="animate-letters inline-flex text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.35,
              delay: 0.15 + index * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default Badge;
