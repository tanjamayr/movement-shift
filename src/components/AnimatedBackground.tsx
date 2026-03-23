import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  
  // Parallax background movement
  const bgY = useTransform(scrollY, [0, 2000], ['0%', '15%']);
  
  // Additional transformation for line graph movement on scroll
  const graphMoveLeft = useTransform(scrollY, [0, 2000], [0, -100]);
  const graphMoveRight = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-dark">
      {/* Subtle moving gradients */}
      <motion.div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          y: bgY,
          background: `radial-gradient(circle at 10% 20%, rgba(0, 95, 115, 0.25) 0%, transparent 50%),
                       radial-gradient(circle at 90% 80%, rgba(10, 147, 150, 0.2) 0%, transparent 40%)`
        }}
      />
      
      {/* Subtle Data Lines / Graph Patterns */}
      <svg 
        className="absolute w-full h-full opacity-20" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Abstract curve */}
        <motion.path
          d="M -200 300 Q 200 400 600 200 T 1400 150 T 2200 300"
          fill="transparent"
          stroke="#0A9396"
          strokeWidth="1.5"
          style={{ x: graphMoveLeft }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Jagged "Line Graph" Style */}
        <motion.path
          d="M -100 800 L 150 700 L 350 750 L 550 550 L 800 650 L 1100 400 L 1400 500 L 1700 250 L 2000 350"
          fill="transparent"
          stroke="#005F73"
          strokeWidth="1"
          strokeDasharray="6 6"
          style={{ x: graphMoveRight }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: "easeOut", delay: 0.5 }}
        />

        {/* Another subtle data line */}
        <motion.path
          d="M 0 500 L 200 450 L 400 600 L 600 400 L 800 550 L 1000 300 L 1200 450 L 1500 200 M 150 700 L 150 1000 M 550 550 L 550 1000 M 1100 400 L 1100 1000"
          fill="transparent"
          stroke="#E9F5DB"
          strokeWidth="0.5"
          style={{ x: graphMoveLeft }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
