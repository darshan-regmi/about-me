'use client';

import { Music, Headphones, Disc, Radio } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { musicData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function MusicPage() {
  return (
    <PageLayout
      title="Music"
      icon={<Music className="w-8 h-8 text-white/80" />}
      description="My life has a soundtrack. Let me share it."
    >
      <Section title="Favorite Artists">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {musicData.favoriteArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start gap-3">
                  <Disc className="w-5 h-5 text-white/40 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">{artist.name}</h3>
                    <span className="text-xs text-white/40">{artist.genre}</span>
                    <p className="text-white/50 text-sm mt-2">{artist.why}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Music While Coding">
        <Card>
          <div className="flex items-start gap-3">
            <Headphones className="w-6 h-6 text-white/40" />
            <p className="text-white/70 leading-relaxed">{musicData.codingPlaylist}</p>
          </div>
        </Card>
      </Section>

      <Section title="Genres I Love">
        <div className="flex flex-wrap gap-2">
          {musicData.genres.map((genre, index) => (
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
    </PageLayout>
  );
}
