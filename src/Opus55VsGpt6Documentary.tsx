import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Atmosphere } from './Atmosphere';
import { OpusVsGpt6ClashScene } from './scenes/OpusVsGpt6ClashScene';
import { MinecraftBenchmarkScene } from './scenes/MinecraftBenchmarkScene';
import { Volcano80KThinkingScene } from './scenes/Volcano80KThinkingScene';
import { Higgsfield3DBlenderScene } from './scenes/Higgsfield3DBlenderScene';
import { PricingWarGrokScene } from './scenes/PricingWarGrokScene';
import { FinalVerdictRoadmapScene } from './scenes/FinalVerdictRoadmapScene';

export const Opus55VsGpt6Documentary: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
      {/* 7.42-Minute Full Mastered Audio (Broadcast EQ, Vocal Punch, Loudnorm -16 LUFS) */}
      <Audio src={staticFile('opus55_voiceover.wav')} />

      {/* Volumetric Cinematic Grid & Ambient Glow Atmosphere */}
      <Atmosphere primaryGlow="rgba(16, 185, 129, 0.16)" secondaryGlow="rgba(245, 158, 11, 0.15)" />

      {/* Frame-Accurate Series Sequence: Exactly 13,361 Frames @ 30 FPS */}
      <Series>
        {/* ============================================================== */}
        {/* ACT 1: THE ZERO-NOTICE CLASH & COLD-OPEN HOOK (0 - 1700 frames) */}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={425}>
          <OpusVsGpt6ClashScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={425}>
          <OpusVsGpt6ClashScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={425}>
          <OpusVsGpt6ClashScene beatIndex={2} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={425}>
          <OpusVsGpt6ClashScene beatIndex={3} />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 2: THE MINECRAFT TEST & GAME DEV (1700 - 3920 frames)       */}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={550}>
          <MinecraftBenchmarkScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={560}>
          <MinecraftBenchmarkScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={560}>
          <MinecraftBenchmarkScene beatIndex={2} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={550}>
          <MinecraftBenchmarkScene beatIndex={3} />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 3: THE VOLCANO BENCHMARK & 80K THINKING (3920 - 6440 frames)*/}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={840}>
          <Volcano80KThinkingScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={840}>
          <Volcano80KThinkingScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={840}>
          <Volcano80KThinkingScene beatIndex={2} />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 4: 3D ENGINE WARFARE: BLENDER & UNREAL (6440 - 8610 frames) */}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={720}>
          <Higgsfield3DBlenderScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={730}>
          <Higgsfield3DBlenderScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={720}>
          <Higgsfield3DBlenderScene beatIndex={2} />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 5: ECONOMIC WARFARE & GROK 4.7 ATTACK (8610 - 11024 frames) */}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={800}>
          <PricingWarGrokScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={814}>
          <PricingWarGrokScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={800}>
          <PricingWarGrokScene beatIndex={2} />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 6: THE DEVELOPER VERDICT & ROADMAP (11024 - 13361 frames)   */}
        {/* ============================================================== */}
        <Series.Sequence durationInFrames={770}>
          <FinalVerdictRoadmapScene beatIndex={0} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={780}>
          <FinalVerdictRoadmapScene beatIndex={1} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={787}>
          <FinalVerdictRoadmapScene beatIndex={2} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
