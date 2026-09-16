import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { GoogleGeminiLogo } from '../../RealLogos';
import { Flame, Zap, CheckCircle2, ShieldCheck, Lock, Cpu } from 'lucide-react';

export const Act4BenchmarkCarnage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const multiplierScale = interpolate(frame, [10, 45], [1, 162], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      {/* Emerald Green / Tech Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(16, 163, 127, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <GoogleGeminiLogo size={32} />
          <span style={{ color: '#10A37F', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            BENCHMARK RESULTS • EMPIRICAL VERIFICATION
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(16, 163, 127, 0.15)', border: '1px solid rgba(16, 163, 127, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
          <Flame size={18} color="#10A37F" />
          <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            162X EFFICIENCY MULTIPLIER
          </span>
        </div>
      </div>

      {/* Main Metric Showcase Box */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 120,
          right: 120,
          bottom: 80,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(16, 163, 127, 0.3)',
          borderRadius: 24,
          padding: 44,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
          transform: `translateY(${(1 - entrance) * 20}px)`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
              ALGORITHM & MATHEMATICAL DISCOVERY (LASSO SOLVER)
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, lineHeight: 1.15 }}>
              162× Fewer Agent Calls Than Baseline
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 12, lineHeight: 1.6, maxWidth: 900 }}>
              Dream-RSI synthesized superior scientific optimization solvers while cutting required LLM inference calls from tens of thousands down to a fraction.
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#10A37F', fontSize: 64, fontWeight: 900, fontFamily: 'monospace', lineHeight: 1 }}>
              {Math.round(multiplierScale)}×
            </div>
            <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace', marginTop: 4 }}>COMPUTE REDUCTION</div>
          </div>
        </div>

        {/* Dual Core Takeaways */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Frozen Weights Card */}
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <Lock size={22} color="#38BDF8" />
              <span style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>WEIGHT STABILITY</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>Zero Weight Retraining</div>
            <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>
              Neural network weights remain 100% frozen. No gradient backpropagation or massive cluster power burns.
            </div>
          </div>

          {/* Meta Orchestration Layer */}
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <Cpu size={22} color="#10A37F" />
              <span style={{ color: '#10A37F', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>META-COGNITION</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>Programmable Orchestrator</div>
            <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>
              The agent dynamically mutates its own search and verification heuristics across iterations.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.1)', border: '1px solid rgba(16, 163, 127, 0.25)', borderRadius: 12, padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#E2E8F0', fontSize: 15 }}>
            Compared against: <strong style={{ color: '#FFFFFF' }}>Standard SimpleTES Baseline</strong>
          </span>
          <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            EMPIRICALLY VALIDATED • DEEPMIND
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
