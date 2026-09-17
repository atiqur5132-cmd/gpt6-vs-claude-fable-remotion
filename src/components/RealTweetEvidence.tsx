import React from 'react';
import { Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';
import { XTwitterLogo } from '../RealLogos';
import { CheckCircle2, ShieldCheck, ExternalLink, Calendar, FileSearch, Sparkles, TrendingUp } from 'lucide-react';

interface RealTweetEvidenceProps {
  imageFile: string;
  authorName: string;
  handle: string;
  categoryTag: string;
  highlightText?: string;
  tweetUrl?: string;
  keyInsight?: string;
  statValue?: string;
  statLabel?: string;
  maxHeight?: number;
}

export const RealTweetEvidence: React.FC<RealTweetEvidenceProps> = ({
  imageFile,
  authorName,
  handle,
  categoryTag,
  highlightText,
  tweetUrl = 'https://x.com',
  keyInsight,
  statValue,
  statLabel,
  maxHeight = 680,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle documentary fade-in (STRICTLY NO 2.5D, NO PERSPECTIVE TILT, NO WOBBLE)
  const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });

  // Neon yellow digital highlighter sweep animation (sweeps across in 25 frames)
  const sweepProgress = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Natural documentary smooth scroll for long tweets (starts at frame 20, glides smoothly)
  const scrollOffset = interpolate(frame, [20, durationInFrames - 15], [0, 280], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 44px',
        boxSizing: 'border-box',
        gap: 32,
        opacity,
      }}
    >
      {/* LEFT PANE: 100% FLAT NATIVE 1:1 TWEET INSPECTION CONTAINER */}
      <div
        style={{
          flex: 1.25,
          height: '100%',
          maxHeight: 820,
          backgroundColor: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
          position: 'relative',
        }}
      >
        {/* Browser Top Navigation HUD */}
        <div
          style={{
            height: 48,
            backgroundColor: 'rgba(15, 23, 42, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18px',
            boxSizing: 'border-box',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EAB308' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22C55E' }} />
            <span style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace', marginLeft: 12 }}>
              x.com/{handle}/status
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#38BDF8', fontSize: 11, fontFamily: 'monospace', fontWeight: 700 }}>
            <FileSearch size={13} />
            <span>PRIMARY EVIDENCE INSPECTOR</span>
          </div>
        </div>

        {/* Flat Tweet Screenshot Viewport with Smooth Documentary Scroll */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#000000',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 680,
              transform: `translateY(-${scrollOffset}px)`,
            }}
          >
            <Img
              src={staticFile(`evidence_rsi/${imageFile}`)}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* Glowing Neon Highlighter Banner pinned at the bottom of the tweet card */}
          {highlightText && (
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 16,
                right: 16,
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(250, 204, 21, 0.6)',
                borderRadius: 12,
                padding: '12px 18px',
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                zIndex: 20,
              }}
            >
              {/* Animated Highlighter Sweep Progress Bar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${sweepProgress * 100}%`,
                  backgroundColor: 'rgba(250, 204, 21, 0.22)',
                  borderRight: '2px solid #FACC15',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FACC15',
                  boxShadow: '0 0 10px #FACC15',
                  flexShrink: 0,
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ color: '#FACC15', fontSize: 11, fontFamily: 'monospace', fontWeight: 900, marginRight: 8 }}>
                  VERIFIED CLAIM:
                </span>
                <span style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>
                  "{highlightText}"
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANE: DOCUMENTARY INTELLIGENCE DOSSIER (Fills the canvas, zero empty black space) */}
      <div
        style={{
          flex: 0.95,
          height: '100%',
          maxHeight: 820,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 20,
          padding: '32px 36px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Author Profile Header */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                padding: '4px 14px',
                borderRadius: 20,
              }}
            >
              <ShieldCheck size={14} color="#60A5FA" />
              <span style={{ color: '#60A5FA', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>
                {categoryTag}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>
              <XTwitterLogo size={16} color="#FFFFFF" />
              <span>VERIFIED SOURCE</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: '#1E293B',
                border: '2px solid rgba(59, 130, 246, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: 22,
                fontWeight: 900,
                fontFamily: 'monospace',
              }}
            >
              {authorName.charAt(0)}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 900 }}>{authorName}</span>
                <CheckCircle2 size={18} color="#1D9BF0" />
              </div>
              <div style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', marginTop: 2 }}>
                @{handle}
              </div>
            </div>
          </div>

          {/* Key Insight Box */}
          <div
            style={{
              backgroundColor: 'rgba(5, 8, 17, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 14,
              padding: '20px 24px',
              marginTop: 28,
            }}
          >
            <div style={{ color: '#64748B', fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
              DISCOVERY SIGNIFICANCE
            </div>
            <div style={{ color: '#E2E8F0', fontSize: 17, fontWeight: 700, marginTop: 8, lineHeight: 1.5 }}>
              {keyInsight || 'Landmark breakthrough confirming autonomous recursive self-improvement without human intervention or model weight retraining.'}
            </div>
          </div>
        </div>

        {/* Telemetry Metric Bottom Strip */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 20,
          }}
        >
          <div style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ color: '#64748B', fontSize: 10, fontFamily: 'monospace' }}>VERIFICATION</div>
            <div style={{ color: '#22C55E', fontSize: 15, fontWeight: 800, fontFamily: 'monospace', marginTop: 2 }}>
              CONFIRMED
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ color: '#64748B', fontSize: 10, fontFamily: 'monospace' }}>IMPACT RATING</div>
            <div style={{ color: '#38BDF8', fontSize: 15, fontWeight: 800, fontFamily: 'monospace', marginTop: 2 }}>
              FRONTIER AGI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
