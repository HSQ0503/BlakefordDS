"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { motion } from "motion/react";

const LogoSwiper = ({
  brand_logos,
}: {
  brand_logos: { enable: boolean; logos: { image: string; link: string }[] };
}) => {
  if (
    !brand_logos?.enable ||
    !brand_logos?.logos ||
    brand_logos.logos.length === 0
  ) {
    return null;
  }

  // Triple the logos for seamless infinite loop
  const logosToShow = [...brand_logos.logos, ...brand_logos.logos, ...brand_logos.logos];

  return (
    <div className="z-10 flex items-center relative w-3/5 mx-auto pb-4 overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 12, // Much slower animation
            ease: "linear",
          },
        }}
        whileHover={{
          transition: { duration: 40, ease: "linear" },
          animationPlayState: "paused"
        }}
      >
        {logosToShow.map((logo, index) => (
          <div
            key={`${index}-${Math.floor(index / brand_logos.logos.length)}`}
            className="flex-shrink-0"
          >
            <a
              href={logo?.link}
              aria-label={`Visit ${logo?.link || "partner website"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageFallback
                src={logo?.image}
                alt={`Partner logo ${(index % brand_logos.logos.length) + 1}`}
                className="w-[120px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                width="100"
                height="100"
              />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSwiper;
