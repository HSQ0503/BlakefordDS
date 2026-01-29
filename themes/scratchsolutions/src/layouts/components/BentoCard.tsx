"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { fadeInUp } from "@/lib/utils/animation";
import { Feature } from "@/types";
import { motion } from "motion/react";
const BentoCard = ({ feature }: { feature: Feature }) => {
  return (
    <motion.div {...fadeInUp} className="gradient-border rounded-lg h-full flex flex-col ">
      <div className="p-8">
        <h3 className="mb-4">{feature.title}</h3>
        <p className="text-lg font-medium">{feature.content}</p>
      </div>
      <div className="w-full h-[400px] overflow-hidden mt-auto">
        <ImageFallback
          src={feature.image}
          alt={feature.title}
          height="800"
          width="800"
          className="size-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default BentoCard;

