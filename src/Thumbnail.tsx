import React, { useMemo } from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { OpenAILogo, DeepSeekLogo, AnthropicLogo } from "./RealLogos";

export type ThumbnailStoryVariant =
  | "gpt6_leak_evidence"      // Red border, OpenAI verified, "THE $200 LIE" -> "GPT-6 LEAKED" + Real 1080p 3D World Demo
  | "cheap_ai_evidence"       // Blue border, DeepSeek verified, "THE $200 TRAP" -> "CHEAP AI WON." + Real 4-Way WebGL Reef
  | "frontier_trap_evidence"  // Red/Blue border, OpenAI + Anthropic, "THE FRONTIER LIE" -> "THE $200 TRAP" + Real Video
  | "pure_gpt6_leak"          // Exact channel style: Red border, OpenAI verified, "THE $200 LIE" -> "GPT-6 LEAKED" (Pure Wave)
  | "pure_the_200_trap"       // Exact channel style: Blue border, OpenAI verified, "THE FRONTIER LIE" -> "THE $200 TRAP" (Pure Wave)
  | "pure_cheap_ai_won";      // Exact channel style: Blue border, DeepSeek verified, "THE $200 TRAP" -> "CHEAP AI WON." (Pure Wave)

interface ThumbnailProps {
  variant?: ThumbnailStoryVariant;
}

// 3D Perspective Wave Grid Generator (exact math matching the channel reference)
const WaveMesh: React.FC<{ themeColor: "blue" | "red"; fullWidth?: boolean }> = ({
  themeColor,
  fullWidth = true,
}) => {
  const isRed = themeColor === "red";
  const primaryColor = isRed ? "#FF4444" : "#38BDF8";
  const dimColor = isRed ? "rgba(255, 68, 68, 0.22)" : "rgba(56, 189, 248, 0.22)";

  const { dots, lines } = useMemo(() => {
    const width = 1920;
    const height = 1080;
    const rows = 38;
    const cols = 60;
    const grid: { x: number; y: number; z: number; size: number; opacity: number }[][] = [];

    for (let r = 0; r < rows; r++) {
      const v = r / (rows - 1);
      const z = 340 + v * 1750;
      grid[r] = [];

      for (let c = 0; c < cols; c++) {
        const u = c / (cols - 1);
        const x = (u - 0.44) * 3000;
        const wave1 = Math.sin(u * Math.PI * 2.2 - 0.3) * 180;
        const wave2 = Math.cos(v * Math.PI * 1.5) * 160;
        const wave3 = Math.sin((u * 1.5 + v) * 3.8) * 60;
        const y = 350 - (wave1 + wave2 + wave3);

        const focal = 950;
        const projX = width * 0.5 + (x * focal) / z;
        const projY = height * 0.42 + (y * focal) / z;

        const size = Math.max(1.1, (1100 / z) * 2.6);
        const opacity = Math.min(1, Math.max(0.12, 1 - (z - 340) / 1650));

        grid[r][c] = { x: projX, y: projY, z, size, opacity };
      }
    }

    const allDots: { x: number; y: number; size: number; opacity: number }[] = [];
    const lineSegments: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const p = grid[r][c];
        if (p.x >= -60 && p.x <= width + 60 && p.y >= 230 && p.y <= height + 60) {
          allDots.push(p);

          if (c < cols - 1) {
            const nextP = grid[r][c + 1];
            if (nextP.x >= -60 && nextP.x <= width + 60 && nextP.y >= 230 && nextP.y <= height + 60) {
              lineSegments.push({
                x1: p.x,
                y1: p.y,
                x2: nextP.x,
                y2: nextP.y,
                opacity: p.opacity * 0.2,
              });
            }
          }
        }
      }
    }

    return { dots: allDots, lines: lineSegments };
  }, []);

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <defs>
        <radialGradient id={`dotGlow-${themeColor}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="60%" stopColor={primaryColor} stopOpacity="0.85" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {lines.map((l, i) => (
        <line
          key={`l-${i}`}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={dimColor}
          strokeWidth={0.7}
          strokeOpacity={l.opacity}
        />
      ))}

      {dots.map((d, i) => (
        <circle
          key={`d-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.size}
          fill={d.size > 2.2 ? `url(#dotGlow-${themeColor})` : primaryColor}
          opacity={d.opacity}
        />
      ))}
    </svg>
  );
};

// Verified Badge (Twitter / YouTube Blue Checkmark)
const VerifiedBadge: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ display: "inline-block", verticalAlign: "middle", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}
  >
    <circle cx="12" cy="12" r="11" fill="#1D9BF0" />
    <path
      d="M7.5 12.2L10.5 15.2L16.5 9.2"
      stroke="#FFFFFF"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Thumbnail: React.FC<ThumbnailProps> = ({ variant = "gpt6_leak_evidence" }) => {
  // Defaults matching the video's core story
  let borderColor = "#FF1818";
  let theme: "blue" | "red" = "red";
  let logoNode = <OpenAILogo size={50} color="#FFFFFF" />;
  let companyName = "OPENAI";
  let preTitle = "THE $200 LIE";
  let preTitleColor = "#FF4848";
  let heroTitleLine1 = "GPT-6";
  let heroTitleLine2 = "LEAKED";
  let heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(255, 60, 60, 0.95), 0 0 90px rgba(255, 30, 30, 0.75), 0 0 140px rgba(255, 10, 10, 0.4)";
  let streakGradient = "radial-gradient(ellipse at center, rgba(255, 35, 35, 0.4) 0%, rgba(255, 35, 35, 0.15) 45%, transparent 70%)";
  let showEvidence = true;
  let evidenceImage = "daily_evidence/thumb_hero_3d.png";
  let evidenceBadge = "• REAL 50-MIN 3D WORLD DEMO";

  if (variant === "cheap_ai_evidence") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <DeepSeekLogo size={50} />;
    companyName = "DEEPSEEK";
    preTitle = "THE $200 TRAP";
    preTitleColor = "#38BDF8";
    heroTitleLine1 = "CHEAP AI";
    heroTitleLine2 = "WON.";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
    showEvidence = true;
    evidenceImage = "daily_evidence/thumb_hero_shootout.png";
    evidenceBadge = "• REAL 4-WAY 60 FPS REEF";
  } else if (variant === "frontier_trap_evidence") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <OpenAILogo size={42} color="#FFFFFF" />
        <AnthropicLogo size={38} />
      </div>
    );
    companyName = "OPENAI & ANTHROPIC";
    preTitle = "THE FRONTIER LIE";
    preTitleColor = "#EF4444";
    heroTitleLine1 = "THE $200";
    heroTitleLine2 = "TRAP";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
    showEvidence = true;
    evidenceImage = "daily_evidence/thumb_hero_3d.png";
    evidenceBadge = "• GPT-6 ASTRA SECRET SHIPMENT";
  } else if (variant === "pure_gpt6_leak") {
    borderColor = "#FF1818";
    theme = "red";
    logoNode = <OpenAILogo size={52} color="#FFFFFF" />;
    companyName = "OPENAI";
    preTitle = "THE $200 LIE";
    preTitleColor = "#FF4848";
    heroTitleLine1 = "GPT-6";
    heroTitleLine2 = "LEAKED";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(255, 60, 60, 0.95), 0 0 90px rgba(255, 30, 30, 0.75), 0 0 140px rgba(255, 10, 10, 0.4)";
    streakGradient = "radial-gradient(ellipse at center, rgba(255, 35, 35, 0.4) 0%, rgba(255, 35, 35, 0.15) 45%, transparent 70%)";
    showEvidence = false;
  } else if (variant === "pure_the_200_trap") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <OpenAILogo size={52} color="#FFFFFF" />;
    companyName = "OPENAI";
    preTitle = "THE FRONTIER LIE";
    preTitleColor = "#38BDF8";
    heroTitleLine1 = "THE $200";
    heroTitleLine2 = "TRAP";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
    showEvidence = false;
  } else if (variant === "pure_cheap_ai_won") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <DeepSeekLogo size={52} />;
    companyName = "DEEPSEEK";
    preTitle = "THE $200 TRAP";
    preTitleColor = "#38BDF8";
    heroTitleLine1 = "CHEAP AI";
    heroTitleLine2 = "WON.";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
    showEvidence = false;
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02040B",
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 1. Signature Thick Outer Colored Border (Rounded Corners) */}
      <div
        style={{
          position: "absolute",
          inset: 14,
          border: `10px solid ${borderColor}`,
          borderRadius: 28,
          pointerEvents: "none",
          zIndex: 100,
          boxShadow: `inset 0 0 25px ${borderColor}44, 0 0 35px ${borderColor}66`,
        }}
      />

      {/* 2. Deep Atmospheric Cosmic Nebula Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, #050B1C 0%, #010207 100%)",
        }}
      />

      {/* 3. Nebula Light Streak in Upper Right */}
      <div
        style={{
          position: "absolute",
          top: "-25%",
          right: "-5%",
          width: 1100,
          height: 1100,
          background: streakGradient,
          transform: "rotate(-32deg) scale(1.6, 0.65)",
          filter: "blur(55px)",
          opacity: 0.95,
          zIndex: 2,
        }}
      />

      {/* 4. Exact 3D Perspective Wave Grid */}
      <WaveMesh themeColor={theme} fullWidth={!showEvidence} />

      {/* 5. Main Foreground Layout */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "70px 85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        {/* Left Side: Exact Channel Typography & Verified Branding */}
        <div
          style={{
            width: showEvidence ? 850 : 1700,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Header: Company Logo + Name + Verified Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>{logoNode}</div>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: 2,
                textTransform: "uppercase",
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.9)",
              }}
            >
              {companyName}
            </span>
            <VerifiedBadge size={28} />
          </div>

          {/* Subtitle / Pre-title */}
          <div
            style={{
              marginTop: 22,
              fontSize: showEvidence ? 50 : 54,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: preTitleColor,
              textTransform: "uppercase",
              textShadow: `0 0 25px ${preTitleColor}88, 0 4px 12px rgba(0, 0, 0, 0.9)`,
            }}
          >
            {preTitle}
          </div>

          {/* Hero Title (Huge, Bold, Glowing) */}
          <div
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.94,
              fontFamily: '"Arial Black", "Montserrat", system-ui, sans-serif',
              textTransform: "uppercase",
              textShadow: heroGlow,
            }}
          >
            <span
              style={{
                fontSize: showEvidence ? 136 : 160,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: -2,
              }}
            >
              {heroTitleLine1}
            </span>
            <span
              style={{
                fontSize: showEvidence ? 136 : 160,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: -2,
              }}
            >
              {heroTitleLine2}
            </span>
          </div>

          {/* Optional Catchphrase Tag below Title */}
          <div style={{ marginTop: 24 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 22,
                fontWeight: 800,
                color: theme === "red" ? "#FF6B6B" : "#38BDF8",
                background: theme === "red" ? "rgba(255, 107, 107, 0.12)" : "rgba(56, 189, 248, 0.12)",
                padding: "8px 20px",
                borderRadius: 8,
                border: `1.5px solid ${theme === "red" ? "rgba(255, 107, 107, 0.4)" : "rgba(56, 189, 248, 0.4)"}`,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {variant.includes("cheap")
                ? "$200 SUBSCRIPTION VS 0.002¢"
                : "UNCUT 50-MIN PROCEDURAL DEMO"}
            </span>
          </div>
        </div>

        {/* Right Side: Real Video Evidence Screen (100% Uncropped 16:9) */}
        {showEvidence && (
          <div
            style={{
              width: 860,
              height: 483.75, // 860 * 9 / 16 = exact 16:9! Zero crop!
              borderRadius: 18,
              overflow: "hidden",
              border: `2px solid ${borderColor}`,
              boxShadow: `0 25px 70px rgba(0,0,0,0.9), 0 0 50px ${borderColor}44`,
              position: "relative",
              backgroundColor: "#000000",
            }}
          >
            <Img
              src={staticFile(evidenceImage)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Evidence Telemetry Tag */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                background: "rgba(5, 8, 16, 0.94)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(16, 185, 129, 0.6)",
                borderRadius: 8,
                padding: "6px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
              <span style={{ color: "#E2E8F0", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>
                {evidenceBadge}
              </span>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
