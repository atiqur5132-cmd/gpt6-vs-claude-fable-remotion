import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { GoogleGeminiLogo, XTwitterLogo } from '../../RealLogos';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import {
  Atom,
  Zap,
  ShieldAlert,
  Cpu,
  Sparkles,
  GitBranch,
  TrendingUp,
  FileText,
  Binary,
  Layers,
  Flame,
  CheckCircle2,
  Server,
  Activity,
  Terminal,
} from 'lucide-react';

export const Act1RSIThreshold: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 1: 0-150 (5.0s) -> Singularity Void & Headline */}
        <Series.Sequence durationInFrames={150}>
          <Beat1SingularityVoid />
        </Series.Sequence>

        {/* Micro-beat 2: 150-313 (5.4s) -> Exponential Asymptote Graph */}
        <Series.Sequence durationInFrames={163}>
          <Beat2ExponentialAsymptote />
        </Series.Sequence>

        {/* Micro-beat 3: 313-440 (4.2s) -> Dynamic Neural Rewiring */}
        <Series.Sequence durationInFrames={127}>
          <Beat3NeuralTopology />
        </Series.Sequence>

        {/* Micro-beat 4: 440-571 (4.4s) -> Zero Human Intervention Telemetry */}
        <Series.Sequence durationInFrames={131}>
          <Beat4ZeroHumanIntervention />
        </Series.Sequence>

        {/* Micro-beat 5: 571-701 (4.3s) -> Intelligence Explosion Theorem */}
        <Series.Sequence durationInFrames={130}>
          <Beat5IntelligenceExplosion />
        </Series.Sequence>

        {/* Micro-beat 6: 701-826 (4.2s) -> EVIDENCE TWEET 1: AGTP Insights */}
        <Series.Sequence durationInFrames={125}>
          <RealTweetEvidence
            imageFile="agtp_rumors_tweet.png"
            authorName="AGTP Insights"
            handle="AGTPinsights"
            categoryTag="BREAKING RSI LEAK"
            highlightText="DeepMind active recursive self-improvement breakthrough confirmed"
          />
        </Series.Sequence>

        {/* Micro-beat 7: 826-998 (5.7s) -> DeepMind Crossed The Rubicon */}
        <Series.Sequence durationInFrames={172}>
          <Beat7RubiconCrossed />
        </Series.Sequence>

        {/* Micro-beat 8: 998-1128 (4.3s) -> EVIDENCE TWEET 2: LLMpsycho (Bessi) */}
        <Series.Sequence durationInFrames={130}>
          <RealTweetEvidence
            imageFile="llmpsycho_rsi_tweet.png"
            authorName="Bessi"
            handle="LLMpsycho"
            categoryTag="OFFICIAL DROP"
            highlightText="Google DeepMind just dropped Dream-RSI"
          />
        </Series.Sequence>

        {/* Micro-beat 9: 1128-1281 (5.1s) -> Academic Trio Dossier */}
        <Series.Sequence durationInFrames={153}>
          <Beat9AcademicTrio />
        </Series.Sequence>

        {/* Micro-beat 10: 1281-1412 (4.4s) -> Dream-RSI Official Paper Title */}
        <Series.Sequence durationInFrames={131}>
          <Beat10PaperReveal />
        </Series.Sequence>

        {/* Micro-beat 11: 1412-1560 (4.9s) -> Triple Breakthrough Pillars */}
        <Series.Sequence durationInFrames={148}>
          <Beat11TriplePillars />
        </Series.Sequence>

        {/* Micro-beat 12: 1560-1710 (5.0s) -> Scientific Algorithmic Matrix */}
        <Series.Sequence durationInFrames={150}>
          <Beat12ScientificMatrix />
        </Series.Sequence>

        {/* Micro-beat 13: 1710-1850 (4.7s) -> EVIDENCE TWEET 3: Emily (@the_aiju) */}
        <Series.Sequence durationInFrames={140}>
          <RealTweetEvidence
            imageFile="aiju_skeptic_tweet.png"
            authorName="Emily"
            handle="the_aiju"
            categoryTag="COMMUNITY SHOCKWAVE"
            highlightText="The fatal bottleneck of recursive self-improvement has been solved"
          />
        </Series.Sequence>

        {/* Micro-beat 14: 1850-1996 (4.9s) -> The Fatal Bottleneck Mystery */}
        <Series.Sequence durationInFrames={146}>
          <Beat14FatalBottleneck />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// EXPANSIVE HIGH-CANVAS MICRO-BEATS (1680px - 1760px WIDTH)
// -------------------------------------------------------------

const Beat1SingularityVoid: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.12 + 0.88;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '30px 60px', boxSizing: 'border-box' }}>
      {/* Massive Outer Orbital Rings (760px) */}
      <div style={{ position: 'absolute', width: 760, height: 760, borderRadius: '50%', border: '1px solid rgba(66, 133, 244, 0.25)', transform: `scale(${pulse})`, boxShadow: '0 0 80px rgba(66, 133, 244, 0.15)' }} />
      <div style={{ position: 'absolute', width: 560, height: 560, borderRadius: '50%', border: '2px dashed rgba(239, 68, 68, 0.35)', transform: `rotate(${frame * 1.2}deg)` }} />
      <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', border: '1px solid rgba(34, 197, 94, 0.3)', transform: `rotate(-${frame * 1.8}deg)` }} />
      
      {/* Top Banner Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.5)', padding: '8px 24px', borderRadius: 20, marginBottom: 24, zIndex: 5 }}>
        <ShieldAlert size={18} color="#EF4444" />
        <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE SINGULARITY THRESHOLD • I.J. GOOD INTELLIGENCE HORIZON
        </span>
      </div>

      {/* Massive Headline */}
      <div style={{ color: '#FFFFFF', fontSize: 78, fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-0.04em', textAlign: 'center', textShadow: '0 0 50px rgba(66, 133, 244, 0.65)', zIndex: 5, lineHeight: 1.1 }}>
        RECURSIVE SELF-IMPROVEMENT
      </div>
      
      {/* Expansive Sub-dossier Banner */}
      <div style={{ marginTop: 24, display: 'flex', gap: 24, color: '#94A3B8', fontSize: 15, fontFamily: 'monospace', zIndex: 5, backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '10px 28px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
        <span>AUTONOMOUS COGNITIVE MUTATION</span>
        <span>•</span>
        <span style={{ color: '#60A5FA', fontWeight: 700 }}>ZERO HUMAN IN THE LOOP</span>
        <span>•</span>
        <span>EXPONENTIAL RUNAWAY VELOCITY</span>
      </div>
    </div>
  );
};

const Beat2ExponentialAsymptote: React.FC = () => {
  const frame = useCurrentFrame();
  const anim = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.35)', padding: '8px 24px', borderRadius: 20, marginBottom: 18 }}>
        <TrendingUp size={18} color="#60A5FA" />
        <span style={{ color: '#60A5FA', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          INTELLIGENCE TRAJECTORY • EXPONENTIAL SINGULARITY DIVERGENCE
        </span>
      </div>

      {/* Massive 1720 x 720 Graph Viewport */}
      <div style={{ width: 1720, height: 720, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: 24, position: 'relative', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.85)' }}>
        <svg width="1720" height="720" viewBox="0 0 1720 720">
          {/* Detailed Coordinate Grid */}
          {[120, 240, 360, 480, 600].map((y) => (
            <line key={y} x1="120" y1={y} x2="1620" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
          ))}
          {[320, 520, 720, 920, 1120, 1320, 1520].map((x) => (
            <line key={x} x1={x} y1="80" x2={x} y2="620" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 6" />
          ))}

          {/* Axes */}
          <line x1="120" y1="620" x2="1620" y2="620" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
          <line x1="120" y1="80" x2="120" y2="620" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />

          {/* Standard Baseline Linear Growth Curve (Blue) */}
          <path d="M 120 600 L 1400 480" fill="none" stroke="#64748B" strokeWidth="3" strokeDasharray="8 8" />

          {/* Exponential Recursive Singularity Curve (Glowing Red & Amber) */}
          <path
            d="M 120 600 Q 1100 580, 1420 100"
            fill="none"
            stroke="#EF4444"
            strokeWidth="6"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - anim)}
          />
        </svg>

        {/* Left Axis Labels */}
        <div style={{ position: 'absolute', top: 100, left: 40, color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, transform: 'rotate(-90deg)' }}>
          INTELLIGENCE METRIC I(t) ➔
        </div>
        <div style={{ position: 'absolute', bottom: 30, right: 140, color: '#94A3B8', fontSize: 13, fontFamily: 'monospace' }}>
          TIME (GENERATIONS) ➔
        </div>

        {/* Telemetry Annotation Box (Bottom Right) */}
        <div style={{ position: 'absolute', bottom: 40, right: 80, backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 16, padding: '20px 28px', textAlign: 'right', backdropFilter: 'blur(10px)' }}>
          <div style={{ color: '#EF4444', fontSize: 28, fontWeight: 900, fontFamily: 'monospace' }}>
            MATHEMATICAL CERTAINTY
          </div>
          <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 4 }}>
            I.J. Good (1965): Ultraintelligent Feedback Loop
          </div>
          <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', marginTop: 8, fontWeight: 700 }}>
            dI/dt &gt; 0 • Positive Feedback Velocity
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat3NeuralTopology: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 1.5;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)', padding: '8px 24px', borderRadius: 20, marginBottom: 20 }}>
        <Cpu size={18} color="#22C55E" />
        <span style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          AUTONOMOUS TOPOLOGY RE-ARCHITECTURE • LIVE MUTATING WEIGHTS
        </span>
      </div>

      {/* Expansive 1720 x 720 Topology Viewport */}
      <div style={{ width: 1720, height: 720, backgroundColor: 'rgba(10, 15, 30, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: 24, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 60px', boxSizing: 'border-box' }}>
        {/* Layer 1: Input Perception Nodes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          <div style={{ color: '#3B82F6', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>INPUT TENSORS</div>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '2px solid #3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 800, fontSize: 16 }}>
              x{n}
            </div>
          ))}
        </div>

        {/* Center: Dynamic Mutating Core Hub */}
        <div style={{ position: 'relative', width: 440, height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="440" height="440" viewBox="0 0 440 440" style={{ transform: `rotate(${rotation}deg)` }}>
            <circle cx="220" cy="220" r="160" fill="none" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="3" strokeDasharray="14 14" />
            <circle cx="220" cy="60" r="22" fill="#22C55E" />
            <circle cx="360" cy="140" r="22" fill="#3B82F6" />
            <circle cx="360" cy="300" r="22" fill="#A855F7" />
            <circle cx="220" cy="380" r="22" fill="#06B6D4" />
            <circle cx="80" cy="300" r="22" fill="#EAB308" />
            <circle cx="80" cy="140" r="22" fill="#EF4444" />
            <line x1="220" y1="60" x2="220" y2="380" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
            <line x1="80" y1="140" x2="360" y2="300" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
            <line x1="80" y1="300" x2="360" y2="140" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
          </svg>

          <div style={{ position: 'absolute', textAlign: 'center', backgroundColor: 'rgba(15, 23, 42, 0.95)', padding: '16px 24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              CLOSED-LOOP
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 900 }}>
              DYNAMIC RE-WIRING
            </div>
          </div>
        </div>

        {/* Layer 3: Optimized Discovery Policy Output */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>MUTATED POLICIES</div>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '2px solid #22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 800, fontSize: 16 }}>
              π{n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Beat4ZeroHumanIntervention: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 40, maxWidth: 1720, width: '100%', height: 680 }}>
        {/* Human Loop Disconnected (840px width) */}
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '2px solid rgba(239, 68, 68, 0.4)', borderRadius: 24, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
              <ShieldAlert size={20} />
              <span>TRADITIONAL SYSTEM ARCHITECTURE</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, marginTop: 16, lineHeight: 1.15 }}>
              Human Engineer in the Loop
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6 }}>
              Historically required researchers to manually design heuristics, tune prompts, and curate datasets.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
            <span style={{ color: '#EF4444', fontSize: 24, fontWeight: 900, fontFamily: 'monospace' }}>
              STATUS: COMPLETELY DISCONNECTED
            </span>
          </div>
        </div>

        {/* Autonomous Engine Online (840px width) */}
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '2px solid rgba(34, 197, 94, 0.5)', borderRadius: 24, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(34, 197, 94, 0.15)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
              <Sparkles size={20} />
              <span>GOOGLE DEEPMIND FRONTIER</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, marginTop: 16, lineHeight: 1.15 }}>
              Autonomous RSI Engine
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6 }}>
              The machine recursively evolves, tests, and deploys its own algorithmic problem-solving logic.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', border: '2px solid #22C55E', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
            <span style={{ color: '#22C55E', fontSize: 24, fontWeight: 900, fontFamily: 'monospace' }}>
              STATUS: 100% AUTONOMOUS &amp; ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat5IntelligenceExplosion: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 5) * 0.08 + 0.92;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1680, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.5)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 70px rgba(239, 68, 68, 0.3)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 900 }}>
          THEORETICAL SUPERINTELLIGENCE MANDATE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 72, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          INTELLIGENCE EXPLOSION
        </div>
        <div style={{ color: '#F87171', fontSize: 22, fontFamily: 'monospace', marginTop: 18 }}>
          dI/dt &gt; 0 • Positive Feedback Velocity Confirmed
        </div>

        <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '16px 28px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>THEORETICAL PROOF: </span>
            <span style={{ color: '#FFFFFF', fontWeight: 800 }}>I.J. Good (1965)</span>
          </div>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '16px 28px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>EMPIRICAL ARTIFACT: </span>
            <span style={{ color: '#22C55E', fontWeight: 800 }}>DeepMind Dream-RSI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat7RubiconCrossed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 700, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(66, 133, 244, 0.4)', borderRadius: 24, padding: '48px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 70px rgba(66, 133, 244, 0.25)', position: 'relative' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'rgba(66, 133, 244, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #4285F4', marginBottom: 24, boxShadow: '0 0 50px rgba(66, 133, 244, 0.5)' }}>
          <GoogleGeminiLogo size={68} />
        </div>
        <div style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.35em', fontWeight: 800 }}>
          SEPTEMBER 16, 2026 • OFFICIAL BREAKTHROUGH
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center', lineHeight: 1.1 }}>
          GOOGLE DEEPMIND CROSSES THE RUBICON
        </div>
        <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', borderRadius: 10, padding: '10px 28px', color: '#22C55E', fontFamily: 'monospace', fontSize: 16, fontWeight: 900, marginTop: 28 }}>
          RECURSIVE SELF-IMPROVEMENT (RSI) DEPLOYED
        </div>
      </div>
    </div>
  );
};

const Beat9AcademicTrio: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', marginBottom: 28 }}>
        ACADEMIC &amp; RESEARCH CONSORTIUM
      </div>
      <div style={{ display: 'flex', gap: 32, maxWidth: 1720, width: '100%', height: 620 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(66, 133, 244, 0.08)', border: '2px solid rgba(66, 133, 244, 0.4)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div>
            <div style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>PRIMARY INSTITUTION</div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 12 }}>Google DeepMind</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 14, lineHeight: 1.6 }}>Lead Architecture, Compute Infrastructure &amp; Foundation Model Backbone</p>
          </div>
          <div style={{ color: '#4285F4', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>LEAD RESEARCH LAB</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '2px solid rgba(239, 68, 68, 0.4)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div>
            <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>SIMULATION LAB</div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 12 }}>Univ. of Maryland</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 14, lineHeight: 1.6 }}>Offline Ground Truth Simulation Theory &amp; AST Policy Transformation</p>
          </div>
          <div style={{ color: '#EF4444', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>CO-AUTHOR INSTITUTION</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(234, 179, 8, 0.08)', border: '2px solid rgba(234, 179, 8, 0.4)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div>
            <div style={{ color: '#EAB308', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>VERIFICATION LAB</div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 12 }}>Univ. of Virginia</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 14, lineHeight: 1.6 }}>Algorithmic Search Optimization &amp; Lasso Benchmark Verification</p>
          </div>
          <div style={{ color: '#EAB308', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>CO-AUTHOR INSTITUTION</div>
        </div>
      </div>
    </div>
  );
};

const Beat10PaperReveal: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(59, 130, 246, 0.45)', borderRadius: 24, padding: '48px 64px', maxWidth: 1720, width: '100%', height: 680, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(0,0,0,0.9)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#3B82F6', fontSize: 14, fontFamily: 'monospace', fontWeight: 800, marginBottom: 16 }}>
            <FileText size={20} />
            <span>OFFICIAL LANDMARK RESEARCH ARTIFACT • ARXIV:2609.0916 (SEP 16, 2026)</span>
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, lineHeight: 1.15 }}>
            Dream-RSI: Recursive Self-Improvement through Evolving Worlds
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6, maxWidth: 1200 }}>
            A general meta-cognitive framework that accumulates real-world discovery histories and executes thousands of simulated policy mutations in high-fidelity replay worlds.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28 }}>
          <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '16px 24px', borderRadius: 12, border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <div style={{ color: '#EF4444', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>NOT A CHATBOT</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, marginTop: 4 }}>Zero Chat Assistant Trivia</div>
          </div>
          <div style={{ flex: 2, backgroundColor: 'rgba(34, 197, 94, 0.15)', padding: '16px 24px', borderRadius: 12, border: '2px solid #22C55E' }}>
            <div style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>TARGET APPLICATION</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, marginTop: 4 }}>Autonomous Scientific Discovery &amp; Algorithmic Synthesis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat11TriplePillars: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', marginBottom: 28 }}>
        CORE SCIENTIFIC DISCOVERY DOMAINS
      </div>
      <div style={{ display: 'flex', gap: 32, maxWidth: 1720, width: '100%', height: 620 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '2px solid rgba(168, 85, 247, 0.45)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <Atom size={56} color="#C084FC" />
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>Scientific Discovery</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>Uncovering novel physical laws, chemical reaction pathways, and materials.</p>
          </div>
          <div style={{ color: '#C084FC', fontFamily: 'monospace', fontSize: 13, fontWeight: 800 }}>FRONTIER LEVEL 1</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid rgba(6, 182, 212, 0.45)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <Cpu size={56} color="#22D3EE" />
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>Algorithm Engineering</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>Writing hyper-optimized GPU CUDA kernels, sorting networks, and solver engines.</p>
          </div>
          <div style={{ color: '#22D3EE', fontFamily: 'monospace', fontSize: 13, fontWeight: 800 }}>FRONTIER LEVEL 2</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '2px solid rgba(34, 197, 94, 0.45)', borderRadius: 20, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <Sparkles size={56} color="#4ADE80" />
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>Mathematical Proofs</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>Resolving millennium prize conjectures and multi-variable optimization.</p>
          </div>
          <div style={{ color: '#4ADE80', fontFamily: 'monospace', fontSize: 13, fontWeight: 800 }}>FRONTIER LEVEL 3</div>
        </div>
      </div>
    </div>
  );
};

const Beat12ScientificMatrix: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: '#000000', border: '2px solid rgba(34, 197, 94, 0.4)', borderRadius: 24, padding: '36px 48px', fontFamily: 'monospace', boxShadow: '0 30px 70px rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#22C55E', fontSize: 16, fontWeight: 800 }}>
            <Terminal size={20} />
            <span>DREAM_RSI::KERNEL_SYNTHESIS_PIPELINE (AST META-OPTIMIZER)</span>
          </div>
          <span style={{ color: '#64748B', fontSize: 14 }}>STATUS: EXECUTION RUNNING</span>
        </div>

        <div style={{ color: '#94A3B8', fontSize: 18, lineHeight: 2.1, margin: '24px 0' }}>
          &gt; [INIT_DISCOVERY] Target: Multi-Dimensional Lasso Solver Synthesis<br />
          &gt; [AST_PARSER] Mutating search policy: branch_pruning_depth = 8; heuristic_weight = 0.94<br />
          &gt; [EVALUATION] Offline Replay Simulator: verified 14,200 past transitions with 0ms delay<br />
          &gt; <span style={{ color: '#22C55E', fontWeight: 'bold' }}>[SUCCESS] Champion Exploration Policy Discovered: 162x acceleration achieved</span><br />
          &gt; [DEPLOYMENT] Beaming optimized algorithm to physical execution cluster...
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 16, color: '#64748B', fontSize: 13 }}>
          <span>MEMORY: 1.2 GB (OFFLINE SIMULATOR)</span>
          <span>WEIGHTS: 100% FROZEN (NO GRADIENTS)</span>
          <span style={{ color: '#22C55E', fontWeight: 700 }}>RUNTIME LATENCY: 0.00ms</span>
        </div>
      </div>
    </div>
  );
};

const Beat14FatalBottleneck: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.08 + 0.92;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.5)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(239, 68, 68, 0.25)' }}>
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE HISTORICAL PARALYSIS BROKEN
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          THE FATAL BOTTLENECK SOLVED
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Online Evaluation Wall Shattered by Offline Dream Replay
        </div>
      </div>
    </div>
  );
};
