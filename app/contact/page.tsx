'use client';

import { Mail, ExternalLink, Clock } from 'lucide-react';
import { PageLayout, Section, Card } from '@/components/experience/PageLayout';
import { contactData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      icon={<Mail className="w-8 h-8 text-white/80" />}
      description="Let&apos;s connect and have a conversation."
    >
      <Section title="Email">
        <Card className="!p-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-white/40" />
            <div>
              <p className="text-white/40 text-sm mb-1">Email me at</p>
              <a
                href={`mailto:${contactData.email}`}
                className="text-white hover:text-white/80 transition-colors"
              >
                {contactData.email}
              </a>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Socials">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactData.socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="block"
            >
              <Card className="!p-4 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="font-medium text-white">{social.name}</h3>
                  <p className="text-white/40 text-sm">{social.handle}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </Card>
            </motion.a>
          ))}
        </div>
      </Section>

      <Section title="Availability">
        <Card className="border-l-2 border-white/20">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-white/40" />
            <p className="text-white/70">{contactData.availability}</p>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
