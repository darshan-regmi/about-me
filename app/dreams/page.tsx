'use client';

import { Sparkles, Globe, Briefcase, Heart, MapPin } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { dreamsData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function DreamsPage() {
  return (
    <PageLayout
      title="Dreams"
      icon={<Sparkles className="w-8 h-8 text-white/80" />}
      description="Where I want to be and what I want to achieve."
    >
      <Section title="Bucket List">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dreamsData.bucketList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-white/30" />
                <span className="text-white/70">{item}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Career Goals">
        <div className="space-y-3">
          {dreamsData.careerGoals.map((goal, index) => (
            <motion.div
              key={goal}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-white/30" />
                  <span className="text-white/70">{goal}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Travel Dreams">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dreamsData.travelDreams.map((place, index) => (
            <motion.div
              key={place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/30" />
                <span className="text-white/70">{place}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Life Goals">
        <div className="space-y-3">
          {dreamsData.lifeGoals.map((goal, index) => (
            <motion.div
              key={goal}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4 border-l-2 border-white/10">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-white/30" />
                  <span className="text-white/70">{goal}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
