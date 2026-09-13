import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

interface CleanTweetScreenProps {
  imagePath: string;
  author: string;
  handle: string;
  sourceUrl: string;
  badgeText: string;
  maxScrollPx?: number;
}

export const CleanTweetScreen: React.FC<CleanTweetScreenProps> = ({
  imagePath,
  author,
  handle,
  sourceUrl,
  badgeText,
  maxScrollPx = 0,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Smooth natural documentary inspection scroll if the post is tall
  const scrollY = maxScrollPx > 0
    ? interpolate(
        frame,
        [45, durationInFrames - 45],
        [0, -maxScrollPx],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
      )
    : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#060911',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Background Subtle Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.8,
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
          background: 'rgba(11, 17, 32, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 8,
          backdropFilter: 'blur(12px)',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#38BDF8',
              boxShadow: '0 0 10px #38BDF8',
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
            DOCUMENTARY PROOF • {author.toUpperCase()} ({handle})
          </span>
        </div>

        <div
          style={{
            color: '#64748B',
            fontFamily: 'monospace',
            fontSize: 13,
          }}
        >
          {sourceUrl}
        </div>

        <div
          style={{
            padding: '4px 14px',
            borderRadius: 4,
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: '#38BDF8',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: 'sans-serif',
          }}
        >
          {badgeText}
        </div>
      </div>

      {/* Desktop Width Tweet Post Card Container (1040px wide, 100% flat proof) */}
      <div
        style={{
          position: 'absolute',
          top: 92,
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
            transform: `translateY(${scrollY}px)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Img
            src={staticFile(imagePath)}
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
    </AbsoluteFill>
  );
};
