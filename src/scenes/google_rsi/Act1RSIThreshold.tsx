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
// MICRO-BEAT SUB-COMPONENTS
// -------------------------------------------------------------

const Beat1SingularityVoid: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.15 + 0.85;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', width: 440, height: 440, borderRadius: '50%', border: '2px solid rgba(66, 133, 244, 0.4)', transform: `scale(${pulse})`, boxShadow: '0 0 60px rgba(66, 133, 244, 0.2)' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '1px dashed rgba(239, 68, 68, 0.4)', transform: `rotate(${frame * 1.5}deg)` }} />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '6px 20px', borderRadius: 20, marginBottom: 24 }}>
        <ShieldAlert size={16} color="#EF4444" />
        <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE SINGULARITY THRESHOLD
        </span>
      </div>

      <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-0.03em', textAlign: 'center', textShadow: '0 0 40px rgba(66, 133, 244, 0.6)' }}>
        RECURSIVE SELF-IMPROVEMENT
      </div>
      <div style={{ color: '#64748B', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.25em', marginTop: 14 }}>
        THE DEFINING BOUNDARY OF SUPERINTELLIGENCE
      </div>
    </div>
  );
};

const Beat2ExponentialAsymptote: React.FC = () => {
  const frame = useCurrentFrame();
  const anim = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.35)', padding: '6px 18px', borderRadius: 20, marginBottom: 20 }}>
        <TrendingUp size={16} color="#60A5FA" />
        <span style={{ color: '#60A5FA', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>
          INTELLIGENCE TRAJECTORY • ASYMPTOTIC DIVERGENCE
        </span>
      </div>

      <div style={{ width: 880, height: 440, backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 18, position: 'relative', overflow: 'hidden' }}>
        <svg width="880" height="440" viewBox="0 0 880 440">
          {/* Grid lines */}
          <line x1="80" y1="360" x2="820" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <line x1="80" y1="60" x2="80" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

          {/* Exponential curve */}
          <path
            d="M 80 350 Q 520 340, 700 80"
            fill="none"
            stroke="#EF4444"
            strokeWidth="4"
            strokeDasharray="900"
            strokeDashoffset={900 * (1 - anim)}
          />
        </svg>

        <div style={{ position: 'absolute', bottom: 30, right: 60, textAlign: 'right' }}>
          <div style={{ color: '#EF4444', fontSize: 24, fontWeight: 900, fontFamily: 'monospace' }}>
            MATHEMATICAL CERTAINTY
          </div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace' }}>
            I.J. Good (1965): Ultraintelligent Machine Loop
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat3NeuralTopology: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 1.2;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)', padding: '6px 18px', borderRadius: 20, marginBottom: 24 }}>
        <Cpu size={16} color="#22C55E" />
        <span style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>
          AUTONOMOUS RE-ARCHITECTURE
        </span>
      </div>

      <div style={{ position: 'relative', width: 340, height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="340" height="340" viewBox="0 0 340 340" style={{ transform: `rotate(${rotation}deg)` }}>
          <circle cx="170" cy="170" r="120" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="170" cy="50" r="16" fill="#22C55E" />
          <circle cx="274" cy="110" r="16" fill="#3B82F6" />
          <circle cx="274" cy="230" r="16" fill="#A855F7" />
          <circle cx="170" cy="290" r="16" fill="#06B6D4" />
          <circle cx="66" cy="230" r="16" fill="#EAB308" />
          <circle cx="66" cy="110" r="16" fill="#EF4444" />
          <line x1="170" y1="50" x2="170" y2="290" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="66" y1="110" x2="274" y2="230" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        </svg>

        <div style={{ position: 'absolute', textAlign: 'center' }}>
          <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 900, fontFamily: 'monospace' }}>
            MUTATING
          </div>
          <div style={{ color: '#22C55E', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>
            COGNITIVE TOPOLOGY
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat4ZeroHumanIntervention: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <div style={{ display: 'flex', gap: 32, maxWidth: 880, width: '100%' }}>
        {/* Human Loop Disconnected */}
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '2px solid rgba(239, 68, 68, 0.4)', borderRadius: 16, padding: '24px 32px', textAlign: 'center' }}>
          <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            HUMAN ENGINEER IN THE LOOP
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 8 }}>
            DISCONNECTED
          </div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 8 }}>
            ZERO MANUAL PROMPT / TUNING
          </div>
        </div>

        {/* Autonomous Engine Online */}
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '2px solid rgba(34, 197, 94, 0.5)', borderRadius: 16, padding: '24px 32px', textAlign: 'center', boxShadow: '0 0 30px rgba(34, 197, 94, 0.15)' }}>
          <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            AUTONOMOUS RSI ENGINE
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 8 }}>
            100% ONLINE
          </div>
          <div style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace', marginTop: 8 }}>
            CLOSED-LOOP SELF-EVOLUTION
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat5IntelligenceExplosion: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 5) * 0.1 + 0.9;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: 20, padding: '36px 64px', textAlign: 'center', transform: `scale(${pulse})` }}>
        <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          MATHEMATICAL CERTAINTY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, fontFamily: 'monospace', marginTop: 8 }}>
          INTELLIGENCE EXPLOSION
        </div>
        <div style={{ color: '#F87171', fontSize: 16, fontFamily: 'monospace', marginTop: 12 }}>
          dI/dt &gt; 0 • Positive Feedback Velocity
        </div>
      </div>
    </div>
  );
};

const Beat7RubiconCrossed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(66, 133, 244, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #4285F4', marginBottom: 20 }}>
        <GoogleGeminiLogo size={52} />
      </div>
      <div style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
        SEPTEMBER 16, 2026 • OFFICIAL RELEASE
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', marginTop: 8, textAlign: 'center' }}>
        GOOGLE DEEPMIND CROSSES THE RUBICON
      </div>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 8, padding: '6px 18px', color: '#22C55E', fontFamily: 'monospace', fontSize: 13, fontWeight: 800, marginTop: 18 }}>
        RSI MILESTONE VERIFIED
      </div>
    </div>
  );
};

const Beat9AcademicTrio: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', marginBottom: 24 }}>
        COLLABORATIVE RESEARCH CONSORTIUM
      </div>
      <div style={{ display: 'flex', gap: 24, maxWidth: 940, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(66, 133, 244, 0.1)', border: '1px solid rgba(66, 133, 244, 0.4)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
          <div style={{ color: '#4285F4', fontSize: 24, fontWeight: 900 }}>GOOGLE DEEPMIND</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 6 }}>Lead Architecture & Compute</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
          <div style={{ color: '#EF4444', fontSize: 24, fontWeight: 900 }}>UNIV. OF MARYLAND</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 6 }}>Simulation Theory & AST</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.4)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
          <div style={{ color: '#EAB308', fontSize: 24, fontWeight: 900 }}>UNIV. OF VIRGINIA</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 6 }}>Algorithmic Search Verification</div>
        </div>
      </div>
    </div>
  );
};

const Beat10PaperReveal: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 60px' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: 20, padding: '36px 48px', maxWidth: 920, width: '100%', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#3B82F6', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, marginBottom: 12 }}>
          <FileText size={16} />
          <span>OFFICIAL RESEARCH PAPER • ARXIV:2609.0916</span>
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 900, lineHeight: 1.2 }}>
          Dream-RSI: Recursive Self-Improvement through Evolving Worlds
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <div style={{ textDecoration: 'line-through', color: '#64748B', fontSize: 16, fontFamily: 'monospace' }}>
            NOT A CHATBOT
          </div>
          <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', fontWeight: 800 }}>
            AUTONOMOUS SCIENTIFIC DISCOVERY ENGINE
          </div>
        </div>
      </div>
    </div>
  );
};

const Beat11TriplePillars: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.25em', marginBottom: 24 }}>
        CORE MISSION DOMAINS
      </div>
      <div style={{ display: 'flex', gap: 20, maxWidth: 960, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: 14, padding: '24px 18px', textAlign: 'center' }}>
          <Atom size={32} color="#C084FC" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Scientific Discovery</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: 14, padding: '24px 18px', textAlign: 'center' }}>
          <Cpu size={32} color="#22D3EE" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Algorithmic Engineering</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.4)', borderRadius: 14, padding: '24px 18px', textAlign: 'center' }}>
          <Sparkles size={32} color="#4ADE80" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Mathematical Breakthroughs</div>
        </div>
      </div>
    </div>
  );
};

const Beat12ScientificMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 840, backgroundColor: '#000000', border: '1px solid rgba(34, 197, 94, 0.4)', borderRadius: 14, padding: '20px 24px', fontFamily: 'monospace' }}>
        <div style={{ color: '#22C55E', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8, marginBottom: 12 }}>
          &gt; DREAM_RSI::KERNEL_SYNTHESIS_PIPELINE
        </div>
        <div style={{ color: '#64748B', fontSize: 13, lineHeight: 1.7 }}>
          [AST_PARSER] Optimizing policy: branch_pruning_depth = 8<br />
          [EVALUATION] Replay state: verified 14,200 past transitions<br />
          <span style={{ color: '#22C55E', fontWeight: 'bold' }}>[SUCCESS] 162x acceleration achieved on Lasso target</span>
        </div>
      </div>
    </div>
  );
};

const Beat14FatalBottleneck: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.1 + 0.9;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.5)', borderRadius: 20, padding: '32px 56px', textAlign: 'center', transform: `scale(${pulse})` }}>
        <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE HISTORICAL PARALYSIS
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, marginTop: 8 }}>
          THE FATAL BOTTLENECK SOLVED
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
          Online Evaluation Wall Shattered by Offline Dream Replay
        </div>
      </div>
    </div>
  );
};
