import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to wait before revealing, for light staggering. */
  delay?: number;
  className?: string;
}

/**
 * Fades content up once, the first time it scrolls into view.
 * Renders a plain wrapper when the user prefers reduced motion.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
