import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AnthropicLogo, OpenAILogo, XTwitterLogo } from '../RealLogos';

export const ParadoxScene: React.FC<{
  phase: 'anthropic' | 'openai' | 'all';
}> = ({ phase }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070B14',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Background Subtle Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.15) 0%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 32px 32px',
        }}
      />

      {/* Main Container */}
      <div style={{ zIndex: 10, width: 1600, display: 'flex', flexDirection: 'column', gap: 36 }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 24 }}>
          <div>
            <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 800, letterSpacing: 2.5, textTransform: 'uppercase' }}>
              THE FRONTIER HYPOCRISY
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 800, marginTop: 4 }}>
              Public Caution vs. Production Accelerators
            </div>
          </div>
          <div style={{ padding: '8px 20px', borderRadius: 8, background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#F87171', fontSize: 16, fontWeight: 700 }}>
            ZERO BRAKES APPLIED
          </div>
        </div>

        {/* 3 Columns: Anthropic, OpenAI, xAI */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
          {/* Card 1: Anthropic */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(217, 119, 6, 0.5)',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <AnthropicLogo size={44} />
              <div>
                <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700 }}>Anthropic</div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>Dario Amodei (CEO)</div>
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #EF4444' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Public Warning</div>
              <div style={{ color: '#FCA5A5', fontSize: 17, fontStyle: 'italic', marginTop: 4 }}>
                "We must pace the frontier. It’s too dangerous to humans."
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #10B981' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Actual Action</div>
              <div style={{ color: '#6EE7B7', fontSize: 20, fontWeight: 800, marginTop: 4 }}>
                Opus 5.2 + Fable 5.2
              </div>
              <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 2 }}>Shipped directly to production</div>
            </div>
          </div>

          {/* Card 2: OpenAI */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: phase !== 'anthropic' ? '1.5px solid rgba(16, 163, 127, 0.6)' : '1.5px solid rgba(75, 85, 99, 0.4)',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              opacity: phase === 'anthropic' ? 0.4 : 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <OpenAILogo size={44} />
              <div>
                <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700 }}>OpenAI</div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>Sam Altman (CEO)</div>
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #EF4444' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Public Warning</div>
              <div style={{ color: '#FCA5A5', fontSize: 17, fontStyle: 'italic', marginTop: 4 }}>
                "I agree with Dario. We need extreme caution."
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #10B981' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Actual Action</div>
              <div style={{ color: '#6EE7B7', fontSize: 20, fontWeight: 800, marginTop: 4 }}>
                GPT-6 Astra, Sol, Luna
              </div>
              <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 2 }}>Unveiled within 48 hours</div>
            </div>
          </div>

          {/* Card 3: xAI */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: phase === 'all' ? '1.5px solid rgba(255, 255, 255, 0.5)' : '1.5px solid rgba(75, 85, 99, 0.4)',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              opacity: phase === 'all' ? 1 : 0.4,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <XTwitterLogo size={44} />
              <div>
                <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700 }}>xAI</div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>Elon Musk (Founder)</div>
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #EF4444' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Public Warning</div>
              <div style={{ color: '#FCA5A5', fontSize: 17, fontStyle: 'italic', marginTop: 4 }}>
                "Dario is right. The pace is unprecedented."
              </div>
            </div>

            <div style={{ background: '#090D16', padding: 20, borderRadius: 10, borderLeft: '4px solid #10B981' }}>
              <div style={{ color: '#94A3B8', fontSize: 13, fontWeight: 700, textTransform: 'uppercase' }}>Actual Action</div>
              <div style={{ color: '#6EE7B7', fontSize: 20, fontWeight: 800, marginTop: 4 }}>
                Grok 4.7 Cluster
              </div>
              <div style={{ color: '#94A3B8', fontSize: 14, marginTop: 2 }}>Accelerated 100k H100 cluster</div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
