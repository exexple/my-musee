'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroData {
  line1: string;
  line2: string;
  line3: string;
  ctaLabel: string;
  soundHint: string;
}

interface IntroSceneProps {
  onEnter: () => void;
  data: IntroData;
}

const ease = [0.76, 0, 0.24, 1] as const;

// Stagger helper
const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0 },
  transition: {
    duration: 1.4,
    ease,
    delay,
  },
});

const fadeIn = (delay = 0) => ({
  initial:  { opacity: 0 },
  animate:  { opacity: 1 },
  transition: {
    duration: 1.2,
    ease,
    delay,
  },
});

export default function IntroScene({ onEnter, data }: IntroSceneProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  // Auto-focus the Enter button for keyboard users once it appears
  useEffect(() => {
    const t = setTimeout(() => btnRef.current?.focus(), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        id="intro"
        key="intro"
        aria-label="Opening screen"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-near-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.8, ease } }}
      >
        {/* ── Radial burgundy glow ── */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 50% 55%, rgba(107,26,46,0.07) 0%, transparent 70%)',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md mx-auto gap-10">
          {/* Chapter label */}
          <motion.p
            className="chapter-label"
            {...fadeIn(0.4)}
          >
            a quiet story
          </motion.p>

          {/* Gold rule */}
          <motion.span
            className="gold-divider"
            aria-hidden="true"
            {...fadeIn(0.8)}
          />

          {/* Line 1 */}
          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-normal italic text-ivory-100 leading-tight tracking-tight"
            {...fadeUp(1.0)}
          >
            {data.line1}
          </motion.h1>

          {/* Line 2 */}
          <motion.p
            className="font-display text-xl sm:text-2xl font-normal italic text-ivory-300/70 -mt-4"
            {...fadeUp(1.6)}
          >
            {data.line2}
          </motion.p>

          {/* Vertical spacer */}
          <motion.span
            className="sep"
            aria-hidden="true"
            {...fadeIn(2.0)}
          />

          {/* Line 3 */}
          <motion.p
            className="font-body text-sm tracking-widest uppercase text-ivory-400/60"
            {...fadeIn(2.2)}
          >
            {data.line3}
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(2.6)}>
            <button
              ref={btnRef}
              id="enter-btn"
              onClick={onEnter}
              aria-label="Enter the story"
              className="
                group relative inline-flex items-center gap-3
                px-8 py-4
                border border-ivory-300/20
                font-body text-sm tracking-[0.22em] uppercase
                text-ivory-300/70
                hover:text-ivory-100 hover:border-gold-300/40
                transition-all duration-700
                rounded-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/60
              "
            >
              {/* Hover glow */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,90,0.04), transparent)',
                }}
                aria-hidden="true"
              />
              <span>{data.ctaLabel.replace(' →', '')}</span>
              <span
                className="text-gold-300 group-hover:translate-x-1.5 transition-transform duration-500"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </motion.div>

          {/* Sound hint */}
          <motion.p
            className="font-body text-[0.6rem] tracking-widest uppercase text-ivory-300/25 -mt-4"
            {...fadeIn(3.2)}
          >
            {data.soundHint}
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-near-black))',
          }}
        />
      </motion.section>
    </AnimatePresence>
  );
}
