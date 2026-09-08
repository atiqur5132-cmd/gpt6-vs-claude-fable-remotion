import React from "react";
import { useCurrentFrame, staticFile, OffthreadVideo, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { BlenderLogo, AnthropicLogo, OpenAILogo } from "../RealLogos";

export const Scene3Villa: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 370;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(234, 118, 0, 0.15)" secondaryGlow="rgba(16, 163, 127, 0.15)" />

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
              category="BLENDER 3D SPATIAL BENCHMARK"
              title="THE MODERNIST VILLA TEST"
              subtitle="Same prompt, two radically different realities"
            />
          ) : (
            <KineticHeadline
              category="ASSET FIDELITY"
              title="WATER CAUSTICS & FOLIAGE"
              subtitle="Astra delivers production-ready materials"
            />
          )}
        </div>

        {/* Central Stage: Video Split Player */}
        <div
          style={{
            marginTop: 80,
            width: 1420,
            height: 720,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.8), 0 0 50px rgba(234, 118, 0, 0.1)",
            background: "#000",
            display: "flex",
            flexDirection: "column",
            transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
          }}
        >
          {/* Header Bar */}
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
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <AnthropicLogo size={22} color="#D97706" />
              <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>Claude Fable 5.1</span>
              <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(239, 68, 68, 0.2)", color: "#EF4444", fontWeight: 700 }}>
                Flat Mesh
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <BlenderLogo size={26} />
              <span style={{ fontSize: 14, fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.08em" }}>
                BLENDER RENDER ENGINES
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(16, 163, 127, 0.2)", color: "#10B981", fontWeight: 700 }}>
                Volumetric Shaders
              </span>
              <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>GPT-6 Astra</span>
              <OpenAILogo size={22} color="#10A37F" />
            </div>
          </div>

          {/* Actual Video Playback Layer */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <OffthreadVideo
              src={staticFile("villa_hesamation.mp4")}
              startFrom={Math.round(2 * fps)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
