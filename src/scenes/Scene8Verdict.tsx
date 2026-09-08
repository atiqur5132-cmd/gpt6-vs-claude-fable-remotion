import React from "react";
import { useCurrentFrame, staticFile, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { OpenAILogo } from "../RealLogos";

export const Scene8Verdict: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 220;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(16, 163, 127, 0.25)" secondaryGlow="rgba(56, 189, 248, 0.2)" />

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
              category="SIMPLEBENCH HUMAN BASELINE"
              title="THE SYNTHETIC TIE"
              subtitle="Both models cross the 83.7% human benchmark"
            />
          ) : (
            <KineticHeadline
              category="THE NEW PARADIGM"
              title="AUTONOMOUS DIGITAL OPERATOR"
              subtitle="The gap between chatbots and computer operators"
            />
          )}
        </div>

        {/* Central Stage */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 ? (
            <div
              style={{
                width: 980,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#FFF",
                transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <img
                src={staticFile("simplebench_chart.png")}
                alt="SimpleBench Chart"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: `scale(${spring({ frame: frame - 220, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              {/* Grand Glowing Emblem Card */}
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(16, 163, 127, 0.2), rgba(6, 78, 59, 0.4))",
                  border: "2px solid rgba(16, 163, 127, 0.6)",
                  boxShadow: "0 0 80px rgba(16, 163, 127, 0.4), inset 0 0 30px rgba(16, 163, 127, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 30,
                }}
              >
                <OpenAILogo size={80} color="#10A37F" />
              </div>

              <div
                style={{
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                GPT-6 Astra
              </div>

              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#10B981",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: 12,
                }}
              >
                Autonomous Computer Operator
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
