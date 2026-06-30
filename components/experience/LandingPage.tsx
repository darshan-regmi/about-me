'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const introLines = [
  { text: 'Hi.', delay: 0 },
  { text: "I'm Darshan.", delay: 0.8 },
  { text: 'I got tired of introducing myself over and over.', delay: 1.6 },
  { text: 'So I built this instead.', delay: 2.4 },
];

export function LandingPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const showAll = setTimeout(() => {
      setShowButton(true);
    }, 3500);

    return () => clearTimeout(showAll);
  }, []);

  useEffect(() => {
    introLines.forEach((line, index) => {
      setTimeout(() => {
        setCurrentLine(index + 1);
      }, line.delay * 1000);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <AnimatePresence mode="wait">
          {introLines.slice(0, currentLine).map((line, index) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className={`${
                index === 0 ? 'text-5xl md:text-7xl font-bold mb-6' : 'text-2xl md:text-3xl text-white/70 mb-2'
              }`}
            >
              {index === 1 ? (
                <span className="text-gradient font-semibold">{line.text}</span>
              ) : (
                line.text
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => router.push('/explore')}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-medium flex items-center gap-3 hover:gap-4 transition-all duration-300"
          >
            <span>Explore</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm"
      >
        Press ⌘K to search
      </motion.div>
    </div>
  );
}
