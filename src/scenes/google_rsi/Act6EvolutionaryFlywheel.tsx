import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { EvolutionaryFlywheel } from '../../components/EvolutionaryFlywheel';
import { GoogleGeminiLogo } from '../../RealLogos';
import {
  RefreshCw,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Flame,
  Globe,
  Compass,
} from 'lucide-react';

export const Act6EvolutionaryFlywheel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 60: 148f (4.9s) -> The End of Flat Static Transformers */}
        <Series.Sequence durationInFrames={148}>
          <BeatEndOfStaticTransformers />
        </Series.Sequence>

        {/* Micro-beat 61: 135f (4.5s) -> Trillions of Human Text Tokens Limit */}
        <Series.Sequence durationInFrames={135}>
          <BeatHumanTokenLimit />
        </Series.Sequence>

        {/* Micro-beat 62: 161f (5.4s) -> THE 4-STEP EVOLUTIONARY FLYWHEEL */}
        <Series.Sequence durationInFrames={161}>
          <EvolutionaryFlywheel />
        </Series.Sequence>

        {/* Micro-beat 63: 102f (3.4s) -> Accelerated Flywheel Spinning */}
        <Series.Sequence durationInFrames={102}>
          <BeatFlywheelAcceleration />
        </Series.Sequence>

        {/* Micro-beat 64: 120f (4.0s) -> Reality -> Dream -> Upgraded Reality Cycle */}
        <Series.Sequence durationInFrames={120}>
          <BeatLoopCycle />
        </Series.Sequence>

        {/* Micro-beat 65: 173f (5.8s) -> Returning Smarter Than Yesterday */}
        <Series.Sequence durationInFrames={173}>
          <BeatSmarterThanYesterday />
        </Series.Sequence>

        {/* Micro-beat 66: 184f (6.1s) -> Untethered from Human Curation Chains */}
        <Series.Sequence durationInFrames={184}>
          <BeatUntetheredFromHumanData />
        </Series.Sequence>

        {/* Micro-beat 67: 121f (4.0s) -> Grand Outro: Dream-RSI Arrived */}
        <Series.Sequence durationInFrames={121}>
          <BeatGrandOutro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// EXPANSIVE 1720px SUB-BEATS
// -------------------------------------------------------------

const BeatEndOfStaticTransformers: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
          <Flame size={20} />
          <span>PARADIGM OBSOLESCENCE NOTICE</span>
        </div>

        <div>
          <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', lineHeight: 1.15 }}>
            THE ERA OF STATIC TRANSFORMERS IS OVER
          </div>
          <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 18, maxWidth: 1200, lineHeight: 1.6 }}>
            Brute-force next-token prediction across static human datasets has hit diminishing returns. Frontier intelligence requires dynamic, autonomous recursive self-improvement.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            OLD PARADIGM: <span style={{ color: '#EF4444', fontWeight: 700 }}>Passive Next-Token Loss</span>
          </div>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            NEW PARADIGM: <span style={{ color: '#22C55E', fontWeight: 700 }}>Evolving Replay Worlds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatHumanTokenLimit: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(234, 179, 8, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#EAB308', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE DATA WALL REACHED
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          Trillions of Human Tokens Insufficient
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Incremental gains require autonomous synthetic discovery beyond human experience
        </div>
      </div>
    </div>
  );
};

const BeatFlywheelAcceleration: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '10px 28px', marginBottom: 20 }}>
          <Zap size={22} color="#22C55E" />
          <span style={{ color: '#22C55E', fontSize: 15, fontFamily: 'monospace', fontWeight: 800 }}>
            EXPONENTIAL INTELLIGENCE COMPOUNDING
          </span>
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, textAlign: 'center' }}>
          Unlocked The Evolutionary Flywheel
        </div>
      </div>
    </div>
  );
};

const BeatLoopCycle: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(59, 130, 246, 0.4)', borderRadius: 24, padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3B82F6', borderRadius: 20, padding: '40px 28px', textAlign: 'center' }}>
          <Compass size={48} color="#3B82F6" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#3B82F6', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>STAGE 1</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>Explores Reality</div>
        </div>

        <div style={{ color: '#64748B', fontSize: 36, fontWeight: 900 }}>➔</div>

        <div style={{ flex: 1, backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '2px solid #A855F7', borderRadius: 20, padding: '40px 28px', textAlign: 'center' }}>
          <Sparkles size={48} color="#C084FC" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#C084FC', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>STAGE 2</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>Dreams Mistakes</div>
        </div>

        <div style={{ color: '#64748B', fontSize: 36, fontWeight: 900 }}>➔</div>

        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '2px solid #22C55E', borderRadius: 20, padding: '40px 28px', textAlign: 'center' }}>
          <Zap size={48} color="#22C55E" style={{ margin: '0 auto 12px' }} />
          <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>STAGE 3</div>
          <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>Rewrites Logic</div>
        </div>
      </div>
    </div>
  );
};

const BeatSmarterThanYesterday: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.08 + 0.92;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '3px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: `scale(${pulse})`, boxShadow: '0 0 60px rgba(34, 197, 94, 0.3)' }}>
        <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE RECURSIVE COMPOUND ADVANTAGE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, marginTop: 16, textAlign: 'center' }}>
          Returns Smarter Than It Was Yesterday
        </div>
      </div>
    </div>
  );
};

const BeatUntetheredFromHumanData: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(59, 130, 246, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#38BDF8', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE CEILING PERMANENTLY BROKEN
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, marginTop: 12, textAlign: 'center' }}>
          Untethered from Human Dataset Limits
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Self-generating ground truth telemetry through offline recursive simulation
        </div>
      </div>
    </div>
  );
};

const BeatGrandOutro: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 700, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(66, 133, 244, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 80px rgba(66, 133, 244, 0.3)' }}>
        <div style={{ width: 110, height: 110, borderRadius: '50%', backgroundColor: 'rgba(66, 133, 244, 0.15)', border: '2px solid #4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 0 60px rgba(66, 133, 244, 0.5)' }}>
          <GoogleGeminiLogo size={72} />
        </div>
        <div style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.35em', fontWeight: 800 }}>
          THE SINGULARITY HORIZON • SEPTEMBER 2026
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center', lineHeight: 1.15 }}>
          THE ERA OF RECURSIVE SELF-IMPROVEMENT HAS ARRIVED
        </div>
        <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', borderRadius: 10, padding: '10px 28px', color: '#22C55E', fontFamily: 'monospace', fontSize: 16, fontWeight: 900, marginTop: 24 }}>
          GOOGLE DEEPMIND • DREAM-RSI
        </div>
      </div>
    </div>
  );
};
