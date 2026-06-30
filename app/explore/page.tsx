'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { ExperienceCard } from '@/components/experience/ExperienceCard';
import { QuoteWidget } from '@/components/experience/widgets/QuotesWidget';
import { KeyboardShortcutsHelp } from '@/components/experience/widgets/KeyboardShortcuts';
import { EasterEggsHandler } from '@/components/experience/widgets/EasterEggs';
import { experienceCards } from '@/lib/data/content';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'r' || e.key === 'R') {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        e.preventDefault();
        const randomCard = experienceCards[Math.floor(Math.random() * experienceCards.length)];
        router.push(randomCard.href);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <main className="min-h-screen bg-background relative">
      <FloatingNav />
      <KeyboardShortcutsHelp />
      <EasterEggsHandler />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Explore</span>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Click on any card to dive deeper into that part of me.
            <br />
            Or press <kbd className="px-1.5 py-0.5 glass rounded text-xs font-mono mx-1">R</kbd> for a random page.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experienceCards.map((card, index) => (
            <ExperienceCard key={card.id} {...card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <QuoteWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-8"
        >
          <p className="text-white/30 text-sm">
            Press <kbd className="px-2 py-1 glass rounded text-xs font-mono">?</kbd> for keyboard shortcuts
          </p>
        </motion.div>
      </div>
    </main>
  );
}
