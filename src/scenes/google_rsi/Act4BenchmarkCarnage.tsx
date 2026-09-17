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
  BarChart3,
  Award,
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
// EXPANSIVE 1720px SUB-BEATS
// -------------------------------------------------------------

const BeatBenchmarkDossier: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(34, 197, 94, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '8px 24px', width: 'fit-content' }}>
          <BarChart3 size={18} color="#22C55E" />
          <span style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            EMPIRICAL BENCHMARKS • ALGORITHM ENGINEERING VERIFICATION
          </span>
        </div>

        <div>
          <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', lineHeight: 1.15 }}>
            THE RESULTS ARE STAGGERING
          </div>
          <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 18, maxWidth: 1200, lineHeight: 1.6 }}>
            Rigorous evaluations across algorithmic engineering, mathematical optimization, and scientific solver synthesis demonstrate unprecedented acceleration over traditional baselines.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            PRIMARY BENCHMARK: <span style={{ color: '#22C55E', fontWeight: 700 }}>High-Performance Lasso Solver</span>
          </div>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            QUALITY METRIC: <span style={{ color: '#38BDF8', fontWeight: 700 }}>Superior Discovery Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatLassoMath: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(59, 130, 246, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          TARGET MATHEMATICAL SYNTHESIS
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#64748B', fontSize: 16, fontFamily: 'monospace', marginBottom: 12 }}>
            HIGH-DIMENSIONAL CONVEX OPTIMIZATION
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', textShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}>
            min &#189; ||y - Xβ||₂² + λ ||β||₁
          </div>
          <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 18 }}>
            Autonomous Synthesis of Sparse Coordinate Descent Operators
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18, color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          <span>CONVERGENCE: QUADRATIC</span>
          <span style={{ color: '#22C55E', fontWeight: 800 }}>SPARSITY: 100% PRESERVED</span>
          <span>EXECUTION: GPU ACCELERATED</span>
        </div>
      </div>
    </div>
  );
};

const BeatHeadToHeadBaseline: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 40, maxWidth: 1720, width: '100%', height: 680 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div>
            <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>INDUSTRY BASELINE (SimpleTES)</div>
            <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', marginTop: 16 }}>16,200</div>
            <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 4 }}>Agent Sandbox Calls</div>
          </div>
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '14px', borderRadius: 10, color: '#EF4444', fontFamily: 'monospace', fontSize: 16, fontWeight: 800, textAlign: 'center' }}>
            100% COMPUTE CONSUMPTION
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '3px solid #22C55E', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 70px rgba(34, 197, 94, 0.25)' }}>
          <div>
            <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>GOOGLE DEEPMIND (Dream-RSI)</div>
            <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', marginTop: 16 }}>100</div>
            <div style={{ color: '#22C55E', fontSize: 18, fontFamily: 'monospace', marginTop: 4 }}>Agent Sandbox Calls (162x Reduction)</div>
          </div>
          <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.25)', padding: '14px', borderRadius: 10, color: '#22C55E', fontFamily: 'monospace', fontSize: 16, fontWeight: 900, textAlign: 'center', border: '1px solid #22C55E' }}>
            -99.4% COMPUTE SAVED
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatCallsCollapsed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          TOTAL AGENT CALLS COLLAPSED
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 148, fontWeight: 900, fontFamily: 'monospace', lineHeight: 0.95, margin: '20px 0', textShadow: '0 0 50px rgba(34, 197, 94, 0.5)' }}>
          -99.4%
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace' }}>
          Fewer Expensive Computational Iterations in Sandbox Environments
        </div>
      </div>
    </div>
  );
};

const BeatDataCompression: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(56, 189, 248, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          COMBINATORIAL SEARCH COMPRESSION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          Tens of Thousands Compressed by 162×
        </div>
      </div>
    </div>
  );
};

const BeatArchitecturalSecret: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(56, 189, 248, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '2px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Lock size={52} color="#38BDF8" />
        </div>
        <div style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE ARCHITECTURAL PARADOX
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          Zero Weight Retraining
        </div>
      </div>
    </div>
  );
};

const BeatNoBackprop: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <Zap size={64} color="#22C55E" style={{ marginBottom: 20 }} />
        <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          ZERO MEGATRON BACKPROPAGATION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, marginTop: 12 }}>
          Zero Megawatts Burned in Gradient Updates
        </div>
        <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 16 }}>
          Intelligence emerges from programmatic policy evolution, not brute-force backprop
        </div>
      </div>
    </div>
  );
};

const BeatMetacognitiveArchitecture: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 700, backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '2px solid rgba(59, 130, 246, 0.4)', borderRadius: 24, padding: '36px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#60A5FA', fontSize: 15, fontFamily: 'monospace', fontWeight: 800, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 14 }}>
          METACOGNITIVE ORCHESTRATION ARCHITECTURE (3 TIERS)
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '20px 0' }}>
          <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', padding: '20px 28px', borderRadius: 14, color: '#22C55E', fontFamily: 'monospace', fontSize: 18, fontWeight: 800 }}>
            TIER 3: Evolving Search Grammar (Mutates AST policies &amp; selects winning heuristics)
          </div>
          <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3B82F6', padding: '20px 28px', borderRadius: 14, color: '#60A5FA', fontFamily: 'monospace', fontSize: 18, fontWeight: 800 }}>
            TIER 2: Programmable Metacognitive Orchestrator (Coordinates offline replay dreams)
          </div>
          <div style={{ backgroundColor: 'rgba(100, 116, 139, 0.15)', border: '2px solid #64748B', padding: '20px 28px', borderRadius: 14, color: '#94A3B8', fontFamily: 'monospace', fontSize: 18, fontWeight: 800 }}>
            TIER 1: Base Foundation Model (Completely Frozen Weights • Zero Gradient Updates)
          </div>
        </div>

        <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          HIGH-AGILITY MODULAR SEPARATION OF REASONING AND HEURISTIC EVOLUTION
        </div>
      </div>
    </div>
  );
};

const BeatProgrammableSyntax: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06B6D4', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(6, 182, 212, 0.25)' }}>
        <div style={{ color: '#06B6D4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          PROGRAMMABLE DISCOVERY GRAMMAR
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, marginTop: 12 }}>
          Metacognitive Orchestration Layer
        </div>
      </div>
    </div>
  );
};

const BeatEvolvingMethodology: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(168, 85, 247, 0.12)', border: '2px solid #A855F7', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(168, 85, 247, 0.25)' }}>
        <Sparkles size={64} color="#C084FC" style={{ marginBottom: 20 }} />
        <div style={{ color: '#C084FC', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          DYNAMIC ADAPTATION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          Evolving Discovery Methodology in Real-Time
        </div>
      </div>
    </div>
  );
};
