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
// SUB-BEATS
// -------------------------------------------------------------

const BeatEndOfStaticTransformers: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 20, padding: '36px 54px', textAlign: 'center' }}>
        <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          PARADIGM OBSOLESCENCE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 900, marginTop: 6 }}>
          The Era of Flat Static Transformers is Over
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
          Diminishing returns on human text token scaling
        </div>
      </div>
    </div>
  );
};

const BeatHumanTokenLimit: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 18, padding: '32px 56px', textAlign: 'center' }}>
        <div style={{ color: '#EAB308', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          DATA WALL REACHED
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 8 }}>
          Trillions of Human Tokens Insufficient
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>
          Incremental gains require autonomous synthetic exploration
        </div>
      </div>
    </div>
  );
};

const BeatFlywheelAcceleration: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '8px 24px', marginBottom: 16 }}>
        <Zap size={18} color="#22C55E" />
        <span style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          EXPONENTIAL COMPOUNDING
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, textAlign: 'center' }}>
        Unlocked The Evolutionary Flywheel
      </div>
    </div>
  );
};

const BeatLoopCycle: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, maxWidth: 940, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
          <div style={{ color: '#3B82F6', fontSize: 12, fontFamily: 'monospace' }}>STAGE 1</div>
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Explores Reality</div>
        </div>
        <div style={{ color: '#64748B', fontSize: 22 }}>➔</div>
        <div style={{ flex: 1, backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid #A855F7', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
          <div style={{ color: '#A855F7', fontSize: 12, fontFamily: 'monospace' }}>STAGE 2</div>
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Dreams Mistakes</div>
        </div>
        <div style={{ color: '#64748B', fontSize: 22 }}>➔</div>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22C55E', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
          <div style={{ color: '#22C55E', fontSize: 12, fontFamily: 'monospace' }}>STAGE 3</div>
          <div style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>Rewrites Logic</div>
        </div>
      </div>
    </div>
  );
};

const BeatSmarterThanYesterday: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.1 + 0.9;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', borderRadius: 24, padding: '36px 64px', textAlign: 'center', transform: `scale(${pulse})`, boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE RECURSIVE COMPOUND
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, marginTop: 8 }}>
          Returns Smarter Than It Was Yesterday
        </div>
      </div>
    </div>
  );
};

const BeatUntetheredFromHumanData: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: 20, padding: '36px 56px', textAlign: 'center' }}>
        <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE CEILING BROKEN
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 900, marginTop: 8 }}>
          Untethered from Human Dataset Limits
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
          Self-generating ground truth through offline simulation
        </div>
      </div>
    </div>
  );
};

const BeatGrandOutro: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 90, height: 90, borderRadius: '50%', backgroundColor: 'rgba(66, 133, 244, 0.15)', border: '2px solid #4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 0 50px rgba(66, 133, 244, 0.4)' }}>
        <GoogleGeminiLogo size={56} />
      </div>
      <div style={{ color: '#4285F4', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
        THE SINGULARITY HORIZON
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, fontFamily: 'monospace', marginTop: 8, textAlign: 'center' }}>
        THE ERA OF RECURSIVE SELF-IMPROVEMENT HAS ARRIVED
      </div>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 8, padding: '6px 20px', color: '#22C55E', fontFamily: 'monospace', fontSize: 13, fontWeight: 800, marginTop: 20 }}>
        GOOGLE DEEPMIND • DREAM-RSI
      </div>
    </div>
  );
};
