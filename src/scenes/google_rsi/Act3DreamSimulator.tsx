import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import { BranchingDiscoveryTree } from '../../components/BranchingDiscoveryTree';
import {
  Moon,
  Sparkles,
  GitBranch,
  Cpu,
  Trophy,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  DollarSign,
  Layers,
} from 'lucide-react';

export const Act3DreamSimulator: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 26: 163f (5.4s) -> EVIDENCE TWEET 4: Stasiu Botowski */}
        <Series.Sequence durationInFrames={163}>
          <RealTweetEvidence
            imageFile="stasiu_rsi_tweet.png"
            authorName="Stasiu Botowski"
            handle="Stasiu_Botowski"
            categoryTag="THE ARCHITECTURE"
            highlightText="Dream-RSI: High-fidelity offline replay simulator"
          />
        </Series.Sequence>

        {/* Micro-beat 27: 152f (5.1s) -> The Replay Dream World Emblem */}
        <Series.Sequence durationInFrames={152}>
          <BeatDreamWorldEmblem />
        </Series.Sequence>

        {/* Micro-beat 28: 199f (6.6s) -> Branching Discovery Tree Footprint */}
        <Series.Sequence durationInFrames={199}>
          <BranchingDiscoveryTree mode="growth" />
        </Series.Sequence>

        {/* Micro-beat 29: 146f (4.9s) -> Dead Ends & Failures Telemetry */}
        <Series.Sequence durationInFrames={146}>
          <BeatDeadEndsAsData />
        </Series.Sequence>

        {/* Micro-beat 30: 107f (3.6s) -> Historical Tree Converts to Simulator */}
        <Series.Sequence durationInFrames={107}>
          <BeatTreeToSimulator />
        </Series.Sequence>

        {/* Micro-beat 31: 112f (3.7s) -> High-Fidelity Offline Simulator */}
        <Series.Sequence durationInFrames={112}>
          <BeatOfflineGroundTruth />
        </Series.Sequence>

        {/* Micro-beat 32: 128f (4.3s) -> Known Outcomes = 0ms Latency */}
        <Series.Sequence durationInFrames={128}>
          <BeatZeroLatencyOutcomes />
        </Series.Sequence>

        {/* Micro-beat 33: 150f (5.0s) -> Thousands of Mutated Policies in Dream */}
        <Series.Sequence durationInFrames={150}>
          <BeatMutationsInDream />
        </Series.Sequence>

        {/* Micro-beat 34: 90f (3.0s) -> Virtually Zero Compute Cost Bar */}
        <Series.Sequence durationInFrames={90}>
          <BeatVirtuallyZeroCost />
        </Series.Sequence>

        {/* Micro-beat 35: 192f (6.4s) -> Cognitive Sandbox Dual Replay */}
        <Series.Sequence durationInFrames={192}>
          <BeatCognitiveSandbox />
        </Series.Sequence>

        {/* Micro-beat 36: 103f (3.4s) -> Pruning Dead Ends SVG Tree */}
        <Series.Sequence durationInFrames={103}>
          <BranchingDiscoveryTree mode="pruning" />
        </Series.Sequence>

        {/* Micro-beat 37: 75f (2.5s) -> Rewiring Search Heuristics */}
        <Series.Sequence durationInFrames={75}>
          <BeatRewiringHeuristics />
        </Series.Sequence>

        {/* Micro-beat 38: 117f (3.9s) -> Champion Exploration Policy Crowned */}
        <Series.Sequence durationInFrames={117}>
          <BeatChampionPolicy />
        </Series.Sequence>

        {/* Micro-beat 39: 111f (3.7s) -> Physical World Redeployment Highway */}
        <Series.Sequence durationInFrames={111}>
          <BeatPhysicalRedeployment />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SUB-BEATS
// -------------------------------------------------------------

const BeatDreamWorldEmblem: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.12 + 0.88;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '2px solid #C084FC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transform: `scale(${pulse})`, boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}>
        <Moon size={40} color="#C084FC" />
      </div>
      <div style={{ color: '#C084FC', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
        THE BREAKTHROUGH ARCHITECTURE
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, fontFamily: 'monospace', marginTop: 8, textAlign: 'center' }}>
        THE REPLAY DREAM WORLD
      </div>
      <div style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'monospace', marginTop: 12 }}>
        Offline High-Fidelity Simulator Built from Accumulated Reality
      </div>
    </div>
  );
};

const BeatDeadEndsAsData: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: 18, padding: '32px 54px', maxWidth: 840, textAlign: 'center' }}>
        <div style={{ color: '#38BDF8', fontSize: 12, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
          HISTORICAL FOOTPRINT TELEMETRY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 8 }}>
          Every Failure Becomes Ground Truth
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
          Accumulated discovery tree contains exact state transitions and results
        </div>
      </div>
    </div>
  );
};

const BeatTreeToSimulator: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid #3B82F6', borderRadius: 14, padding: '20px 28px', textAlign: 'center' }}>
          <div style={{ color: '#3B82F6', fontSize: 12, fontFamily: 'monospace' }}>SOURCE</div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>Accumulated Tree</div>
        </div>
        <div style={{ color: '#C084FC', fontSize: 28, fontWeight: 900 }}>➔</div>
        <div style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)', border: '1px solid #A855F7', borderRadius: 14, padding: '20px 28px', textAlign: 'center', boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)' }}>
          <div style={{ color: '#C084FC', fontSize: 12, fontFamily: 'monospace' }}>OUTPUT</div>
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>High-Fidelity Simulator</div>
        </div>
      </div>
    </div>
  );
};

const BeatOfflineGroundTruth: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid #06B6D4', borderRadius: 16, padding: '28px 48px', textAlign: 'center' }}>
        <ShieldCheck size={36} color="#06B6D4" style={{ margin: '0 auto 8px' }} />
        <div style={{ color: '#06B6D4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          100% DETERMINISTIC FIDELITY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 4 }}>
          Offline Ground Truth Simulator
        </div>
      </div>
    </div>
  );
};

const BeatZeroLatencyOutcomes: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
        EVALUATION LATENCY COMPRESSED
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 72, fontWeight: 900, fontFamily: 'monospace', textShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }}>
        0.00 ms
      </div>
      <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 8 }}>
        Outcomes Pre-Recorded • Instant Synthetic Feedback
      </div>
    </div>
  );
};

const BeatMutationsInDream: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: 18, padding: '28px 48px', textAlign: 'center' }}>
        <Sparkles size={36} color="#C084FC" style={{ margin: '0 auto 10px' }} />
        <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>
          Testing Thousands of Mutated Policies
        </div>
        <div style={{ color: '#C084FC', fontSize: 14, fontFamily: 'monospace', fontWeight: 700, marginTop: 8 }}>
          Entirely Inside The Dream State
        </div>
      </div>
    </div>
  );
};

const BeatVirtuallyZeroCost: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 24, maxWidth: 800, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 14, padding: '20px', textAlign: 'center' }}>
          <div style={{ color: '#EF4444', fontSize: 11, fontFamily: 'monospace' }}>ONLINE REAL-WORLD</div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 4 }}>$100,000+</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', borderRadius: 14, padding: '20px', textAlign: 'center', boxShadow: '0 0 25px rgba(34, 197, 94, 0.2)' }}>
          <div style={{ color: '#22C55E', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>DREAM SIMULATOR</div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 4 }}>$0.00</div>
        </div>
      </div>
    </div>
  );
};

const BeatCognitiveSandbox: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 880, backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 16, padding: '24px 32px' }}>
        <div style={{ color: '#3B82F6', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, marginBottom: 12 }}>
          COGNITIVE SANDBOX DUAL REPLAY
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', padding: '16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#94A3B8', fontSize: 11, fontFamily: 'monospace' }}>HISTORICAL ATTEMPT #1</div>
            <div style={{ color: '#EF4444', fontSize: 14, fontWeight: 700, marginTop: 4 }}>Wasted Compute on Dead End Branch #4</div>
          </div>
          <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '16px', borderRadius: 10, border: '1px solid rgba(34, 197, 94, 0.3)' }}>
            <div style={{ color: '#22C55E', fontSize: 11, fontFamily: 'monospace' }}>DREAM REPLAY MUTATION</div>
            <div style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700, marginTop: 4 }}>Pruned Dead End • Directed to Global Optima</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatRewiringHeuristics: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid #06B6D4', borderRadius: 16, padding: '24px 48px', textAlign: 'center' }}>
        <Cpu size={36} color="#06B6D4" style={{ margin: '0 auto 8px' }} />
        <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>
          Rewiring Search Heuristics
        </div>
        <div style={{ color: '#06B6D4', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>
          Autonomous Policy Evolution
        </div>
      </div>
    </div>
  );
};

const BeatChampionPolicy: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(234, 179, 8, 0.12)', border: '2px solid #EAB308', borderRadius: 18, padding: '28px 52px', textAlign: 'center', boxShadow: '0 0 30px rgba(234, 179, 8, 0.2)' }}>
        <Trophy size={40} color="#EAB308" style={{ margin: '0 auto 10px' }} />
        <div style={{ color: '#EAB308', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>
          DREAM TOURNAMENT WINNER
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 900, marginTop: 4 }}>
          Champion Exploration Policy v4.2
        </div>
      </div>
    </div>
  );
};

const BeatPhysicalRedeployment: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '8px 24px', marginBottom: 16 }}>
        <Rocket size={18} color="#22C55E" />
        <span style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          REDEPLOYED TO REALITY
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, textAlign: 'center' }}>
        Champion Policy Active in Physical World
      </div>
    </div>
  );
};
