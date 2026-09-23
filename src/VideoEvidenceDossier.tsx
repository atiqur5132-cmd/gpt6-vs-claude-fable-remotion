import React from 'react';
import { AbsoluteFill, Video, staticFile, interpolate, useCurrentFrame } from 'remotion';

interface VideoEvidenceDossierProps {
  videoPath: string;
  author: string;
  handle: string;
  sourceUrl: string;
  title: string;
  tagText?: string;
  mode?: 'dossier16x9' | 'mirror' | 'cinema';
  playbackRate?: number;
  startFromFrame?: number;
}

export const VideoEvidenceDossier: React.FC<VideoEvidenceDossierProps> = ({
  videoPath,
  author,
  handle,
  sourceUrl,
  title,
  tagText = "REAL UNEDITED ARTIFACT PLAYBACK",
  mode = 'dossier16x9',
  playbackRate = 1.0,
  startFromFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const subtleZoom = interpolate(frame, [0, 300], [1.0, 1.02], { extrapolateRight: 'clamp' });

  // Mode 1: Dynamic Blurred Mirror (For vertical, square, or split 1280x1440 videos)
  if (mode === 'mirror') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#020617', overflow: 'hidden' }}>
        {/* Layer 1: Ambient Scaled & Blurred Mirror Background (Eliminates all black voids) */}
        <AbsoluteFill
          style={{
            filter: 'blur(45px) brightness(0.35)',
            transform: 'scale(1.25)',
          }}
        >
          <Video
            src={staticFile(videoPath)}
            playbackRate={playbackRate}
            startFrom={startFromFrame}
            muted={true}
            volume={0}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>

        {/* Layer 2: Centered Crisp Video in Sleek Glass Container */}
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `scale(${subtleZoom})`,
          }}
        >
          <div
            style={{
              height: 940,
              width: 835, // 1280x1440 aspect fit
              backgroundColor: '#070B14',
              borderRadius: 18,
              border: '1px solid rgba(56, 189, 248, 0.35)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* macOS Chrome Header */}
            <div
              style={{
                height: 44,
                backgroundColor: '#0B1120',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#38BDF8',
                  fontWeight: 600,
                  backgroundColor: 'rgba(2, 6, 23, 0.9)',
                  padding: '3px 14px',
                  borderRadius: 10,
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  fontFamily: 'monospace',
                }}
              >
                🔒 {sourceUrl}
              </div>
              <div style={{ width: 32 }} />
            </div>

            {/* Video Viewport */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              <Video
                src={staticFile(videoPath)}
                playbackRate={playbackRate}
                startFrom={startFromFrame}
                muted={true}
                volume={0}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </AbsoluteFill>

        {/* Lower Third Verified Evidence Telemetry Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 48,
            background: 'rgba(7, 11, 20, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: 10,
            padding: '10px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.9)',
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px #10B981',
            }}
          />
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFFF', letterSpacing: 0.8 }}>
              {title}
            </div>
            <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2, fontFamily: 'monospace' }}>
              VERIFIED TWEET DEMO • {author} ({handle})
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // Mode 2: Canonical 16:9 Video Dossier (1760x960)
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030712',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Background Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* 1760x960 Dossier Container */}
      <div
        style={{
          width: 1760,
          height: 960,
          backgroundColor: '#070B14',
          borderRadius: 16,
          border: '1px solid rgba(56, 189, 248, 0.35)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transform: `scale(${subtleZoom})`,
        }}
      >
        {/* macOS Chrome Header */}
        <div
          style={{
            height: 48,
            backgroundColor: '#0F172A',
            borderBottom: '1px solid rgba(51, 65, 85, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
            </div>
            <span
              style={{
                marginLeft: 12,
                color: '#94A3B8',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              EVIDENCE DOSSIER • {author.toUpperCase()} ({handle})
            </span>
          </div>

          <div
            style={{
              fontSize: 13,
              color: '#38BDF8',
              fontWeight: 600,
              backgroundColor: 'rgba(2, 6, 23, 0.9)',
              padding: '4px 18px',
              borderRadius: 12,
              border: '1px solid rgba(56, 189, 248, 0.3)',
              fontFamily: 'monospace',
            }}
          >
            🔒 {sourceUrl}
          </div>

          <div
            style={{
              padding: '4px 14px',
              borderRadius: 6,
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#10B981',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            1080P VERIFIED
          </div>
        </div>

        {/* Video Viewport */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#000000' }}>
          <Video
            src={staticFile(videoPath)}
            playbackRate={playbackRate}
            startFrom={startFromFrame}
            muted={true}
            volume={0}
            style={{
              width: '100%',
              height: '100%',
              objectFit: mode === 'cinema' ? 'cover' : 'contain',
            }}
          />

          {/* Sleek Lower Overlay Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 28,
              background: 'rgba(10, 15, 28, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 8,
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#38BDF8',
                boxShadow: '0 0 10px #38BDF8',
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#F8FAFC' }}>{title}</span>
            <span style={{ fontSize: 11, color: '#94A3B8' }}>• {tagText}</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
