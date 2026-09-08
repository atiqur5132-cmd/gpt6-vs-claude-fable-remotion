import React from "react";
import { useCurrentFrame, staticFile, OffthreadVideo, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../ParallaxCameraScene";
import { Atmosphere } from "../Atmosphere";
import { KineticHeadline } from "../KineticHeadline";
import { OpenAILogo, AnthropicLogo } from "../RealLogos";

export const Scene2Operator: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isBeat1 = frame < 330;
  const isBeat2 = frame >= 330 && frame < 680;
  const isBeat3 = frame >= 680;

  return (
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames}>
      <Atmosphere primaryGlow="rgba(16, 163, 127, 0.2)" secondaryGlow="rgba(56, 189, 248, 0.1)" />

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
              category="OPENAI FRONTIER LAUNCH"
              title="THE COMPUTER OPERATOR"
              subtitle="Anything you can do on a computer, Astra can do fast"
            />
          )}
          {isBeat2 && (
            <KineticHeadline
              category="VERIFIED FRONTIER METRICS"
              title="NEAR-PERFECT BENCHMARKS"
              subtitle="ARC-AGI-3, ExploitBench, and 1.05M tokens"
            />
          )}
          {isBeat3 && (
            <KineticHeadline
              category="THE 2-POINT DELTA"
              title="LEADERBOARD DISCONNECT"
              subtitle="Synthetic testing places Fable 5.1 above Astra"
            />
          )}
        </div>

        {/* Central Stage */}
        <div style={{ marginTop: 80 }}>
          {isBeat1 && (
            <div
              style={{
                width: 1200,
                height: 620,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(16, 163, 127, 0.3)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(16, 163, 127, 0.15)",
                background: "#000",
                position: "relative",
              }}
            >
              <OffthreadVideo
                src={staticFile("openai_launch.mp4")}
                startFrom={Math.round(5 * fps)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(10, 12, 16, 0.8)",
                  padding: "8px 18px",
                  borderRadius: 12,
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <OpenAILogo size={22} color="#10A37F" />
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FFF" }}>
                  Autonomous Desktop Operator Mode
                </span>
              </div>
            </div>
          )}

          {isBeat2 && (
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {/* Metric 1 */}
              <div
                style={{
                  width: 360,
                  padding: "40px 32px",
                  borderRadius: 24,
                  background: "rgba(18, 22, 28, 0.9)",
                  border: "1px solid rgba(16, 163, 127, 0.4)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                  textAlign: "center",
                  transform: `translateY(${(1 - spring({ frame: frame - 330, fps, config: { damping: 14, stiffness: 120 } })) * 40}px)`,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: "#10B981", letterSpacing: "0.1em" }}>
                  ARC-AGI-3 SCORE
                </div>
                <div style={{ fontSize: 68, fontWeight: 900, color: "#FFF", margin: "14px 0" }}>99.9%</div>
                <div style={{ fontSize: 14, color: "#9CA3AF" }}>Near-Absolute Reasoning</div>
              </div>

              {/* Metric 2 */}
              <div
                style={{
                  width: 360,
                  padding: "40px 32px",
                  borderRadius: 24,
                  background: "rgba(18, 22, 28, 0.9)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                  textAlign: "center",
                  transform: `translateY(${(1 - spring({ frame: frame - 350, fps, config: { damping: 14, stiffness: 120 } })) * 40}px)`,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: "#38BDF8", letterSpacing: "0.1em" }}>
                  EXPLOITBENCH
                </div>
                <div style={{ fontSize: 68, fontWeight: 900, color: "#FFF", margin: "14px 0" }}>100%</div>
                <div style={{ fontSize: 14, color: "#9CA3AF" }}>Critical Cybersecurity Tier</div>
              </div>

              {/* Metric 3 */}
              <div
                style={{
                  width: 360,
                  padding: "40px 32px",
                  borderRadius: 24,
                  background: "rgba(18, 22, 28, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                  textAlign: "center",
                  transform: `translateY(${(1 - spring({ frame: frame - 370, fps, config: { damping: 14, stiffness: 120 } })) * 40}px)`,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: "#A855F7", letterSpacing: "0.1em" }}>
                  CONTEXT WINDOW
                </div>
                <div style={{ fontSize: 68, fontWeight: 900, color: "#FFF", margin: "14px 0" }}>1.05M</div>
                <div style={{ fontSize: 14, color: "#9CA3AF" }}>Full Multi-Hour Workflows</div>
              </div>
            </div>
          )}

          {isBeat3 && (
            <div
              style={{
                width: 960,
                padding: "36px 44px",
                borderRadius: 24,
                background: "rgba(18, 20, 26, 0.92)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.1em" }}>
                  ARTIFICIAL ANALYSIS SCOREBOARD
                </span>
                <span style={{ fontSize: 14, color: "#10B981", fontWeight: 700 }}>2-POINT DELTA</span>
              </div>

              {/* Fable Bar */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <AnthropicLogo size={20} color="#D97706" />
                    <span style={{ fontWeight: 700, color: "#FFF" }}>Claude Fable 5.1 (max with fallback)</span>
                  </div>
                  <span style={{ fontWeight: 800, color: "#F59E0B", fontSize: 20 }}>57</span>
                </div>
                <div style={{ height: 16, borderRadius: 8, background: "#1F2937", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "85%", background: "linear-gradient(90deg, #D97706, #F59E0B)" }} />
                </div>
              </div>

              {/* Astra Bar */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <OpenAILogo size={20} color="#10A37F" />
                    <span style={{ fontWeight: 700, color: "#FFF" }}>GPT-6 Astra (max)</span>
                  </div>
                  <span style={{ fontWeight: 800, color: "#10B981", fontSize: 20 }}>55</span>
                </div>
                <div style={{ height: 16, borderRadius: 8, background: "#1F2937", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "82%", background: "linear-gradient(90deg, #059669, #10B981)" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxCameraScene>
  );
};
