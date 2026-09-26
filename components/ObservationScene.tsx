'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhotoMemory  from '@/components/PhotoMemory';
import VideoMemory  from '@/components/VideoMemory';
import type { Observation, VideoMoment } from '@/data/story';

interface Props {
  observations: Observation[];
  videos: VideoMoment[];
}

const ease = [0.76, 0, 0.24, 1] as const;

function ObservationItem({
  obs,
  index,
}: {
  obs: Observation;
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="py-16 md:py-24">
      {/* Quote mark */}
      <motion.span
        className="block font-display text-gold-400/20 text-7xl leading-none select-none"
        aria-hidden="true"
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.0, ease, delay: 0.1 }}
      >
        "
      </motion.span>

      <motion.p
        className="font-display text-2xl sm:text-3xl md:text-4xl text-ivory-200 italic font-normal leading-snug mt-2 max-w-xl"
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 1.3, ease, delay: 0.2 }}
      >
        {obs.text}
      </motion.p>

      {obs.note && (
        <motion.p
          className="font-body text-sm text-ivory-400/50 mt-4 ml-1 italic max-w-xs"
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.6 }}
        >
          {obs.note}
        </motion.p>
      )}

      {obs.photo && (
        <motion.div
          className="mt-10"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 1.4, ease, delay: 0.7 }}
        >
          <PhotoMemory
            photo={{
              src:       obs.photo,
              alt:       obs.photoAlt ?? 'A moment',
              treatment: index % 2 === 0 ? 'editorial' : 'float',
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

export default function ObservationScene({ observations, videos }: Props) {
  const headRef    = useRef<HTMLElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-15% 0px' });

  // Interleave videos between observations
  // Pattern: obs obs video obs video obs video obs video obs
  const videoQueue = [...videos];
  const items: Array<{ type: 'obs'; data: Observation; index: number } | { type: 'video'; data: VideoMoment }> = [];

  observations.forEach((obs, i) => {
    items.push({ type: 'obs', data: obs, index: i });
    // Insert a video after every 2nd observation
    if ((i + 1) % 2 === 0 && videoQueue.length > 0) {
      items.push({ type: 'video', data: videoQueue.shift()! });
    }
  });
  // Append any remaining videos
  videoQueue.forEach((v) => items.push({ type: 'video', data: v }));

  return (
    <section
      id="scene-03"
      ref={headRef}
      aria-label="Scene 3 — The Little Things"
      className="relative py-24"
    >
      {/* Section heading */}
      <div className="scene-narrow px-6 mb-8">
        <motion.p
          className="chapter-label mb-6"
          animate={headInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          02 / 07 — The Little Things
        </motion.p>
        <motion.h2
          className="font-display text-4xl sm:text-5xl text-ivory-100 font-normal italic leading-tight"
          animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.3, ease, delay: 0.3 }}
        >
          Things I notice.
        </motion.h2>
        <motion.p
          className="font-body text-sm text-ivory-400/50 mt-3"
          animate={headInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.7 }}
        >
          The ones that happen when no one is paying attention.
          <br />
          Except, apparently, me.
        </motion.p>
      </div>

      {/* Items */}
      <div className="px-6 max-w-3xl mx-auto">
        {items.map((item, i) =>
          item.type === 'obs' ? (
            <ObservationItem key={`obs-${item.index}`} obs={item.data} index={item.index} />
          ) : (
            <div key={`vid-${i}`} className="my-12 md:my-20">
              <VideoMemory video={item.data} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
