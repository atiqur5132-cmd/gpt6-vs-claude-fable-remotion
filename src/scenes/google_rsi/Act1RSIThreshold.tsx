import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { GoogleGeminiLogo, XTwitterLogo } from '../../RealLogos';
import { Atom, Zap, ShieldAlert, Cpu, Sparkles, Orbit } from 'lucide-react';

interface Act1Props {
  beat: 'rubicon' | 'paper_reveal';
}

export const Act1RSIThreshold: React.FC<Act1Props> = ({ beat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const pulse = Math.sin(frame / 7) * 0.15 + 0.85;

  if (beat === 'rubicon') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(66, 133, 244, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top Channel Header */}
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
            <GoogleGeminiLogo size={34} />
            <span style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
              GOOGLE DEEPMIND • AGI MILESTONE
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
            <ShieldAlert size={18} color="#EF4444" />
            <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              RECURSIVE SELF-IMPROVEMENT
            </span>
          </div>
        </div>

        {/* Main Cognitive Equation Card */}
        <div
          style={{
            position: 'absolute',
            top: 150,
            left: 120,
            right: 120,
            bottom: 80,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(66, 133, 244, 0.3)',
            borderRadius: 24,
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            transform: `translateY(${(1 - entrance) * 25}px)`,
          }}
        >
          <div>
            <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', marginBottom: 8 }}>
              THEORETICAL SUPERINTELLIGENCE BOUNDARY
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Recursive Self-Improvement (RSI)
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6, maxWidth: 1000 }}>
              An algorithm actively redesigning, optimizing, and accelerating its own cognitive architecture without human intervention.
            </p>
          </div>

          {/* Mathematical Feedback Loop Visualizer */}
          <div style={{ backgroundColor: 'rgba(5, 8, 17, 0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '24px 36px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>GENERATION T</div>
              <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>Agent I(t)</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#4285F4' }}>
              <div style={{ height: 2, width: 80, backgroundColor: '#4285F4' }} />
              <Zap size={24} />
              <div style={{ height: 2, width: 80, backgroundColor: '#4285F4' }} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#4285F4', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>RECURSIVE OPTIMIZATION</div>
              <div style={{ color: '#38BDF8', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>Flywheel f(I)</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#10A37F' }}>
              <div style={{ height: 2, width: 80, backgroundColor: '#10A37F' }} />
              <Sparkles size={24} />
              <div style={{ height: 2, width: 80, backgroundColor: '#10A37F' }} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace' }}>GENERATION T+1</div>
              <div style={{ color: '#10A37F', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>Agent I(t+1)</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18 }}>
            <span style={{ color: '#94A3B8', fontSize: 15 }}>
              Status: <strong style={{ color: '#FFFFFF' }}>First Empirical Breakthrough Confirmed</strong>
            </span>
            <span style={{ color: '#4285F4', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
              SEPTEMBER 16, 2026 • GOOGLE DEEPMIND
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // Paper Reveal Card: Dream-RSI
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(16, 163, 127, 0.12) 0%, transparent 70%)' }} />

      {/* Header */}
      <div style={{ position: 'absolute', top: 50, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <GoogleGeminiLogo size={32} />
          <span style={{ color: '#10A37F', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            OFFICIAL RESEARCH DISCOVERY
          </span>
        </div>
        <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.15)', border: '1px solid rgba(16, 163, 127, 0.3)', padding: '6px 14px', borderRadius: 20 }}>
          <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>ARXIV: SEPT 2026</span>
        </div>
      </div>

      {/* Main Paper Presentation Card */}
      <div
        style={{
          position: 'absolute',
          top: 140,
          left: 120,
          right: 120,
          bottom: 80,
          backgroundColor: '#0F172A',
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
        <div>
          <div style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.2em', marginBottom: 8 }}>
            GOOGLE DEEPMIND • UNIV OF MARYLAND • UVA
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, lineHeight: 1.15 }}>
            Dream-RSI: Recursive Self-Improvement through Evolving Worlds
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6 }}>
            An autonomous recursive engine engineered for scientific exploration, mathematical optimization, and GPU kernel synthesis.
          </p>
        </div>

        {/* 3 Domain Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Cpu size={24} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Algorithm Engineering</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Autonomous synthesis of custom GPU computing kernels</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Atom size={24} color="#10A37F" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Mathematical Discovery</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Synthesizing Lasso solvers and formal proof heuristics</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Orbit size={24} color="#F59E0B" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Zero Weight Retraining</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Meta-orchestration without burning megawatts on backprop</div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 14 }}>
            Verified Paper ID: <strong style={{ color: '#FFFFFF' }}>Google DeepMind Research (Sept 16, 2026)</strong>
          </span>
          <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            PARADIGM SHIFT: ACTIVE
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
