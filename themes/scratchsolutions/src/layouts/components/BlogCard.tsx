"use client";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import IconButton from "./IconButton";
import { motion } from "motion/react";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
const BlogCard = ({ data, index=0 }: { data: Post; index?: number }) => {
  const {  blog_folder } = config.settings;
  const { title, image, categories, date, description } = data.frontmatter;
  return (
    <motion.div
      {...fadeInUpWithDelay(index * 0.1)}
      className="card gradient-border grid sm:grid-cols-12 gap-x-5 gap-y-6 bg-secondary/50"
    >
      <div className="sm:col-span-5">
        <ImageFallback
          src={image}
          alt={title}
          width={500}
          height={880}
          className="rounded-lg w-full sm:h-full h-64 object-cover"
        />
      </div>
      <div className="sm:col-span-7 flex flex-col justify-center">
        <div className="text-sm flex justify-between items-center mb-6">
          <span>{dateFormat(date!)}</span>
          <span className="px-3 py-2 bg-secondary inline-block rounded-full text-primary">
            {categories[0]}
          </span>
        </div>
        <h3 className="mb-4 text-2xl">{title}</h3>
        <p className="font-medium mb-12 line-clamp-3">
          {plainify(description!)}
        </p>
        {data.slug && <IconButton data={{ slug: `${blog_folder}/${data.slug}` }} />}
      </div>
    </motion.div>
  );
};

export default BlogCard;
