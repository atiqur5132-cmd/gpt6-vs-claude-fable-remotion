import React from "react";
import { useCurrentFrame, staticFile, OffthreadVideo, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { AppleLogo } from "../RealLogos";

export const Scene7InsaneWorkflows: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 280;
  const isBeat2 = frame >= 280 && frame < 560;
  const isBeat3 = frame >= 560;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(16, 163, 127, 0.18)" secondaryGlow="rgba(255, 255, 255, 0.12)" />

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
          {isBeat1 && (
            <KineticHeadline
              category="CODE ARENA WEBDEV"
              title="#1 PARETO FRONTIER"
              subtitle="1797 Arena Score dominating the Pareto curve"
            />
          )}
          {isBeat2 && (
            <KineticHeadline
              category="DESKTOP TO MOBILE COMPILATION"
              title="AAA GAMING ON IPAD"
              subtitle="Batman & Skyrim running natively with touch controls"
            />
          )}
          {isBeat3 && (
            <KineticHeadline
              category="AUTONOMOUS RESEARCH WORKFLOWS"
              title="3D PLANETARY TIMELINE"
              subtitle="Built in 30 minutes using only 4% weekly quota"
            />
          )}
        </div>

        {/* Central Stage */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 && (
            <div
              style={{
                width: 1100,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#FFF",
                transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <img
                src={staticFile("arena_pareto.jpg")}
                alt="Arena Pareto Chart"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          {isBeat2 && (
            <div
              style={{
                width: 1200,
                height: 660,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#000",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${spring({ frame: frame - 280, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <div
                style={{
                  height: 56,
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(18, 20, 26, 0.9)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <AppleLogo size={20} color="#FFF" />
                  <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>
                    iPad Mini • Native Local Execution
                  </span>
                </div>
                <span style={{ fontSize: 13, color: "#10B981", fontWeight: 700 }}>
                  Zero Cloud Streaming
                </span>
              </div>

              <div style={{ flex: 1, position: "relative" }}>
                <OffthreadVideo
                  src={staticFile("ipad_ammaar.mp4")}
                  startFrom={Math.round(4 * fps)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          )}

          {isBeat3 && (
            <div
              style={{
                width: 1320,
                height: 660,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.8)",
                background: "#000",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${spring({ frame: frame - 560, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              <div
                style={{
                  height: 56,
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(18, 20, 26, 0.9)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontWeight: 700, color: "#FFF", fontSize: 16 }}>
                  earth. • 300,000 Years Geological Timeline
                </span>
                <span style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700 }}>
                  Single Prompt + /goal • 4% Weekly Limit
                </span>
              </div>

              <div style={{ flex: 1, position: "relative" }}>
                <OffthreadVideo
                  src={staticFile("earth_priyesh.mp4")}
                  startFrom={Math.round(20 * fps)}
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
