import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { GoogleGeminiLogo } from '../../RealLogos';
import { RefreshCw, Sparkles, Zap, Infinity, ArrowUpRight } from 'lucide-react';

export const Act6EvolutionaryFlywheel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const spin = interpolate(frame, [0, 300], [0, 360]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      {/* High-End Cosmic Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(66, 133, 244, 0.18) 0%, transparent 70%)',
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
          <span style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            THE POST-TRANSFORMER ERA
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(16, 163, 127, 0.15)', border: '1px solid rgba(16, 163, 127, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
          <Infinity size={18} color="#10A37F" />
          <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            THE EVOLUTIONARY FLYWHEEL
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
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          border: '1px solid rgba(66, 133, 244, 0.35)',
          borderRadius: 24,
          padding: 44,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
          transform: `translateY(${(1 - entrance) * 20}px)`,
        }}
      >
        <div>
          <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
            THE SUPERINTELLIGENCE TRAJECTORY
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, lineHeight: 1.15 }}>
            Beyond the Limits of Human Dataset Curation
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 12, lineHeight: 1.6, maxWidth: 1000 }}>
            The machine explores reality, dreams about its mistakes, rewrites its problem-solving logic, and returns smarter than it was yesterday. The intelligence ceiling has officially shattered.
          </p>
        </div>

        {/* 4-Node Circular Cognitive Flywheel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(66, 133, 244, 0.3)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
            <div style={{ color: '#4285F4', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>01</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 6 }}>Explores Reality</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Attempts complex scientific discovery tasks</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
            <div style={{ color: '#38BDF8', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>02</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 6 }}>Dreams in Replay</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Simulates mistakes in historical tree</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
            <div style={{ color: '#F59E0B', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>03</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 6 }}>Mutates Search</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Evolves superior exploration heuristics</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(16, 163, 127, 0.3)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
            <div style={{ color: '#10A37F', fontSize: 32, fontWeight: 900, fontFamily: 'monospace' }}>04</div>
            <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 6 }}>Recursive Leap</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Redeploys with compounded capability</div>
          </div>
        </div>

        {/* Bottom Verdict Banner */}
        <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.15)', border: '2px solid #10A37F', borderRadius: 16, padding: '18px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>HISTORIC CONVERGENCE</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>The Era of Recursive Self-Improvement Has Officially Arrived.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#10A37F', fontFamily: 'monospace', fontWeight: 800, fontSize: 15 }}>
            <Sparkles size={20} />
            <span>AGI RECURSION ACTIVE</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
