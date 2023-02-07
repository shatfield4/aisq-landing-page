import React from 'react';
import { motion } from 'framer-motion';

const Squiggles = () => {
  return (
    <motion.svg
      initial={{
        pathLength: 0,
      }}
      animate={{
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className="squiggles"
      viewBox="0 0 100 100"
    >
      <path
        d="M0 30 Q 30 0 60 30 T 100 30"
        fill="none"
        stroke="#F7AB0A"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default Squiggles;
