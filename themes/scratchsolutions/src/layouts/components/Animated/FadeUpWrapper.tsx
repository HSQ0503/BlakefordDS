"use client";
import {motion} from "motion/react";
import {fadeInUp} from "@/lib/utils/animation";
const FadeUpWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div {...fadeInUp} className="relative">{children}</motion.div>
  )
}

export default FadeUpWrapper