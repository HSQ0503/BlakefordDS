"use client";
import { Project } from "@/types";
import { plainify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";
import { motion } from "motion/react";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <motion.div
      {...fadeInUpWithDelay()}
      className="px-8 sm:px-10 pt-8 sm:pt-10 gradient-border bg-[url(/images/noise-pattern.png)] bg-repeat bg-auto"
    >
      <div className="flex gap-4 items-center flex-wrap mb-6">
        {data.frontmatter.technologies?.map((tech, index) => (
          <span className="badge" key={index}>
            {tech}
          </span>
        ))}
      </div>
      {data.frontmatter.site_demo_URL ? (
        <a
          href={data.frontmatter.site_demo_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-h4 font-medium mb-6 gradient-text"
        >
          {plainify(data.frontmatter.title)}
        </a>
      ) : (
        <h3 className="text-h4 font-medium mb-6 gradient-text">
          {plainify(data.frontmatter.title)}
        </h3>
      )}

      <p className="mb-8 text-lg">{data.frontmatter.subtitle}</p>

      <ImageFallback
        src={data.frontmatter.image}
        alt={data.frontmatter.title}
        width={610}
        height={363}
        className="rounded-t-2xl h-[290px] sm:h-[340px] object-cover"
      />
    </motion.div>
  );
};

export default ProjectCard;
