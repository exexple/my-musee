'use client';

import { useState, useCallback, RefObject } from 'react';

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
  label: string;
}

export default function AudioController({ audioRef, label }: Props) {
  const [playing, setPlaying] = useState(true); // Starts playing after Enter

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, [audioRef]);

  return (
    <button
      id="audio-controller"
      onClick={toggle}
      aria-label={`${label} — ${playing ? 'pause' : 'play'}`}
      aria-pressed={playing}
      title={playing ? 'Pause music' : 'Play music'}
      className={`audio-btn ${playing ? 'playing' : ''}`}
    >
      {playing ? (
        // Animated equaliser bars
        <span className="eq-bars" aria-hidden="true">
          <span className="eq-bar" style={{ height: '10px' }} />
          <span className="eq-bar" style={{ height: '14px' }} />
          <span className="eq-bar" style={{ height: '8px' }} />
        </span>
      ) : (
        // Static play icon
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
