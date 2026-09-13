import React from 'react';
import { AbsoluteFill } from 'remotion';
import { DeepSeekLogo, GoogleGeminiLogo, OpenAILogo, AnthropicLogo } from '../RealLogos';

export const GrandVerdictScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070B14',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 32px 32px',
        }}
      />

      <div style={{ zIndex: 10, width: 1600, display: 'flex', flexDirection: 'column', gap: 40 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 24 }}>
          <div>
            <div style={{ color: '#10B981', fontSize: 16, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>
              THE 2026 ARCHITECTURAL VERDICT
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 800, marginTop: 4 }}>
              The Moat Isn't Intelligence. It's Execution.
            </div>
          </div>
          <div style={{ padding: '8px 20px', borderRadius: 8, background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.5)', color: '#34D399', fontSize: 16, fontWeight: 700 }}>
            PARADIGM SHIFT CONFIRMED
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
          {/* Metric 1 */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(56, 189, 248, 0.4)',
              borderRadius: 16,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ color: '#38BDF8', fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}>
              COST REDUCTION
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900 }}>
              99.8%
            </div>
            <div style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.5 }}>
              From $200/month enterprise closed subscriptions down to sub-cent lightweight inference tiers.
            </div>
          </div>

          {/* Metric 2 */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 16,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ color: '#34D399', fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}>
              LATENCY DELTA
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900 }}>
              &lt; 2.0s
            </div>
            <div style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.5 }}>
              Instant live code hot-reload and shader execution. No waiting on congested enterprise cloud queues.
            </div>
          </div>

          {/* Metric 3 */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(168, 85, 247, 0.4)',
              borderRadius: 16,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ color: '#C084FC', fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}>
              THE REAL WINNERS
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900 }}>
              Open Weights
            </div>
            <div style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.5 }}>
              Developers building on local, fast, unmetered autonomy are outpacing closed subscriptions worldwide.
            </div>
          </div>
        </div>

        {/* Bottom Logo Strip */}
        <div style={{ background: '#090D16', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 12, padding: '20px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#64748B', fontSize: 15, fontWeight: 600 }}>
            FRONTIER ECOSYSTEM AUDITED IN THIS DOCUMENTARY:
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <OpenAILogo size={32} />
            <AnthropicLogo size={32} />
            <DeepSeekLogo size={32} />
            <GoogleGeminiLogo size={32} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
