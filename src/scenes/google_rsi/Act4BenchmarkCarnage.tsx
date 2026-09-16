import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import { Metric162xGauge } from '../../components/Metric162xGauge';
import { FrozenWeightsVault } from '../../components/FrozenWeightsVault';
import {
  TrendingUp,
  Cpu,
  Layers,
  Zap,
  Lock,
  Flame,
  CheckCircle2,
  Sparkles,
  Binary,
} from 'lucide-react';

export const Act4BenchmarkCarnage: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 40: 129f (4.3s) -> DeepMind Official Benchmark Dossier */}
        <Series.Sequence durationInFrames={129}>
          <BeatBenchmarkDossier />
        </Series.Sequence>

        {/* Micro-beat 41: 135f (4.5s) -> Lasso Solver Synthesis Mathematics */}
        <Series.Sequence durationInFrames={135}>
          <BeatLassoMath />
        </Series.Sequence>

        {/* Micro-beat 42: 96f (3.2s) -> SimpleTES vs Dream-RSI Comparison */}
        <Series.Sequence durationInFrames={96}>
          <BeatHeadToHeadBaseline />
        </Series.Sequence>

        {/* Micro-beat 43: 233f (7.8s) -> THE 162X MULTIPLIER RADIAL GAUGE */}
        <Series.Sequence durationInFrames={233}>
          <Metric162xGauge />
        </Series.Sequence>

        {/* Micro-beat 44: 67f (2.2s) -> Agent Calls Collapsed */}
        <Series.Sequence durationInFrames={67}>
          <BeatCallsCollapsed />
        </Series.Sequence>

        {/* Micro-beat 45: 176f (5.9s) -> Tens of Thousands Compressed into Crystal */}
        <Series.Sequence durationInFrames={176}>
          <BeatDataCompression />
        </Series.Sequence>

        {/* Micro-beat 46: 104f (3.5s) -> EVIDENCE TWEET 5: Lugo (@lugodevs) */}
        <Series.Sequence durationInFrames={104}>
          <RealTweetEvidence
            imageFile="lugo_rsi_tweet.png"
            authorName="Lugo"
            handle="lugodevs"
            categoryTag="TECHNICAL INSIGHT"
            highlightText="The models weights remain completely frozen"
          />
        </Series.Sequence>

        {/* Micro-beat 47: 103f (3.4s) -> Cryptographic Vault Door */}
        <Series.Sequence durationInFrames={103}>
          <BeatArchitecturalSecret />
        </Series.Sequence>

        {/* Micro-beat 48: 169f (5.6s) -> FROZEN WEIGHTS VAULT (0% Retraining) */}
        <Series.Sequence durationInFrames={169}>
          <FrozenWeightsVault />
        </Series.Sequence>

        {/* Micro-beat 49: 120f (4.0s) -> Zero Megawatts / No Backprop */}
        <Series.Sequence durationInFrames={120}>
          <BeatNoBackprop />
        </Series.Sequence>

        {/* Micro-beat 50: 193f (6.4s) -> Metacognitive Orchestration Layer Diagram */}
        <Series.Sequence durationInFrames={193}>
          <BeatMetacognitiveArchitecture />
        </Series.Sequence>

        {/* Micro-beat 51: 109f (3.6s) -> Programmable Syntax Grammar */}
        <Series.Sequence durationInFrames={109}>
          <BeatProgrammableSyntax />
        </Series.Sequence>

        {/* Micro-beat 52: 114f (3.8s) -> Evolving Methodology in Real-Time */}
        <Series.Sequence durationInFrames={114}>
          <BeatEvolvingMethodology />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SUB-BEATS
// -------------------------------------------------------------

const BeatBenchmarkDossier: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '8px 24px', marginBottom: 20 }}>
        <span style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          BENCHMARK EVALUATION • STAGGERING RESULTS
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, textAlign: 'center' }}>
        ALGORITHM SYNTHESIS BENCHMARKS
      </div>
      <div style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'monospace', marginTop: 12 }}>
        High-Performance Mathematical Solver Optimization
      </div>
    </div>
  );
};

const BeatLassoMath: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: 18, padding: '32px 56px', textAlign: 'center' }}>
        <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          TARGET PROBLEM: LASSO REGRESSION SYNTHESIS
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, fontFamily: 'monospace', marginTop: 14 }}>
          min &#189; ||y - Xβ||₂² + λ ||β||₁
        </div>
        <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 14 }}>
          Generating Sparse Coordinate Descent Operators Autonomously
        </div>
      </div>
    </div>
  );
};

const BeatHeadToHeadBaseline: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 24, maxWidth: 840, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 14, padding: '24px', textAlign: 'center' }}>
          <div style={{ color: '#EF4444', fontSize: 12, fontFamily: 'monospace' }}>BASELINE</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>SimpleTES</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 6 }}>16,200 Calls</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', borderRadius: 14, padding: '24px', textAlign: 'center', boxShadow: '0 0 25px rgba(34, 197, 94, 0.2)' }}>
          <div style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace' }}>DEEPMIND</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>Dream-RSI</div>
          <div style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace', marginTop: 6 }}>100 Calls (162x Reduction)</div>
        </div>
      </div>
    </div>
  );
};

const BeatCallsCollapsed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800, marginBottom: 8 }}>
        COMPUTE FOOTPRINT COLLAPSE
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 72, fontWeight: 900, fontFamily: 'monospace' }}>
        -99.4%
      </div>
      <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>
        Fewer Expensive Agent Sandbox Iterations
      </div>
    </div>
  );
};

const BeatDataCompression: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 18, padding: '32px 56px', textAlign: 'center' }}>
        <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          COMPLEX SEARCH COMPRESSION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 8 }}>
          Tens of Thousands Compressed by 162x
        </div>
      </div>
    </div>
  );
};

const BeatArchitecturalSecret: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '2px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Lock size={32} color="#38BDF8" />
      </div>
      <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
        THE DEEPEST REVELATION
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, textAlign: 'center', marginTop: 6 }}>
        Zero Weight Retraining
      </div>
    </div>
  );
};

const BeatNoBackprop: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '2px solid #22C55E', borderRadius: 20, padding: '36px 64px', textAlign: 'center' }}>
        <Zap size={40} color="#22C55E" style={{ margin: '0 auto 12px' }} />
        <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          ZERO MEGATRON BACKPROPAGATION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 900, marginTop: 6 }}>
          No Megawatts Burned
        </div>
        <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 8 }}>
          Intelligence emerges from policy orchestration, not raw gradient updates
        </div>
      </div>
    </div>
  );
};

const BeatMetacognitiveArchitecture: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 840, backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 16, padding: '28px 36px' }}>
        <div style={{ color: '#60A5FA', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, marginBottom: 16 }}>
          METACOGNITIVE ORCHESTRATION ARCHITECTURE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', padding: '12px 18px', borderRadius: 8, color: '#22C55E', fontFamily: 'monospace', fontWeight: 700 }}>
            LAYER 3: Evolving Search Grammar (Mutates &amp; Selects)
          </div>
          <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid #3B82F6', padding: '12px 18px', borderRadius: 8, color: '#60A5FA', fontFamily: 'monospace', fontWeight: 700 }}>
            LAYER 2: Programmable Metacognitive Orchestrator
          </div>
          <div style={{ backgroundColor: 'rgba(100, 116, 139, 0.15)', border: '1px solid #64748B', padding: '12px 18px', borderRadius: 8, color: '#94A3B8', fontFamily: 'monospace', fontWeight: 700 }}>
            LAYER 1: Base Foundation Model (Completely Frozen Weights)
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatProgrammableSyntax: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid #06B6D4', borderRadius: 16, padding: '28px 48px', textAlign: 'center' }}>
        <div style={{ color: '#06B6D4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          PROGRAMMABLE DISCOVERY GRAMMAR
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 900, marginTop: 6 }}>
          Metacognitive Orchestration Layer
        </div>
      </div>
    </div>
  );
};

const BeatEvolvingMethodology: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(168, 85, 247, 0.15)', border: '1px solid #A855F7', borderRadius: 20, padding: '8px 24px', marginBottom: 16 }}>
        <Sparkles size={18} color="#C084FC" />
        <span style={{ color: '#C084FC', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          DYNAMIC ADAPTATION
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 900, textAlign: 'center' }}>
        Evolving Discovery Methodology in Real-Time
      </div>
    </div>
  );
};
