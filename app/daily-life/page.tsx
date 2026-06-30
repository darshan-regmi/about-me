'use client';

import { Coffee, Clock, Heart, Laptop, BookOpen, Star, Palette, MessageCircle } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { dailyLifeData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function DailyLifePage() {
  return (
    <PageLayout
      title="Daily Life"
      icon={<Coffee className="w-8 h-8 text-white/80" />}
      description="The rituals, habits, and moments that make up my days."
    >
      <Section title="A Day in My Life">
        <div className="space-y-4">
          {dailyLifeData.routine.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-20 text-right shrink-0">
                <span className="text-white/60 font-mono text-sm">{item.time}</span>
              </div>
              <div className="flex items-center gap-3 flex-1 glass rounded-xl px-4 py-3 group-hover:bg-white/10 transition-colors">
                <item.icon className="w-5 h-5 text-white/40" />
                <span className="text-white/70">{item.activity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Coffee Preference">
        <Card>
          <div className="flex items-start gap-3">
            <Coffee className="w-6 h-6 text-white/40" />
            <p className="text-white/70 leading-relaxed">{dailyLifeData.coffeePreference}</p>
          </div>
        </Card>
      </Section>

      <Section title="Daily Habits">
        <div className="flex flex-wrap gap-2">
          {dailyLifeData.habits.map((habit, index) => (
            <motion.span
              key={habit}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Tag>{habit}</Tag>
            </motion.span>
          ))}
        </div>
      </Section>

      <Section title="Productivity Tools">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dailyLifeData.productivityTools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center !p-4">
                <span className="text-white/70">{tool}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
