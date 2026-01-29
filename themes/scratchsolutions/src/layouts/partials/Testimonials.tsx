"use client";

import Badge from "@/components/Badge";
import VideoDialog from "@/components/VideoDialog";
import ImageFallback from "@/helpers/ImageFallback";
import { fadeInUp } from "@/lib/utils/animation";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import { motion } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa6";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    badge?: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Testimonials = ({ data }: { data: PageData }) => {
  const { frontmatter } = data;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1600) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 1400) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
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
  const clonedSlides = [...frontmatter.testimonials];
  const extendedSlides = [
    ...clonedSlides,
    ...frontmatter.testimonials,
    ...clonedSlides,
  ];

  // Start from the middle (real slides)
  useEffect(() => {
    setCurrentIndex(frontmatter.testimonials.length);
  }, [frontmatter.testimonials.length]);

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
    if (currentIndex >= frontmatter.testimonials.length * 2) {
      setCurrentIndex(
        frontmatter.testimonials.length +
          (currentIndex - frontmatter.testimonials.length * 2),
      );
    }
    // If we're at the beginning clone slides, jump to end of real slides
    else if (currentIndex < frontmatter.testimonials.length) {
      setCurrentIndex(frontmatter.testimonials.length + currentIndex);
    }
  }, [currentIndex, frontmatter.testimonials.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 2500);
    return () => clearInterval(interval);
  }, [goToNext]);

  const openDialog = (video: string) => {
    setVideoSrc(video);
    setIsDialogOpen(true);
  };

  return (
    <>
      {frontmatter.enable && (
        <motion.section
          className="section bg-secondary/40 overflow-x-hidden"
          {...fadeInUp}
        >
          <div className="container">
            <div className="row gap-y-6 mb-15">
              <div className="lg:col-7">
                <div className="flex flex-col">
                  {frontmatter.badge && <Badge>{frontmatter.badge}</Badge>}
                  <motion.h2
                    {...fadeInUp}
                    className="mt-4 gradient-text"
                    dangerouslySetInnerHTML={markdownify(frontmatter.title)}
                  />
                </div>
              </div>
              <motion.div
                className="lg:col-5 lg:pl-20 flex justify-end items-end gap-x-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  className="gradient-border gradient-border-disable-hover p-3 rounded-full hover:bg-primary  transition group cursor-pointer"
                  aria-label="Previous testimonial"
                  onClick={goToPrev}
                >
                  <FaAngleLeft className="size-6 text-primary group-hover:text-dark" />
                </button>
                <button
                  className="gradient-border gradient-border-disable-hover p-3 rounded-full hover:bg-primary transition group cursor-pointer"
                  aria-label="Next testimonial"
                  onClick={goToNext}
                >
                  <FaAngleRight className="size-6 text-primary group-hover:text-dark" />
                </button>
              </motion.div>
            </div>
          </div>
          {/* testimonials */}
          <motion.div
            className="px-10 max-w-[2000px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * (100 / slidesPerView)}%`,
                }}
                transition={{
                  duration: isTransitioning ? 1.2 : 0,
                  ease: "easeInOut",
                }}
                onAnimationComplete={handleTransitionEnd}
              >
                {extendedSlides.map((item: Testimonial, index: number) => {

                  return (
                    <div
                      key={`slide-${index}`}
                      className="flex-shrink-0"
                      style={{
                        width: `${100 / slidesPerView}%`,
                        paddingRight: "8px",
                        paddingLeft: "8px",
                      }}
                    >
                      <motion.div
                        className="h-[420px]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.youtube_video_id ? (
                          <div className="rounded-2xl relative overflow-hidden p-6 h-full flex items-end">
                            <ImageFallback
                              src={item.image}
                              alt={item.name}
                              width={500}
                              height={800}
                              className="w-full h-full absolute inset-0 object-cover object-center grayscale"
                            />

                            <div className="absolute inset-0 bg-transparent-gradient" />
                            <div className="flex items-center relative z-1 justify-between w-full">
                              <div>
                                <h3 className="text-xl mb-2 font-medium">
                                  {item.name}
                                </h3>
                                <p className="text-sm">{item.designation}</p>
                              </div>
                              <button
                                className="size-12 rounded-full gradient-border flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => openDialog(item.youtube_video_id!)}
                                aria-label="Play video"
                              >
                                <FaPlay className="size-5 text-primary" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="px-6 py-8 rounded-2xl overflow-y-auto h-full bg-secondary/60 hide-scrollbar flex flex-col justify-between">
                            <div>
                              <ImageFallback
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="size-14 mb-6 rounded-full object-cover grayscale"
                              />
                              <p className="font-medium mb-15">
                                {item.content}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-xl mb-2 font-medium">
                                {item.name}
                              </h3>
                              <p className="text-sm">{item.designation}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      )}
      {/* Video Dialog */}
      {isDialogOpen && (
        <VideoDialog videoSrc={videoSrc} setIsDialogOpen={setIsDialogOpen} />
      )}
    </>
  );
};

export default Testimonials;
