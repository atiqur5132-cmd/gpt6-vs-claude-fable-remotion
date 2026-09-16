import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { RefreshCw, Compass, Moon, Cpu, Rocket } from 'lucide-react';

export const EvolutionaryFlywheel: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous smooth rotation for the flywheel
  const rotation = (frame * 1.8) % 360;

  // Active step index cycling every 35 frames
  const activeStep = Math.floor((frame / 35) % 4);

  const steps = [
    {
      title: '1. EXPLORE REALITY',
      desc: 'Autonomous agent probes novel mathematical problem spaces',
      icon: Compass,
      color: '#3B82F6',
    },
    {
      title: '2. DREAM MISTAKES',
      desc: 'Replays historical dead ends inside high-fidelity offline simulator',
      icon: Moon,
      color: '#A855F7',
    },
    {
      title: '3. REWRITE LOGIC',
      desc: 'Mutates search heuristics & optimizes policy grammar at 0ms latency',
      icon: Cpu,
      color: '#06B6D4',
    },
    {
      title: '4. RETURN SMARTER',
      desc: 'Redeploys 162x accelerated exploration policy back into physical world',
      icon: Rocket,
      color: '#22C55E',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 60px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(168, 85, 247, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          borderRadius: 20,
          padding: '8px 26px',
          marginBottom: 24,
        }}
      >
        <RefreshCw size={18} color="#C084FC" />
        <span style={{ color: '#C084FC', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE AUTONOMOUS RSI FLYWHEEL • CONTINUOUS CLOSED-LOOP EVOLUTION
        </span>
      </div>

      {/* Main Wheel & 4-Quadrant Grid (1440px width) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          maxWidth: 1440,
          width: '100%',
        }}
      >
        {/* Rotating Circular Flywheel SVG (420 x 420) */}
        <div
          style={{
            position: 'relative',
            width: 400,
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg
            width={400}
            height={400}
            viewBox="0 0 400 400"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center',
            }}
          >
            <circle
              cx="200"
              cy="200"
              r="165"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="18"
            />
            <circle
              cx="200"
              cy="200"
              r="165"
              fill="none"
              stroke="url(#flywheel-gradient-lg)"
              strokeWidth="18"
              strokeDasharray="260 110"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="flywheel-gradient-lg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#A855F7" />
                <stop offset="66%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Hub */}
          <div
            style={{
              position: 'absolute',
              width: 190,
              height: 190,
              borderRadius: '50%',
              backgroundColor: '#0A0F1D',
              border: '2px solid rgba(255, 255, 255, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0,0,0,0.85)',
            }}
          >
            <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              GOOGLE DEEPMIND
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 900, marginTop: 2 }}>
              DREAM-RSI
            </div>
            <div style={{ color: '#22C55E', fontSize: 11, fontFamily: 'monospace', fontWeight: 800, marginTop: 4 }}>
              ACTIVE FLYWHEEL
            </div>
          </div>
        </div>

        {/* 4 Step Cards (Large, fills right half) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.7)',
                  border: isActive ? `2px solid ${step.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 16,
                  padding: '16px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  boxShadow: isActive ? `0 0 25px ${step.color}44` : 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: `${step.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${step.color}77`,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={step.color} />
                </div>
                <div>
                  <div style={{ color: step.color, fontSize: 15, fontFamily: 'monospace', fontWeight: 800 }}>
                    {step.title}
                  </div>
                  <div style={{ color: '#E2E8F0', fontSize: 16, fontWeight: 600, marginTop: 2 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
