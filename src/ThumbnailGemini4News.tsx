import React from 'react';
import { AbsoluteFill } from 'remotion';
import { GoogleGeminiLogo } from './RealLogos';
import { ShieldCheck, Sparkles, Zap, Flame } from 'lucide-react';

export const ThumbnailGemini4News: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#02040A',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      {/* 1. Electric Blue Glowing Border Frame */}
      <div
        style={{
          position: 'absolute',
          inset: 28,
          border: '4px solid #0070F3',
          borderRadius: 28,
          boxShadow: 'inset 0 0 40px rgba(0, 112, 243, 0.4), 0 0 60px rgba(0, 112, 243, 0.5)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* 2. Cyber Perspective Grid Floor */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 480,
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 112, 243, 0.15) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1920 480" fill="none">
          {/* Perspective grid lines */}
          {Array.from({ length: 25 }).map((_, i) => {
            const x = (i - 12) * 160 + 960;
            return (
              <line
                key={i}
                x1={x}
                y1={480}
                x2={960 + (i - 12) * 20}
                y2={0}
                stroke="rgba(0, 112, 243, 0.35)"
                strokeWidth={1.5}
              />
            );
          })}
          {/* Horizontal grid lines */}
          {[60, 140, 240, 360, 440].map((y, i) => (
            <line
              key={i}
              x1={0}
              y1={y}
              x2={1920}
              y2={y}
              stroke="rgba(0, 112, 243, 0.4)"
              strokeWidth={2}
            />
          ))}
        </svg>
      </div>

      {/* 3. Top-Left Verified Google Brand Badge */}
      <div
        style={{
          position: 'absolute',
          top: 64,
          left: 68,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          backgroundColor: 'rgba(7, 11, 20, 0.85)',
          border: '1.5px solid rgba(0, 112, 243, 0.5)',
          borderRadius: 100,
          padding: '12px 28px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(0, 112, 243, 0.3)',
          zIndex: 5,
        }}
      >
        <GoogleGeminiLogo size={36} />
        <span style={{ color: '#FFFFFF', fontWeight: 900, fontSize: 24, letterSpacing: 1.5 }}>
          GOOGLE
        </span>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: '#0070F3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 900,
          }}
        >
          ✓
        </div>
      </div>

      {/* 4. Top-Right Red Alert Pill */}
      <div
        style={{
          position: 'absolute',
          top: 64,
          right: 68,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '1.5px solid #EF4444',
          borderRadius: 100,
          padding: '12px 28px',
          boxShadow: '0 0 30px rgba(239, 68, 68, 0.4)',
          zIndex: 5,
        }}
      >
        <Flame size={24} color="#EF4444" />
        <span style={{ color: '#EF4444', fontWeight: 900, fontSize: 22, letterSpacing: 2 }}>
          FIRST CHECKPOINT LEAK
        </span>
      </div>

      {/* 5. Center High-Impact Typography & Visuals */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1720,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        {/* Upper Sub-Tier in Bright Electric Cyan */}
        <div
          style={{
            color: '#00F0FF',
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: 8,
            textTransform: 'uppercase',
            textShadow: '0 0 30px rgba(0, 240, 255, 0.7)',
            marginBottom: 8,
          }}
        >
          UNMASKED IN ARENA
        </div>

        {/* Hero Title: Giant Bold Glowing White */}
        <div
          style={{
            fontSize: 136,
            fontWeight: 950,
            color: '#FFFFFF',
            letterSpacing: -2,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            textShadow: '0 0 60px rgba(0, 112, 243, 0.8), 0 10px 40px rgba(0,0,0,1)',
          }}
        >
          GEMINI 4 PRO
        </div>

        {/* Sub-Pill Comparison Tag */}
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 100,
            padding: '16px 44px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          <span style={{ color: '#F1F5F9', fontSize: 28, fontWeight: 800 }}>
            DISGUISED AS FLASH 3.8
          </span>
          <span style={{ color: '#00F0FF', fontSize: 28, fontWeight: 900 }}>•</span>
          <span style={{ color: '#22C55E', fontSize: 28, fontWeight: 900 }}>
            BEATS GPT-6 ASTRA?
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
