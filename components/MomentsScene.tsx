'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { StoryData } from '@/data/story';

type MomentsData = {
  section: StoryData['momentsSection'];
  memories: StoryData['memories'];
};

const ease = [0.76, 0, 0.24, 1] as const;

function MemoryCard({
  memory,
  index,
}: {
  memory: StoryData['memories'][number];
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });

  return (
    <motion.div
      ref={ref}
      className="border-l border-ivory-300/15 pl-6 py-2"
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 1.2, ease, delay: index * 0.1 }}
    >
      {/* Label */}
      <p className="chapter-label mb-3">{memory.label}</p>

      {/* Main text */}
      <p className="font-display text-xl sm:text-2xl text-ivory-200 italic font-normal leading-snug">
        {memory.text}
      </p>

      {/* Detail */}
      {memory.detail && (
        <p className="font-body text-sm text-ivory-400/50 mt-3 italic">
          {memory.detail}
        </p>
      )}
    </motion.div>
  );
}

export default function MomentsScene({ section, memories }: MomentsData) {
  const headRef    = useRef<HTMLElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-15% 0px' });

  return (
    <section
      id="scene-04"
      ref={headRef}
      aria-label="Scene 4 — The Moments"
      className="scene"
    >
      {/* Section heading */}
      <div className="scene-narrow w-full">
        <motion.p
          className="chapter-label mb-6"
          animate={headInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          03 / 07 — The Moments
        </motion.p>

        <motion.h2
          className="font-display text-4xl sm:text-5xl text-ivory-100 font-normal italic leading-tight"
          animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.3, ease, delay: 0.3 }}
        >
          {section.heading}
        </motion.h2>

        <motion.p
          className="font-body text-sm text-ivory-400/50 mt-3 mb-16"
          animate={headInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.6 }}
        >
          {section.subheading}
        </motion.p>

        {/* Memory cards */}
        <div className="flex flex-col gap-12">
          {memories.map((m, i) => (
            <MemoryCard key={i} memory={m} index={i} />
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="scene-narrow w-full mt-20">
        <span className="sep block" aria-hidden="true" />
      </div>
    </section>
  );
}
