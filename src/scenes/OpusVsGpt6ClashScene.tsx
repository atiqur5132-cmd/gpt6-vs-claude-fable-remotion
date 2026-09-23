import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { SiliconDieSchematic } from '../components/SiliconDieSchematic';

export const OpusVsGpt6ClashScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous push-in
  const zoom = interpolate(frame, [0, 350], [1.0, 1.06], { extrapolateRight: 'clamp' });

  // Rapid visual phase shift every ~65 frames (2.1s)
  const subPhase = Math.floor(frame / 65);
  const phaseFrame = frame % 65;

  // =========================================================================
  // BEAT 0: The Reign of OpenAI Astra & Sol (0 - 340 frames)
  // =========================================================================
  if (beatIndex === 0) {
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
        <NeuralFlowCanvas color="#10B981" secondaryColor="#06B6D4" intensity={1} />

        {/* Phase 0 (0-2.1s): OpenAI Logo Center Punch */}
        {subPhase === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="openai" size={140} label="OPENAI GPT-6 ASTRA" sublabel="THE REIGNING CHAMPION" glowColor="rgba(16, 185, 129, 0.8)" />
            <KineticPunchText words={['ASTRA', 'REIGNED', 'SUPREME']} accentWordIndex={1} accentColor="#10B981" fontSize={88} />
          </div>
        )}

        {/* Phase 1 (2.1-4.3s): Telemetry Speed Gauge */}
        {subPhase === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
            <SpeedometerGauge value={99.4} maxValue={100} label="LEADERBOARD SCORE" unit="%" color="#10B981" size={290} />
            <KineticPunchText words={['FRONTIER', 'MONOPOLY', 'LOCKED']} accentWordIndex={1} accentColor="#38BDF8" fontSize={80} />
          </div>
        )}

        {/* Phase 2 (4.3-6.5s): Silicon Die Architecture */}
        {subPhase === 2 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
            <SiliconDieSchematic color="#10B981" label="OPENAI MULTIMODAL STACK" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <OfficialLogoBadge logo="openai" size={100} label="BLISTERING SPEED" glowColor="rgba(16, 185, 129, 0.7)" />
              <KineticPunchText words={['UNCHALLENGED', 'AT', 'PEAK']} accentWordIndex={0} accentColor="#10B981" fontSize={72} />
            </div>
          </div>
        )}

        {/* Phase 3 & 4 (6.5s+): Race Settled Expectation */}
        {subPhase >= 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="openai" size={130} label="SILICON VALLEY BELIEF" sublabel="COMPETITION FROZEN" glowColor="rgba(6, 182, 212, 0.8)" />
            <KineticPunchText words={['RACE', 'WAS', 'SETTLED']} accentWordIndex={2} accentColor="#F59E0B" fontSize={88} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 1: The Anthropic Ambush Drop (340 - 680 frames)
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
        <NeuralFlowCanvas color="#F59E0B" secondaryColor="#EF4444" intensity={1.2} />

        {/* Phase 0: Glitch Impact & Claude Logo */}
        {subPhase === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="claude" size={150} label="CLAUDE OPUS 5.5" sublabel="ANTHROPIC AMBUSH WEAPON" glowColor="rgba(245, 158, 11, 0.9)" />
            <KineticPunchText words={['ZERO', 'NOTICE', 'DEPLOYMENT']} accentWordIndex={0} accentColor="#F59E0B" fontSize={84} />
          </div>
        )}

        {/* Phase 1: Shockwave Reaction */}
        {subPhase === 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 50, zIndex: 10 }}>
            <OfficialLogoBadge logo="anthropic" size={110} label="ANTHROPIC DIRECT DROP" glowColor="rgba(235, 140, 90, 0.8)" />
            <KineticPunchText words={['NO', 'KEYNOTE', 'WARNING']} accentWordIndex={1} accentColor="#EF4444" fontSize={80} />
          </div>
        )}

        {/* Phase 2: Target Locked on Astra */}
        {subPhase === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
            <SiliconDieSchematic color="#F59E0B" label="OPUS 5.5 REASONING CORE" />
            <KineticPunchText words={['SHATTERING', 'ASTRA', 'MONOPOLY']} accentWordIndex={1} accentColor="#00F0FF" fontSize={76} />
          </div>
        )}

        {/* Phase 3+: Ambush Weapon Ready */}
        {subPhase >= 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="claude" size={140} label="CODENAME OPUS 5.5" sublabel="WEAPONIZED FOR SWE & 3D" glowColor="rgba(245, 158, 11, 0.85)" />
            <KineticPunchText words={['AMBUSH', 'WEAPON', 'ACTIVE']} accentWordIndex={0} accentColor="#F59E0B" fontSize={86} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 2: The Direct Titan Clash Faceoff (680 - 1020 frames)
  // =========================================================================
  if (beatIndex === 2) {
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
        <NeuralFlowCanvas color="#00F0FF" secondaryColor="#F59E0B" intensity={1.3} />

        {/* Phase 0 & 1: Dual Titan Faceoff */}
        {subPhase < 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>
              <OfficialLogoBadge logo="claude" size={120} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.9)" />
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: 999,
                  padding: '16px 28px',
                  boxShadow: '0 0 50px rgba(0,240,255,0.4)',
                }}
              >
                <span style={{ fontSize: 36, fontWeight: 900, color: '#00F0FF', letterSpacing: 3 }}>VS</span>
              </div>
              <OfficialLogoBadge logo="openai" size={120} label="GPT-6 ASTRA" glowColor="rgba(16, 185, 129, 0.9)" />
            </div>
            <KineticPunchText words={['TITAN', 'WAR', 'ESCALATION']} accentWordIndex={1} accentColor="#00F0FF" fontSize={84} />
          </div>
        )}

        {/* Phase 2: Shocking Benchmark Paradox */}
        {subPhase === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
            <SiliconDieSchematic color="#00F0FF" label="HEAD-TO-HEAD LATENCY COMPUTE" />
            <KineticPunchText words={['SHOCKING', 'BENCHMARK', 'PARADOX']} accentWordIndex={2} accentColor="#F59E0B" fontSize={80} />
          </div>
        )}

        {/* Phase 3+: Real-world Physics Arena */}
        {subPhase >= 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', gap: 40 }}>
              <SpeedometerGauge value={98.2} maxValue={100} label="OPUS PRECISION" unit="%" color="#F59E0B" size={240} />
              <SpeedometerGauge value={97.9} maxValue={100} label="ASTRA SPEED" unit="%" color="#10B981" size={240} />
            </div>
            <KineticPunchText words={['BATTLE', 'FOR', 'SUPREMACY']} accentWordIndex={0} accentColor="#00F0FF" fontSize={84} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 3: Obliteration & The 80K Token Paradox (1020 - 1360 frames)
  // =========================================================================
  if (beatIndex === 3) {
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
        <NeuralFlowCanvas color="#EC4899" secondaryColor="#F59E0B" intensity={1.1} />

        {/* Phase 0: Opus 5.5 Visual Obliteration */}
        {subPhase === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="claude" size={135} label="CLAUDE OPUS 5.5" sublabel="SPATIAL COHERENCE KING" glowColor="rgba(245, 158, 11, 0.9)" />
            <KineticPunchText words={['PRECISION', 'OBLITERATED', 'ASTRA']} accentWordIndex={1} accentColor="#F59E0B" fontSize={82} />
          </div>
        )}

        {/* Phase 1: The 80,000 Thinking Tokens Catch */}
        {subPhase === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
            <SpeedometerGauge value={80000} maxValue={100000} label="INTERNAL THINKING" unit="TOKENS" color="#F59E0B" size={300} />
            <KineticPunchText words={['EIGHTY', 'THOUSAND', 'TOKENS']} accentWordIndex={1} accentColor="#F59E0B" fontSize={80} />
          </div>
        )}

        {/* Phase 2: The 18-Minute Wait Time */}
        {subPhase === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
            <SpeedometerGauge value={18.8} maxValue={25} label="OPUS 5.5 LATENCY" unit="MINUTES" color="#EF4444" size={300} />
            <KineticPunchText words={['EIGHTEEN', 'MINUTE', 'WAIT']} accentWordIndex={0} accentColor="#EF4444" fontSize={86} />
          </div>
        )}

        {/* Phase 3+: The Cost Nobody Anticipated */}
        {subPhase >= 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
              <SpeedometerGauge value={18.8} maxValue={25} label="OPUS WAIT" unit="MIN" color="#EF4444" size={230} />
              <SpeedometerGauge value={1.7} maxValue={25} label="SOL SPEED" unit="MIN" color="#10B981" size={230} />
            </div>
            <KineticPunchText words={['THE', 'SHOCKING', 'CATCH']} accentWordIndex={1} accentColor="#00F0FF" fontSize={88} />
          </div>
        )}
      </AbsoluteFill>
    );
  }

  // Default fallback
  return null;
};
