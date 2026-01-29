"use client"
import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import { Card as CardType } from "@/types";
import IconButton from "./IconButton";
import {motion} from "motion/react";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
const Card = ({ data }: { data: CardType }) => {

  let isEven = false;

  // even and odd
  if (data.index !== undefined) {
    isEven = data.index % 2 === 0;
  }

  return (
    <motion.div
    {...fadeInUpWithDelay(data.index ? data.index * 0.1: 0)}
      className={
        "gradient-border p-8 " +
        (isEven && "bg-[url(/images/noise-pattern.png)] bg-repeat bg-auto bg-light/4 backdrop-blur-2xl")
      }
    >
      {data.icon && (
        <ImageFallback
          src={data.icon}
          className="mb-14"
          width="64"
          height="64"
          alt="background image"
        />
      )}

      <h3 className="text-h4 font-normal mb-4">{plainify(data.title)}</h3>
      <p className="mb-10">
        {plainify(data.subtitle).length > 120
          ? plainify(data.subtitle).substring(0, 120) + "..."
          : plainify(data.subtitle)}
      </p>

      {data?.slug && (
        <IconButton data={{ slug: data.slug }} />
      )}
    </motion.div>
  );
};

export default Card;
