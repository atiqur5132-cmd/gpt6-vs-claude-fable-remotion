import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { ShieldAlert, DollarSign, Clock, AlertTriangle, Layers, XCircle, ArrowRight } from 'lucide-react';
import { GoogleGeminiLogo } from '../../RealLogos';

export const Act2EvaluationWall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const pulse = Math.sin(frame / 6) * 0.2 + 0.8;

  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      {/* Red/Amber Warning Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
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
          <span style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            THE BOTTLENECK ANALYSIS
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
          <AlertTriangle size={18} color="#EF4444" />
          <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            THE EVALUATION WALL
          </span>
        </div>
      </div>

      {/* Main Content Box */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 120,
          right: 120,
          bottom: 80,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
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
          <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
            WHY RECURSIVE IMPROVEMENT FAILED HISTORICALLY
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, lineHeight: 1.2 }}>
            The Impassable Economic Evaluation Wall
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6, maxWidth: 1000 }}>
            Testing new exploration strategies in real-world environments created an impossible compute barrier. Millions of dollars burned just to evaluate dead-end search trees.
          </p>
        </div>

        {/* 3 Failure Point Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#EF4444', marginBottom: 12 }}>
              <Clock size={22} />
              <span style={{ fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>ONLINE EVALUATION</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>Hours per Test</div>
            <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 6, lineHeight: 1.5 }}>
              Each candidate exploration policy required running physical code compilers and benchmarks.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#F59E0B', marginBottom: 12 }}>
              <DollarSign size={22} />
              <span style={{ fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>COMPUTE BANKRUPTCY</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>Millions in Tokens</div>
            <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 6, lineHeight: 1.5 }}>
              Exploring blind branches online drained cluster budgets before finding superior heuristics.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#64748B', marginBottom: 12 }}>
              <XCircle size={22} />
              <span style={{ fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>THE COMPROMISE</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>Hardcoded Heuristics</div>
            <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 6, lineHeight: 1.5 }}>
              Developers were forced to freeze search logic, abandoning true recursive adaptation.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: 12, padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#E2E8F0', fontSize: 15 }}>
            Previous State: <strong style={{ color: '#EF4444' }}>Static Agents trapped in blind trial-and-error</strong>
          </span>
          <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            SOLVED BY DEEPMIND • SEPT 2026
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
