// ============================================================
//  data/story.ts  —  THE ONLY FILE YOU NEED TO EDIT
//  Change the text, swap media paths, and the whole
//  website updates automatically.
// ============================================================

// ────────────────────────────────────────────────────────────
// TYPES
// ────────────────────────────────────────────────────────────

export interface Observation {
  /** The observation line displayed on screen */
  text: string;
  /** Optional subtle secondary note displayed below in smaller text */
  note?: string;
  /** Path to photo that pairs with this observation — or null */
  photo?: string;
  /** Alt text for the photo */
  photoAlt?: string;
}

export interface Memory {
  /** Short label — displayed in small caps */
  label: string;
  /** Main memory description */
  text: string;
  /** Optional secondary detail */
  detail?: string;
}

export interface VideoMoment {
  /** Path to .mp4 file */
  src: string;
  /** Short cinematic caption below the video */
  caption: string;
  /** Aria-label for accessibility */
  ariaLabel: string;
}

export interface PhotoMoment {
  /** Path to image file */
  src: string;
  /** Alt text */
  alt: string;
  /** Optional editorial caption */
  caption?: string;
  /** Visual treatment variant */
  treatment: 'hero' | 'float' | 'editorial' | 'print' | 'asymmetric' | 'cinematic';
}

export interface StoryData {
  // ──────────────── META ────────────────────────────────────
  /** The person's name — used throughout */
  name: string;
  /** Site title shown in browser tab */
  siteTitle: string;
  /** Site meta description */
  siteDescription: string;
  /** Creator name / signature */
  creatorName: string;

  // ──────────────── AUDIO ───────────────────────────────────
  /**
   * Path to background music file inside /public/
   * Example: '/audio/dandelions.mp3'
   * Change this ONE value to swap the music.
   */
  musicSrc: string;
  /** Aria label for the music button */
  musicLabel: string;

  // ──────────────── SCENE 01 — THE INVITATION ───────────────
  intro: {
    line1: string;
    line2: string;
    line3: string;
    ctaLabel: string;
    soundHint: string;
  };

  // ──────────────── SCENE 02 — THE REALIZATION ──────────────
  realization: {
    prelude: string;
    pause: string;
    body: string;
    photo: PhotoMoment;
  };

  // ──────────────── SCENE 03 — THE LITTLE THINGS ────────────
  observations: Observation[];

  // ──────────────── SCENE 04 — THE MOMENTS ─────────────────
  momentsSection: {
    heading: string;
    subheading: string;
  };
  memories: Memory[];

  // ──────────────── SCENE 05 — WHAT I NEVER SAID ────────────
  neverSaid: {
    line1: string;
    line2: string;
    lines: string[];
  };

  // ──────────────── SCENE 06 — THE ALMOST-CONFESSION ────────
  almostConfession: {
    opening: string;
    middle: string;
    detail: string;
    pivot: string;
    closing: string;
  };

  // ──────────────── SCENE 07 — THE ENDING ──────────────────
  finale: {
    line1: string;
    line2: string;
    line3: string;
    dedication: string;
    signature: string;
    photo: PhotoMoment;
  };

  // ──────────────── MEDIA ───────────────────────────────────
  photos: PhotoMoment[];
  videos: VideoMoment[];
}

// ============================================================
//  THE STORY
//  ↓ Edit everything below this line ↓
// ============================================================

export const story: StoryData = {

  // ──────────────── META ────────────────────────────────────
  name:            "Pratiksha",
  siteTitle:       "The Things I Notice — For Pratiksha",
  siteDescription: "A quiet collection of things I've noticed about you.",
  creatorName:     "Manas",

  // ──────────────── AUDIO ───────────────────────────────────
  // Replace the file path below with your actual music file.
  // Upload your .mp3 to /public/audio/ and update this path.
  musicSrc:  "/audio/dandelions.mp3",
  musicLabel: "Toggle background music",

  // ──────────────── SCENE 01 — THE INVITATION ───────────────
  intro: {
    line1:     "Some people leave memories.",
    line2:     "Some people become them.",
    line3:     "This one is for you.",
    ctaLabel:  "Enter →",
    soundHint: "Turn sound on for the full experience.",
  },

  // ──────────────── SCENE 02 — THE REALIZATION ──────────────
  realization: {
    prelude: "You probably don't notice most of them.",
    pause:   "I do.",
    body:    "The little things. The quiet ones. The ones that happen in between everything else.",
    photo: {
      src:       "/images/photo-01.webp",
      alt:       "Pratiksha",
      caption:   "The beginning of a private collection.",
      treatment: "hero",
    },
  },

  // ──────────────── SCENE 03 — THE LITTLE THINGS ────────────
  // Add, remove, or reorder observations freely.
  // Pair each with a photo if you want. Leave photo blank to skip.
  observations: [
    {
      text:     "The way you smile before you actually laugh.",
      note:     "Like you're deciding whether it's funny enough.",
      photo:    "/images/photo-02.webp",
      photoAlt: "Pratiksha smiling",
    },
    {
      text:     "That tiny expression you make when you're trying not to smile.",
      note:     "The one you think nobody notices.",
    },
    {
      text:     "The way you make completely ordinary moments feel worth remembering.",
      photo:    "/images/photo-03.webp",
      photoAlt: "An ordinary moment",
    },
    {
      text:     "How you laugh at your own jokes, even the bad ones.",
      note:     "Especially the bad ones.",
    },
    {
      text:     "The way you pay attention to things most people walk past.",
    },
    {
      text:     "That thing you do when you're thinking — like the world just pauses around you.",
      photo:    "/images/photo-04.webp",
      photoAlt: "A quiet moment",
    },
    {
      text:     "How you make people feel like they matter, without even trying.",
    },
    {
      text:     "The way you are completely, unapologetically yourself.",
      note:     "I think about that more than you know.",
      photo:    "/images/photo-05.webp",
      photoAlt: "Being herself",
    },
  ],

  // ──────────────── SCENE 04 — THE MOMENTS ─────────────────
  momentsSection: {
    heading:    "The Moments",
    subheading: "The ones you may have already forgotten. I haven't.",
  },

  // Replace these with actual shared memories.
  memories: [
    {
      label:  "That conversation.",
      text:   "You said something that made me think for three days straight.",
      detail: "I still haven't figured out whether you meant it as casually as it sounded.",
    },
    {
      label:  "That random afternoon.",
      text:   "Nothing happened. That was kind of the whole point.",
    },
    {
      label:  "That stupid joke.",
      text:   "You laughed so hard you had to stop. I replayed that about forty times.",
    },
    {
      label:  "That moment you didn't know I'd remember.",
      text:   "You were just being you. That was enough.",
    },
    {
      label:  "That time everything was a little too real.",
      text:   "And you handled it so quietly. So well.",
    },
  ],

  // ──────────────── SCENE 05 — WHAT I NEVER SAID ────────────
  neverSaid: {
    line1: "There are things I could say.",
    line2: "But some things sound better when they're discovered.",
    lines: [
      "I notice you in rooms full of people.",
      "I notice you even when you're trying not to be noticed.",
      "I notice the things you say when you think they don't matter.",
      "They always matter.",
    ],
  },

  // ──────────────── SCENE 06 — THE ALMOST-CONFESSION ────────
  almostConfession: {
    opening: "I don't know exactly when it happened.",
    middle:  "Somewhere between the conversations, the little moments, the stupid jokes —",
    detail:  "and that smile —",
    pivot:   "you became someone I look for.",
    closing: "Maybe you've known for a while.",
  },

  // ──────────────── SCENE 07 — THE ENDING ──────────────────
  finale: {
    line1:       "So this isn't really a story about everything I love about you.",
    line2:       "It's about everything that made me notice you.",
    line3:       "And I'm still noticing.",
    dedication:  "For Pratiksha.",
    signature:   "— Manas",
    photo: {
      src:       "/images/photo-06.webp",
      alt:       "Pratiksha",
      caption:   undefined,
      treatment: "cinematic",
    },
  },

  // ──────────────── MEDIA ───────────────────────────────────
  // Photos used inside the Observations + Moments sections.
  // These can be the same or different from photos used in scenes above.
  photos: [
    {
      src:       "/images/photo-01.webp",
      alt:       "Pratiksha",
      caption:   undefined,
      treatment: "hero",
    },
    {
      src:       "/images/photo-02.webp",
      alt:       "Pratiksha",
      caption:   "A moment held quietly.",
      treatment: "float",
    },
    {
      src:       "/images/photo-03.webp",
      alt:       "Pratiksha",
      caption:   "The ones in between.",
      treatment: "editorial",
    },
    {
      src:       "/images/photo-04.webp",
      alt:       "Pratiksha",
      caption:   undefined,
      treatment: "print",
    },
    {
      src:       "/images/photo-05.webp",
      alt:       "Pratiksha",
      caption:   "Unapologetically her.",
      treatment: "asymmetric",
    },
    {
      src:       "/images/photo-06.webp",
      alt:       "Pratiksha",
      caption:   undefined,
      treatment: "cinematic",
    },
  ],

  // Videos — all must be muted and silent.
  // Replace captions with your own words.
  videos: [
    {
      src:       "/videos/memory-01.mp4",
      caption:   "A moment I kept.",
      ariaLabel: "Video memory — a moment I kept",
    },
    {
      src:       "/videos/memory-02.mp4",
      caption:   "Something about this stayed with me.",
      ariaLabel: "Video memory — something about this stayed with me",
    },
    {
      src:       "/videos/memory-03.mp4",
      caption:   "Just one of those little things.",
      ariaLabel: "Video memory — just one of those little things",
    },
    {
      src:       "/videos/memory-04.mp4",
      caption:   "I didn't plan to remember this.",
      ariaLabel: "Video memory — I didn't plan to remember this",
    },
  ],
};
