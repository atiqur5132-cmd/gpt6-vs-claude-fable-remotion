import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Act1ArenaAmbush } from './scenes/gemini4_news/Act1ArenaAmbush';
import { Act2BenchmarkCarnage } from './scenes/gemini4_news/Act2BenchmarkCarnage';
import { Act3ThreeJsAndVoice } from './scenes/gemini4_news/Act3ThreeJsAndVoice';
import { Act4UnionAlphaMystery } from './scenes/gemini4_news/Act4UnionAlphaMystery';
import { Act5OpenAIAgentsAndAltman } from './scenes/gemini4_news/Act5OpenAIAgentsAndAltman';
import { Act6OctoberReckoning } from './scenes/gemini4_news/Act6OctoberReckoning';
import { Atmosphere } from './Atmosphere';

export const Gemini4NewsDocumentary: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      {/* 6.28-Minute Mastered Studio Voiceover Audio (-16 LUFS Loudnorm) */}
      <Audio src={staticFile('gemini4_news_voiceover.wav')} />

      {/* Subtle Cinematic Grid Ambient Layer */}
      <Atmosphere />

      {/* Series Sequence: Exactly 11,304 frames @ 30fps (6.28 Minutes / >6 Minutes) */}
      <Series>
        {/* Act 1: The Arena Ambush & The Checkpoint Unmasking (0 to 1481 | 49.36s) */}
        <Series.Sequence durationInFrames={1481}>
          <Act1ArenaAmbush />
        </Series.Sequence>

        {/* Act 2: The Benchmark Carnage: Pelican SVG & 1-Shot Undertale (1481 to 4223 | 91.40s) */}
        <Series.Sequence durationInFrames={2742}>
          <Act2BenchmarkCarnage />
        </Series.Sequence>

        {/* Act 3: 3D Three.js & Google's Voice Flank (4223 to 5500 | 42.57s) */}
        <Series.Sequence durationInFrames={1277}>
          <Act3ThreeJsAndVoice />
        </Series.Sequence>

        {/* Act 4: The Mystery of Union Alpha: 18x Cheaper Intelligence (5500 to 6989 | 49.63s) */}
        <Series.Sequence durationInFrames={1489}>
          <Act4UnionAlphaMystery />
        </Series.Sequence>

        {/* Act 5: OpenAI Sponsored Agents & The Death of Prompting (6989 to 8891 | 63.40s) */}
        <Series.Sequence durationInFrames={1902}>
          <Act5OpenAIAgentsAndAltman />
        </Series.Sequence>

        {/* Act 6: The October Reckoning: Meta Watermelon & Asymmetrical Verdict (8891 to 11304 | 80.43s) */}
        <Series.Sequence durationInFrames={2413}>
          <Act6OctoberReckoning />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
