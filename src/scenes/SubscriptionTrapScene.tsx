import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AnthropicLogo, OpenAILogo, DeepSeekLogo, GoogleGeminiLogo } from '../RealLogos';

export const SubscriptionTrapScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070B14',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Background Subtle Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.12) 0%, transparent 80%), radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 32px 32px',
        }}
      />

      <div style={{ zIndex: 10, width: 1600, display: 'flex', flexDirection: 'column', gap: 40 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 24 }}>
          <div>
            <div style={{ color: '#F59E0B', fontSize: 16, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>
              THE FRONTIER NARRATIVE CRACKED
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 800, marginTop: 4 }}>
              The $200 Subscription Trap vs. Reality
            </div>
          </div>
          <div style={{ padding: '8px 20px', borderRadius: 8, background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#FBBF24', fontSize: 16, fontWeight: 700 }}>
            OCTOBER 2026 AUDIT
          </div>
        </div>

        {/* 2 Big Comparison Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: The Closed Frontier Narrative */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(239, 68, 68, 0.4)',
              borderRadius: 16,
              padding: 40,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ color: '#FCA5A5', fontSize: 20, fontWeight: 700, textTransform: 'uppercase' }}>
                Closed Frontier Moat Claim
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <AnthropicLogo size={32} />
                <OpenAILogo size={32} />
              </div>
            </div>

            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800 }}>
              "$200/Month Enterprise Subscriptions"
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#090D16', padding: 18, borderRadius: 10, borderLeft: '4px solid #EF4444' }}>
                <div style={{ color: '#F87171', fontWeight: 700, fontSize: 16 }}>Myth 1: Spatial Reasoning Moat</div>
                <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 4 }}>
                  "Only massive trillion-parameter closed models can handle real-time 3D simulation and physics geometry."
                </div>
              </div>

              <div style={{ background: '#090D16', padding: 18, borderRadius: 10, borderLeft: '4px solid #EF4444' }}>
                <div style={{ color: '#F87171', fontWeight: 700, fontSize: 16 }}>Myth 2: Mandatory Cluster Scale</div>
                <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 4 }}>
                  "Sub-cent models hallucinate coordinate vectors and fail WebGL state bindings."
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Weekend Reality */}
          <div
            style={{
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1.5px solid rgba(16, 185, 129, 0.5)',
              borderRadius: 16,
              padding: 40,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ color: '#6EE7B7', fontSize: 20, fontWeight: 700, textTransform: 'uppercase' }}>
                The Budget Tier Shootout
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <DeepSeekLogo size={32} />
                <GoogleGeminiLogo size={32} />
              </div>
            </div>

            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800 }}>
              "Sub-Cent Inference & Local Meta"
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#090D16', padding: 18, borderRadius: 10, borderLeft: '4px solid #10B981' }}>
                <div style={{ color: '#34D399', fontWeight: 700, fontSize: 16 }}>Fact 1: 2-Second Hot-Reload</div>
                <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 4 }}>
                  DeepSeek v4.1 Flash pushed live shader code and recompiled interactive physics instantly at 60fps.
                </div>
              </div>

              <div style={{ background: '#090D16', padding: 18, borderRadius: 10, borderLeft: '4px solid #10B981' }}>
                <div style={{ color: '#34D399', fontWeight: 700, fontSize: 16 }}>Fact 2: Cost Collapsed to Zero</div>
                <div style={{ color: '#94A3B8', fontSize: 15, marginTop: 4 }}>
                  Less than $0.002 per complete 3D application architecture. The proprietary moat has vanished.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
