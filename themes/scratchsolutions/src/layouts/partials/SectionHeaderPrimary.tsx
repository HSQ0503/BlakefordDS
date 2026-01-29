"use client";
import Badge from "@/components/Badge";
import { fadeIn, fadeInRight } from "@/lib/utils/animation";

import { markdownify } from "@/lib/utils/textConverter";
import { SectionHeader } from "@/types";
import { motion } from "motion/react";
const SectionHeaderPrimary = ({ data }: { data: SectionHeader }) => {
  return (
    <div className="row gap-y-6 mb-15 items-center overflow-x-hidden">
      <div className="lg:col-7">
        <motion.div {...fadeIn} className="flex flex-col">
          {data.badge && <Badge>{data.badge}</Badge>}
          <h2
            className="mt-4 gradient-text"
            dangerouslySetInnerHTML={markdownify(data.title)}
          />
        </motion.div>
      </div>
      <motion.div {...fadeInRight} className="lg:col-5 lg:pl-20">
        {data.subtitle && <p className="mb-10 text-lg">{data.subtitle}</p>}
        {data.button && data.button.enable && (
          <a
            href={data.button.link}
            className="btn btn-primary max-w-fit"
            aria-label={`${data.button.label} - Learn more about our services`}
          >

            {data.button.label}
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeaderPrimary;
