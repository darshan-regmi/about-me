'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, RefreshCw } from 'lucide-react';
import { quotesData } from '@/lib/data/content';

interface QuoteWidgetProps {
  className?: string;
}

export function QuoteWidget({ className = '' }: QuoteWidgetProps) {
  const [quote, setQuote] = useState(quotesData[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  const getQuoteOfTheDay = () => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    const index = dayOfYear % quotesData.length;
    return quotesData[index];
  };

  useEffect(() => {
    setQuote(getQuoteOfTheDay());
  }, []);

  return (
    <div className={`glass rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Quote className="w-5 h-5 text-white/40" />
          <span className="text-xs text-white/40 uppercase tracking-wider">Quote of the day</span>
        </div>
        <button
          onClick={getRandomQuote}
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={quote.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/80 text-lg italic mb-2">&quot;{quote.text}&quot;</p>
          <p className="text-white/40 text-sm">— {quote.author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
