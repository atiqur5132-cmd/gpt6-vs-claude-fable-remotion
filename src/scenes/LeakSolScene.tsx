import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile } from 'remotion';
import { OpenAILogo, XTwitterLogo } from '../RealLogos';
import { ShieldAlert, Zap, Cpu, Flame, Database, ArrowRight } from 'lucide-react';
import { FlatVideoEvidence } from '../FlatVideoEvidence';

interface LeakSolSceneProps {
  section: 'mozaik' | 'sol_leak' | 'latency_benchmark' | 'pricing_matrix';
}

export const LeakSolScene: React.FC<LeakSolSceneProps> = ({ section }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  // 1. Secret Mozaik Checkpoint Dossier
  if (section === 'mozaik') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(16, 163, 127, 0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top Telemetry Header */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <OpenAILogo size={36} color="#10A37F" />
            <span style={{ color: '#10A37F', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 700 }}>
              CLASSIFIED CHECKPOINT DECRYPT
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
            <ShieldAlert size={18} color="#EF4444" />
            <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.1em' }}>
              INTERNAL CONFIDENTIAL
            </span>
          </div>
        </div>

        {/* Main Dossier Card */}
        <div
          style={{
            position: 'absolute',
            top: 150,
            left: 120,
            right: 120,
            bottom: 80,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(16, 163, 127, 0.3)',
            borderRadius: 24,
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            transform: `translateY(${(1 - entrance) * 30}px)`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.2em', marginBottom: 8 }}>
                INTERNAL CODENAME
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, fontFamily: 'sans-serif', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 20 }}>
                mozaik-alpha-fdm
                <span style={{ fontSize: 16, backgroundColor: '#10A37F', color: '#070B14', padding: '6px 14px', borderRadius: 8, fontWeight: 800 }}>
                  ACTIVE WEIGHTS
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>PRODUCTION IDENTITY</div>
              <div style={{ color: '#38BDF8', fontSize: 32, fontWeight: 800 }}>GPT-6 Astra</div>
            </div>
          </div>

          {/* 3 Metric Grid Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Cpu size={22} color="#10A37F" />
                <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', fontWeight: 600 }}>CONTEXT DEPTH</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 800 }}>1.05M</div>
              <div style={{ color: '#64748B', fontSize: 12, marginTop: 4 }}>Full-fidelity active tokens</div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Flame size={22} color="#F59E0B" />
                <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', fontWeight: 600 }}>MAX EFFORT BENCHMARK</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 800 }}>99.9%</div>
              <div style={{ color: '#64748B', fontSize: 12, marginTop: 4 }}>ARC-AGI-3 Reasoning Score</div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Database size={22} color="#38BDF8" />
                <span style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', fontWeight: 600 }}>TARGET ECOSYSTEM</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 800 }}>AUTONOMY</div>
              <div style={{ color: '#64748B', fontSize: 12, marginTop: 4 }}>Zero-shot 3D & game engine synthesis</div>
            </div>
          </div>

          {/* Bottom Alert Banner */}
          <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.1)', border: '1px solid rgba(16, 163, 127, 0.3)', borderRadius: 12, padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#94A3B8', fontSize: 15 }}>
              Source verification: <strong style={{ color: '#FFFFFF' }}>@Lentils80</strong> & <strong style={{ color: '#FFFFFF' }}>@XIVIX_134</strong> telemetry capture
            </span>
            <span style={{ color: '#10A37F', fontSize: 14, fontFamily: 'monospace', fontWeight: 700 }}>
              VERIFIED ARCHITECTURE • SEPT 2026
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 2. GPT-6 Sol Leaks in Wild
  if (section === 'sol_leak') {
    return (
      <FlatVideoEvidence
        videoPath="evidence/gpt6_sol_leak.mp4"
        sourceUrl="x.com/blueemi99/status/2099470924722393456"
        title="LEAKED TELEMETRY: GPT-6 SOL DETECTED IN PRIVATE API & ARENA ROUTES"
        telemetryLabel="UNRELEASED FAST-SOL MODEL"
      />
    );
  }

  // 3. Dual-Gauge Latency & Reasoning Benchmark
  if (section === 'latency_benchmark') {
    const latencyProgress = interpolate(frame, [10, 60], [0, 70], { extrapolateRight: 'clamp' });
    const reasoningProgress = interpolate(frame, [10, 60], [0, 99.4], { extrapolateRight: 'clamp' });

    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(56, 189, 248, 0.1) 0%, transparent 70%)' }} />

        {/* Header */}
        <div style={{ position: 'absolute', top: 60, left: 100, right: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
              BENCHMARK TELEMETRY
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, letterSpacing: '-0.02em', marginTop: 4 }}>
              GPT-6 Astra vs Leaked GPT-6 Sol
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1px solid #38BDF8', padding: '10px 24px', borderRadius: 30 }}>
            <span style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', fontWeight: 800 }}>-70% LATENCY</span>
          </div>
        </div>

        {/* Side by Side Dual Gauge Comparison */}
        <div style={{ position: 'absolute', top: 190, left: 100, right: 100, bottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Card 1: Token Latency Reduction */}
          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <Zap size={24} color="#38BDF8" />
                <span style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>SPEED METRIC</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800 }}>Inference Token Latency</div>
              <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 6 }}>Sol drops generation delay dramatically</div>
            </div>

            <div style={{ margin: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748B', fontSize: 15 }}>Astra (Baseline)</span>
                <span style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>100%</span>
              </div>
              <div style={{ width: '100%', height: 16, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#64748B' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, marginBottom: 8 }}>
                <span style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800 }}>GPT-6 Sol (Leaked)</span>
                <span style={{ color: '#38BDF8', fontSize: 18, fontWeight: 900 }}>{Math.round(100 - latencyProgress)}%</span>
              </div>
              <div style={{ width: '100%', height: 16, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ width: `${100 - latencyProgress}%`, height: '100%', backgroundColor: '#38BDF8', boxShadow: '0 0 16px #38BDF8' }} />
              </div>
            </div>

            <div style={{ color: '#38BDF8', fontSize: 48, fontWeight: 900, fontFamily: 'monospace' }}>
              -{Math.round(latencyProgress)}%
              <span style={{ color: '#94A3B8', fontSize: 16, marginLeft: 12, fontWeight: 500 }}>Turnaround Time</span>
            </div>
          </div>

          {/* Card 2: Multi-Step Reasoning Retention */}
          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <Flame size={24} color="#10A37F" />
                <span style={{ color: '#10A37F', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>REASONING PARITY</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800 }}>Complex Logic Retention</div>
              <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 6 }}>Near-perfect mathematical & code parity</div>
            </div>

            <div style={{ margin: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748B', fontSize: 15 }}>Astra (Full Reasoning)</span>
                <span style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>100%</span>
              </div>
              <div style={{ width: '100%', height: 16, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#10A37F' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, marginBottom: 8 }}>
                <span style={{ color: '#10A37F', fontSize: 16, fontWeight: 800 }}>GPT-6 Sol (Leaked)</span>
                <span style={{ color: '#10A37F', fontSize: 18, fontWeight: 900 }}>{reasoningProgress.toFixed(1)}%</span>
              </div>
              <div style={{ width: '100%', height: 16, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ width: `${reasoningProgress}%`, height: '100%', backgroundColor: '#10A37F', boxShadow: '0 0 16px #10A37F' }} />
              </div>
            </div>

            <div style={{ color: '#10A37F', fontSize: 48, fontWeight: 900, fontFamily: 'monospace' }}>
              99.4%
              <span style={{ color: '#94A3B8', fontSize: 16, marginLeft: 12, fontWeight: 500 }}>Accuracy Retained</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 4. Utility Tier Pricing Matrix
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 163, 127, 0.08) 0%, transparent 70%)' }} />

      <div style={{ position: 'absolute', top: 70, left: 100, right: 100, textAlign: 'center' }}>
        <div style={{ color: '#10A37F', fontSize: 15, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE ECONOMIC REVOLUTION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', marginTop: 6 }}>
          Frontier Reasoning at Sub-Cent Utility Rates
        </div>
      </div>

      <div style={{ position: 'absolute', top: 210, left: 120, right: 120, bottom: 90, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
        {/* Tier 1: GPT-5 Legacy */}
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>LEGACY TIER</span>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 800, marginTop: 4 }}>GPT-5.6 Terra</div>
            <div style={{ color: '#EF4444', fontSize: 32, fontWeight: 900, marginTop: 16, fontFamily: 'monospace' }}>$15.00</div>
            <div style={{ color: '#64748B', fontSize: 13 }}>Per 1M Output Tokens</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, color: '#94A3B8', fontSize: 14 }}>
            Status: <span style={{ color: '#EF4444', fontWeight: 700 }}>Obsolete</span>
          </div>
        </div>

        {/* Tier 2: GPT-6 Astra Flagship */}
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>FRONTIER MAXIMUM</span>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 800, marginTop: 4 }}>GPT-6 Astra</div>
            <div style={{ color: '#38BDF8', fontSize: 32, fontWeight: 900, marginTop: 16, fontFamily: 'monospace' }}>$8.50</div>
            <div style={{ color: '#64748B', fontSize: 13 }}>Per 1M Output Tokens</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, color: '#94A3B8', fontSize: 14 }}>
            Status: <span style={{ color: '#38BDF8', fontWeight: 700 }}>Pro Heavy Compute</span>
          </div>
        </div>

        {/* Tier 3: Leaked GPT-6 Sol Disruption */}
        <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.15)', border: '2px solid #10A37F', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 30px rgba(16, 163, 127, 0.2)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>LEAKED DISRUPTOR</span>
              <span style={{ backgroundColor: '#10A37F', color: '#070B14', fontSize: 11, fontWeight: 800, padding: '4px 8px', borderRadius: 4 }}>NEW</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>GPT-6 Sol</div>
            <div style={{ color: '#10A37F', fontSize: 40, fontWeight: 900, marginTop: 16, fontFamily: 'monospace' }}>$1.25</div>
            <div style={{ color: '#94A3B8', fontSize: 13 }}>Per 1M Output Tokens (Estimated)</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(16, 163, 127, 0.3)', paddingTop: 20, color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}>
            Impact: <span style={{ color: '#10A37F' }}>Kills closed $200 tiers</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
