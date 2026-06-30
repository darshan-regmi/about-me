'use client';

import { Camera, Image, MapPin } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { galleryData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <PageLayout
      title="Gallery"
      icon={<Camera className="w-8 h-8 text-white/80" />}
      description="Moments captured through my lens."
    >
      <Section title="About My Photography">
        <Card>
          <div className="flex items-start gap-3">
            <Image className="w-5 h-5 text-white/40 mt-1" />
            <p className="text-white/70 leading-relaxed">{galleryData.description}</p>
          </div>
        </Card>
      </Section>

      <Section title="Categories">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <Image className="w-8 h-8 text-white/30 mx-auto mb-3" />
              <span className="text-white/70">{category}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Favorite Subject">
        <Card className="border-l-2 border-white/20">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-white/40" />
            <p className="text-white/70">{galleryData.favoriteSubject}</p>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
