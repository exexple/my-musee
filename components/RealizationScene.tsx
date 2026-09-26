'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhotoMemory from '@/components/PhotoMemory';
import type { StoryData } from '@/data/story';

type RealizationData = StoryData['realization'];

interface Props {
  data: RealizationData;
}

const ease = [0.76, 0, 0.24, 1] as const;

export default function RealizationScene({ data }: Props) {
  const ref     = useRef<HTMLElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section
      id="scene-02"
      ref={ref}
      aria-label="Scene 2 — The Realization"
      className="scene relative"
    >
      {/* Scene label */}
      <motion.p
        className="chapter-label mb-12 text-center"
        animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease }}
      >
        01 / 07 — The Realization
      </motion.p>

      {/* Prelude */}
      <div className="scene-narrow mb-16">
        <motion.p
          className="font-body text-2xl sm:text-3xl md:text-4xl text-ivory-300/70 italic font-light leading-relaxed"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
        >
          {data.prelude}
        </motion.p>

        <motion.p
          className="font-display text-5xl sm:text-6xl md:text-7xl text-ivory-100 font-normal italic mt-6 leading-none"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.4, ease, delay: 0.7 }}
        >
          {data.pause}
        </motion.p>

        <motion.span
          className="sep mt-10 block"
          aria-hidden="true"
          animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.1 }}
        />

        <motion.p
          className="font-body text-base sm:text-lg text-ivory-400/70 leading-relaxed mt-10 max-w-sm"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, ease, delay: 1.3 }}
        >
          {data.body}
        </motion.p>
      </div>

      {/* First photograph */}
      <motion.div
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 1.6, ease, delay: 1.6 }}
        className="w-full"
      >
        <PhotoMemory photo={data.photo} priority />
      </motion.div>
    </section>
  );
}
