'use client';

import { Code2, Calendar, Star, FolderKanban, Lightbulb, Zap } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { developerData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function DeveloperPage() {
  return (
    <PageLayout
      title="Developer"
      icon={<Code2 className="w-8 h-8 text-white/80" />}
      description="Building things that matter, one line at a time."
    >
      <Section title="Timeline">
        <div className="space-y-6">
          {developerData.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 items-start group"
            >
              <div className="w-16 text-right">
                <span className="text-white/90 font-medium">{item.year}</span>
              </div>
              <div className="w-px bg-white/10 group-hover:bg-white/20 transition-colors" />
              <div className="flex-1 flex items-start gap-3">
                <item.icon className="w-5 h-5 text-white/40 mt-1" />
                <span className="text-white/60 group-hover:text-white/80 transition-colors">{item.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Current Stack">
        <div className="flex flex-wrap gap-2">
          {developerData.currentStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Tag>{tech}</Tag>
            </motion.span>
          ))}
        </div>
      </Section>

      <Section title="Favorite Technologies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {developerData.favoriteTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-white/60" />
                  <h3 className="font-medium text-white">{tech.name}</h3>
                </div>
                <p className="text-white/50 text-sm">{tech.reason}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-4">
          {developerData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start gap-3 mb-3">
                  <FolderKanban className="w-5 h-5 text-white/60 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">{project.name}</h3>
                    <p className="text-white/50 text-sm mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Learning Roadmap">
        <div className="flex flex-wrap gap-2">
          {developerData.learningRoadmap.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm">
                <Lightbulb className="w-4 h-4 text-white/40" />
                {item}
              </span>
            </motion.span>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
