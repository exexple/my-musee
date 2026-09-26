'use client';

import { useState, useRef, useEffect } from 'react';
import type { PhotoMoment } from '@/data/story';

interface Props {
  photo: PhotoMoment;
  /** Whether to use eager loading (above the fold) */
  priority?: boolean;
}

const FALLBACK_BG = '#1a1815';

export default function PhotoMemory({ photo, priority = false }: Props) {
  const [loaded, setLoaded]     = useState(false);
  const [error, setError]       = useState(false);
  const imgRef                  = useRef<HTMLImageElement>(null);

  // Mark as loaded if already cached
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const treatment = photo.treatment ?? 'editorial';

  const imgEl = (
    <img
      ref={imgRef}
      src={error ? undefined : photo.src}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      style={{
        opacity: loaded && !error ? 1 : 0,
        transition: 'opacity 1.2s cubic-bezier(0.76, 0, 0.24, 1)',
      }}
    />
  );

  // Fallback block shown when image errors
  const fallback = (
    <div
      aria-hidden="true"
      style={{
        background: FALLBACK_BG,
        width: '100%',
        height: '100%',
        minHeight: '200px',
      }}
    />
  );

  const caption = photo.caption ? (
    <p className="chapter-label mt-4 text-center text-ivory-400/40">
      {photo.caption}
    </p>
  ) : null;

  // ── Render by treatment ──────────────────────────────────

  if (treatment === 'hero') {
    return (
      <figure className="photo-hero vignette" aria-label={photo.alt}>
        {error ? fallback : imgEl}
        {caption}
      </figure>
    );
  }

  if (treatment === 'float') {
    return (
      <figure aria-label={photo.alt}>
        <div className="photo-float">
          {error ? fallback : imgEl}
        </div>
        {caption}
      </figure>
    );
  }

  if (treatment === 'editorial') {
    return (
      <figure aria-label={photo.alt}>
        <div className="photo-editorial">
          {error ? fallback : imgEl}
        </div>
        {caption}
      </figure>
    );
  }

  if (treatment === 'print') {
    return (
      <figure className="flex flex-col items-center" aria-label={photo.alt}>
        <div className="photo-print">
          {error ? fallback : imgEl}
        </div>
        {caption}
      </figure>
    );
  }

  if (treatment === 'asymmetric') {
    return (
      <figure aria-label={photo.alt}>
        <div className="photo-asymmetric">
          {error ? fallback : imgEl}
        </div>
        {caption}
      </figure>
    );
  }

  // Default: cinematic
  return (
    <figure className="photo-cinematic vignette" aria-label={photo.alt}>
      {error ? fallback : imgEl}
      {caption}
    </figure>
  );
}
