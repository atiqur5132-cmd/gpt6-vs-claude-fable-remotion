import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Act1RSIThreshold } from './scenes/google_rsi/Act1RSIThreshold';
import { Act2EvaluationWall } from './scenes/google_rsi/Act2EvaluationWall';
import { Act3DreamSimulator } from './scenes/google_rsi/Act3DreamSimulator';
import { Act4BenchmarkCarnage } from './scenes/google_rsi/Act4BenchmarkCarnage';
import { Act5DemisHassabisAGI } from './scenes/google_rsi/Act5DemisHassabisAGI';
import { Act6EvolutionaryFlywheel } from './scenes/google_rsi/Act6EvolutionaryFlywheel';
import { Atmosphere } from './Atmosphere';

export const GoogleRSIDocumentary: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      {/* 5.08-Minute Studio Mastered Voiceover Audio (Loudnorm -16 LUFS) */}
      <Audio src={staticFile('google_rsi_voiceover.wav')} />

      {/* Cinematic Grid Ambient Background Layer */}
      <Atmosphere />

      {/* Series Sequence: Exactly 9,140 frames @ 30fps (5.08 Minutes / > 5 Mins) */}
      <Series>
        {/* Act 1: The Singularity Threshold & Evidence (0 to 1996 | 66.5s) */}
        <Series.Sequence durationInFrames={1996}>
          <Act1RSIThreshold />
        </Series.Sequence>

        {/* Act 2: The Impossible Evaluation Wall (1996 to 3533 | 51.2s) */}
        <Series.Sequence durationInFrames={1537}>
          <Act2EvaluationWall />
        </Series.Sequence>

        {/* Act 3: The Replay Dream World Simulator (3533 to 5378 | 61.5s) */}
        <Series.Sequence durationInFrames={1845}>
          <Act3DreamSimulator />
        </Series.Sequence>

        {/* Act 4: The 162x Benchmark & Frozen Weights (5378 to 7126 | 58.3s) */}
        <Series.Sequence durationInFrames={1748}>
          <Act4BenchmarkCarnage />
        </Series.Sequence>

        {/* Act 5: Demis Hassabis Strategic Pivot & Millennium Problems (7126 to 7996 | 29.0s) */}
        <Series.Sequence durationInFrames={870}>
          <Act5DemisHassabisAGI />
        </Series.Sequence>

        {/* Act 6: The Evolutionary Flywheel & The AGI Arrival (7996 to 9140 | 38.1s) */}
        <Series.Sequence durationInFrames={1144}>
          <Act6EvolutionaryFlywheel />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
