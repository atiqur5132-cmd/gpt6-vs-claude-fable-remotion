import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { GoogleGeminiLogo, OpenAILogo } from '../../RealLogos';
import {
  Boxes,
  Mic,
  DollarSign,
  Zap,
  Activity,
  Radio,
  Cpu,
  Waves,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const Act3ThreeJsAndVoice: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 11: 0-315 (10.5s) -> 3D Three.js Spatial Singularity */}
        <Series.Sequence durationInFrames={315}>
          <Beat11ThreeJsSpatial />
        </Series.Sequence>

        {/* Micro-beat 12: 315-630 (10.5s) -> The WebGL Interactive Sandbox */}
        <Series.Sequence durationInFrames={315}>
          <Beat12WebGLSandbox />
        </Series.Sequence>

        {/* Micro-beat 13: 630-950 (10.7s) -> Gemini 3.8 Live Voice Launch */}
        <Series.Sequence durationInFrames={320}>
          <Beat13GeminiLiveVoice />
        </Series.Sequence>

        {/* Micro-beat 14: 950-1277 (10.9s) -> The 6x Price Undercut vs OpenAI */}
        <Series.Sequence durationInFrames={327}>
          <Beat14VoiceEconomics />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// --- BEAT 11: 3D THREE.JS SPATIAL ---
const Beat11ThreeJsSpatial: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 1.5;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 24, padding: '44px 56px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(56,189,248,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Boxes size={24} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontSize: 18, fontWeight: 800, fontFamily: 'monospace' }}>SPATIAL REASONING EXTENSION // 3D THREE.JS ENGINE</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>TESTED BY: @SAHILEXEC</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>BEYOND FLAT 2D VECTORS</div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
              ZERO-SHOT 3D WORLDS <br />
              <span style={{ color: '#38BDF8' }}>CAMERA, LIGHTING & SHADERS</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 20, lineHeight: 1.5, maxWidth: 840 }}>
              Gemini 4 Pro compiled dynamic directional shadows, orbit controls, procedural geometries, and audio collision triggers in a single script output.
            </p>
          </div>

          <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: 24,
                backgroundColor: 'rgba(15,23,42,0.8)',
                border: '2px solid #38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transform: `rotate(${rotation * 0.2}deg)`,
                boxShadow: '0 0 60px rgba(56,189,248,0.3)',
              }}
            >
              <Boxes size={140} color="#38BDF8" />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>FRAMEWORK</div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800, fontFamily: 'monospace' }}>Three.js r168</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>RENDER PIPELINE</div>
            <div style={{ color: '#38BDF8', fontSize: 22, fontWeight: 800, fontFamily: 'monospace' }}>WebGL 2.0</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>INTERACTIONS</div>
            <div style={{ color: '#22C55E', fontSize: 22, fontWeight: 800, fontFamily: 'monospace' }}>OrbitControls + Raycast</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>LIGHTING</div>
            <div style={{ color: '#F59E0B', fontSize: 22, fontWeight: 800, fontFamily: 'monospace' }}>Directional + Ambient</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 12: THE WEBGL SANDBOX ---
const Beat12WebGLSandbox: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: '#38BDF8', fontSize: 24, fontWeight: 900 }}>3D WORLD INSPECTION // REAL TIME EXECUTION</span>
          </div>
          <div style={{ padding: '6px 14px', borderRadius: 8, backgroundColor: 'rgba(34,197,94,0.15)', color: '#22C55E', fontSize: 14, fontWeight: 700 }}>
            COMPILED ZERO-SHOT
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: '#000000', borderRadius: 18, border: '1px solid rgba(56,189,248,0.3)', padding: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>// COMPLETE WEBGL ENGINE OUTPUT</div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800, marginTop: 12 }}>Procedural Cyberpunk Cityscape</div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6, maxWidth: 900 }}>
              Gemini 4 Pro mapped out building height distributions, neon emission materials, fog density, and dynamic mouse-drag orbit navigation. 
              Everything functions without external runtime errors on the first execution.
            </p>
          </div>
          <div style={{ width: 440, height: 440, borderRadius: 20, backgroundColor: '#070B14', border: '2px solid rgba(56,189,248,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <Boxes size={120} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 18 }}>INTERACTIVE 3D ENVIRONMENT</div>
            <div style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 14 }}>60 FPS REAL-TIME RENDERING</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 13: GEMINI 3.8 LIVE VOICE ---
const Beat13GeminiLiveVoice: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(34,197,94,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Mic size={24} color="#22C55E" />
            <span style={{ color: '#22C55E', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>OFFICIAL RELEASE // TODAY</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>SEP 15-17, 2026 GA DEPLOYMENT</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
          <div style={{ flex: 1.3 }}>
            <div style={{ color: '#22C55E', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>GOOGLE'S SURPRISE FLANK</div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
              GEMINI 3.8 LIVE <br />
              <span style={{ color: '#22C55E' }}>& EXTENDED THINKING</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 20, lineHeight: 1.5, maxWidth: 880 }}>
              A new audio-native foundation model that talks naturally while triggering background API calls and complex multi-step reasoning tools mid-sentence.
            </p>
          </div>

          <div style={{ flex: 0.7, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 340, height: 340, borderRadius: 32, backgroundColor: 'rgba(34,197,94,0.1)', border: '2px solid #22C55E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <Waves size={100} color="#22C55E" />
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>AUDIO-NATIVE ARCHITECTURE</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>LATENCY</div>
            <div style={{ color: '#22C55E', fontSize: 26, fontWeight: 800, marginTop: 4 }}>Near Zero (Conversational)</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>TOOL EXECUTION</div>
            <div style={{ color: '#38BDF8', fontSize: 26, fontWeight: 800, marginTop: 4 }}>Concurrent Background Calls</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>REASONING</div>
            <div style={{ color: '#F59E0B', fontSize: 26, fontWeight: 800, marginTop: 4 }}>Extended Live Thinking Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 14: THE 6X PRICE UNDERCUT ---
const Beat14VoiceEconomics: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#22C55E', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>VOICE AI INFRASTRUCTURE ECONOMICS</div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, marginTop: 8 }}>
            THE 6X PRICE GUILLOTINE
          </div>
        </div>

        {/* Dual Cost Comparison Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, margin: '32px 0' }}>
          {/* OpenAI Voice */}
          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', borderRadius: 20, border: '1px solid rgba(239,68,68,0.4)', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <OpenAILogo size={44} color="#EF4444" />
              <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800, marginTop: 16 }}>OpenAI GPT-4o / Realtime</div>
              <div style={{ color: '#94A3B8', fontSize: 18, marginTop: 8 }}>Standard commercial voice API pricing</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ color: '#EF4444', fontSize: 64, fontWeight: 900, fontFamily: 'monospace' }}>$0.030 / min</div>
              <div style={{ color: '#64748B', fontSize: 16, marginTop: 4 }}>~$1.80 per hour of conversation</div>
            </div>
          </div>

          {/* Google Gemini 3.8 Live */}
          <div style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: 20, border: '2px solid #22C55E', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 50px rgba(34,197,94,0.2)' }}>
            <div>
              <GoogleGeminiLogo size={44} />
              <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 16 }}>Gemini 3.8 Live</div>
              <div style={{ color: '#86EFAC', fontSize: 18, marginTop: 8 }}>New multimodal audio-native pricing</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ color: '#22C55E', fontSize: 64, fontWeight: 900, fontFamily: 'monospace' }}>$0.005 / min</div>
              <div style={{ color: '#86EFAC', fontSize: 16, marginTop: 4 }}>~$0.30 per hour (6X CHEAPER)</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#94A3B8', fontSize: 18 }}>DEVELOPER VERDICT: <strong>Voice agent production shifts to Google Cloud automatically.</strong></span>
          <span style={{ color: '#22C55E', fontSize: 18, fontWeight: 800 }}>83% COST REDUCTION</span>
        </div>
      </div>
    </div>
  );
};
