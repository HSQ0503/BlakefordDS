"use client";

import { motion } from "motion/react";

const tools = [
  "Fireflies.ai",
  "Fathom",
  "Otter.ai",
  "Calendly",
  "Reclaim.ai",
  "ChatGPT",
  "Claude",
  "Superhuman",
  "Zapier",
  "Magical",
  "HubSpot",
  "Notion AI",
  "PandaDoc",
  "Scribe",
  "Typeform",
  "Loom",
  "Descript",
  "Buffer",
  "Canva",
  "Perplexity",
];

const ToolsCarousel = () => {
  const toolsToShow = [...tools, ...tools, ...tools];

  return (
    <div className="w-full py-8">
      <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider">
        We know these tools. Do you?
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center top",
        }}
      >
        <motion.div
          className="flex gap-6 justify-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(25deg)",
          }}
        >
          {toolsToShow.map((tool, index) => (
            <div
              key={`${tool}-${index}`}
              className="flex-shrink-0 px-5 py-2"
            >
              <span className="text-base md:text-lg text-gray-400 hover:text-white transition-colors whitespace-nowrap font-medium">
                {tool}
              </span>
            </div>
          ))}
        </motion.div>
        {/* Gradient overlays for fade effect on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default ToolsCarousel;
