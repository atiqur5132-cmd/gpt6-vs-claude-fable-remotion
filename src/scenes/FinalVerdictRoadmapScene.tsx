import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { CleanTweetScreen } from '../CleanTweetScreen';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { SiliconDieSchematic } from '../components/SiliconDieSchematic';

export const FinalVerdictRoadmapScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 350], [1.0, 1.05], { extrapolateRight: 'clamp' });
  const subPhase = Math.floor(frame / 65);

  // =========================================================================
  // BEAT 0: Night Train & Bridgebench Evaluation
  // =========================================================================
  if (beatIndex === 0) {
    if (subPhase === 0) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#00F0FF" secondaryColor="#F59E0B" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
              <OfficialLogoBadge logo="claude" size={110} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.85)" />
              <OfficialLogoBadge logo="openai" size={110} label="GPT-6 SOL" glowColor="rgba(16, 185, 129, 0.85)" />
            </div>
            <KineticPunchText words={['THE', 'DEFINITIVE', 'ROADMAP']} accentWordIndex={1} accentColor="#00F0FF" fontSize={86} />
          </div>
        </AbsoluteFill>
      );
    }

    // Phase 1+: Real Clean Desktop Tweet
    return (
      <CleanTweetScreen
        imagePath="evidence/night_train_benchmark_clean.png"
        author="Tony"
        handle="@EnvolDev"
        sourceUrl="x.com/EnvolDev/status/2102527965565448299"
        badgeText="NIGHT TRAIN EVALUATION"
        maxScrollPx={120}
      />
    );
  }

  // =========================================================================
  // BEAT 1: Precision vs Speed Developer Verdict
  // =========================================================================
  if (beatIndex === 1) {
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
        <NeuralFlowCanvas color="#F59E0B" secondaryColor="#10B981" intensity={1.2} />

        {/* Phase 0: Choose Opus for Sovereign Coding */}
        {subPhase === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
            <SiliconDieSchematic color="#F59E0B" label="SOVEREIGN AGENT ARCHITECTURE" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <OfficialLogoBadge logo="claude" size={115} label="CHOOSE OPUS 5.5" glowColor="rgba(245, 158, 11, 0.9)" />
              <KineticPunchText words={['SOVEREIGN', 'CODING', 'PERFECTION']} accentWordIndex={0} accentColor="#F59E0B" fontSize={72} />
            </div>
          </div>
        )}

        {/* Phase 1: Choose Sol for Speed & Cost */}
        {subPhase === 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
            <SiliconDieSchematic color="#10B981" label="RAPID INTERACTIVE LOOPS" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <OfficialLogoBadge logo="openai" size={115} label="CHOOSE GPT-6 SOL" glowColor="rgba(16, 185, 129, 0.9)" />
              <KineticPunchText words={['BLISTERING', 'INTERACTIVE', 'SPEED']} accentWordIndex={1} accentColor="#10B981" fontSize={72} />
            </div>
          </div>
        )}

        {/* Phase 2+: The High-Stakes Decision */}
        {subPhase >= 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', gap: 70, alignItems: 'center' }}>
              <SpeedometerGauge value={99.8} maxValue={100} label="OPUS PRECISION" unit="%" color="#F59E0B" size={240} />
              <SpeedometerGauge value={1.7} maxValue={20} label="SOL RUNTIME" unit="MIN" color="#10B981" size={240} />
            </div>
            <KineticPunchText words={['PRECISION', 'VERSUS', 'VELOCITY']} accentWordIndex={1} accentColor="#00F0FF" fontSize={88} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 2: Final Cinematic Conclusion & The Titan Trinity
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
      <NeuralFlowCanvas color="#00F0FF" secondaryColor="#EC4899" intensity={1.3} />

      {/* Phase 0: The Titan Trinity (Anthropic, OpenAI, xAI) */}
      {subPhase === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 50, alignItems: 'center' }}>
            <OfficialLogoBadge logo="claude" size={110} label="ANTHROPIC" glowColor="rgba(245, 158, 11, 0.85)" />
            <OfficialLogoBadge logo="openai" size={110} label="OPENAI" glowColor="rgba(16, 185, 129, 0.85)" />
            <OfficialLogoBadge logo="xai" size={110} label="xAI" glowColor="rgba(255, 255, 255, 0.85)" />
          </div>
          <KineticPunchText words={['THE', 'TITAN', 'TRINITY']} accentWordIndex={1} accentColor="#00F0FF" fontSize={88} />
        </div>
      )}

      {/* Phase 1: Computational Arms Race */}
      {subPhase === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, zIndex: 10 }}>
          <SiliconDieSchematic color="#EC4899" label="COMPUTATIONAL ARMS RACE" />
          <KineticPunchText words={['COMPUTATIONAL', 'ARMS', 'RACE']} accentWordIndex={1} accentColor="#EC4899" fontSize={82} />
        </div>
      )}

      {/* Phase 2+: Digital Creation Changed Forever */}
      {subPhase >= 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 50 }}>
            <OfficialLogoBadge logo="claude" size={100} glowColor="rgba(245, 158, 11, 0.85)" />
            <OfficialLogoBadge logo="openai" size={100} glowColor="rgba(16, 185, 129, 0.85)" />
            <OfficialLogoBadge logo="blender" size={100} glowColor="rgba(245, 124, 24, 0.85)" />
          </div>
          <KineticPunchText words={['NEVER', 'THE', 'SAME']} accentWordIndex={0} accentColor="#00F0FF" fontSize={92} />
        </div>
      )}
    </AbsoluteFill>
  );
};
