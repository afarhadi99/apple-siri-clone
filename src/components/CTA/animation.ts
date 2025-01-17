// components/CTA/animation.ts
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut"} },
}