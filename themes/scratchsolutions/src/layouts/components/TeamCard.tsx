"use client";
import { TeamMember } from "@/app/teams/page";
import ImageFallback from "@/helpers/ImageFallback";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
import { motion } from "motion/react";

const TeamCard = ({ data }: { data: TeamMember; }) => {
  return (
    <motion.div
      className="h-[410px] group"
      {...fadeInUpWithDelay()}
      
    >
      <div className="rounded-2xl relative overflow-hidden p-6 h-full flex items-end bg-secondary">
        <ImageFallback
          src={data.image}
          alt={data.name}
          width={500}
          height={800}
          className="size-full object-cover absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-transparent-gradient" />
        <div className="relative z-1">
          <h3 className="text-xl mb-2 font-medium">{data.name}</h3>
          <p className="text-sm text-text">{data.designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
