'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FloatingNav } from '@/components/layout/FloatingNav';

interface PageLayoutProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  children: React.ReactNode;
}

export function PageLayout({ title, icon, description, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-background relative">
      <FloatingNav />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to explore
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {icon}
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gradient">{title}</span>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      {children}
    </motion.section>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/70 text-sm mr-2 mb-2">
      {children}
    </span>
  );
}
