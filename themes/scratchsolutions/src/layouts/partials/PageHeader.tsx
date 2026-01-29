"use client";
import Badge from "@/components/Badge";
import ImageFallback from "@/helpers/ImageFallback";
import { fadeIn, fadeInRight } from "@/lib/utils/animation";
import { markdownify } from "@/lib/utils/textConverter";
import { PageHeaderTypes } from "@/types";
import { motion } from "motion/react";

const PageHeader = ({ data, isPageHeader = true }: { data: PageHeaderTypes, isPageHeader?: boolean }) => {
  return (
    <section className={`bg-dark pt-30 md:pt-60 ${isPageHeader ? "pb-40" : "pb-15"} relative z-10`}>
      <ImageFallback
        src="/images/hero-light.svg"
        className="absolute top-0 left-0 -z-1 sm:block hidden"
        width="1920"
        height="1080"
        alt="background image"
      />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-8 items-center">
          <motion.div {...fadeIn} className="flex flex-col">
            {data.badge && <Badge>{data.badge}</Badge>}
            <h2
              className="mt-4 gradient-text"
              dangerouslySetInnerHTML={markdownify(data.title)}
            />
          </motion.div>
          {data.description && (
            <motion.p {...fadeInRight} className="text-lg">
              {data.description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
