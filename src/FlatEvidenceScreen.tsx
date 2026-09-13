import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

interface FlatEvidenceScreenProps {
  imagePath: string;
  author: string;
  handle: string;
  sourceUrl?: string;
  badgeText?: string;
  zoomScale?: number;
  translateY?: number;
}

export const FlatEvidenceScreen: React.FC<FlatEvidenceScreenProps> = ({
  imagePath,
  author,
  handle,
  sourceUrl,
  badgeText = "AUTHENTIC REAL EVIDENCE",
  zoomScale = 1.0,
  translateY = 0,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#070B14',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
      }}
    >
      {/* 100% Flat Native Desktop Frame (Zero 2.5D, Zero Tilt, Real Proof) */}
      <div
        style={{
          width: 1720,
          height: 940,
          background: '#0D1322',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          position: 'relative',
        }}
      >
        {/* Browser Top Navigation Bar */}
        <div
          style={{
            height: 54,
            background: '#111827',
            borderBottom: '1px solid rgba(55, 65, 81, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            zIndex: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
            <span style={{ color: '#E2E8F0', fontSize: 14, fontWeight: 600, marginLeft: 16 }}>
              {author} ({handle})
            </span>
          </div>

          <div
            style={{
              padding: '6px 20px',
              background: '#090D16',
              borderRadius: 6,
              border: '1px solid rgba(75, 85, 99, 0.5)',
              color: '#94A3B8',
              fontFamily: 'monospace',
              fontSize: 14,
            }}
          >
            {sourceUrl || `x.com/${handle.replace('@', '')}`}
          </div>

          <div
            style={{
              padding: '4px 12px',
              borderRadius: 4,
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38BDF8',
              fontFamily: 'sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
            }}
          >
            {badgeText}
          </div>
        </div>

        {/* Content Body: Raw 100% Flat Native Desktop Screenshot */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            background: '#000000',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Img
            src={staticFile(imagePath)}
            style={{
              width: '100%',
              height: 'auto',
              transform: `scale(${zoomScale}) translateY(${translateY}px)`,
              transformOrigin: 'center top',
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
