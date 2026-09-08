import React from "react";
import { useCurrentFrame, staticFile, OffthreadVideo, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { BoeingLogo, OpenAILogo, AnthropicLogo } from "../RealLogos";

export const Scene5Flight: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 540;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(0, 57, 166, 0.18)" secondaryGlow="rgba(16, 163, 127, 0.16)" />

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
              category="AERODYNAMICS & SIMULATION"
              title="BOEING 777 FLIGHT LAB"
              subtitle="One-shot interactive telemetry engineered in 30 minutes"
            />
          ) : (
            <KineticHeadline
              category="PARTICLE COMPUTATION"
              title="PLANETARY PARTICLE PHYSICS"
              subtitle="Half the tokens, half the cost, massive visual superiority"
            />
          )}
        </div>

        {/* Central Stage */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 ? (
            <div
              style={{
                width: 1400,
                height: 720,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(0, 57, 166, 0.4)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8), 0 0 50px rgba(0, 57, 166, 0.2)",
                background: "#000",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <div
                style={{
                  height: 60,
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(10, 15, 25, 0.9)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <BoeingLogo size={26} color="#38BDF8" />
                  <span style={{ fontWeight: 800, color: "#FFF", fontSize: 16 }}>
                    777-300ER MOTION STUDIES 001
                  </span>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ fontSize: 13, color: "#9CA3AF" }}>Groundspeed: 141 kt</span>
                  <span style={{ fontSize: 13, color: "#9CA3AF" }}>Pitch: 2.1°</span>
                  <span style={{ fontSize: 13, color: "#10B981", fontWeight: 700 }}>Real-time Kinematics</span>
                </div>
              </div>

              <div style={{ flex: 1, position: "relative" }}>
                <OffthreadVideo
                  src={staticFile("boeing_lumina.mp4")}
                  startFrom={Math.round(8 * fps)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                width: 1400,
                height: 720,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#000",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${spring({ frame: frame - 540, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <div
                style={{
                  height: 60,
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
                    $2.51 • 37,767 tok
                  </span>
                </div>

                <span style={{ fontSize: 13, fontWeight: 800, color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Earth vs Mars Impact Sim
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 13, padding: "3px 10px", borderRadius: 6, background: "rgba(16, 163, 127, 0.2)", color: "#10B981", fontWeight: 700 }}>
                    $1.67 • 25,159 tok
                  </span>
                  <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>GPT-6 Astra</span>
                  <OpenAILogo size={22} color="#10A37F" />
                </div>
              </div>

              <div style={{ flex: 1, position: "relative" }}>
                <OffthreadVideo
                  src={staticFile("collision_aimlapi.mp4")}
                  startFrom={Math.round(2 * fps)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
