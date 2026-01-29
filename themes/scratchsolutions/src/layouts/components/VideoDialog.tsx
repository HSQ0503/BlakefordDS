import { motion } from "motion/react";
import React from "react";

const VideoDialog = ({
  videoSrc,
  setIsDialogOpen,
}: {
  videoSrc: string;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div 
      className="size-full fixed top-0 left-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsDialogOpen(false)}
    >
      <motion.div 
        className="relative max-w-4xl w-full aspect-video"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="size-full rounded-lg"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <motion.button
          onClick={() => setIsDialogOpen(false)}
          className="absolute -top-10 right-0 text-white hover:text-primary text-2xl transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default VideoDialog;
