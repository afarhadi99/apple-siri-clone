// animations.ts
import { Variants } from 'framer-motion';

export const titleVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const imageVariants = [
  { // iPad
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } }
  },
  { // AirPods
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1 } }
  },
  { // iPhone
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } }
  },
  { // Watch
    initial: { x: '100%', y: '-100%', scale: 1.5, opacity: 0 },
    animate: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } }
  },
  { // Remote
    initial: { x: '100%', y: '100%', opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } }
  },
  { // HomePod
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } }
  }
];

export const sentenceVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};