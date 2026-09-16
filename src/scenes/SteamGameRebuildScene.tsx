import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Video, Img } from 'remotion';
import { Gamepad2, CheckCircle2, Video as VideoIcon, Sparkles, Cpu, Layers } from 'lucide-react';
import { XTwitterLogo } from '../RealLogos';

interface SteamGameRebuildSceneProps {
  section: 'tweet_intro' | 'video_comparison' | 'physics_deepdive';
}

export const SteamGameRebuildScene: React.FC<SteamGameRebuildSceneProps> = ({ section }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  // 1. Tweet Intro Card - Flat 1:1 Clean View
  if (section === 'tweet_intro') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)' }} />

        {/* Top Channel Bar */}
        <div style={{ position: 'absolute', top: 40, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Gamepad2 size={28} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.15em', fontWeight: 800 }}>
              REVERSE-ENGINEERING BENCHMARK
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: 20 }}>
            <XTwitterLogo size={18} />
            <span style={{ color: '#E2E8F0', fontSize: 13, fontFamily: 'monospace' }}>x.com/noclipepe</span>
          </div>
        </div>

        {/* Tweet Native View Card (Flat, no 2.5D tilt!) */}
        <div
          style={{
            position: 'absolute',
            top: 130,
            left: 120,
            right: 120,
            bottom: 70,
            backgroundColor: '#0F172A',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: 20,
            padding: 40,
            display: 'flex',
            gap: 40,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            transform: `translateY(${(1 - entrance) * 20}px)`,
          }}
        >
          {/* Left: Real Tweet Screenshot Clean Card */}
          <div style={{ width: '48%', height: '100%', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#000000' }}>
            <Img
              src={staticFile('evidence/steam_game_rebuild_card.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Right: Analytical Telemetry Breakdown */}
          <div style={{ width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.2em', marginBottom: 6 }}>
                RESEARCH BREAKTHROUGH
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
                Video In. Playable Game Out.
              </div>
              <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
                GPT-6 Astra ingested gameplay video from Steam’s "How to Fish" without access to source code or assets, regenerating a playable simulation zero-shot.
              </p>
            </div>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle2 size={20} color="#10A37F" />
                <span style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 600 }}>Dynamic Rod Bending & Line Physics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle2 size={20} color="#10A37F" />
                <span style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 600 }}>Underwater Collision & 6 Fish Species</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle2 size={20} color="#10A37F" />
                <span style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 600 }}>Economy, Inventory, and Save System</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: 10, padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>INPUT: RAW MP4 VIDEO</span>
              <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>OUTPUT: THREE.JS SIMULATION</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 2. Full-Screen Video Evidence Playback
  if (section === 'video_comparison') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
        {/* Full-width Real Video Evidence Player */}
        <div style={{ position: 'absolute', top: 30, left: 60, right: 60, bottom: 90, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: '#000000', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
          <Video
            src={staticFile('evidence/steam_game_rebuild.mp4')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            muted
          />

          {/* Top Live Documentary Badge */}
          <div style={{ position: 'absolute', top: 20, left: 24, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', padding: '8px 18px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              AUTHENTIC RECORDING • HOW TO FISH REBUILD
            </span>
          </div>

          {/* Bottom Side-by-Side Indicator */}
          <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: '6px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', color: '#94A3B8', fontSize: 13, fontFamily: 'monospace' }}>
              LEFT: ORIGINAL STEAM GAMEPLAY
            </div>
            <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.85)', padding: '6px 16px', borderRadius: 8, color: '#070B14', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              RIGHT: GPT-6 ASTRA REBUILT GAME
            </div>
          </div>
        </div>

        {/* Footer Attribution */}
        <div style={{ position: 'absolute', bottom: 30, left: 60, right: 60, display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          <span>TELEMETRY: AIML API INFERENCE PIPELINE</span>
          <span>SOURCE: @noclipepe (X VERIFIED POST)</span>
        </div>
      </AbsoluteFill>
    );
  }

  // 3. Physics & Mechanics Deep Dive
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 163, 127, 0.1) 0%, transparent 70%)' }} />

      <div style={{ position: 'absolute', top: 60, left: 100, right: 100, textAlign: 'center' }}>
        <div style={{ color: '#10A37F', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          GENERATIVE DEPTH ANALYSIS
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, marginTop: 6 }}>
          Inside Astra's Physics Engine
        </div>
      </div>

      {/* 4 Architecture Feature Pillars */}
      <div style={{ position: 'absolute', top: 190, left: 100, right: 100, bottom: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Layers size={28} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 14 }}>Rod Kinematics</div>
            <p style={{ color: '#94A3B8', fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              Realistic spline deformation simulating carbon-fiber tensile flexion and drag.
            </p>
          </div>
          <div style={{ color: '#38BDF8', fontSize: 12, fontFamily: 'monospace', fontWeight: 700 }}>TENSION CALCULATED</div>
        </div>

        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Sparkles size={28} color="#F59E0B" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 14 }}>Species AI</div>
            <p style={{ color: '#94A3B8', fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              6 distinct underwater AI behaviors, feeding routines, and collision boundaries.
            </p>
          </div>
          <div style={{ color: '#F59E0B', fontSize: 12, fontFamily: 'monospace', fontWeight: 700 }}>6 UNIQUE BEHAVIORS</div>
        </div>

        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Cpu size={28} color="#10A37F" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 14 }}>State Persistence</div>
            <p style={{ color: '#94A3B8', fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              Local storage economy, inventory log, upgrades, and journal save mechanics.
            </p>
          </div>
          <div style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace', fontWeight: 700 }}>ZERO-SHOT STATE LOGIC</div>
        </div>

        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Gamepad2 size={28} color="#A855F7" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 14 }}>Interaction Layer</div>
            <p style={{ color: '#94A3B8', fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              Throw, punt, and grill fish interactions with responsive particle visual feedback.
            </p>
          </div>
          <div style={{ color: '#A855F7', fontSize: 12, fontFamily: 'monospace', fontWeight: 700 }}>REAL-TIME COMPILED</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
