"use client";
import { motion, AnimatePresence } from "motion/react";
import SectionHeaderSecondary from "./SectionHeaderSecondary";
import { howWeWorkSection, Steps } from "@/types";
import { useState } from "react";
import AnimatedTabs from "@/components/Animated/AnimatedTabs";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { tabFade } from "@/lib/utils/animation";

interface SectionData {
  notFound?: boolean;
  content?: string;
  frontmatter: howWeWorkSection;
}

const HowWeWork = ({ howWeWorkSection }: { howWeWorkSection: SectionData }) => {
  const data = howWeWorkSection.frontmatter;

  const tabList = data.steps.map((step: Steps) => {
    return step.category;
  });
  const [activeTab, setActiveTab] = useState(tabList[0]);

  // handler to filter steps based on active tab
  const filteredSteps = data.steps.filter(
    (step: Steps) => step.category === activeTab,
  );

  return data.enable && <section className="section bg-transparent grid-line pt-0">
      <div className="container">
        <SectionHeaderSecondary data={data} />

        {/* Step tabs */}
        <div className="flex items-center justify-center mb-15">
          <AnimatedTabs
            tabList={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Steps Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {filteredSteps.map((step: Steps, index: number) => (
              <div
                key={`${activeTab}-${index}`}
                className="grid lg:grid-cols-2 p-10 xl:p-20 gradient-border gap-y-12 bg-secondary/40"
              >
                <div className="lg:pr-6 xl:pr-16">
                  <ImageFallback
                    src={step.icon}
                    alt={step.category}
                    width={80}
                    height={80}
                    className="mb-14 md:mb-24"
                  />
                  <h3
                    className="mb-4 gradient-text"
                    dangerouslySetInnerHTML={markdownify(step.title)}
                  />
                  <p className="text-lg">{step.content}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {step.image_list.map((image, idx) => (
                    <div
                      key={idx}
                      className={`${idx === 1 ? "row-span-2" : ""}`}
                    >
                      <ImageFallback
                        src={image}
                        alt={`${step.category} image ${idx + 1}`}
                        width={600}
                        height={400}
                        className={
                          "rounded-lg h-full!" +
                          (image.includes("svg")
                            ? " object-contain"
                            : " object-cover")
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
};

export default HowWeWork;
