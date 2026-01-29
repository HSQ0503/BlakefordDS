"use client";
import ImageFallback from "@/helpers/ImageFallback";
import CircularText from "./CircularText";
import { FaPause, FaPlay } from "react-icons/fa6";
import { useState } from "react";

const VideoPlayer = ({ data }: { data: any }) => {
  const [isVideo, setIsVideo] = useState(false);

  // Extract YouTube video ID from URL
  const getyoutube_video_id = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleToggle = () => {
    setIsVideo(!isVideo);
  };

  const videoId = getyoutube_video_id(data.video?.videoUrl || "");

  return (
    <div className="relative">
      {isVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          className="width-full h-auto aspect-video rounded-2xl transition-all duration-300 ease-in-out"
          style={{ 
            opacity: isVideo ? 1 : 0,
            transform: isVideo ? 'scale(1)' : 'scale(0.95)',
            minHeight: '400px'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <ImageFallback
          src={data.image || ""}
          alt={data.title || "Who We Are Image"}
          className="width-full h-auto rounded-2xl transition-all duration-300 ease-in-out"
          width={1500}
          height={450}
         
        />
      )}

      {/* Video Player with Circular Text */}
      <div
        className="absolute top-6 right-6 sm:top-12 sm:right-12 size-22 sm:size-30 bg-dark rounded-full hover:scale-110 transition-all duration-200"
        onClick={handleToggle}
      >
        {/* Circular rotating text */}
        <CircularText
          text={data.video?.title.toUpperCase() || "WATCH OUR SUCCESS STORY "}
          className="size-full"
          radius={42}
          duration={15}
        />

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary size-10 sm:size-16 rounded-full flex items-center justify-center cursor-pointer ">
            {isVideo ? (
              <FaPause className="sm:size-7 text-dark" />
            ) : (
              <FaPlay className="sm:size-7 text-dark" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
