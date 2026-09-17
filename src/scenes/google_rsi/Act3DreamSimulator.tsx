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
  ArrowRight,
  Database,
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
// EXPANSIVE 1720px SUB-BEATS
// -------------------------------------------------------------

const BeatDreamWorldEmblem: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 0.1 + 0.9;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(168, 85, 247, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(168, 85, 247, 0.25)' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '2px solid #C084FC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, transform: `scale(${pulse})`, boxShadow: '0 0 50px rgba(168, 85, 247, 0.5)' }}>
          <Moon size={52} color="#C084FC" />
        </div>
        <div style={{ color: '#C084FC', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE BREAKTHROUGH ARCHITECTURE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          THE REPLAY DREAM WORLD
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Offline High-Fidelity Simulator Built from Accumulated Reality
        </div>
      </div>
    </div>
  );
};

const BeatDeadEndsAsData: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(56, 189, 248, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
          <Database size={20} />
          <span>ACCUMULATED HISTORICAL FOOTPRINT</span>
        </div>

        <div>
          <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, lineHeight: 1.15 }}>
            Every Failure Becomes Ground Truth Data
          </div>
          <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 16, maxWidth: 1200, lineHeight: 1.6 }}>
            When agents explore real problem spaces, they leave behind an extensive branching tree containing every dead end, failure, and intermediate breakthrough.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            CAPTURED NODES: <span style={{ color: '#22C55E', fontWeight: 700 }}>100% Deterministic States</span>
          </div>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            DEAD END TELEMETRY: <span style={{ color: '#EF4444', fontWeight: 700 }}>Zero Waste (Converted to Bounds)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatTreeToSimulator: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(168, 85, 247, 0.4)', borderRadius: 24, padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid #3B82F6', borderRadius: 20, padding: '48px 36px', textAlign: 'center' }}>
          <GitBranch size={56} color="#3B82F6" style={{ margin: '0 auto 16px' }} />
          <div style={{ color: '#3B82F6', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>SOURCE DATASET</div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 8 }}>Accumulated Real Tree</div>
          <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>Past Attempts &amp; Results</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ color: '#C084FC', fontSize: 48, fontWeight: 900 }}>➔</div>
          <div style={{ color: '#C084FC', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, marginTop: 6 }}>OFFLINE SYNTHESIS</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(168, 85, 247, 0.12)', border: '2px solid #A855F7', borderRadius: 20, padding: '48px 36px', textAlign: 'center', boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' }}>
          <Moon size={56} color="#C084FC" style={{ margin: '0 auto 16px' }} />
          <div style={{ color: '#C084FC', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>TARGET ARTIFACT</div>
          <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900, marginTop: 8 }}>High-Fidelity Replay Simulator</div>
          <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>Ground Truth Known In Advance</div>
        </div>
      </div>
    </div>
  );
};

const BeatOfflineGroundTruth: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06B6D4', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(6, 182, 212, 0.25)' }}>
        <ShieldCheck size={64} color="#06B6D4" style={{ marginBottom: 20 }} />
        <div style={{ color: '#06B6D4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          100% DETERMINISTIC FIDELITY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', marginTop: 12 }}>
          Offline Ground Truth Simulator
        </div>
      </div>
    </div>
  );
};

const BeatZeroLatencyOutcomes: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          EVALUATION LATENCY COMPRESSED TO ZERO
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 136, fontWeight: 900, fontFamily: 'monospace', textShadow: '0 0 50px rgba(34, 197, 94, 0.5)', lineHeight: 0.95, margin: '20px 0' }}>
          0.00 ms
        </div>
        <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace' }}>
          Ground Truth Pre-Recorded • Instant Offline Policy Verification
        </div>
      </div>
    </div>
  );
};

const BeatMutationsInDream: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(168, 85, 247, 0.5)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(168, 85, 247, 0.25)' }}>
        <Sparkles size={64} color="#C084FC" style={{ marginBottom: 20 }} />
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, textAlign: 'center' }}>
          Testing Thousands of Mutated Policies
        </div>
        <div style={{ color: '#C084FC', fontSize: 22, fontFamily: 'monospace', fontWeight: 800, marginTop: 16 }}>
          Entirely Inside The Offline Dream State
        </div>
      </div>
    </div>
  );
};

const BeatVirtuallyZeroCost: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 40, maxWidth: 1720, width: '100%', height: 680 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>ONLINE REAL-WORLD COMPUTE</div>
          <div style={{ color: '#FFFFFF', fontSize: 88, fontWeight: 900, fontFamily: 'monospace' }}>$100,000+</div>
          <div style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'monospace' }}>Requires live cloud GPU cluster execution</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '3px solid #22C55E', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 70px rgba(34, 197, 94, 0.25)' }}>
          <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>DEEPMIND DREAM SIMULATOR</div>
          <div style={{ color: '#FFFFFF', fontSize: 88, fontWeight: 900, fontFamily: 'monospace' }}>$0.00</div>
          <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', fontWeight: 800 }}>VIRTUALLY ZERO COMPUTATIONAL COST</div>
        </div>
      </div>
    </div>
  );
};

const BeatCognitiveSandbox: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 700, backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '2px solid rgba(59, 130, 246, 0.4)', borderRadius: 24, padding: '36px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#3B82F6', fontSize: 15, fontFamily: 'monospace', fontWeight: 800, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 14 }}>
          COGNITIVE SANDBOX DUAL REPLAY CONSOLE
        </div>

        <div style={{ display: 'flex', gap: 32, flex: 1, margin: '24px 0' }}>
          <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: '32px', borderRadius: 16, border: '1px solid rgba(239, 68, 68, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>HISTORICAL ATTEMPT #1 (REAL-WORLD)</div>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 800 }}>Wasted Compute on Dead End Branch #4</div>
            <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>Execution time: 4.2 hours before failure detected</div>
          </div>

          <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '32px', borderRadius: 16, border: '2px solid #22C55E', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 30px rgba(34, 197, 94, 0.15)' }}>
            <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>DREAM REPLAY MUTATION (OFFLINE)</div>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 800 }}>Pruned Dead End • Directed to Global Optima</div>
            <div style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 700 }}>Execution time: 0.00ms (Instantly evaluated)</div>
          </div>
        </div>

        <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>
          AGENT LEARNS FROM PAST MISTAKES WITHOUT EXECUTING NEW ONLINE JOBS
        </div>
      </div>
    </div>
  );
};

const BeatRewiringHeuristics: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06B6D4', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(6, 182, 212, 0.25)' }}>
        <Cpu size={64} color="#06B6D4" style={{ marginBottom: 20 }} />
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900 }}>
          Rewiring Search Heuristics
        </div>
        <div style={{ color: '#06B6D4', fontSize: 18, fontFamily: 'monospace', marginTop: 12 }}>
          Autonomous Policy Evolution &amp; Grammar Selection
        </div>
      </div>
    </div>
  );
};

const BeatChampionPolicy: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(234, 179, 8, 0.12)', border: '3px solid #EAB308', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(234, 179, 8, 0.3)' }}>
        <Trophy size={68} color="#EAB308" style={{ marginBottom: 20 }} />
        <div style={{ color: '#EAB308', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          DREAM TOURNAMENT WINNER
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, marginTop: 12 }}>
          Champion Exploration Policy v4.2
        </div>
      </div>
    </div>
  );
};

const BeatPhysicalRedeployment: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: 20, padding: '10px 28px', marginBottom: 20 }}>
          <Rocket size={22} color="#22C55E" />
          <span style={{ color: '#22C55E', fontSize: 15, fontFamily: 'monospace', fontWeight: 800 }}>
            REDEPLOYED TO PHYSICAL PRODUCTION
          </span>
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, textAlign: 'center' }}>
          Champion Policy Active in Physical World
        </div>
      </div>
    </div>
  );
};
