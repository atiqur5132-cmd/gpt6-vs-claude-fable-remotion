import React, { useMemo } from "react";
import { AbsoluteFill } from "remotion";
import { OpenAILogo, DeepSeekLogo } from "./RealLogos";

export type ThumbnailStyleVariant = "gpt6_astra_red" | "gpt6_sol_blue" | "deepseek_v4_blue" | "frontier_leaks_blue";

interface ThumbnailProps {
  variant?: ThumbnailStyleVariant;
}

// 3D Perspective Wave Grid Generator (exact math matching the channel reference)
const WaveMesh: React.FC<{ themeColor: "blue" | "red" }> = ({ themeColor }) => {
  const isRed = themeColor === "red";
  const primaryColor = isRed ? "#FF4444" : "#38BDF8";
  const dimColor = isRed ? "rgba(255, 68, 68, 0.22)" : "rgba(56, 189, 248, 0.22)";

  const { dots, lines } = useMemo(() => {
    const width = 1920;
    const height = 1080;
    const rows = 40;
    const cols = 64;
    const grid: { x: number; y: number; z: number; size: number; opacity: number }[][] = [];

    for (let r = 0; r < rows; r++) {
      const v = r / (rows - 1);
      const z = 340 + v * 1750;
      grid[r] = [];

      for (let c = 0; c < cols; c++) {
        const u = c / (cols - 1);
        const x = (u - 0.44) * 3000;
        // Natural landscape undulating waves
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
        if (p.x >= -60 && p.x <= width + 60 && p.y >= 240 && p.y <= height + 60) {
          allDots.push(p);

          if (c < cols - 1) {
            const nextP = grid[r][c + 1];
            if (nextP.x >= -60 && nextP.x <= width + 60 && nextP.y >= 240 && nextP.y <= height + 60) {
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

      {/* Wireframe Grid Lines */}
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

      {/* 3D Wave Perspective Dots */}
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

export const Thumbnail: React.FC<ThumbnailProps> = ({ variant = "gpt6_astra_red" }) => {
  let borderColor = "#FF1818";
  let theme: "blue" | "red" = "red";
  let logoNode = <OpenAILogo size={52} color="#FFFFFF" />;
  let companyName = "OPENAI";
  let preTitle = "BEST USECASE";
  let preTitleColor = "#FF4848";
  let heroTitle = "GPT-6 ASTRA";
  let heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(255, 60, 60, 0.95), 0 0 90px rgba(255, 30, 30, 0.75), 0 0 140px rgba(255, 10, 10, 0.4)";
  let streakGradient = "radial-gradient(ellipse at center, rgba(255, 35, 35, 0.4) 0%, rgba(255, 35, 35, 0.15) 45%, transparent 70%)";

  if (variant === "gpt6_sol_blue") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <OpenAILogo size={52} color="#FFFFFF" />;
    companyName = "OPENAI";
    preTitle = "INTRODUCING";
    preTitleColor = "#38BDF8";
    heroTitle = "GPT-6 'SOL'";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
  } else if (variant === "deepseek_v4_blue") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <DeepSeekLogo size={52} />;
    companyName = "DEEPSEEK";
    preTitle = "INTRODUCING";
    preTitleColor = "#38BDF8";
    heroTitle = "DEEPSEEK V4.1";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
  } else if (variant === "frontier_leaks_blue") {
    borderColor = "#007BFF";
    theme = "blue";
    logoNode = <OpenAILogo size={52} color="#FFFFFF" />;
    companyName = "OPENAI";
    preTitle = "NEW LEAKS ON";
    preTitleColor = "#38BDF8";
    heroTitle = "GPT-6 & FABLE";
    heroGlow = "0 0 20px #FFFFFF, 0 0 45px rgba(0, 160, 255, 0.95), 0 0 90px rgba(0, 130, 255, 0.75), 0 0 140px rgba(0, 90, 255, 0.45)";
    streakGradient = "radial-gradient(ellipse at center, rgba(0, 130, 255, 0.4) 0%, rgba(0, 130, 255, 0.15) 45%, transparent 70%)";
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

      {/* 3. Authentic High-Energy Nebula Light Beam in Upper Right */}
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

      {/* Subtle ambient light pool behind title */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: 700,
          height: 500,
          background: streakGradient,
          filter: "blur(85px)",
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* 4. Exact 3D Perspective Wave Grid */}
      <WaveMesh themeColor={theme} />

      {/* 5. Main Foreground Typography Lockup */}
      <div
        style={{
          position: "absolute",
          top: 135,
          left: 115,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          zIndex: 20,
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
              fontSize: 40,
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
            fontSize: 54,
            fontWeight: 800,
            letterSpacing: 2.2,
            color: preTitleColor,
            textTransform: "uppercase",
            textShadow: `0 0 25px ${preTitleColor}88, 0 4px 12px rgba(0, 0, 0, 0.9)`,
          }}
        >
          {preTitle}
        </div>

        {/* Hero Title (Impact / Arial Black wide heavy stroke weight) */}
        <div
          style={{
            marginTop: 8,
            fontSize: 162,
            fontWeight: 900,
            fontFamily: '"Arial Black", "Montserrat", system-ui, sans-serif',
            color: "#FFFFFF",
            letterSpacing: -2,
            lineHeight: 0.95,
            textTransform: "uppercase",
            textShadow: heroGlow,
          }}
        >
          {heroTitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};
