
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the trailing effect of the outer ring
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define what elements trigger the "interactive" cursor state
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.closest('label') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      <style>
        {`
          @media (hover: hover) and (pointer: fine) {
            /* Remove standard cursor globally to allow custom cursor to shine */
            body, a, button, input, textarea, [role="button"], label {
              cursor: none !important;
            }
          }
        `}
      </style>
      
      {/* Outer Ring - Follows with a slight aesthetic lag and pulses on hover */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-teal-500/40 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? [1.6, 1.9, 1.6] : 1,
          backgroundColor: isHovering ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0)',
          borderColor: isHovering ? 'rgba(20, 184, 166, 0.8)' : 'rgba(20, 184, 166, 0.3)',
          backdropFilter: isHovering ? 'blur(4px)' : 'blur(0px)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: isHovering 
            ? { repeat: Infinity, duration: 1.8, ease: "easeInOut" } 
            : { type: "spring", damping: 20, stiffness: 150 },
          backgroundColor: { duration: 0.3 },
          borderColor: { duration: 0.3 },
          backdropFilter: { duration: 0.3 },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Inner Dot - Precise follow, disappears on interactive hover to emphasize the ring */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-teal-600 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
    </>
  );
};

export default CustomCursor;
