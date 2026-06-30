'use client';

import { PenTool, Quote, BookOpen, Sparkles, Workflow } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { writerData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function WriterPage() {
  return (
    <PageLayout
      title="Writer"
      icon={<PenTool className="w-8 h-8 text-white/80" />}
      description="Words are my way of understanding the world."
    >
      <Section title="Favorite Poem">
        <Card className="!p-8">
          <div className="flex items-start gap-4 mb-4">
            <Quote className="w-8 h-8 text-white/20" />
            <div>
              <h3 className="text-lg font-medium text-white/90">{writerData.favoritePoem.title}</h3>
              <p className="text-white/40 text-sm">— {writerData.favoritePoem.author}</p>
            </div>
          </div>
          <p className="text-white/60 text-lg italic leading-relaxed">
            &quot;{writerData.favoritePoem.excerpt}&quot;
          </p>
        </Card>
      </Section>

      <Section title="Writing Philosophy">
        <Card>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-white/40 mt-1" />
            <p className="text-white/70 leading-relaxed">{writerData.philosophy}</p>
          </div>
        </Card>
      </Section>

      <Section title="Current Project">
        <Card className="border-l-2 border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-white/60" />
            <h3 className="font-medium text-white">Work in Progress</h3>
          </div>
          <p className="text-white/60">{writerData.currentProject}</p>
        </Card>
      </Section>

      <Section title="Creative Process">
        <div className="relative">
          {writerData.creativeProcess.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 font-medium">
                {index + 1}
              </div>
              <div className="flex-1 glass rounded-xl px-4 py-3">
                <span className="text-white/70">{step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
