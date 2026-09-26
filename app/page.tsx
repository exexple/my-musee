'use client';

import { useState, useRef, useCallback } from 'react';
import { story } from '@/data/story';
import IntroScene       from '@/components/IntroScene';
import RealizationScene from '@/components/RealizationScene';
import ObservationScene from '@/components/ObservationScene';
import MomentsScene     from '@/components/MomentsScene';
import NeverSaidScene   from '@/components/NeverSaidScene';
import ConfessionScene  from '@/components/ConfessionScene';
import FinaleScene      from '@/components/FinaleScene';
import AudioController  from '@/components/AudioController';
import ProgressBar      from '@/components/ProgressBar';

export default function Page() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = useCallback(() => {
    // Initialize audio element once on user interaction
    if (!audioRef.current) {
      const audio = new Audio(story.musicSrc);
      audio.loop    = true;
      audio.volume  = 0.45;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
    // Attempt to play — browser allows this after user gesture
    audioRef.current.play().catch(() => {
      // Silently handle — user can use the controller to start
    });
    setHasEntered(true);
  }, []);

  return (
    <main className="relative film-grain bg-near-black">
      {/* ── Cinematic introduction overlay ── */}
      {!hasEntered && (
        <IntroScene onEnter={handleEnter} data={story.intro} />
      )}

      {/* ── Main story ── */}
      {hasEntered && (
        <>
          <ProgressBar />
          <AudioController audioRef={audioRef} label={story.musicLabel} />

          {/* SCENE 01 → already consumed by IntroScene */}
          {/* SCENE 02 */}
          <RealizationScene data={story.realization} />
          {/* SCENE 03 */}
          <ObservationScene
            observations={story.observations}
            videos={story.videos}
          />
          {/* SCENE 04 */}
          <MomentsScene
            section={story.momentsSection}
            memories={story.memories}
          />
          {/* SCENE 05 */}
          <NeverSaidScene data={story.neverSaid} />
          {/* SCENE 06 */}
          <ConfessionScene data={story.almostConfession} />
          {/* SCENE 07 */}
          <FinaleScene
            data={story.finale}
            name={story.name}
          />
        </>
      )}
    </main>
  );
}
