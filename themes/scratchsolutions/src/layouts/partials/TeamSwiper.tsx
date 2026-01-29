"use client";
import { TeamMember } from "@/app/teams/page";
import TeamCard from "@/components/TeamCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "motion/react";
import { useState, useEffect, useCallback } from "react";

const TeamSwiper = ({ memberList }: { memberList: TeamMember[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1600) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1300) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 824) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Create infinite loop by cloning slides
  const clonedSlides = [...memberList];
  const extendedSlides = [...clonedSlides, ...memberList, ...clonedSlides];

  // Start from the middle (real slides)
  useEffect(() => {
    setCurrentIndex(memberList.length);
  }, [memberList.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle seamless loop reset
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);

    // If we're at the end clone slides, jump to beginning of real slides
    if (currentIndex >= memberList.length * 2) {
      setCurrentIndex(
        memberList.length + (currentIndex - memberList.length * 2),
      );
    }
    // If we're at the beginning clone slides, jump to end of real slides
    else if (currentIndex < memberList.length) {
      setCurrentIndex(memberList.length + currentIndex);
    }
  }, [currentIndex, memberList.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 2500);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden ">
        <motion.div
          className="flex "
          animate={{
            x: `-${currentIndex * (100 / slidesPerView)}%`,
          }}
          transition={{
            duration: isTransitioning ? 1.2 : 0,
            ease: "easeInOut",
          }}
          onAnimationComplete={handleTransitionEnd}
        >
          {extendedSlides.map((member, index) => {
            // Calculate if this is the last visible item
            return (
              <div
                key={`slide-${index}`}
                className="flex-shrink-0 transition duration-300"
                style={{
                  width: `${100 / slidesPerView}%`,
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}
              >
                <TeamCard data={member} />
              </div>
            );
          })}
        </motion.div>
      </div>

      <button
        className="gradient-border p-3 rounded-full hover:bg-primary transition group cursor-pointer absolute left-0 2xl:-left-6 top-1/2 -translate-y-1/2 z-10"
        onClick={goToPrev}
      >
        <FaAngleLeft className="size-6 text-primary group-hover:text-dark" />
      </button>
      <button
        className="gradient-border p-3 rounded-full hover:bg-primary transition group cursor-pointer absolute right-0 2xl:-right-6 top-1/2 -translate-y-1/2 z-10"
        onClick={goToNext}
      >
        <FaAngleRight className="size-6 text-primary group-hover:text-dark" />
      </button>
    </div>
  );
};

export default TeamSwiper;
