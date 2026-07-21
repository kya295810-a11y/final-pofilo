import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { onDone?: () => void };

export default function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3800; // ms
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => onDone && onDone(), 500);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 loading-screen flex items-center justify-center" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <svg width="96" height="96" viewBox="0 0 100 100" className="mx-auto mb-6" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#C3E41D" />
                  <stop offset="100%" stopColor="#8A8A8A" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" stroke="url(#g)" strokeWidth="2" fill="none" />
              <text x="50%" y="54%" fill="#FAFAFA" fontSize="14" textAnchor="middle" fontFamily="Inter" fontWeight="600">KS</text>
            </svg>
          </motion.div>
          <div className="text-white text-sm mb-1 opacity-70">Loading — cinematic experience</div>
          <div className="text-white text-2xl font-mono">{progress}%</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
