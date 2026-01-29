"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { HeroBanner } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import Badge from "./Badge";
import Light from "./svg/Light";
import { fadeInUp } from "@/lib/utils/animation";
import ToolsCarousel from "./ToolsCarousel";

const Hero = ({
  banner,
  brand_logos,
}: {
  banner: HeroBanner;
  brand_logos: { enable: boolean; logos: { image: string; link: string }[] };
}) => {
  return (
    <section className="bg-dark md:pt-56 pt-40 pb-40 relative z-10">
      <Light />

      <div className="container">
        <motion.div
          {...fadeInUp}
          className="flex flex-col justify-center items-center text-center"
        >
          {banner?.badge && <Badge>{banner?.badge}</Badge>}
          <h1
            className="mt-6 mb-4 gradient-text hero-text"
            dangerouslySetInnerHTML={markdownify(banner?.title)}
          />
          <p
            className="mb-10 text-xl"
            dangerouslySetInnerHTML={markdownify(banner?.content || "")}
          />

          <div className="flex flex-wrap justify-center gap-4">
            {banner?.button_fill && banner?.button_fill?.enable && (
              <Link href={banner?.button_fill?.link} className="btn btn-primary">
                {banner?.button_fill?.label}
              </Link>
            )}
            {banner?.button_outline && banner?.button_outline?.enable && (
              <Link
                href={banner?.button_outline?.link}
                className="btn btn-outline-primary gradient-border"
              >
                {banner?.button_outline?.label}
              </Link>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="relative mt-16"
        >
          <ToolsCarousel />
        </motion.div>
      </div>
      {banner?.image && (
        <motion.div
          className="absolute bottom-0 -z-1 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <ImageFallback
            src={banner?.image}
            width="1200"
            height="430"
            alt="banner image"
            className="w-full xl:h-auto object-cover"
            loading="eager"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
