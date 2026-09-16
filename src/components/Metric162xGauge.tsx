import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { Zap, TrendingDown, Cpu, Sparkles } from 'lucide-react';

export const Metric162xGauge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Rapid count up to 162
  const counterVal = Math.round(
    interpolate(frame, [10, 60], [1, 162], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Radial arc fill
  const arcProgress = interpolate(frame, [10, 60], [0.05, 0.88], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const circumference = 2 * Math.PI * 180;
  const strokeDashoffset = circumference * (1 - arcProgress);

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${interpolate(entrance, [0, 1], [0.94, 1])})`,
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
        padding: '20px 60px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Telemetry Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          border: '1px solid rgba(34, 197, 94, 0.4)',
          borderRadius: 20,
          padding: '8px 24px',
          marginBottom: 20,
        }}
      >
        <Zap size={20} color="#22C55E" />
        <span style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
          EMPIRICAL BENCHMARK • LASSO SOLVER SYNTHESIS
        </span>
      </div>

      {/* Main Gauge Visualizer (460 x 460) */}
      <div
        style={{
          position: 'relative',
          width: 440,
          height: 440,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width={440} height={440} viewBox="0 0 440 440" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background Track */}
          <circle
            cx="220"
            cy="220"
            r="180"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="24"
          />
          {/* Glowing Animated Progress Arc */}
          <circle
            cx="220"
            cy="220"
            r="180"
            fill="none"
            stroke="url(#gauge-gradient-lg)"
            strokeWidth="24"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gauge-gradient-lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Readout */}
        <div style={{ position: 'absolute', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 148,
              fontWeight: 900,
              fontFamily: 'monospace',
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              textShadow: '0 0 40px rgba(6, 182, 212, 0.6)',
            }}
          >
            {counterVal}
            <span style={{ fontSize: 64, color: '#06B6D4', marginLeft: 4 }}>×</span>
          </div>
          <div
            style={{
              color: '#94A3B8',
              fontSize: 16,
              fontFamily: 'monospace',
              letterSpacing: '0.25em',
              marginTop: 12,
              fontWeight: 800,
            }}
          >
            FEWER AGENT CALLS
          </div>
        </div>
      </div>

      {/* High-Canvas Comparison Telemetry Grid (1400px width) */}
      <div
        style={{
          display: 'flex',
          gap: 32,
          marginTop: 28,
          maxWidth: 1400,
          width: '100%',
        }}
      >
        {/* Baseline Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '2px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 18,
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              STANDARD BASELINE (SimpleTES)
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, fontFamily: 'monospace', marginTop: 4 }}>
              16,200 <span style={{ fontSize: 16, color: '#94A3B8' }}>agent calls</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', fontWeight: 800, backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '6px 14px', borderRadius: 8 }}>
              100% Compute Baseline
            </span>
          </div>
        </div>

        {/* Dream-RSI Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(34, 197, 94, 0.12)',
            border: '2px solid rgba(34, 197, 94, 0.5)',
            borderRadius: 18,
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)',
          }}
        >
          <div>
            <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              GOOGLE DEEPMIND (Dream-RSI)
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, fontFamily: 'monospace', marginTop: 4 }}>
              100 <span style={{ fontSize: 16, color: '#22C55E' }}>agent calls</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22C55E', backgroundColor: 'rgba(34, 197, 94, 0.2)', padding: '8px 18px', borderRadius: 8, border: '1px solid #22C55E' }}>
            <TrendingDown size={24} />
            <span style={{ fontSize: 24, fontFamily: 'monospace', fontWeight: 900 }}>
              -99.4%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
