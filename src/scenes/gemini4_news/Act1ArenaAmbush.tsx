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

// --- BEAT 2: LMSYS ARENA DISGUISE HUD (HIGH-DENSITY MOTION GRAPHICS) ---
const Beat2ArenaDisguise: React.FC = () => {
  const frame = useCurrentFrame();
  const scanPos = (frame * 3) % 100;
  const packetOffset1 = (frame * 6) % 300;
  const packetOffset2 = ((frame * 6) + 150) % 300;
  const complexityProgress = interpolate(frame, [10, 50], [0, 96], { extrapolateRight: 'clamp' });
  const pulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.92, 1.08]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 48px', boxSizing: 'border-box' }}>
      <div style={{ width: 1824, height: 864, backgroundColor: '#050811', border: '1px solid rgba(56,189,248,0.35)', borderRadius: 24, padding: '32px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 80px -20px rgba(56,189,248,0.25)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle grid background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(56,189,248,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        {/* Top telemetry bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px', borderRadius: 8, backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid #EF4444' }}>
              <ShieldAlert size={20} color="#EF4444" />
              <span style={{ color: '#EF4444', fontWeight: 800, fontSize: 14, letterSpacing: 2 }}>LIVE SPOOF WIRE-TRAP</span>
            </div>
            <span style={{ color: '#F1F5F9', fontSize: 20, fontWeight: 800, letterSpacing: 1 }}>
              LMSYS ARENA TRAFFIC INTERCEPTION // PROXY REDIRECTION
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontFamily: 'monospace', fontSize: 14 }}>
            <span style={{ color: '#22C55E', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 10px #22C55E' }} />
              TAP: TCP_8080_PROXY
            </span>
            <span style={{ color: '#64748B' }}>LATENCY: 142ms</span>
            <span style={{ color: '#38BDF8', fontWeight: 700 }}>SAMPLE: #9042-ARGON</span>
          </div>
        </div>

        {/* Middle: Kinetic Network Flow Pipeline */}
        <div style={{ position: 'relative', zIndex: 2, margin: '8px 0', padding: '16px 24px', backgroundColor: 'rgba(15,23,42,0.65)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
            
            {/* Step 1: User / Arena Client */}
            <div style={{ width: 280, backgroundColor: '#0B1220', borderRadius: 14, border: '1px solid rgba(255,255,255,0.15)', padding: '16px 20px' }}>
              <div style={{ color: '#64748B', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1 }}>Origin Node</div>
              <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800, marginTop: 4 }}>LMSYS Web User</div>
              <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', marginTop: 6, backgroundColor: 'rgba(56,189,248,0.1)', padding: '4px 8px', borderRadius: 6 }}>
                Prompt: "SVG Pelican Bike"
              </div>
            </div>

            {/* Connecting Pipe 1 with Animated Traveling Packet */}
            <div style={{ flex: 1, height: 48, position: 'relative', margin: '0 16px', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', height: 4, backgroundColor: 'rgba(56,189,248,0.2)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: `${(packetOffset1 / 300) * 100}%`, width: 40, height: 4, backgroundColor: '#38BDF8', boxShadow: '0 0 12px #38BDF8' }} />
              </div>
              <div style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)', color: '#64748B', fontSize: 11, fontFamily: 'monospace' }}>
                POST /v1/chat/completions
              </div>
            </div>

            {/* Step 2: Disguise Proxy Router (The Decoy) */}
            <div style={{ width: 340, backgroundColor: 'rgba(239,68,68,0.12)', borderRadius: 14, border: '2px solid #EF4444', padding: '16px 20px', position: 'relative', boxShadow: '0 0 30px rgba(239,68,68,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#EF4444', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>DECOY INJECTION PROXY</span>
                <span style={{ color: '#FFFFFF', backgroundColor: '#EF4444', padding: '2px 6px', borderRadius: 4, fontSize: 10, fontWeight: 900 }}>SPOOFED</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 900, marginTop: 4 }}>"gemini-3.8-flash"</div>
              <div style={{ color: '#FCA5A5', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>
                Header Rewrite: model_id masked
              </div>
            </div>

            {/* Connecting Pipe 2 with Animated Traveling Packet */}
            <div style={{ flex: 1, height: 48, position: 'relative', margin: '0 16px', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', height: 4, backgroundColor: 'rgba(34,197,94,0.2)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: `${(packetOffset2 / 300) * 100}%`, width: 40, height: 4, backgroundColor: '#22C55E', boxShadow: '0 0 12px #22C55E' }} />
              </div>
              <div style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)', color: '#22C55E', fontSize: 11, fontFamily: 'monospace', fontWeight: 700 }}>
                Rerouted &rarr; Internal TPU Pod
              </div>
            </div>

            {/* Step 3: Google Superintelligence Cluster */}
            <div style={{ width: 320, backgroundColor: 'rgba(56,189,248,0.15)', borderRadius: 14, border: '2px solid #38BDF8', padding: '16px 20px', boxShadow: '0 0 35px rgba(56,189,248,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38BDF8', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>TRUE COMPUTE ENGINE</span>
                <span style={{ color: '#000', backgroundColor: '#38BDF8', padding: '2px 6px', borderRadius: 4, fontSize: 10, fontWeight: 900 }}>UNMASKED</span>
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 900, marginTop: 4 }}>Gemini 4 Pro (argon-d)</div>
              <div style={{ color: '#93C5FD', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>
                Google TPU v6 Tensor Pods
              </div>
            </div>
          </div>
        </div>

        {/* Lower Split: Telemetry Comparison & Wiretap Inspection */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, position: 'relative', zIndex: 2 }}>
          
          {/* Left: Forensic Complexity Telemetry Gauges */}
          <div style={{ backgroundColor: '#0B1220', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: '22px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#38BDF8', fontSize: 14, fontWeight: 800, letterSpacing: 2 }}>
                EXECUTION VECTOR ANOMALY GAUGES
              </div>
              <span style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>DEEP METRIC SCAN</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 14 }}>
              {/* Metric 1 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                  <span style={{ color: '#94A3B8' }}>Vector Geometric Reasoning Complexity</span>
                  <span style={{ color: '#38BDF8', fontFamily: 'monospace' }}>{Math.round(complexityProgress)}% (Frontier Spike)</span>
                </div>
                <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ width: `${complexityProgress}%`, height: '100%', backgroundColor: '#38BDF8', boxShadow: '0 0 10px #38BDF8' }} />
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                  <span style={{ color: '#94A3B8' }}>Recursive Reasoning Spoke Nodes</span>
                  <span style={{ color: '#22C55E', fontFamily: 'monospace' }}>384 Semantic Groups (vs 24 Flash Baseline)</span>
                </div>
                <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', backgroundColor: '#22C55E', boxShadow: '0 0 10px #22C55E' }} />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                  <span style={{ color: '#94A3B8' }}>Frontier Parity Status</span>
                  <span style={{ color: '#F59E0B', fontFamily: 'monospace' }}>Matching GPT-6 Astra // Crushing Claude Fable</span>
                </div>
                <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ width: '98%', height: '100%', backgroundColor: '#F59E0B', boxShadow: '0 0 10px #F59E0B' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Wiretap HTTP Packet Inspector */}
          <div style={{ backgroundColor: '#030712', borderRadius: 18, border: '1px solid rgba(56,189,248,0.3)', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace', position: 'relative' }}>
            {/* Laser scanning line */}
            <div style={{ position: 'absolute', top: `${scanPos}%`, left: 0, right: 0, height: 2, backgroundColor: '#38BDF8', boxShadow: '0 0 14px #38BDF8', opacity: 0.8 }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8 }}>
              <span style={{ color: '#22C55E', fontSize: 13, fontWeight: 700 }}>WIRETAP_STREAM // HTTP 200 OK</span>
              <span style={{ color: '#EF4444', fontSize: 12 }}>SIGNATURE MATCH: 99.4%</span>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.6, color: '#94A3B8', marginTop: 10 }}>
              <div><span style={{ color: '#64748B' }}>01</span> <span style={{ color: '#F1F5F9' }}>X-Arena-Public-Tag:</span> <span style={{ color: '#EF4444' }}>"gemini-3.8-flash-exp"</span></div>
              <div><span style={{ color: '#64748B' }}>02</span> <span style={{ color: '#F1F5F9' }}>X-Google-Internal-Backend:</span> <span style={{ color: '#38BDF8' }}>"cluster-us-central2-argon-d"</span></div>
              <div><span style={{ color: '#64748B' }}>03</span> <span style={{ color: '#F1F5F9' }}>X-TPU-Generation:</span> <span style={{ color: '#22C55E' }}>"TPU_v6_Trillium_Pod"</span></div>
              <div><span style={{ color: '#64748B' }}>04</span> <span style={{ color: '#F1F5F9' }}>X-Parameter-Class:</span> <span style={{ color: '#F59E0B' }}>"Frontier_Full_MoE_Dense"</span></div>
              <div><span style={{ color: '#64748B' }}>05</span> <span style={{ color: '#F1F5F9' }}>X-Fingerprint-Status:</span> <span style={{ color: '#38BDF8' }}>"CONFIRMED_GEMINI_4_PRO"</span></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(56,189,248,0.1)', padding: '8px 14px', borderRadius: 8, marginTop: 8 }}>
              <span style={{ color: '#38BDF8', fontSize: 12 }}>DECOY BREACHED:</span>
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 13 }}>PUBLIC TEST RUN CONFIRMED</span>
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
