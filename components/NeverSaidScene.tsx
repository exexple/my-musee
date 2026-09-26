'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { StoryData } from '@/data/story';

interface Props {
  data: StoryData['neverSaid'];
}

const ease = [0.76, 0, 0.24, 1] as const;

export default function NeverSaidScene({ data }: Props) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section
      id="scene-05"
      ref={ref}
      aria-label="Scene 5 — What I Never Said"
      className="scene relative overflow-hidden"
    >
      {/* Subtle background wash */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(107,26,46,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="scene-narrow w-full relative z-10">
        {/* Chapter label */}
        <motion.p
          className="chapter-label mb-12"
          animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          04 / 07 — What I Never Said
        </motion.p>

        {/* Opening lines */}
        <motion.p
          className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory-200 italic font-normal leading-tight"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.4, ease, delay: 0.3 }}
        >
          {data.line1}
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-ivory-400/60 mt-6 max-w-sm italic"
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.9 }}
        >
          {data.line2}
        </motion.p>

        {/* Divider */}
        <motion.span
          className="sep my-14 block"
          aria-hidden="true"
          animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.2 }}
        />

        {/* Individual lines */}
        <div className="flex flex-col gap-8">
          {data.lines.map((line, i) => (
            <motion.p
              key={i}
              className="font-body text-xl sm:text-2xl text-ivory-300/80 leading-relaxed"
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 1.2, ease, delay: 1.4 + i * 0.25 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
