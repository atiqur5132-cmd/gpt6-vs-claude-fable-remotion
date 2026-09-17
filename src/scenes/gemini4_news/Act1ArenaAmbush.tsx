import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { GoogleGeminiLogo, XTwitterLogo, OpenAILogo } from '../../RealLogos';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import {
  ShieldAlert,
  Zap,
  Flame,
  Activity,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Server,
  Binary,
  Globe,
  Radio,
} from 'lucide-react';

export const Act1ArenaAmbush: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 1: 0-290 (9.7s) -> Stealth Ambush Void */}
        <Series.Sequence durationInFrames={290}>
          <Beat1StealthAmbush />
        </Series.Sequence>

        {/* Micro-beat 2: 290-580 (9.7s) -> LMSYS Arena Disguise HUD */}
        <Series.Sequence durationInFrames={290}>
          <Beat2ArenaDisguise />
        </Series.Sequence>

        {/* Micro-beat 3: 580-880 (10.0s) -> Argon-D Checkpoint Unmasking */}
        <Series.Sequence durationInFrames={300}>
          <Beat3ArgonUnmasking />
        </Series.Sequence>

        {/* Micro-beat 4: 880-1180 (10.0s) -> EVIDENCE TWEET 1: @LuminaBench Checkpoint Leak */}
        <Series.Sequence durationInFrames={300}>
          <RealTweetEvidence
            imageFile="lumina_pelican_tweet.png"
            authorName="Lumina"
            handle="LuminaBench"
            categoryTag="ARENA LEAK CONFIRMED"
            highlightText="testing under Gemini 3.8 flash, the Gemini 4 Pro checkpoint is (argon-d)"
            statValue="ARGON-D"
            statLabel="DISGUISED CHECKPOINT"
            keyInsight="Internal Google weights unmasked inside LMSYS public Arena."
          />
        </Series.Sequence>

        {/* Micro-beat 5: 1180-1481 (10.0s) -> Frontier Destabilization Matrix */}
        <Series.Sequence durationInFrames={301}>
          <Beat5FrontierDestabilization />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// --- BEAT 1: STEALTH AMBUSH ---
const Beat1StealthAmbush: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.85, 1.15]);
  const glow = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '36px 60px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 1760,
          height: 820,
          backgroundColor: '#070B14',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: 24,
          padding: '48px 64px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(239, 68, 68, 0.25)',
          opacity: glow,
        }}
      >
        {/* Top telemetry bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(239,68,68,0.2)', border: '1px solid #EF4444', display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldAlert size={20} color="#EF4444" />
              <span style={{ color: '#EF4444', fontWeight: 800, fontSize: 16, letterSpacing: 2 }}>SECURITY OVERRIDE</span>
            </div>
            <span style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'monospace' }}>LMSYS ARENA COMPUTE REDIRECTION DETECTED</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Radio size={18} color="#22C55E" />
            <span style={{ color: '#22C55E', fontSize: 15, fontFamily: 'monospace' }}>LIVE TRAFFIC INTERCEPTION</span>
          </div>
        </div>

        {/* Center Hero Kinetic Card */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#EF4444', fontSize: 24, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>
              UNANNOUNCED DEPLOYMENT
            </div>
            <div style={{ fontSize: 72, fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: -1 }}>
              GEMINI 4 PRO <br />
              <span style={{ color: '#60A5FA' }}>THE STEALTH ATTACK</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 22, marginTop: 20, maxWidth: 840, lineHeight: 1.4 }}>
              Google covertly routes public queries into an unreleased frontier titan under a decoy label.
            </p>
          </div>

          <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: 40,
                backgroundColor: 'rgba(96, 165, 250, 0.08)',
                border: '2px solid rgba(96, 165, 250, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `scale(${pulse})`,
                boxShadow: '0 0 80px rgba(96, 165, 250, 0.3)',
              }}
            >
              <GoogleGeminiLogo size={180} />
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
          <div>
            <div style={{ color: '#64748B', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>DECOY LABEL</div>
            <div style={{ color: '#F1F5F9', fontSize: 28, fontWeight: 800, fontFamily: 'monospace' }}>gemini-3.8-flash</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>TRUE CHECKPOINT</div>
            <div style={{ color: '#38BDF8', fontSize: 28, fontWeight: 800, fontFamily: 'monospace' }}>argon-d (v4)</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>ARENA STATUS</div>
            <div style={{ color: '#EF4444', fontSize: 28, fontWeight: 800, fontFamily: 'monospace' }}>ACTIVE SPOOF</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>TARGET COMPETITOR</div>
            <div style={{ color: '#10A37F', fontSize: 28, fontWeight: 800, fontFamily: 'monospace' }}>GPT-6 ASTRA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 2: LMSYS ARENA DISGUISE HUD ---
const Beat2ArenaDisguise: React.FC = () => {
  const frame = useCurrentFrame();
  const scanPos = interpolate(frame, [0, 165], [0, 100]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Globe size={24} color="#60A5FA" />
            <span style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>LMSYS CHATBOT ARENA // BATTLEFIELD TELEMETRY</span>
          </div>
          <div style={{ padding: '6px 14px', borderRadius: 8, backgroundColor: 'rgba(59,130,246,0.15)', color: '#60A5FA', fontSize: 14, fontWeight: 700 }}>
            PACKET TRACE ACTIVE
          </div>
        </div>

        {/* Dual Arena Inspection Split */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Left: What User Sees */}
          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#94A3B8', fontSize: 15, textTransform: 'uppercase', letterSpacing: 2 }}>FRONTEND MODEL BADGE</div>
              <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 800, marginTop: 8 }}>Gemini 3.8 Flash</div>
              <div style={{ display: 'inline-block', marginTop: 12, padding: '4px 12px', borderRadius: 6, backgroundColor: 'rgba(148,163,184,0.2)', color: '#CBD5E1', fontSize: 13, fontFamily: 'monospace' }}>
                TIER: LIGHTWEIGHT UTILITY
              </div>
            </div>
            <div style={{ backgroundColor: '#000000', borderRadius: 12, padding: 20, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>ARENA RESPONSE HEADER:</div>
              <div style={{ color: '#22C55E', fontSize: 15, fontFamily: 'monospace', marginTop: 6 }}>status: 200 OK | provider: google-vertex-arena</div>
              <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 4 }}>model_id: "gemini-3.8-flash-0902" (Spoofed)</div>
            </div>
          </div>

          {/* Right: What The Model Actually Computes */}
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: 16, border: '1px solid rgba(56,189,248,0.4)', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            {/* Laser scan line */}
            <div style={{ position: 'absolute', top: `${scanPos}%`, left: 0, right: 0, height: 2, backgroundColor: '#38BDF8', boxShadow: '0 0 12px #38BDF8' }} />

            <div>
              <div style={{ color: '#38BDF8', fontSize: 15, textTransform: 'uppercase', letterSpacing: 2 }}>BACKEND EXECUTION PROFILE</div>
              <div style={{ color: '#38BDF8', fontSize: 44, fontWeight: 900, marginTop: 8 }}>Gemini 4 Pro (argon-d)</div>
              <div style={{ display: 'inline-block', marginTop: 12, padding: '4px 12px', borderRadius: 6, backgroundColor: 'rgba(56,189,248,0.2)', color: '#38BDF8', fontSize: 13, fontFamily: 'monospace' }}>
                TIER: FRONTIER SUPERINTELLIGENCE
              </div>
            </div>
            <div style={{ backgroundColor: '#05070E', borderRadius: 12, padding: 20, border: '1px solid rgba(56,189,248,0.3)' }}>
              <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace' }}>LATENT VECTOR ANOMALY:</div>
              <div style={{ color: '#F1F5F9', fontSize: 15, fontFamily: 'monospace', marginTop: 6 }}>10x Path Complexity // Zero-Shot Spoke Physics</div>
              <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', marginTop: 4 }}>Parity: Exceeding Fable 5.1 & Matching Astra Max</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 3: ARGON-D UNMASKING ---
const Beat3ArgonUnmasking: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 24, padding: '44px 56px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Terminal size={22} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: 2 }}>FORENSIC CHECKPOINT DECONSTRUCTION</span>
          </div>
          <span style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>SESSION: 2026-09-17 // ARENA BENCHMARKS</span>
        </div>

        {/* Triple Checkpoint Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 28 }}>
            <div style={{ color: '#94A3B8', fontSize: 14, textTransform: 'uppercase' }}>Public Label</div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800, marginTop: 8 }}>Gemini 3.8 Flash</div>
            <p style={{ color: '#64748B', fontSize: 16, marginTop: 14, lineHeight: 1.5 }}>
              Standard fast utility model. Expected to generate crude low-poly SVGs and simple procedural code.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(30,58,138,0.3)', borderRadius: 18, border: '2px solid #38BDF8', padding: 28, boxShadow: '0 0 40px rgba(56,189,248,0.2)' }}>
            <div style={{ color: '#38BDF8', fontSize: 14, textTransform: 'uppercase', fontWeight: 800 }}>UNMASKED WEIGHTS</div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 8 }}>argon-d (Gemini 4)</div>
            <p style={{ color: '#93C5FD', fontSize: 16, marginTop: 14, lineHeight: 1.5 }}>
              Active internal checkpoint. Generates nested cubic bezier vectors and full browser games in single-shot.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 28 }}>
            <div style={{ color: '#94A3B8', fontSize: 14, textTransform: 'uppercase' }}>Benchmark Rival</div>
            <div style={{ color: '#10A37F', fontSize: 32, fontWeight: 800, marginTop: 8 }}>GPT-6 Astra Pro</div>
            <p style={{ color: '#64748B', fontSize: 16, marginTop: 14, lineHeight: 1.5 }}>
              OpenAI flagship frontier. Previously held unmatched visual reasoning lead on ARC-AGI-3.
            </p>
          </div>
        </div>

        {/* Footer telemetry */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000000', padding: '16px 28px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ color: '#CBD5E1', fontSize: 16 }}>CONFIRMED BY: <strong style={{ color: '#FFFFFF' }}>@LuminaBench, @hakmgpt, @SahilPanhotra</strong></span>
          <span style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 15 }}>100% REPRODUCIBLE IN ARENA BLIND TESTING</span>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 5: FRONTIER DESTABILIZATION ---
const Beat5FrontierDestabilization: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>FRONTIER LEADERBOARD COLLAPSE</div>
          <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, marginTop: 12 }}>
            THE ASYMMETRICAL AMBUSH
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', padding: 32, borderRadius: 20, border: '1px solid rgba(16,185,129,0.3)' }}>
            <OpenAILogo size={40} color="#10A37F" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>OpenAI GPT-6 Astra</div>
            <div style={{ color: '#6EE7B7', fontSize: 15, marginTop: 8 }}>Announced: Sept 3, 2026</div>
            <div style={{ color: '#94A3B8', fontSize: 16, marginTop: 16 }}>Dominated 3D physics and code generation for two weeks until today's leak.</div>
          </div>

          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', padding: 32, borderRadius: 20, border: '1px solid rgba(217,119,6,0.3)' }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: '#D97706', fontFamily: 'serif' }}>A</span>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Claude Fable 5.1</div>
            <div style={{ color: '#FCD34D', fontSize: 15, marginTop: 8 }}>Announced: Sept 1, 2026</div>
            <div style={{ color: '#94A3B8', fontSize: 16, marginTop: 16 }}>1M token context king, but facing developer backlash over rate limits.</div>
          </div>

          <div style={{ backgroundColor: 'rgba(30,58,138,0.4)', padding: 32, borderRadius: 20, border: '2px solid #60A5FA' }}>
            <GoogleGeminiLogo size={40} />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Gemini 4 Pro (argon-d)</div>
            <div style={{ color: '#93C5FD', fontSize: 15, marginTop: 8 }}>Spotted: Sept 17, 2026</div>
            <div style={{ color: '#E2E8F0', fontSize: 16, marginTop: 16 }}>Stealth deployed without warning, matching Astra in 1-shot game compilation.</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#94A3B8', fontSize: 16 }}>METRIC: LMSYS BLIND TASTE TEST CONFIDENCE: <strong>99.4%</strong></span>
          <span style={{ color: '#38BDF8', fontSize: 16, fontWeight: 700 }}>PREPARING STRESS TEST SUITE →</span>
        </div>
      </div>
    </div>
  );
};
