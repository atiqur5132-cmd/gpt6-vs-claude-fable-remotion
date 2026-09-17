import React from 'react';
import { AbsoluteFill } from 'remotion';
import { GoogleGeminiLogo } from './RealLogos';
import { ShieldCheck, Sparkles, Zap, Flame } from 'lucide-react';

export const ThumbnailGemini4News: React.FC<{
  variant?: 'blue_leaks' | 'red_early' | 'blue_argon';
}> = ({ variant = 'blue_leaks' }) => {
  const isRed = variant === 'red_early';
  const borderColor = isRed ? '#FF2B4E' : '#0084FF';
  const accentColor = isRed ? '#FF5E7E' : '#00F0FF';
  const subText =
    variant === 'blue_argon'
      ? 'INTRODUCING'
      : isRed
      ? 'EARLY LEAKS'
      : 'NEW LEAKS ON';
  const titleText =
    variant === 'blue_argon' ? "GEMINI 4 'ARGON'" : 'GEMINI 4 PRO';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#01040A',
        overflow: 'hidden',
        fontFamily: "'Montserrat', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* 1. Signature Glowing Rounded Border (WorldofAI 1:1) */}
      <div
        style={{
          position: 'absolute',
          inset: 20,
          border: `10px solid ${borderColor}`,
          borderRadius: 28,
          boxShadow: `inset 0 0 50px ${borderColor}66, 0 0 80px ${borderColor}99`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* 2. Ambient Diagonal Light Ray */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: 150,
          width: 800,
          height: 600,
          background: `radial-gradient(ellipse at center, ${borderColor}33 0%, transparent 70%)`,
          filter: 'blur(60px)',
          transform: 'rotate(-25deg)',
          pointerEvents: 'none',
        }}
      />

      {/* 3. 3D Perspective Undulating Cyber Dot Matrix Wave */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 24,
          right: 24,
          height: 380,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <svg width="1872" height="380" viewBox="0 0 1872 380" fill="none">
          {Array.from({ length: 42 }).map((_, col) => {
            const xBase = col * 45;
            return Array.from({ length: 14 }).map((__, row) => {
              const y = 370 - row * 24 - Math.sin((col * 0.28) + (row * 0.4)) * 28;
              const x = xBase + (col - 21) * row * 1.6;
              const radius = 1.8 + row * 0.35;
              const opacity = 0.2 + (row / 14) * 0.75;
              return (
                <circle
                  key={`${col}-${row}`}
                  cx={x}
                  cy={y}
                  r={radius}
                  fill={borderColor}
                  opacity={opacity}
                />
              );
            });
          })}
        </svg>
      </div>

      {/* 4. Top-Left Clean Brand Identity (NO PILL BOX - PURE CLEAN VECTOR) */}
      <div
        style={{
          position: 'absolute',
          top: 68,
          left: 76,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          zIndex: 5,
        }}
      >
        <GoogleGeminiLogo size={52} />
        <span
          style={{
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: 40,
            letterSpacing: 1.5,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          GOOGLE
        </span>
        {/* Verified Blue Tick */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: '#0084FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 900,
            boxShadow: '0 0 14px rgba(0, 132, 255, 0.8)',
          }}
        >
          ✓
        </div>
      </div>

      {/* 5. Center 2-Tier High-Impact Kinetic Headline */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: 76,
          right: 76,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 5,
        }}
      >
        {/* Tier 1: Sub-Hook in Neon Accent */}
        <div
          style={{
            color: accentColor,
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: 2,
            textTransform: 'uppercase',
            textShadow: `0 0 30px ${accentColor}AA`,
            marginBottom: 4,
          }}
        >
          {subText}
        </div>

        {/* Tier 2: Massive Glowing Pure White Headline */}
        <div
          style={{
            fontSize: 148,
            fontWeight: 950,
            color: '#FFFFFF',
            letterSpacing: -1,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.9), 0 0 80px rgba(255, 255, 255, 0.4), 0 10px 40px rgba(0,0,0,1)',
          }}
        >
          {titleText}
        </div>
      </div>
    </AbsoluteFill>
  );
};
