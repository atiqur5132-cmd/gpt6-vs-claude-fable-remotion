import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';
import { AnthropicLogo, OpenAILogo, XTwitterLogo } from '../RealLogos';

interface RajathTweetInspectionProps {
  section: 'intro' | 'dario' | 'sam' | 'elon';
}

export const RajathTweetInspection: React.FC<RajathTweetInspectionProps> = ({ section }) => {
  const frame = useCurrentFrame();

  let translateY = 0;
  let activeBadge = null;

  if (section === 'intro') {
    translateY = 0;
  } else if (section === 'dario') {
    // Keep avatar visible at top, Dario quote centered
    translateY = 0;
    activeBadge = (
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 50,
          background: 'rgba(15, 23, 42, 0.96)',
          border: '1.5px solid #D97706',
          borderRadius: 12,
          padding: '14px 26px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
          zIndex: 50,
        }}
      >
        <AnthropicLogo size={36} />
        <div>
          <div style={{ color: '#F59E0B', fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            VERIFIED SHIPMENT
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>
            Opus 5.2 + Fable 5.2
          </div>
        </div>
      </div>
    );
  } else if (section === 'sam') {
    // Focus down to Sam & OpenAI section
    translateY = -160;
    activeBadge = (
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 50,
          background: 'rgba(15, 23, 42, 0.96)',
          border: '1.5px solid #10A37F',
          borderRadius: 12,
          padding: '14px 26px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
          zIndex: 50,
        }}
      >
        <OpenAILogo size={36} />
        <div>
          <div style={{ color: '#10A37F', fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            VERIFIED SHIPMENT
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>
            GPT-6 Astra, Sol, Luna
          </div>
        </div>
      </div>
    );
  } else if (section === 'elon') {
    // Focus down to Elon & xAI section
    translateY = -280;
    activeBadge = (
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 50,
          background: 'rgba(15, 23, 42, 0.96)',
          border: '1.5px solid #FFFFFF',
          borderRadius: 12,
          padding: '14px 26px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
          zIndex: 50,
        }}
      >
        <XTwitterLogo size={36} />
        <div>
          <div style={{ color: '#E2E8F0', fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            VERIFIED ACCELERATION
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>
            xAI Grok 4.7 Cluster
          </div>
        </div>
      </div>
    );
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#060911',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Background Subtle Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Documentary Verification Header */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 60,
          right: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          background: 'rgba(11, 17, 32, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 8,
          backdropFilter: 'blur(12px)',
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#EF4444',
              boxShadow: '0 0 10px #EF4444',
            }}
          />
          <span
            style={{
              color: '#94A3B8',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.2,
              fontFamily: 'sans-serif',
            }}
          >
            DOCUMENTARY PROOF • RAJATH GOWDA (@buildwithrajath)
          </span>
        </div>

        <div
          style={{
            color: '#64748B',
            fontFamily: 'monospace',
            fontSize: 13,
          }}
        >
          x.com/buildwithrajath/status/2099039261253358013
        </div>

        <div
          style={{
            padding: '4px 14px',
            borderRadius: 4,
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#F87171',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: 'sans-serif',
          }}
        >
          REAL DESKTOP EVIDENCE
        </div>
      </div>

      {/* Clean Uncropped Post Card Viewport (Desktop 1040px width) */}
      <div
        style={{
          position: 'absolute',
          top: 96,
          bottom: 30,
          width: 1040,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            width: '100%',
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.4s ease-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Img
            src={staticFile('daily_evidence/rajath_clean_card.png')}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 14,
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.95)',
            }}
          />
        </div>
      </div>

      {/* Active Verified Official Shipment Badge */}
      {activeBadge}
    </AbsoluteFill>
  );
};
