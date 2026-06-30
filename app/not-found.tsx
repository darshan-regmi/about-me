'use client';

import { motion } from 'framer-motion';
import { Ghost, Home, Compass } from 'lucide-react';
import Link from 'next/link';
import { FloatingNav } from '@/components/layout/FloatingNav';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <FloatingNav />
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-8xl mb-6"
          >
            <Ghost className="w-24 h-24 mx-auto text-white/20" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-gradient">404</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-lg mb-8"
        >
          This page seems to have wandered off into the void.
          <br />
          Maybe it&apos;s exploring itself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/explore"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-colors"
          >
            <Compass className="w-4 h-4" />
            Explore
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/20 text-sm mt-12"
        >
          Easter egg: You found the void. Congratulations, I guess?
        </motion.p>
      </div>
    </main>
  );
}
