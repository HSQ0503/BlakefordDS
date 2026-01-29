"use client";
import {   fadeInUp } from "@/lib/utils/animation";
import { motion } from "motion/react";
import { FaCheck, FaXmark } from "react-icons/fa6";

const Table = ({ compareFeatures }: { compareFeatures: any[] }) => {
  return (
    <motion.div {...fadeInUp} className="mt-12 overflow-x-auto  lg:gradient-border rounded-xl">
      <table className="w-full min-w-[600px] border-collapse">
        <thead className="bg-dark gradient-border overflow-hidden">
          <tr className="border-b border-border/20">
            <th className="text-center py-6 px-4 text-xl md:text-2xl font-semibold text-text border-r border-border/50 w-1/2">
              NeonSpark
            </th>
            <th className="text-center py-6 px-4 text-xl md:text-2xl font-semibold text-text w-1/2">
              Other Agencies
            </th>
          </tr>
        </thead>
        <tbody>
          {compareFeatures?.map((feature: any, index: number) => (
            <tr
            
              key={index}
              className="border-b border-border/50 last:border-transparent hover:bg-light/5 transition-colors"
            >
              <td className="py-4 md:py-6 px-3 md:px-6 text-center border-r border-border/50">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 md:gap-3 justify-center flex-wrap">
                    {feature.ourService ? (
                      <>
                        <FaCheck className="text-primary size-4 flex-shrink-0" />
                        <span className="text-text text-sm md:text-base">
                          {feature.name}
                        </span>
                      </>
                    ) : (
                      <>
                        <FaXmark className="size-4 text-text-light/50 flex-shrink-0" />
                        <span className="text-text-light/50 text-sm md:text-base">
                          {feature.name}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </td>
              <td className="py-4 md:py-6 px-3 md:px-6 text-center">
                <div className="flex justify-center gap-2 md:gap-3 items-center flex-wrap">
                  {feature.otherAgencies ? (
                    <>
                      <FaCheck className="text-primary size-4 flex-shrink-0" />
                      <span className="text-text text-sm md:text-base">
                        {feature.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <FaXmark className="size-4 text-text-light/50 flex-shrink-0" />
                      <span className="text-text-light/50 text-sm md:text-base">
                        {feature.name}
                      </span>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
