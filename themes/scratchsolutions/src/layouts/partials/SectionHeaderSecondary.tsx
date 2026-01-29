"use client";
import Badge from "@/components/Badge";
import { fadeInUp } from "@/lib/utils/animation";
import { markdownify } from "@/lib/utils/textConverter";
import { SectionHeader } from "@/types";
import { motion } from "motion/react";
const SectionHeaderSecondary = ({ data }: { data: SectionHeader }) => {
  return (
    <motion.div
      {...fadeInUp}
      className="flex flex-col justify-center items-center text-center gap-y-4 mb-14 overflow-x-hidden"
    >
      {data?.badge && <Badge>{data.badge}</Badge>}
      <h2
        className="gradient-text"
        dangerouslySetInnerHTML={markdownify(data.title)}
      />
      {data?.subtitle && <p className="text-lg max-w-2xl">{data.subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeaderSecondary;
