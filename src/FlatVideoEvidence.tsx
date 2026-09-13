import React from 'react';
import { AbsoluteFill, Video, staticFile } from 'remotion';

interface FlatVideoEvidenceProps {
  videoPath: string;
  sourceUrl: string;
  title: string;
  telemetryLabel?: string;
  playbackRate?: number;
  startFromFrame?: number;
}

export const FlatVideoEvidence: React.FC<FlatVideoEvidenceProps> = ({
  videoPath,
  sourceUrl,
  title,
  telemetryLabel = "1080P REAL UNEDITED PLAYBACK",
  playbackRate = 1.0,
  startFromFrame = 0,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* 100% FULL SCREEN Video Canvas (Uncropped, Edge-to-Edge, Authentic 1080p) */}
      <Video
        src={staticFile(videoPath)}
        playbackRate={playbackRate}
        startFrom={startFromFrame}
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: '#000000',
        }}
      />

      {/* Minimal Sleek Documentary Telemetry Badge (Unobtrusive lower third) */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 48,
          background: 'rgba(8, 12, 22, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(16, 185, 129, 0.45)',
          borderRadius: 10,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.85)',
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
          <span
            style={{
              color: '#F8FAFC',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 0.5,
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: '#94A3B8',
              fontSize: 13,
              fontFamily: 'monospace',
              letterSpacing: 0.3,
            }}
          >
            {sourceUrl} • {telemetryLabel}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
