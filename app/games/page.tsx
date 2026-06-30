'use client';

import { Gamepad2, Clock, Star, Zap } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { gamesData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function GamesPage() {
  return (
    <PageLayout
      title="Gaming"
      icon={<Gamepad2 className="w-8 h-8 text-white/80" />}
      description="Worlds I&apos;ve explored and conquered."
    >
      <Section title="Favorite Games">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gamesData.favorites.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-white">{game.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                    {game.hours}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white/30" />
                  <span className="text-white/50 text-sm">{game.genre}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Currently Playing">
        <Card className="border-l-2 border-white/20">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-white/40" />
            <div>
              <span className="text-xs text-white/40 block">Now</span>
              <span className="text-white/80">{gamesData.currentlyPlaying}</span>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Genres I Enjoy">
        <div className="flex flex-wrap gap-2">
          {gamesData.genres.map((genre, index) => (
            <motion.span
              key={genre}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Tag>{genre}</Tag>
            </motion.span>
          ))}
        </div>
      </Section>

      <Section title="Gaming Philosophy">
        <Card>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-white/40 mt-1" />
            <p className="text-white/60 leading-relaxed">{gamesData.gamingPhilosophy}</p>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
