import React from "react";
import { useCurrentFrame, staticFile, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";

export const Scene6Robotics: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 510;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(168, 85, 247, 0.16)" secondaryGlow="rgba(16, 163, 127, 0.16)" />

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
              category="EMBODIED AI & ROBOTICS"
              title="PHYSICAL ROBOTIC MANIPULATION"
              subtitle="2.4x higher completion rate while running 2.3x cheaper"
            />
          ) : (
            <KineticHeadline
              category="AA-OMNISCIENCE INDEX"
              title="THE HALLUCINATION ABYSS"
              subtitle="Astra cuts frontier hallucination from 73% down to 51%"
            />
          )}
        </div>

        {/* Central Stage */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 ? (
            <div
              style={{
                display: "flex",
                gap: 40,
                alignItems: "center",
                transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              {/* Robotics Chart */}
              <div
                style={{
                  width: 680,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                  background: "#FFF",
                }}
              >
                <img
                  src={staticFile("robotics_chart.png")}
                  alt="Robotics Benchmark"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Highlight Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div
                  style={{
                    width: 420,
                    padding: "28px 32px",
                    borderRadius: 20,
                    background: "rgba(20, 24, 32, 0.92)",
                    border: "1px solid rgba(16, 163, 127, 0.4)",
                    boxShadow: "0 0 40px rgba(16, 163, 127, 0.15)",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#10B981", letterSpacing: "0.1em" }}>
                    COMPLETION RATE
                  </div>
                  <div style={{ fontSize: 52, fontWeight: 900, color: "#FFF", margin: "10px 0" }}>2.4x Higher</div>
                  <div style={{ fontSize: 15, color: "#9CA3AF" }}>95% Astra vs 40% Fable 5.1</div>
                </div>

                <div
                  style={{
                    width: 420,
                    padding: "28px 32px",
                    borderRadius: 20,
                    background: "rgba(20, 24, 32, 0.92)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 0 40px rgba(56, 189, 248, 0.15)",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#38BDF8", letterSpacing: "0.1em" }}>
                    EXECUTION COST
                  </div>
                  <div style={{ fontSize: 52, fontWeight: 900, color: "#FFF", margin: "10px 0" }}>2.3x Cheaper</div>
                  <div style={{ fontSize: 15, color: "#9CA3AF" }}>$1.00 Astra vs $2.15 Fable 5.1</div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: 1200,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#FFF",
                transform: `scale(${spring({ frame: frame - 510, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <img
                src={staticFile("hallucination_chart.jpg")}
                alt="Hallucination Benchmark"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
