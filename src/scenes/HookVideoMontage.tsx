import React from 'react';
import { AbsoluteFill, Video, staticFile, useCurrentFrame } from 'remotion';

interface HookVideoMontageProps {
  clip: 'mirochill' | 'fly_duel' | 'cheap_models';
}

export const HookVideoMontage: React.FC<HookVideoMontageProps> = ({ clip }) => {
  const frame = useCurrentFrame();

  const configs = {
    mirochill: {
      src: 'daily_evidence/mirochill_demo.mp4',
      startFrom: 60,
      title: 'GPT-6 ASTRA: 50-MIN PROCEDURAL 3D WORLD',
      subtitle: 'VERIFIED UNCUT FOOTAGE • ONE-SHOT WEBGL ENGINE',
      badge: 'REAL DEMO CAPTURE',
    },
    fly_duel: {
      src: 'daily_evidence/fly_duel_demo.mp4',
      startFrom: 0,
      title: 'RECURSIVE AI: AGENT TEACHES STUDENT AGENT',
      subtitle: 'AUTONOMOUS RUBIK\'S CUBE DUEL • ZERO HUMAN TUNING',
      badge: 'PHYSICS SIMULATION',
    },
    cheap_models: {
      src: 'daily_evidence/max_cheap_models.mp4',
      startFrom: 30,
      title: 'CHEAP TIER SHOOTOUT: 60 FPS 3D VOXEL REEF',
      subtitle: 'DEEPSEEK V4.1 FLASH vs GEMINI 3.8 FLASH • 2-SECOND RELOAD',
      badge: '4-WAY BENCHMARK',
    },
  };

  const current = configs[clip];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* 100% FULL SCREEN Video Canvas (Uncropped, Edge-to-Edge) */}
      <Video
        src={staticFile(current.src)}
        startFrom={current.startFrom}
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: '#000000',
        }}
      />

      {/* Kinetic Broadcast Lower-Third Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 50,
          background: 'rgba(6, 10, 18, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(16, 185, 129, 0.5)',
          borderRadius: 10,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.9)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#10B981',
            boxShadow: '0 0 12px #10B981',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: 0.5,
                fontFamily: 'sans-serif',
              }}
            >
              {current.title}
            </span>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: 4,
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#10B981',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                fontFamily: 'monospace',
              }}
            >
              {current.badge}
            </span>
          </div>
          <span
            style={{
              color: '#94A3B8',
              fontSize: 13,
              fontFamily: 'sans-serif',
              fontWeight: 500,
            }}
          >
            {current.subtitle}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
