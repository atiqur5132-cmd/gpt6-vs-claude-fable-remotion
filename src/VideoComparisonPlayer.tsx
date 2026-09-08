import React from "react";
import { OffthreadVideo, staticFile, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OpenAILogo, AnthropicLogo } from "./RealLogos";

export const VideoComparisonPlayer: React.FC<{
  videoSrc: string;
  titleLeft?: string;
  titleRight?: string;
  statLeft?: string;
  statRight?: string;
  startFromSec?: number;
  width?: number;
  height?: number;
}> = ({
  videoSrc,
  titleLeft = "Claude Fable 5.1",
  titleRight = "GPT-6 Astra",
  statLeft,
  statRight,
  startFromSec = 0,
  width = 1400,
  height = 760,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 24,
        background: "rgba(18, 20, 26, 0.85)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 30px 90px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 163, 127, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transform: `scale(${enter})`,
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Top Title Bar with Authentic Logos */}
      <div
        style={{
          height: 64,
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(10, 12, 16, 0.6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <AnthropicLogo size={24} color="#D97706" />
          <span style={{ fontWeight: 700, fontSize: 18, color: "#E5E7EB" }}>
            {titleLeft}
          </span>
          {statLeft && (
            <span
              style={{
                fontSize: 14,
                padding: "4px 10px",
                borderRadius: 6,
                background: "rgba(217, 119, 6, 0.15)",
                color: "#F59E0B",
                fontWeight: 600,
              }}
            >
              {statLeft}
            </span>
          )}
        </div>

        <div
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: "#6B7280",
            textTransform: "uppercase",
          }}
        >
          Direct Head-to-Head
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {statRight && (
            <span
              style={{
                fontSize: 14,
                padding: "4px 10px",
                borderRadius: 6,
                background: "rgba(16, 163, 127, 0.15)",
                color: "#10B981",
                fontWeight: 600,
              }}
            >
              {statRight}
            </span>
          )}
          <span style={{ fontWeight: 700, fontSize: 18, color: "#E5E7EB" }}>
            {titleRight}
          </span>
          <OpenAILogo size={24} color="#10A37F" />
        </div>
      </div>

      {/* Video Display Container */}
      <div
        style={{
          flex: 1,
          position: "relative",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <OffthreadVideo
          src={staticFile(videoSrc)}
          startFrom={Math.round(startFromSec * fps)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
