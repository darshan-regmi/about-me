'use client';

import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-sm"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        className="w-1.5 h-1.5 rounded-full bg-white/60"
      />
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        className="w-1.5 h-1.5 rounded-full bg-white/60"
      />
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        className="w-1.5 h-1.5 rounded-full bg-white/60"
      />
    </div>
  );
}
