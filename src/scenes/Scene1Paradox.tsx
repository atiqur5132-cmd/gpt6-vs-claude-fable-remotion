import React from "react";
import { useCurrentFrame, staticFile, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { VoxDocumentCard } from "../VoxDocumentCard";
import { VideoComparisonPlayer } from "../VideoComparisonPlayer";
import { AnthropicLogo, OpenAILogo } from "../RealLogos";

export const Scene1Paradox: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 3 sequential visual beats (Kill the frozen screen rule)
  // Beat 1: 0 - 200 (Artificial Analysis chart inspection)
  // Beat 2: 200 - 380 (Hesamation tweet card)
  // Beat 3: 380 - 600 (Villa comparison teaser)

  const isBeat1 = frame < 200;
  const isBeat2 = frame >= 200 && frame < 380;
  const isBeat3 = frame >= 380;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(16, 163, 127, 0.16)" secondaryGlow="rgba(217, 119, 6, 0.14)" />

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
        {/* Top Kinetic Viewer Headline (Strictly 3-5 words) */}
        <div style={{ position: "absolute", top: 40 }}>
          {isBeat1 && (
            <KineticHeadline
              category="FRONTIER INTELLIGENCE INDEX"
              title="THE LEADERBOARD PARADOX"
              subtitle="Claude Fable 5.1 beats GPT-6 Astra on paper"
            />
          )}
          {isBeat2 && (
            <KineticHeadline
              category="COMMUNITY REACTION"
              title="BENCHMARK COLLAPSE IN 3D"
              subtitle="Real-world tests break synthetic rankings"
            />
          )}
          {isBeat3 && (
            <KineticHeadline
              category="PHYSICAL GROUND TRUTH"
              title="SYNTHETIC BENCHMARK MIRAGE"
              subtitle="The moment models touch actual 3D engines"
            />
          )}
        </div>

        {/* Central Stage Visual Beats */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 && (
            <div
              style={{
                display: "flex",
                gap: 40,
                alignItems: "center",
                transform: `scale(${spring({ frame, fps, config: { damping: 14, stiffness: 120 } })})`,
              }}
            >
              {/* Intelligence Leaderboard Inspection Card */}
              <div
                style={{
                  width: 580,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                  background: "#11141A",
                }}
              >
                <img
                  src={staticFile("intel_chart.png")}
                  alt="Intelligence Chart"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Side Metric Score Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Claude Fable Card */}
                <div
                  style={{
                    width: 380,
                    padding: "24px 28px",
                    borderRadius: 20,
                    background: "rgba(30, 25, 20, 0.9)",
                    border: "1px solid rgba(217, 119, 6, 0.4)",
                    boxShadow: "0 0 40px rgba(217, 119, 6, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <AnthropicLogo size={32} color="#D97706" />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 18, color: "#FFF" }}>Claude Fable 5.1</div>
                      <div style={{ fontSize: 13, color: "#9CA3AF" }}>Official Index Score</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#F59E0B" }}>57</div>
                </div>

                {/* GPT-6 Astra Card */}
                <div
                  style={{
                    width: 380,
                    padding: "24px 28px",
                    borderRadius: 20,
                    background: "rgba(16, 28, 24, 0.9)",
                    border: "1px solid rgba(16, 163, 127, 0.4)",
                    boxShadow: "0 0 40px rgba(16, 163, 127, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <OpenAILogo size={32} color="#10A37F" />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 18, color: "#FFF" }}>GPT-6 Astra</div>
                      <div style={{ fontSize: 13, color: "#9CA3AF" }}>Official Index Score</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#10B981" }}>55</div>
                </div>
              </div>
            </div>
          )}

          {isBeat2 && (
            <VoxDocumentCard
              authorName="ℏεsam"
              authorHandle="Hesamation"
              dateStr="Sep 4, 2026"
              badgeText="325K Views"
              content={
                <div>
                  GPT 6 Astra vs Fable 5.1 villa scene in Blender.
                  <div style={{ margin: "14px 0", color: "#9CA3AF" }}>
                    Artificial Analysis intelligence score:
                    <br />• GPT 6 Astra: 61
                    <br />• Fable 5.1: 66
                  </div>
                </div>
              }
              highlightText="something must be catastrophically wrong with that score."
              rotateX={8}
              rotateY={-5}
              width={820}
            />
          )}

          {isBeat3 && (
            <VideoComparisonPlayer
              videoSrc="villa_hesamation.mp4"
              titleLeft="Claude Fable 5.1"
              titleRight="GPT-6 Astra"
              statLeft="Low-Poly Box Mesh"
              statRight="Photorealistic Caustics"
              startFromSec={2}
              width={1320}
              height={660}
            />
          )}
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
