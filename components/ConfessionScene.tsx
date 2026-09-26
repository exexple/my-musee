'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { StoryData } from '@/data/story';

interface Props {
  data: StoryData['almostConfession'];
}

const ease = [0.76, 0, 0.24, 1] as const;

export default function ConfessionScene({ data }: Props) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const lines = [
    { text: data.opening, delay: 0.3,  size: 'text-2xl sm:text-3xl', color: 'text-ivory-400/60', italic: false  },
    { text: data.middle,  delay: 0.9,  size: 'text-xl sm:text-2xl',  color: 'text-ivory-300/70', italic: true   },
    { text: data.detail,  delay: 1.5,  size: 'text-3xl sm:text-4xl', color: 'text-ivory-200',    italic: true   },
    { text: data.pivot,   delay: 2.2,  size: 'text-4xl sm:text-5xl md:text-6xl', color: 'text-ivory-100', italic: false },
    { text: data.closing, delay: 3.0,  size: 'text-base sm:text-lg', color: 'text-ivory-400/50', italic: true   },
  ];

  return (
    <section
      id="scene-06"
      ref={ref}
      aria-label="Scene 6 — The Almost Confession"
      className="scene relative overflow-hidden"
    >
      {/* Background wash — deeper glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(107,26,46,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="scene-narrow w-full relative z-10">
        {/* Chapter label */}
        <motion.p
          className="chapter-label mb-16"
          animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          05 / 07 — The Almost-Confession
        </motion.p>

        <div className="flex flex-col gap-10">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className={`font-display font-normal leading-tight ${line.size} ${line.color} ${line.italic ? 'italic' : ''}`}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 1.5, ease, delay: line.delay }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
