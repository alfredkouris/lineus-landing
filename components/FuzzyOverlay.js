import React from "react";
import { motion } from "framer-motion";

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.1,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        // backgroundImage: 'url("img/black-noise.png")',
        backgroundImage: 'url("img/noise.png")',
      }}
      className="z-0 pointer-events-none absolute -inset-[100%] opacity-[10%]"
    />
  );
};

export default FuzzyOverlay;
