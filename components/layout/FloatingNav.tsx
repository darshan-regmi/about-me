'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Compass, Shuffle, Mail, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { experienceCards } from '@/lib/data/content';

export function FloatingNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filteredPages = searchQuery
    ? experienceCards.filter(
        (card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.teaser.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : experienceCards;

  const handleRandom = useCallback(() => {
    const randomCard = experienceCards[Math.floor(Math.random() * experienceCards.length)];
    router.push(randomCard.href);
  }, [router]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <div
          className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
            isScrolled ? 'glass-strong' : 'glass'
          }`}
        >
          <NavItem href="/" icon={Home} label="Home" />
          <NavItem href="/explore" icon={Compass} label="Explore" />
          <button
            onClick={handleRandom}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 text-white/60 hover:text-white group relative"
          >
            <Shuffle className="w-4 h-4" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Random
            </span>
          </button>
          <NavItem href="/contact" icon={Mail} label="Contact" />
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 text-white/60 hover:text-white group relative"
          >
            <Search className="w-4 h-4" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Search
            </span>
          </button>
          <div className="hidden md:flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            <kbd className="text-[10px] text-white/40 px-1.5 py-0.5 rounded glass font-mono">
              {typeof navigator !== 'undefined' && navigator.platform.toLowerCase().includes('mac') ? '⌘' : 'Ctrl'}
            </kbd>
            <kbd className="text-[10px] text-white/40 px-1.5 py-0.5 rounded glass font-mono">K</kbd>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3 p-4 border-b border-white/5">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {filteredPages.map((page) => (
                  <Link
                    key={page.id}
                    href={page.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <page.icon className="w-5 h-5 text-white/60 group-hover:text-white" />
                    <div>
                      <div className="text-white font-medium">{page.title}</div>
                      <div className="text-sm text-white/40">{page.teaser}</div>
                    </div>
                  </Link>
                ))}
                {filteredPages.length === 0 && (
                  <div className="text-center py-8 text-white/40">No results found</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 text-white/60 hover:text-white group relative"
    >
      <Icon className="w-4 h-4" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
