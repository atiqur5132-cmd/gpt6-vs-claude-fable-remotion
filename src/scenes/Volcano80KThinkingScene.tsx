import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { VideoEvidenceDossier } from '../VideoEvidenceDossier';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { SiliconDieSchematic } from '../components/SiliconDieSchematic';

export const Volcano80KThinkingScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 350], [1.0, 1.05], { extrapolateRight: 'clamp' });
  const subPhase = Math.floor(frame / 65);

  // =========================================================================
  // BEAT 0: Real Volcano Battle Video Playback (Dynamic Blurred Mirror)
  // =========================================================================
  if (beatIndex === 0) {
    const volcanoWords =
      subPhase === 0
        ? ['VOLCANO', 'SIMULATION', 'DUEL']
        : subPhase === 1
        ? ['VOLCANIC', 'STRATA', 'PHYSICS']
        : ['THERMAL', 'PARTICLE', 'DISPERSION'];

    return (
      <AbsoluteFill>
        <VideoEvidenceDossier
          videoPath="evidence/opus55_volcano_real.mp4"
          author="Wësche"
          handle="@WescheNex1q"
          sourceUrl="x.com/WescheNex1q/status/2102544472085012507"
          title="CLAUDE OPUS 5.5 VS GPT-6 SOL • REAL VOLCANO ERUPTION BATTLE"
          tagText="1280x1440 REAL EMBEDDED TWEET VIDEO"
          mode="mirror"
        />

        {/* Real Official Badges on Top Corners */}
        <div style={{ position: 'absolute', top: 35, left: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="claude" size={65} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.7)" />
        </div>
        <div style={{ position: 'absolute', top: 35, right: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="openai" size={65} label="GPT-6 SOL" glowColor="rgba(16, 185, 129, 0.7)" />
        </div>

        {/* Bottom Kinetic Punch Words */}
        <div style={{ position: 'absolute', bottom: 40, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 60 }}>
          <KineticPunchText words={volcanoWords} accentWordIndex={1} accentColor="#F59E0B" fontSize={64} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 1: Dynamic Telemetry Gauges (Replaces static dashboard cards!)
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
        <NeuralFlowCanvas color="#EF4444" secondaryColor="#F59E0B" intensity={1.2} />

        {/* Phase 0 (0-2.1s): 80,000 Thinking Tokens Dial */}
        {subPhase === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
              <OfficialLogoBadge logo="claude" size={110} label="OPUS DELIBERATION" glowColor="rgba(245, 158, 11, 0.85)" />
              <SpeedometerGauge value={80000} maxValue={100000} label="THINKING TOKENS" unit="TOKENS" color="#F59E0B" size={280} />
            </div>
            <KineticPunchText words={['EIGHTY', 'THOUSAND', 'TOKENS']} accentWordIndex={1} accentColor="#F59E0B" fontSize={80} />
          </div>
        )}

        {/* Phase 1 (2.1-4.3s): 18.8 Minutes Latency Dial */}
        {subPhase === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, zIndex: 10 }}>
            <SpeedometerGauge value={18.8} maxValue={25} label="EXECUTION LATENCY" unit="MINUTES" color="#EF4444" size={290} />
            <KineticPunchText words={['EIGHTEEN', 'MINUTE', 'RUNTIME']} accentWordIndex={0} accentColor="#EF4444" fontSize={84} />
          </div>
        )}

        {/* Phase 2 (4.3-6.5s): GPT-6 Sol 1.7 Minutes Speed Dial */}
        {subPhase === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
              <OfficialLogoBadge logo="openai" size={110} label="GPT-6 SOL" glowColor="rgba(16, 185, 129, 0.85)" />
              <SpeedometerGauge value={1.7} maxValue={20} label="SOL RUNTIME" unit="MINUTES" color="#10B981" size={280} />
            </div>
            <KineticPunchText words={['ONE', 'MINUTE', 'SPEED']} accentWordIndex={2} accentColor="#10B981" fontSize={88} />
          </div>
        )}

        {/* Phase 3+: Sol Volcano Eruption on Schedule */}
        {subPhase >= 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="openai" size={130} label="ZERO SYNTAX ERRORS" sublabel="FIRST TRY ERUPTION" glowColor="rgba(16, 185, 129, 0.9)" />
            <KineticPunchText words={['ERUPTED', 'ON', 'SCHEDULE']} accentWordIndex={0} accentColor="#10B981" fontSize={88} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 2: The Philosophical Divide of 2026
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
      <NeuralFlowCanvas color="#00F0FF" secondaryColor="#A855F7" intensity={1.2} />

      {/* Phase 0: Digital Cathedral (Opus 5.5) */}
      {subPhase === 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
          <SiliconDieSchematic color="#F59E0B" label="UNLIMITED THINKING BUDGET" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <OfficialLogoBadge logo="claude" size={110} label="PERFECTION FIRST" glowColor="rgba(245, 158, 11, 0.85)" />
            <KineticPunchText words={['FLAWLESS', 'DIGITAL', 'CATHEDRAL']} accentWordIndex={0} accentColor="#F59E0B" fontSize={72} />
          </div>
        </div>
      )}

      {/* Phase 1: Latent Reasoning Workhorse (Sol) */}
      {subPhase === 1 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
          <SiliconDieSchematic color="#10B981" label="LATENT REASONING ENGINE" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <OfficialLogoBadge logo="openai" size={110} label="FAST WORKHORSE" glowColor="rgba(16, 185, 129, 0.85)" />
            <KineticPunchText words={['NINETY', 'PERCENT', 'SPEED']} accentWordIndex={2} accentColor="#10B981" fontSize={76} />
          </div>
        </div>
      )}

      {/* Phase 2+: The Ultimate Philosophical Confrontation */}
      {subPhase >= 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 35, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 80, alignItems: 'center' }}>
            <OfficialLogoBadge logo="claude" size={115} label="PERFECTION" glowColor="rgba(245, 158, 11, 0.85)" />
            <span style={{ fontSize: 40, fontWeight: 900, color: '#00F0FF' }}>VS</span>
            <OfficialLogoBadge logo="openai" size={115} label="VELOCITY" glowColor="rgba(16, 185, 129, 0.85)" />
          </div>
          <KineticPunchText words={['PERFECTION', 'VERSUS', 'SPEED']} accentWordIndex={1} accentColor="#00F0FF" fontSize={88} />
        </div>
      )}
    </AbsoluteFill>
  );
};
