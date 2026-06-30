'use client';

import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.03)',
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(255, 255, 255, 0.05)',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

export const typingText: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const typewriterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

export const typewriterChar: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05, ease: 'easeOut' },
  },
};
