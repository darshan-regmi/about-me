'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Shuffle, MessageCircle, Zap } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { randomFactsData } from '@/lib/data/content';
import { Button } from '@/components/ui/button';

export default function RandomFactsPage() {
  const [currentFact, setCurrentFact] = useState(randomFactsData.facts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * randomFactsData.facts.length);
    setCurrentFact(randomFactsData.facts[randomIndex]);
  };

  return (
    <PageLayout
      title="Random Facts"
      icon={<Star className="w-8 h-8 text-white/80" />}
      description="Things you probably didn&apos;t know about me."
    >
      <Section title="Random Fact Generator">
        <Card className="text-center !py-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white/80 text-lg mb-6"
            >
              {currentFact}
            </motion.p>
          </AnimatePresence>
          <Button
            onClick={getRandomFact}
            variant="outline"
            className="gap-2 bg-white/5 border-white/10 hover:bg-white/10"
          >
            <Shuffle className="w-4 h-4" />
            Another one
          </Button>
        </Card>
      </Section>

      <Section title="Unpopular Opinions">
        <div className="space-y-3">
          {randomFactsData.unpopularOpinions.map((opinion, index) => (
            <motion.div
              key={opinion}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70">{opinion}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Things People Don&apos;t Expect">
        <div className="space-y-3">
          {randomFactsData.unexpected.map((fact, index) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="!p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-white/30 mt-0.5" />
                  <p className="text-white/70">{fact}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="All Facts">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {randomFactsData.facts.map((fact, index) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="!p-4">
                <p className="text-white/60 text-sm">{fact}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
