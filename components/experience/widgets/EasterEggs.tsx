'use client';

import { useEffect } from 'react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export function EasterEggsHandler() {
  useEffect(() => {
    let konamiIndex = 0;
    let easterEggCount = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          triggerKonami();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }

      // Triple click easter egg marker
      if (e.code === 'KeyE' && e.ctrlKey && e.shiftKey) {
        easterEggCount++;
        if (easterEggCount >= 3) {
          showSecretMessage();
          easterEggCount = 0;
        }
      }
    };

    const handleTripleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('konami-trigger')) {
        if (e.detail === 3) {
          triggerSpecialEffect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleTripleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleTripleClick);
    };
  }, []);

  return null;
}

function triggerKonami() {
  document.body.style.transition = 'filter 0.3s ease';
  document.body.style.filter = 'hue-rotate(180deg)';
  setTimeout(() => {
    document.body.style.filter = 'none';
  }, 1000);
  showNotification('You found the Konami code easter egg!');
}

function showSecretMessage() {
  showNotification(
    'Psst... there are more easter eggs hidden around. Try the Konami code: ↑↑↓↓←→←→BA'
  );
}

function triggerSpecialEffect() {
  document.body.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    document.body.style.transform = 'none';
  }, 500);
}

function showNotification(message: string) {
  const notification = document.createElement('div');
  notification.className =
    'fixed bottom-4 right-4 bg-white text-black px-4 py-3 rounded-xl shadow-lg z-50 animate-slide-up';
  notification.style.cssText = 'animation: slideUp 0.3s ease-out';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
