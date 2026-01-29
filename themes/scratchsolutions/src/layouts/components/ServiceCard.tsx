"use client";
import { motion } from "motion/react";
import { Service } from "@/app/services/page";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { fadeInUp } from "@/lib/utils/animation";

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <motion.div
      {...fadeInUp}
      className={
        "p-10 md:p-20 gradient-border rounded-2xl grid lg:grid-cols-2 items-center gap-y-8"
      }
    >
      <div className={index % 2 === 0 ? "order-1" : "order-2 lg:pl-20"}>
        <ImageFallback
          src={service.frontmatter.icon}
          alt={service.frontmatter.title}
          width={100}
          height={100}
          className="size-16"
        />
        <h3
          className="mt-4 mb-2 text-h4"
          dangerouslySetInnerHTML={markdownify(service.frontmatter.title)}
        />
        <p className="text-lg">{service.frontmatter.subtitle.slice(0, 60)}</p>
        <div className="mt-12">
          <h4 className="text-2xl font-medium mb-4">Includes:</h4>
          <ul className="flex flex-col gap-y-2">
            {service.frontmatter.include_services?.map((item, idx) => (
              <li
                key={idx}
                className="pb-2 text-lg border-b border-border/10 text-text "
              >
                <a
                  href={"/services/" + service.slug}
                  className="flex items-center justify-between group"
                  aria-label={`Learn more about ${item} - ${service.frontmatter.title} service`}
                >
                 
                  {item}
                  <span className="inline-block p-2 rounded-full group-hover:bg-primary group-hover:text-text-dark transition-all duration-300">
                    <FaArrowRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={index % 2 === 0 ? "order-2 lg:pl-20" : "order-1"}>
        <ImageFallback
          src={service.frontmatter.image}
          alt={service.frontmatter.title}
          width={600}
          height={400}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
