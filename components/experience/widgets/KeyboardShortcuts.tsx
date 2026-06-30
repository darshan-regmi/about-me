'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard } from 'lucide-react';

interface Shortcut {
  keys: string[];
  description: string;
}

const shortcuts: Shortcut[] = [
  { keys: ['⌘/Ctrl', 'K'], description: 'Search' },
  { keys: ['R'], description: 'Random page' },
  { keys: ['?'], description: 'Show shortcuts' },
  { keys: ['Esc'], description: 'Close dialog' },
];

export function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] rounded-2xl p-8 max-w-md w-full mx-4 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Keyboard className="w-6 h-6 text-white/60" />
              <h2 className="text-xl font-semibold text-white">Keyboard Shortcuts</h2>
            </div>
            <div className="space-y-3">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.description}
                  className="flex items-center justify-between"
                >
                  <span className="text-white/60">{shortcut.description}</span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <span key={i}>
                        <kbd className="px-2 py-1 rounded bg-white/5 text-white/80 text-sm font-mono">
                          {key}
                        </kbd>
                        {i < shortcut.keys.length - 1 && (
                          <span className="text-white/30 mx-1">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm mt-6 text-center">
              Press <kbd className="px-1 py-0.5 rounded bg-white/5 text-xs font-mono">?</kbd> or{' '}
              <kbd className="px-1 py-0.5 rounded bg-white/5 text-xs font-mono">Esc</kbd> to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
