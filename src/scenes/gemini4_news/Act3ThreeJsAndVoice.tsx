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

// --- BEAT 12: THE WEBGL INTERACTIVE SANDBOX (ANIMATED 3D ISOMETRIC ENGINE) ---
const Beat12WebGLSandbox: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 1.2;
  const gridOffset = (frame * 2) % 40;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 48px', boxSizing: 'border-box' }}>
      <div style={{ width: 1824, height: 864, backgroundColor: '#070B14', border: '1px solid rgba(56,189,248,0.35)', borderRadius: 24, padding: '32px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Boxes size={24} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontSize: 22, fontWeight: 900 }}>3D WORLD INSPECTION // REAL TIME WEBGL SHADER EXECUTION</span>
          </div>
          <div style={{ padding: '6px 14px', borderRadius: 8, backgroundColor: 'rgba(34,197,94,0.15)', color: '#22C55E', fontSize: 13, fontWeight: 700, border: '1px solid #22C55E' }}>
            COMPILED ZERO-SHOT (60 FPS)
          </div>
        </div>

        {/* Dual Split: Code & Shader Telemetry Left, Animated 3D Isometric Canvas Right */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 28, margin: '14px 0' }}>
          
          {/* Left: Engine Specs */}
          <div style={{ backgroundColor: '#02040A', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>// COMPLETE WEBGL ENGINE OUTPUT</div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 8 }}>Procedural Cyberpunk Cityscape</div>
              <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>
                Gemini 4 Pro mapped out building height distributions, neon emission materials, volumetric fog, and dynamic mouse-drag orbit navigation in a single generation.
              </p>
            </div>

            {/* Shader Uniforms & Telemetry Box */}
            <div style={{ backgroundColor: '#050811', borderRadius: 12, padding: 18, border: '1px solid rgba(56,189,248,0.25)', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6 }}>
              <div style={{ color: '#38BDF8', fontWeight: 800 }}>THREE.JS RUNTIME TELEMETRY:</div>
              <div style={{ color: '#94A3B8', marginTop: 4 }}>• Geometry: 12,480 Polygons // BufferGeometry</div>
              <div style={{ color: '#22C55E' }}>• Materials: MeshStandardMaterial + Bloom Pass</div>
              <div style={{ color: '#F59E0B' }}>• Camera: PerspectiveCamera (FOV 60°, OrbitControls)</div>
              <div style={{ color: '#38BDF8' }}>• Zero Syntax Errors // Direct DOM Mount</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: 13, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12 }}>
              <span>LIGHTING: <strong>DIRECTIONAL + AMBIENT</strong></span>
              <span>TEST BED: <strong>CHROME V8 64-BIT</strong></span>
            </div>
          </div>

          {/* Right: Simulated 3D Isometric Canvas */}
          <div style={{ backgroundColor: '#02040A', borderRadius: 18, border: '2px solid rgba(56,189,248,0.4)', padding: 24, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Animated 3D Isometric City Grid */}
            <svg width="600" height="380" viewBox="0 0 600 380">
              <defs>
                <linearGradient id="neonCyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="neonPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Floor grid */}
              <g opacity="0.35">
                {[-100, -50, 0, 50, 100, 150, 200].map((offset, i) => (
                  <line
                    key={`grid-x-${i}`}
                    x1={50 + offset}
                    y1={320 - (offset * 0.5)}
                    x2={450 + offset}
                    y2={120 - (offset * 0.5)}
                    stroke="#38BDF8"
                    strokeWidth="1"
                  />
                ))}
                {[-100, -50, 0, 50, 100, 150, 200].map((offset, i) => (
                  <line
                    key={`grid-y-${i}`}
                    x1={150 + offset}
                    y1={120 + (offset * 0.5)}
                    x2={350 + offset}
                    y2={320 + (offset * 0.5)}
                    stroke="#38BDF8"
                    strokeWidth="1"
                  />
                ))}
              </g>

              {/* 3D Wireframe Cyberpunk Skyscraper 1 */}
              <g transform="translate(180, 240)">
                <polygon points="0,0 60,-30 60,-160 0,-130" fill="url(#neonCyan)" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="60,-30 120,0 120,-130 60,-160" fill="rgba(14,165,233,0.2)" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="0,-130 60,-160 120,-130 60,-100" fill="#38BDF8" opacity="0.6" stroke="#FFFFFF" strokeWidth="1" />
              </g>

              {/* 3D Wireframe Skyscraper 2 (Taller center) */}
              <g transform="translate(260, 290)">
                <polygon points="0,0 70,-35 70,-220 0,-185" fill="url(#neonPurple)" stroke="#C084FC" strokeWidth="2" />
                <polygon points="70,-35 140,0 140,-185 70,-220" fill="rgba(168,85,247,0.2)" stroke="#C084FC" strokeWidth="2" />
                <polygon points="0,-185 70,-220 140,-185 70,-150" fill="#C084FC" opacity="0.7" stroke="#FFFFFF" strokeWidth="1" />
                {/* Antenna light pulse */}
                <line x1="70" y1="-220" x2="70" y2="-260" stroke="#EF4444" strokeWidth="3" />
                <circle cx="70" cy="-260" r={4 + Math.sin(frame * 0.3) * 2} fill="#EF4444" />
              </g>

              {/* 3D Wireframe Skyscraper 3 (Right) */}
              <g transform="translate(380, 250)">
                <polygon points="0,0 50,-25 50,-140 0,-115" fill="url(#neonCyan)" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="50,-25 100,0 100,-115 50,-140" fill="rgba(14,165,233,0.15)" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="0,-115 50,-140 100,-115 50,-90" fill="#38BDF8" opacity="0.5" stroke="#FFFFFF" strokeWidth="1" />
              </g>

              {/* Floating Camera Orbit Telemetry */}
              <circle cx="300" cy="180" r="160" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="6 6" fill="none" />
              <g transform={`rotate(${rotation}, 300, 180)`}>
                <circle cx="460" cy="180" r="8" fill="#22C55E" />
                <line x1="460" y1="180" x2="300" y2="180" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </g>
            </svg>

            <div style={{ position: 'absolute', bottom: 14, right: 20, color: '#22C55E', fontFamily: 'monospace', fontSize: 13, backgroundColor: 'rgba(0,0,0,0.7)', padding: '4px 10px', borderRadius: 6 }}>
              CAM_ORBIT: ACTIVE // WEBGL 2.0
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 15 }}>SPATIAL COGNITION: <strong style={{ color: '#FFFFFF' }}>FULL 3-DIMENSIONAL MATRIX & ROTATIONAL SHADER UNDERSTANDING</strong></span>
          <span style={{ color: '#38BDF8', fontSize: 15, fontWeight: 700 }}>VERIFIED ZERO-SHOT BY COMMUNITY DEVELOPERS</span>
        </div>

      </div>
    </div>
  );
};

// --- BEAT 13: GEMINI 3.8 LIVE VOICE (WITH LIVE AUDIO WAVE VISUALIZER) ---
const Beat13GeminiLiveVoice: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 48px', boxSizing: 'border-box' }}>
      <div style={{ width: 1824, height: 864, backgroundColor: '#070B14', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 24, padding: '36px 44px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 80px -20px rgba(34,197,94,0.2)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Mic size={24} color="#22C55E" />
            <span style={{ color: '#22C55E', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>OFFICIAL RELEASE // LIVE DEPLOYMENT</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>SEP 15-17, 2026 GA DEPLOYMENT</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#22C55E', fontSize: 15, fontWeight: 800, letterSpacing: 3 }}>GOOGLE'S SURPRISE FLANK</div>
            <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginTop: 10 }}>
              GEMINI 3.8 LIVE <br />
              <span style={{ color: '#22C55E' }}>& CONCURRENT THINKING</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 19, marginTop: 18, lineHeight: 1.5, maxWidth: 840 }}>
              An audio-native foundation model that talks naturally while simultaneously triggering background API tools and complex reasoning mid-sentence.
            </p>
          </div>

          {/* Dynamic Animated Waveform Visualizer */}
          <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#02040A', borderRadius: 24, border: '2px solid rgba(34,197,94,0.4)', padding: '28px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 120 }}>
              {[...Array(24)].map((_, i) => {
                const height = 15 + Math.abs(Math.sin((frame * 0.15) + (i * 0.35))) * 85;
                return (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: `${height}px`,
                      backgroundColor: i % 2 === 0 ? '#22C55E' : '#4ADE80',
                      borderRadius: 4,
                      boxShadow: '0 0 12px rgba(34,197,94,0.5)',
                      transition: 'height 0.05s ease',
                    }}
                  />
                );
              })}
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 800, marginTop: 16 }}>
              REAL-TIME AUDIO SPEECH-TO-SPEECH STREAM
            </div>
            <div style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 13, marginTop: 4 }}>
              LATENCY: 180ms // ZERO-GAP CONCURRENT EXECUTION
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 18, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 12 }}>AUDIO LATENCY</div>
            <div style={{ color: '#22C55E', fontSize: 22, fontWeight: 800, marginTop: 4 }}>180ms (Ultra Conversational)</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 18, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 12 }}>CONCURRENCY</div>
            <div style={{ color: '#38BDF8', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Background Tool Execution</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 18, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 12 }}>REASONING ARCHITECTURE</div>
            <div style={{ color: '#F59E0B', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Extended Live Thinking</div>
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
