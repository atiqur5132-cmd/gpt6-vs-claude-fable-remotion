import React from "react";
import { useCurrentFrame, staticFile, OffthreadVideo, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { AnthropicLogo, OpenAILogo } from "../RealLogos";

export const Scene4Porsche: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 360;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(234, 179, 8, 0.16)" secondaryGlow="rgba(16, 163, 127, 0.14)" />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 60px",
        }}
      >
        {/* Kinetic Headline */}
        <div style={{ position: "absolute", top: 40 }}>
          {isBeat1 ? (
            <KineticHeadline
              category="HARDWARE & CAD REASONING"
              title="PORSCHE 911 GT3 RS"
              subtitle="Same runtime, same budget, astronomical fidelity gap"
            />
          ) : (
            <KineticHeadline
              category="AERODYNAMIC FIDELITY"
              title="AERODYNAMIC RACE SPLITTERS"
              subtitle="Astra builds production assets while Fable builds toys"
            />
          )}
        </div>

        {/* Video Player Stage */}
        <div
          style={{
            marginTop: 80,
            width: 1380,
            height: 720,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
            background: "#000",
            display: "flex",
            flexDirection: "column",
            transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
          }}
        >
          {/* Header with Exact Pricing */}
          <div
            style={{
              height: 64,
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(14, 16, 22, 0.9)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <AnthropicLogo size={22} color="#D97706" />
              <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>Fable 5.1</span>
              <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(255, 255, 255, 0.08)", color: "#F59E0B", fontWeight: 700 }}>
                $114.41 • 2.56 hrs
              </span>
            </div>

            <span style={{ fontSize: 13, fontWeight: 800, color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Side-by-Side 3D Mesh
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(16, 163, 127, 0.2)", color: "#10B981", fontWeight: 700 }}>
                $132.03 • 2.58 hrs
              </span>
              <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>GPT-6 Astra</span>
              <OpenAILogo size={22} color="#10A37F" />
            </div>
          </div>

          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <OffthreadVideo
              src={staticFile("porsche_atomic.mp4")}
              startFrom={Math.round(4 * fps)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
