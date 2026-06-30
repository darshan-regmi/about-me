'use client';

import { LandingPage } from '@/components/experience/LandingPage';
import { FloatingNav } from '@/components/layout/FloatingNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingNav />
      <LandingPage />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      </div>
    </main>
  );
}
