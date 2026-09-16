import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { GoogleGeminiLogo } from '../../RealLogos';
import { Network, Sparkles, GitBranch, Play, CheckCircle2, RotateCcw } from 'lucide-react';

export const Act3DreamSimulator: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const pulse = Math.sin(frame / 6) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      {/* Cyan/Blue Dream Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
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
          <span style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            CORE ARCHITECTURAL MECHANISM
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
          <Sparkles size={18} color="#38BDF8" />
          <span style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            THE REPLAY DREAM WORLD
          </span>
        </div>
      </div>

      {/* Main Simulator Card */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 120,
          right: 120,
          bottom: 80,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
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
          <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
            HOW DREAM-RSI LEARNS FROM ITS OWN PAST
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, lineHeight: 1.2 }}>
            Converting Discovery History into a Dream Simulator
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6, maxWidth: 1000 }}>
            Past failed branches and successes become an offline replay sandbox. The agent tests thousands of candidate exploration policies in parallel at zero real-world cost.
          </p>
        </div>

        {/* 4-Step Dream-RSI Engine Diagram */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 22 }}>
            <GitBranch size={26} color="#94A3B8" />
            <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', fontWeight: 700, marginTop: 12 }}>STEP 01</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 4 }}>Record Tree</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
              Saves every dead-end, error, and breakthrough in memory.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 16, padding: 22 }}>
            <RotateCcw size={26} color="#38BDF8" />
            <div style={{ color: '#38BDF8', fontSize: 12, fontFamily: 'monospace', fontWeight: 700, marginTop: 12 }}>STEP 02</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 4 }}>Dream Simulator</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
              Converts historical logs into a zero-cost replay world.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 16, padding: 22 }}>
            <Network size={26} color="#F59E0B" />
            <div style={{ color: '#F59E0B', fontSize: 12, fontFamily: 'monospace', fontWeight: 700, marginTop: 12 }}>STEP 03</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 4 }}>Mutate Policies</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
              Tests 1,000s of exploration heuristics in the dream state.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.1)', border: '1px solid rgba(16, 163, 127, 0.3)', borderRadius: 16, padding: 22 }}>
            <CheckCircle2 size={26} color="#10A37F" />
            <div style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace', fontWeight: 700, marginTop: 12 }}>STEP 04</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 4 }}>Deploy Winner</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
              Best heuristic deployed back to real-world tasks.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: 12, padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#E2E8F0', fontSize: 15 }}>
            Cost Efficiency: <strong style={{ color: '#38BDF8' }}>Virtually $0.00 compute per policy simulation</strong>
          </span>
          <span style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            PARALLEL OFFLINE DISCOVERY
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
