'use client';

import { Heart, Compass, CheckCircle } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { valuesData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function ValuesPage() {
  return (
    <PageLayout
      title="Values"
      icon={<Heart className="w-8 h-8 text-white/80" />}
      description="The principles that guide my decisions."
    >
      <Section title="Core Values">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {valuesData.coreValues.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-white/40" />
                  <h3 className="font-medium text-white">{value.name}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Questions I Ask Myself">
        <div className="space-y-3">
          {valuesData.guidingPrinciples.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70 italic">&quot;{principle}&quot;</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
