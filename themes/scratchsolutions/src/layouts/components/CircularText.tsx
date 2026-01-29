"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CircularTextProps {
  text: string;
  className?: string;
  radius?: number;
  duration?: number;
}

const CircularText: React.FC<CircularTextProps> = ({ 
  text, 
  className = "", 
  radius = 80, 
  duration = 20 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Add spaces between words for better spacing
  const processedText = text.split('').join(' ');
  const characters = processedText.split('');
  const totalCharacters = characters.length;


  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {characters.map((char, index) => {
          const angle = (index / (totalCharacters - 1)) * 340; // Use 340 degrees to leave gap
          const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
          const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

          return (
            <span
              key={index}
              className="absolute text-sm font-medium text-primary tracking-wider"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;