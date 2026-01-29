"use client";
import Badge from "@/components/Badge";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, tabFade } from "@/lib/utils/animation";
import { markdownify } from "@/lib/utils/textConverter";
import { PricingPlanSection } from "@/types";
import { useState } from "react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: PricingPlanSection;
}

const PricingPlan = ({ data }: { data: PageData }) => {
  const pricing = data.frontmatter;
  const [activePlan, setActivePlan] = useState("monthly");

  const handleActivePlan = (plan: string) => {
    setActivePlan(plan);
  };
  return (
    pricing.enable && (
      <motion.section
        className="section grid-line bg-transparent overflow-x-hidden"
        {...fadeInUp}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-y-12">
            <motion.div
              className="col-span-12 xl:col-span-4 md:pr-10"
              {...fadeInUp}
            >
              {pricing.badge && <Badge>{pricing.badge}</Badge>}
              <motion.h2
                className="my-4 gradient-text"
                dangerouslySetInnerHTML={markdownify(pricing.title)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.p
                className="mb-14 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {pricing.subtitle}
              </motion.p>
              {/* Pricing Tabs */}
              <motion.div
                className="gradient-border rounded-full bg-secondary/20 max-w-fit p-1 flex items-center text-center text-sm font-medium relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  type="button"
                  className={`px-4 py-2.5 rounded-full cursor-pointer relative z-10 transition-colors duration-300 ${
                    activePlan === "monthly" ? "text-text-dark" : "text-white"
                  }`}
                  onClick={() => handleActivePlan("monthly")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  monthly
                </motion.button>
                <motion.button
                  type="button"
                  className={`px-5 sm:px-4 py-2.5 rounded-full cursor-pointer relative z-10 transition-colors duration-300 ${
                    activePlan === "yearly" ? "text-text-dark" : "text-white"
                  }`}
                  onClick={() => handleActivePlan("yearly")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  yearly
                </motion.button>
                {/* Active tab background */}
                <motion.div
                  className="absolute inset-y-1 bg-primary rounded-full"
                  animate={{
                    x: activePlan === "monthly" ? "0px" : "calc(50% + 40px)",
                    width: "calc(50% - 8px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-12 xl:col-span-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan}
                  className="grid md:grid-cols-2 gap-6"
                  variants={tabFade}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                >
                  {pricing.plans.map((plan, index) => (
                    <motion.div
                      key={`${activePlan}-${index}`}
                      className="card gradient-border "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="p-6 rounded-2xl bg-secondary mb-6">
                        <h3 className="mb-2 text-2xl font-medium">
                          {plan.title}
                        </h3>
                        <motion.h4
                          className="text-h1"
                          key={`${activePlan}-${plan.title}-price`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          $
                          {activePlan === "monthly"
                            ? plan.price.monthly
                            : plan.price.yearly}
                        </motion.h4>
                        <span>Per User month</span>
                      </div>

                      <div>
                        <h5 className="text-lg font-medium mb-4">
                          What&apos;s Included
                        </h5>
                        <ul className="flex flex-col gap-y-4 mb-10">
                          {plan.features.map((feature, fIndex) => (
                            <motion.li
                              key={fIndex}
                              className="flex items-center text-primary"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: fIndex * 0.05,
                              }}
                            >
                              <span className="mr-3">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.125 3.375L4.875 8.625L2.25 6"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>{" "}
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        {plan.button && plan.button.enable && (
                          <motion.a
                            href={plan.button.link}
                            className="btn text-primary w-full text-center gradient-border hover:bg-primary hover:text-dark transition-colors duration-300 gradient-border-disable-hover "
                            aria-label={`${plan.button.label} - ${plan.title} plan`}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {plan.button.label}
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.section>
    )
  );
};

export default PricingPlan;
