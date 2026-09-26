'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhotoMemory from '@/components/PhotoMemory';
import type { StoryData } from '@/data/story';

interface Props {
  data: StoryData['finale'];
}

const ease = [0.76, 0, 0.24, 1] as const;

export default function FinaleScene({ data }: Props) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="scene-07"
      ref={ref}
      aria-label="Scene 7 — The Ending"
      className="relative min-h-screen"
    >
      {/* Full bleed final photograph */}
      <div className="w-full">
        <PhotoMemory photo={data.photo} />
      </div>

      {/* Text block over clean background */}
      <div className="relative z-10 scene">
        <div className="scene-narrow w-full">
          {/* Chapter label */}
          <motion.p
            className="chapter-label mb-14"
            animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease }}
          >
            07 / 07 — The Ending
          </motion.p>

          {/* Three lines */}
          <motion.p
            className="font-body text-xl sm:text-2xl text-ivory-400/60 italic leading-relaxed"
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.4, ease, delay: 0.3 }}
          >
            {data.line1}
          </motion.p>

          <motion.p
            className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-normal italic leading-tight mt-8"
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 1.4, ease, delay: 0.9 }}
          >
            {data.line2}
          </motion.p>

          <motion.p
            className="font-display text-2xl sm:text-3xl text-gold-300/80 italic font-normal mt-6"
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.4, ease, delay: 1.5 }}
          >
            {data.line3}
          </motion.p>

          {/* Gold divider */}
          <motion.span
            className="gold-divider mt-16 block"
            aria-hidden="true"
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease, delay: 2.0 }}
          />

          {/* Dedication */}
          <motion.p
            className="font-display text-4xl sm:text-5xl text-ivory-100 font-normal italic mt-12 tracking-tight"
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.6, ease, delay: 2.2 }}
          >
            {data.dedication}
          </motion.p>

          {/* Signature */}
          <motion.p
            className="font-mono-display text-xs tracking-widest text-ivory-400/40 mt-6 uppercase"
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease, delay: 2.8 }}
          >
            {data.signature}
          </motion.p>
        </div>
      </div>

      {/* Bottom breathing space */}
      <div className="pb-32" aria-hidden="true" />
    </section>
  );
}
