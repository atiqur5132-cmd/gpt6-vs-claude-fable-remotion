import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { OpenAILogo, AnthropicLogo, DeepSeekLogo, GoogleGeminiLogo } from "./RealLogos";

interface ThumbnailProps {
  variant?: "hypocrisy" | "shootout" | "leak";
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ variant = "hypocrisy" }) => {
  if (variant === "shootout") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#060913",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background Atmospheric Glows */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: 900,
            height: 900,
            background: "radial-gradient(circle, rgba(0, 112, 243, 0.28) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: 1000,
            height: 1000,
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Subtle high-tech grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.7,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "60px 72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Left Column (Text & Badges) */}
          <div
            style={{
              width: 740,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 22,
            }}
          >
            {/* Authentic Brand Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 24px",
                  background: "rgba(10, 18, 36, 0.88)",
                  border: "1.5px solid rgba(56, 189, 248, 0.5)",
                  borderRadius: 14,
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <DeepSeekLogo size={36} />
                <span style={{ color: "#38BDF8", fontWeight: 800, fontSize: 20, letterSpacing: -0.2 }}>
                  DeepSeek V4.1
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 24px",
                  background: "rgba(10, 18, 36, 0.88)",
                  border: "1.5px solid rgba(16, 185, 129, 0.5)",
                  borderRadius: 14,
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <GoogleGeminiLogo size={34} />
                <span style={{ color: "#10B981", fontWeight: 800, fontSize: 20, letterSpacing: -0.2 }}>
                  Gemini 3.8
                </span>
              </div>
            </div>

            {/* Category Alert Pill */}
            <div
              style={{
                alignSelf: "flex-start",
                padding: "8px 22px",
                background: "rgba(239, 68, 68, 0.16)",
                border: "1.5px solid #EF4444",
                borderRadius: 8,
                color: "#F87171",
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              THE CLOSED MOAT IS DEAD
            </div>

            {/* Giant Kinetic Typography */}
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92, marginTop: 4 }}>
              <span
                style={{
                  fontSize: 130,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  letterSpacing: -4,
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                CHEAP AI
              </span>
              <span
                style={{
                  fontSize: 130,
                  fontWeight: 950,
                  color: "#00E5FF",
                  letterSpacing: -4,
                  textShadow: "0 0 50px rgba(0, 229, 255, 0.8)",
                }}
              >
                JUST WON.
              </span>
            </div>

            {/* Price Contrast Punchline */}
            <div style={{ marginTop: 10 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 32,
                  fontWeight: 900,
                  color: "#F59E0B",
                  background: "rgba(245, 158, 11, 0.14)",
                  padding: "14px 28px",
                  borderRadius: 14,
                  border: "1.5px solid rgba(245, 158, 11, 0.55)",
                  letterSpacing: 1,
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)",
                }}
              >
                $200 SUBSCRIPTION VS 0.002¢
              </span>
            </div>
          </div>

          {/* Right Column: Exact 16:9 Uncropped Evidence Card */}
          <div
            style={{
              width: 980,
              height: 551.25, // 980 * 9 / 16 = exact 16:9! Zero crop!
              borderRadius: 20,
              overflow: "hidden",
              border: "2px solid rgba(56, 189, 248, 0.5)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 60px rgba(0, 112, 243, 0.35)",
              position: "relative",
              backgroundColor: "#000000",
            }}
          >
            <Img
              src={staticFile("daily_evidence/thumb_hero_shootout.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Perfect 1:1 pixel match, zero crop because aspect ratio matches 16:9!
              }}
            />

            {/* Top Telemetry Overlay */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(6, 10, 18, 0.92)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(16, 185, 129, 0.6)",
                borderRadius: 10,
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 800, letterSpacing: 1 }}>
                REAL 4-WAY 60 FPS WEBGL REEF
              </span>
            </div>

            {/* Bottom Right Live Badge */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                background: "rgba(6, 10, 18, 0.94)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(245, 158, 11, 0.6)",
                borderRadius: 10,
                padding: "8px 20px",
                color: "#F59E0B",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              2-SECOND HOT RELOAD
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  if (variant === "leak") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#060913",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Glowing backdrop */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "20%",
            width: 1000,
            height: 1000,
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "60px 72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Left Column */}
          <div
            style={{
              width: 740,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 22,
            }}
          >
            {/* Category Pill */}
            <div
              style={{
                alignSelf: "flex-start",
                padding: "8px 22px",
                background: "rgba(239, 68, 68, 0.2)",
                border: "1.5px solid #EF4444",
                borderRadius: 8,
                color: "#FF4D4D",
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              UNCUT EVIDENCE LEAK
            </div>

            {/* Giant Title */}
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92 }}>
              <span
                style={{
                  fontSize: 130,
                  fontWeight: 950,
                  color: "#FF3333",
                  letterSpacing: -4,
                  textShadow: "0 0 50px rgba(255, 51, 51, 0.7)",
                }}
              >
                THE $200 LIE
              </span>
              <span
                style={{
                  fontSize: 120,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  letterSpacing: -4,
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                GPT-6 IS REAL.
              </span>
            </div>

            {/* Bottom punchline */}
            <div style={{ marginTop: 10 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#00E5FF",
                  background: "rgba(0, 229, 255, 0.14)",
                  padding: "14px 28px",
                  borderRadius: 14,
                  border: "1.5px solid rgba(0, 229, 255, 0.55)",
                  letterSpacing: 1,
                }}
              >
                50-MIN UNFILTERED PROCEDURAL WORLD
              </span>
            </div>
          </div>

          {/* Right Column: 16:9 Hero */}
          <div
            style={{
              width: 980,
              height: 551.25,
              borderRadius: 20,
              overflow: "hidden",
              border: "2px solid rgba(239, 68, 68, 0.6)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 60px rgba(239, 68, 68, 0.35)",
              position: "relative",
              backgroundColor: "#000000",
            }}
          >
            <Img
              src={staticFile("daily_evidence/thumb_hero_3d.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(6, 10, 18, 0.92)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(16, 185, 129, 0.6)",
                borderRadius: 10,
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 800, letterSpacing: 1 }}>
                AUTONOMOUS DRIVING & PHYSICS
              </span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // Variant: "hypocrisy" (Default)
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060913",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 950,
          height: 950,
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.26) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 1000,
          height: 1000,
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.28) 0%, transparent 70%)",
          filter: "blur(95px)",
        }}
      />

      {/* Subtle high-tech grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.7,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "60px 72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        {/* Left Column (Text & Badges) */}
        <div
          style={{
            width: 740,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 22,
          }}
        >
          {/* Authentic Brand Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 24px",
                background: "rgba(10, 18, 36, 0.88)",
                border: "1.5px solid rgba(16, 163, 127, 0.5)",
                borderRadius: 14,
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            >
              <OpenAILogo size={36} />
              <span style={{ color: "#10A37F", fontWeight: 800, fontSize: 20, letterSpacing: -0.2 }}>
                OpenAI
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 24px",
                background: "rgba(10, 18, 36, 0.88)",
                border: "1.5px solid rgba(217, 119, 6, 0.5)",
                borderRadius: 14,
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            >
              <AnthropicLogo size={36} />
              <span style={{ color: "#F59E0B", fontWeight: 800, fontSize: 20, letterSpacing: -0.2 }}>
                Anthropic
              </span>
            </div>
          </div>

          {/* Sub-Header Category Badge */}
          <div
            style={{
              alignSelf: "flex-start",
              padding: "8px 22px",
              background: "rgba(239, 68, 68, 0.18)",
              border: "1.5px solid #EF4444",
              borderRadius: 8,
              color: "#F87171",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            THE FRONTIER HYPOCRISY
          </div>

          {/* Main Kinetic Typography */}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92, marginTop: 4 }}>
            <span
              style={{
                fontSize: 126,
                fontWeight: 950,
                color: "#EF4444",
                letterSpacing: -3,
                textShadow: "0 0 50px rgba(239, 68, 68, 0.7)",
              }}
            >
              “SLOW DOWN”
            </span>
            <span
              style={{
                fontSize: 114,
                fontWeight: 950,
                color: "#FFFFFF",
                letterSpacing: -4,
                marginTop: 6,
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              THE $200 TRAP
            </span>
          </div>

          {/* Bottom High-Converting Hook Pill */}
          <div style={{ marginTop: 10 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 30,
                fontWeight: 900,
                color: "#00E5FF",
                background: "rgba(0, 229, 255, 0.14)",
                padding: "14px 28px",
                borderRadius: 14,
                border: "1.5px solid rgba(0, 229, 255, 0.55)",
                letterSpacing: 1,
                boxShadow: "0 10px 30px rgba(0, 229, 255, 0.15)",
              }}
            >
              WHILE SECRETLY SHIPPING GPT-6
            </span>
          </div>
        </div>

        {/* Right Column: Exact 16:9 Uncropped 3D Demo Card */}
        <div
          style={{
            width: 980,
            height: 551.25, // 980 * 9 / 16 = exact 16:9!
            borderRadius: 20,
            overflow: "hidden",
            border: "2px solid rgba(0, 112, 243, 0.6)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 70px rgba(0, 112, 243, 0.4)",
            position: "relative",
            backgroundColor: "#000000",
          }}
        >
          <Img
            src={staticFile("daily_evidence/thumb_hero_3d.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Exact 16:9 ratio, 0% crop!
            }}
          />

          {/* Real Telemetry Overlay */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              background: "rgba(6, 10, 18, 0.92)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(16, 185, 129, 0.6)",
              borderRadius: 10,
              padding: "8px 20px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
            <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 800, letterSpacing: 1 }}>
              GPT-6 ASTRA: 50-MIN 3D WORLD
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              background: "rgba(6, 10, 18, 0.94)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(239, 68, 68, 0.6)",
              borderRadius: 10,
              padding: "8px 20px",
              color: "#F87171",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            VERIFIED UNCUT PROOF
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
