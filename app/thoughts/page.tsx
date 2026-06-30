'use client';

import { MessageCircle, Lightbulb, Sparkles, Quote } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { thoughtsData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function ThoughtsPage() {
  return (
    <PageLayout
      title="Thoughts"
      icon={<MessageCircle className="w-8 h-8 text-white/80" />}
      description="Opinions, beliefs, and lessons learned."
    >
      <Section title="Opinions I Hold">
        <div className="space-y-3">
          {thoughtsData.opinions.map((opinion, index) => (
            <motion.div
              key={opinion}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70">{opinion}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Lessons Learned">
        <div className="space-y-3">
          {thoughtsData.lessons.map((lesson, index) => (
            <motion.div
              key={lesson}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4 border-l-2 border-white/10">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70">{lesson}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Core Beliefs">
        <div className="space-y-3">
          {thoughtsData.beliefs.map((belief, index) => (
            <motion.div
              key={belief}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70 italic">&quot;{belief}&quot;</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
