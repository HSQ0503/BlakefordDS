"use client";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
import { motion } from "motion/react";
const PackageItems = ({
  included_in_package,
}: {
  included_in_package: any;
}) => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8">
      {included_in_package.list.map((item: string, index: number) => (
        <div key={index}>
          <motion.li
            {...fadeInUpWithDelay(index * 0.1)}
            className="flex items-center gap-x-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="2.5"
                className="fill-primary"
              />
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="2.5"
                className="stroke-primary"
              />
              <path
                d="M13 5L6.125 11L3 8.27273"
                className="stroke-dark"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-text"> {item}</span>
          </motion.li>
        </div>
      ))}
    </ul>
  );
};

export default PackageItems;
