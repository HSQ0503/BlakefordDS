import { motion } from "motion/react";
import React from "react";
const AnimatedTabs = ({
  tabList,
  activeTab,
  setActiveTab,
}: {
  tabList: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <motion.ul
      className="flex items-center gap-2 sm:gap-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {tabList.map((tab: string, index: number) => (
        <motion.li
          key={index}
          className="relative"
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
              scale: 0.8,
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full border border-border relative overflow-hidden cursor-pointer ${activeTab === tab
                ? "text-text-dark transition-all duration-300"
                : "bg-transparent text-white"
              }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
          >
            <span className="relative z-10 text-sm sm:text-base">{tab}</span>
            {/* Animated background for active tab */}
            {activeTab === tab && (
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                layoutId="activeTab"
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.5,
                }}
              />
            )}
          </motion.button>
          {/* Connecting line to next tab */}
          {index < tabList.length - 1 && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-full w-12 h-px bg-primary hidden sm:block"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{
                scaleX: 1,
                transition: {
                  delay: 0.2 * (index + 1) + 0.3,
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
            />
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedTabs;
