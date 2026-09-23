import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { CleanTweetScreen } from '../CleanTweetScreen';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { SiliconDieSchematic } from '../components/SiliconDieSchematic';

export const PricingWarGrokScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 350], [1.0, 1.05], { extrapolateRight: 'clamp' });
  const subPhase = Math.floor(frame / 65);

  // =========================================================================
  // BEAT 0: The 30% Price Cut & Economic Warfare
  // =========================================================================
  if (beatIndex === 0) {
    if (subPhase === 0) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#10B981" secondaryColor="#F59E0B" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="anthropic" size={135} label="ANTHROPIC PRICE CUT" glowColor="rgba(16, 185, 129, 0.85)" />
            <KineticPunchText words={['ECONOMIC', 'WARFARE', 'IGNITED']} accentWordIndex={1} accentColor="#10B981" fontSize={86} />
          </div>
        </AbsoluteFill>
      );
    }

    if (subPhase === 1) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#10B981" secondaryColor="#06B6D4" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
            <SpeedometerGauge value={30} maxValue={50} label="PRICE REDUCTION" unit="%" color="#10B981" size={280} />
            <KineticPunchText words={['THIRTY', 'PERCENT', 'SLASH']} accentWordIndex={0} accentColor="#10B981" fontSize={82} />
          </div>
        </AbsoluteFill>
      );
    }

    // Phase 2+: OpenAI Tiered Defense
    return (
      <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
        <NeuralFlowCanvas color="#38BDF8" secondaryColor="#10B981" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
            <OfficialLogoBadge logo="openai" size={110} label="ASTRA & SOL" glowColor="rgba(16, 185, 129, 0.8)" />
            <OfficialLogoBadge logo="claude" size={110} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.8)" />
          </div>
          <KineticPunchText words={['TIERED', 'STACK', 'DEFENSE']} accentWordIndex={0} accentColor="#38BDF8" fontSize={84} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 1: Elon Musk & xAI Grok 4.7 Financial Grenade
  // =========================================================================
  if (beatIndex === 1) {
    if (subPhase === 0) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#FFFFFF" secondaryColor="#EF4444" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="xai" size={140} label="xAI GROK 4.7" sublabel="THE FINANCIAL GRENADE" glowColor="rgba(255, 255, 255, 0.85)" />
            <KineticPunchText words={['FINANCIAL', 'GRENADE', 'DETONATED']} accentWordIndex={1} accentColor="#EF4444" fontSize={82} />
          </div>
        </AbsoluteFill>
      );
    }

    // Phase 1+: Real Clean Desktop Tweet
    return (
      <CleanTweetScreen
        imagePath="evidence/elon_grok47_clean.png"
        author="Elon Musk"
        handle="@elonmusk"
        sourceUrl="x.com/elonmusk/status/2102082011233931762"
        badgeText="xAI GROK 4.7 BENCHMARK RELEASE"
        maxScrollPx={120}
      />
    );
  }

  // =========================================================================
  // BEAT 2: Grok 4.7 71% DeepSWE & Ten Times Cheaper
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
      <NeuralFlowCanvas color="#FFFFFF" secondaryColor="#10B981" intensity={1.2} />

      {/* Phase 0: 71% DeepSWE Benchmark */}
      {subPhase === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
            <OfficialLogoBadge logo="xai" size={110} label="GROK 4.7" glowColor="rgba(255, 255, 255, 0.85)" />
            <SpeedometerGauge value={71} maxValue={100} label="DEEPSWE BENCHMARK" unit="%" color="#10B981" size={280} />
          </div>
          <KineticPunchText words={['SEVENTY-ONE', 'PERCENT', 'DEEPSWE']} accentWordIndex={0} accentColor="#10B981" fontSize={80} />
        </div>
      )}

      {/* Phase 1: Ten Times Cheaper */}
      {subPhase === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
          <SpeedometerGauge value={10} maxValue={12} label="COST REDUCTION" unit="X CHEAPER" color="#00F0FF" size={280} />
          <KineticPunchText words={['TEN', 'TIMES', 'CHEAPER']} accentWordIndex={1} accentColor="#00F0FF" fontSize={88} />
        </div>
      )}

      {/* Phase 2+: The Commoditization Wave */}
      {subPhase >= 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
            <OfficialLogoBadge logo="xai" size={100} label="GROK 4.7" glowColor="rgba(255, 255, 255, 0.8)" />
            <OfficialLogoBadge logo="claude" size={100} label="OPUS 5.5" glowColor="rgba(245, 158, 11, 0.8)" />
            <OfficialLogoBadge logo="openai" size={100} label="SOL" glowColor="rgba(16, 185, 129, 0.8)" />
          </div>
          <KineticPunchText words={['INTELLIGENCE', 'PRICE', 'PLUNGING']} accentWordIndex={2} accentColor="#EF4444" fontSize={82} />
        </div>
      )}
    </AbsoluteFill>
  );
};
