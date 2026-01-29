import { Variants } from "motion/react";

// Reusable animation properties for fade in up effect
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
  
};

// Variant with custom delay
export const fadeInUpWithDelay = (delay: number = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay }
});

// Variant with custom duration
export const fadeInUpCustom = (duration: number = 0.8, delay: number = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, delay }
});

// Simple tab fade animation
export const tabFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};


export const fadeIn = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};