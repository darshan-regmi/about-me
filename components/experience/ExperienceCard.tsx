'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ExperienceCardProps {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  teaser: string;
  color: string;
  href: string;
  index: number;
}

export function ExperienceCard({ title, icon: Icon, teaser, color, href, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link href={href} className="block group">
        <motion.div
          className="relative overflow-hidden rounded-2xl glass gradient-border"
          whileHover={{
            scale: 1.02,
            y: -4,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 animate-shimmer" />
          </div>
          <div className="relative p-6">
            <motion.div
              className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 text-white/80 group-hover:text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all">
              {title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{teaser}</p>
            <div className="mt-4 flex items-center gap-2 text-white/40 group-hover:text-white/60 transition-colors">
              <span className="text-xs">Explore</span>
              <motion.div
                className="w-4 h-[1px] bg-current"
                whileHover={{ width: 24 }}
              />
            </div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
