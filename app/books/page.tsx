'use client';

import { BookOpen, BookMarked, ThumbsUp } from 'lucide-react';
import { PageLayout, Section, Card, Tag } from '@/components/experience/PageLayout';
import { booksData } from '@/lib/data/content';
import { motion } from 'framer-motion';

export default function BooksPage() {
  return (
    <PageLayout
      title="Books"
      icon={<BookOpen className="w-8 h-8 text-white/80" />}
      description="Stories that shaped who I am."
    >
      <Section title="Favorites">
        <div className="space-y-4">
          {booksData.favorites.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-white/30 mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{book.title}</h3>
                    <p className="text-white/40 text-sm mb-2">— {book.author}</p>
                    <p className="text-white/60 text-sm">{book.why}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Currently Reading">
        <Card className="border-l-2 border-white/20">
          <div className="flex items-center gap-3">
            <BookMarked className="w-6 h-6 text-white/40" />
            <div>
              <span className="text-xs text-white/40 block">Now</span>
              <span className="text-white/80">{booksData.currentlyReading}</span>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="My Advice">
        <Card>
          <div className="flex items-start gap-3">
            <ThumbsUp className="w-5 h-5 text-white/40 mt-1" />
            <p className="text-white/70">{booksData.recommendations}</p>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
