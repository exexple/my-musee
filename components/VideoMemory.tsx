'use client';

import { useEffect, useRef, useState } from 'react';
import type { VideoMoment } from '@/data/story';

interface Props {
  video: VideoMoment;
}

export default function VideoMemory({ video }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const [visible, setVisible]   = useState(false);
  const [error, setError]       = useState(false);

  // Viewport detection — play/pause on enter/exit
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isVis = entry.intersectionRatio >= 0.3;
        setVisible(isVis);
        if (videoRef.current) {
          if (isVis) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: [0, 0.3, 0.6] },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={containerRef}
      aria-label={video.ariaLabel}
      className="video-memory"
      style={{ aspectRatio: '16/9', maxHeight: '560px' }}
    >
      {error ? (
        // Graceful fallback when video is missing
        <div
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            background: '#121110',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(212,168,90,0.2)',
            }}
          >
            a moment
          </span>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={video.src}
          muted
          playsInline
          loop
          preload="none"
          onError={() => setError(true)}
          aria-label={video.ariaLabel}
          tabIndex={-1}
          style={{
            opacity: visible ? 1 : 0.7,
            transition: 'opacity 1s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        />
      )}

      {/* Caption */}
      <figcaption
        className="chapter-label text-center mt-4 pb-2 px-4"
        style={{ color: 'rgba(180,160,120,0.4)' }}
      >
        {video.caption}
      </figcaption>
    </figure>
  );
}
