"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-sky via-mint to-amber shadow-glow"
      />
    </div>
  );
}
