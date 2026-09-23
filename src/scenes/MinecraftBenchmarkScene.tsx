import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { VideoEvidenceDossier } from '../VideoEvidenceDossier';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { CleanTweetScreen } from '../CleanTweetScreen';

export const MinecraftBenchmarkScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 350], [1.0, 1.05], { extrapolateRight: 'clamp' });
  const subPhase = Math.floor(frame / 65);

  // =========================================================================
  // BEAT 0: The Minecraft Test Intro (0 - 750 frames)
  // =========================================================================
  if (beatIndex === 0) {
    if (subPhase === 0) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#10B981" secondaryColor="#F59E0B" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="claude" size={130} label="VOXEL PHYSICS BENCHMARK" glowColor="rgba(245, 158, 11, 0.85)" />
            <KineticPunchText words={['THE', 'MINECRAFT', 'TEST']} accentWordIndex={1} accentColor="#10B981" fontSize={88} />
          </div>
        </AbsoluteFill>
      );
    }

    if (subPhase === 1) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#00F0FF" secondaryColor="#8B5CF6" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
            <SpeedometerGauge value={100} maxValue={100} label="SINGLE PASS COMPILE" unit="%" color="#00F0FF" size={280} />
            <KineticPunchText words={['ZERO', 'EXTERNAL', 'LIBRARIES']} accentWordIndex={0} accentColor="#EF4444" fontSize={80} />
          </div>
        </AbsoluteFill>
      );
    }

    // Phase 2+: Show the verified clean desktop tweet screen
    return (
      <CleanTweetScreen
        imagePath="evidence/opus55_minecraft_clean.png"
        author="JAZII"
        handle="@notjazii"
        sourceUrl="x.com/notjazii/status/2102480420923420790"
        badgeText="VERIFIED 1080P BENCHMARK TWEET"
        maxScrollPx={120}
      />
    );
  }

  // =========================================================================
  // BEAT 1: Real 1080p Gameplay Video Playback of Minecraft Clone
  // =========================================================================
  if (beatIndex === 1) {
    const punchWords =
      subPhase === 0
        ? ['REAL', 'MINECRAFT', 'PLAYBACK']
        : subPhase === 1
        ? ['PROCEDURAL', 'CHUNK', 'GENERATION']
        : ['COMPUTATIONAL', 'WATER', 'PHYSICS'];

    return (
      <AbsoluteFill>
        <VideoEvidenceDossier
          videoPath="evidence/opus55_minecraft_real.mp4"
          author="Jazii"
          handle="@notjazii"
          sourceUrl="x.com/notjazii/status/2102480420923420790"
          title="CLAUDE OPUS 5.5 • PROCEDURAL VOXEL & WATER PHYSICS (REAL PLAYBACK)"
          tagText="1080P REAL UNEDITED ARTIFACT PLAYBACK"
          mode="dossier16x9"
        />

        {/* Real Official Claude PNG Badge at Top Right */}
        <div style={{ position: 'absolute', top: 35, right: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="claude" size={70} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.7)" />
        </div>

        {/* Bottom Kinetic Punch Words (Strictly <= 3 words, changes every 2s) */}
        <div style={{ position: 'absolute', bottom: 40, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 60 }}>
          <KineticPunchText words={punchWords} accentWordIndex={1} accentColor="#00F0FF" fontSize={64} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 2: Real 3D Pirate Ships Battle Video Playback (Vib3Coded Video)
  // =========================================================================
  if (beatIndex === 2) {
    const pirateWords =
      subPhase === 0
        ? ['PIRATE', 'SHIP', 'BENCHMARK']
        : subPhase === 1
        ? ['HYDRODYNAMIC', 'WAVE', 'FOAM']
        : ['BOUTIQUE', 'STUDIO', 'GRADE'];

    return (
      <AbsoluteFill>
        <VideoEvidenceDossier
          videoPath="evidence/opus55_pirate_ship_real.mp4"
          author="Vib3Coded"
          handle="@vib3coded"
          sourceUrl="x.com/vib3coded/status/2102533729746882985"
          title="GPT-6 ASTRA VS OPUS 5.5: 3D PIRATE SHIPS IN SINGLE HTML FILE"
          tagText="REAL EMBEDDED TWEET VIDEO DEMO"
          mode="dossier16x9"
        />

        {/* Official Badges in Top Corners */}
        <div style={{ position: 'absolute', top: 35, left: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="openai" size={65} label="ASTRA" glowColor="rgba(16, 185, 129, 0.7)" />
        </div>
        <div style={{ position: 'absolute', top: 35, right: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="claude" size={65} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.7)" />
        </div>

        {/* Bottom Punch Typography */}
        <div style={{ position: 'absolute', bottom: 40, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 60 }}>
          <KineticPunchText words={pirateWords} accentWordIndex={0} accentColor="#F59E0B" fontSize={64} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 3: Rapid Visual Comparison (No bullet lists! High-speed motion graphics)
  // =========================================================================
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030712',
        transform: `scale(${zoom})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <NeuralFlowCanvas color="#00F0FF" secondaryColor="#F59E0B" intensity={1.2} />

      {/* Phase 0 (0-2.1s): Astra Deck Rigging vs Opus Fluid */}
      {subPhase === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 35, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 80, alignItems: 'center' }}>
            <OfficialLogoBadge logo="openai" size={110} label="ASTRA RIGGING" glowColor="rgba(16, 185, 129, 0.8)" />
            <OfficialLogoBadge logo="claude" size={110} label="OPUS HYDRODYNAMICS" glowColor="rgba(245, 158, 11, 0.8)" />
          </div>
          <KineticPunchText words={['OPUS', 'MOGS', 'ASTRA']} accentWordIndex={1} accentColor="#F59E0B" fontSize={92} />
        </div>
      )}

      {/* Phase 1 (2.1-4.3s): Volumetric Wave Crests */}
      {subPhase === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
          <SpeedometerGauge value={99.6} maxValue={100} label="WATER PHYSICS FIDELITY" unit="%" color="#00F0FF" size={280} />
          <KineticPunchText words={['VOLUMETRIC', 'WAVE', 'CRESTS']} accentWordIndex={1} accentColor="#00F0FF" fontSize={80} />
        </div>
      )}

      {/* Phase 2+: Boutique Studio Realism */}
      {subPhase >= 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <OfficialLogoBadge logo="claude" size={135} label="SINGLE HTML PASS" sublabel="UNMATCHED FLUID LIGHTING" glowColor="rgba(245, 158, 11, 0.9)" />
          <KineticPunchText words={['BOUTIQUE', 'STUDIO', 'GRADE']} accentWordIndex={0} accentColor="#F59E0B" fontSize={88} />
        </div>
      )}
    </AbsoluteFill>
  );
};
