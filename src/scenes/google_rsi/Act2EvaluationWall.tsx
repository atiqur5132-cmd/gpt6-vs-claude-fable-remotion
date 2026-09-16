import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import {
  AlertOctagon,
  Flame,
  DollarSign,
  Server,
  Lock,
  Compass,
  Cpu,
  ShieldAlert,
  Clock,
  Ban,
} from 'lucide-react';

export const Act2EvaluationWall: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 15: 124f (4.1s) -> Why RSI Failed */}
        <Series.Sequence durationInFrames={124}>
          <BeatWhyRSIFailed />
        </Series.Sequence>

        {/* Micro-beat 16: 160f (5.3s) -> Autonomous Coding Agent */}
        <Series.Sequence durationInFrames={160}>
          <BeatAutonomousCodingAgent />
        </Series.Sequence>

        {/* Micro-beat 17: 160f (5.3s) -> Static Heuristic Lock */}
        <Series.Sequence durationInFrames={160}>
          <BeatStaticHeuristicLock />
        </Series.Sequence>

        {/* Micro-beat 18: 103f (3.4s) -> Blind Search Space */}
        <Series.Sequence durationInFrames={103}>
          <BeatBlindSearchSpace />
        </Series.Sequence>

        {/* Micro-beat 19: 104f (3.5s) -> Theoretical Optimization */}
        <Series.Sequence durationInFrames={104}>
          <BeatTheoreticalOptimization />
        </Series.Sequence>

        {/* Micro-beat 20: 120f (4.0s) -> Massive Evaluation Wall Rising */}
        <Series.Sequence durationInFrames={120}>
          <BeatTheEvaluationWall />
        </Series.Sequence>

        {/* Micro-beat 21: 135f (4.5s) -> Live Compute Dollar Counter */}
        <Series.Sequence durationInFrames={135}>
          <BeatComputeDollarCounter />
        </Series.Sequence>

        {/* Micro-beat 22: 158f (5.3s) -> Overheated Sandbox Clusters */}
        <Series.Sequence durationInFrames={158}>
          <BeatOverheatedSandboxes />
        </Series.Sequence>

        {/* Micro-beat 23: 161f (5.4s) -> Online Latency Impasse */}
        <Series.Sequence durationInFrames={161}>
          <BeatOnlineLatencyImpasse />
        </Series.Sequence>

        {/* Micro-beat 24: 159f (5.3s) -> Burning Millions & Compute Insolvency */}
        <Series.Sequence durationInFrames={159}>
          <BeatComputeInsolvency />
        </Series.Sequence>

        {/* Micro-beat 25: 153f (5.1s) -> RSI Aborted / Heuristics Surrender */}
        <Series.Sequence durationInFrames={153}>
          <BeatHeuristicsSurrender />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// SUB-BEATS
// -------------------------------------------------------------

const BeatWhyRSIFailed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', borderRadius: 20, padding: '8px 24px', marginBottom: 20 }}>
        <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          HISTORICAL FAILURE ROOT CAUSE
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, textAlign: 'center', maxWidth: 840 }}>
        WHY SELF-IMPROVEMENT WAS IMPOSSIBLE
      </div>
      <div style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'monospace', marginTop: 12 }}>
        THE COMPUTATIONAL BOTTLENECK OF ONLINE VERIFICATION
      </div>
    </div>
  );
};

const BeatAutonomousCodingAgent: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 860, backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 18, padding: '24px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 12 }}>
          <span style={{ color: '#3B82F6', fontFamily: 'monospace', fontWeight: 800 }}>
            AUTONOMOUS AGENT TARGET: GPU KERNEL OPTIMIZATION
          </span>
          <span style={{ color: '#22C55E', fontFamily: 'monospace' }}>CUDA / C++</span>
        </div>
        <div style={{ fontFamily: 'monospace', color: '#64748B', marginTop: 16, fontSize: 14, lineHeight: 1.8 }}>
          <span style={{ color: '#3B82F6' }}>__global__ void</span> matmul_opt_kernel(...) &#123;<br />
          &nbsp;&nbsp;<span style={{ color: '#94A3B8' }}>// Task: Discover faster memory tile layout</span><br />
          &nbsp;&nbsp;<span style={{ color: '#EAB308' }}>__shared__ float</span> tile[32][32];<br />
          &#125;
        </div>
      </div>
    </div>
  );
};

const BeatStaticHeuristicLock: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '2px solid rgba(239, 68, 68, 0.4)', borderRadius: 20, padding: '32px 48px', textAlign: 'center' }}>
        <Lock size={44} color="#EF4444" style={{ margin: '0 auto 12px' }} />
        <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          PARALYSIS POINT
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 900, marginTop: 8 }}>
          Static Pre-Programmed Heuristics
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>
          Frozen Hardcoded Search Strategy • Zero Self-Adaptation
        </div>
      </div>
    </div>
  );
};

const BeatBlindSearchSpace: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(234, 179, 8, 0.15)', border: '1px solid #EAB308', borderRadius: 20, padding: '8px 24px', marginBottom: 20 }}>
        <Compass size={18} color="#EAB308" />
        <span style={{ color: '#EAB308', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          PROBLEM SPACE EXPLORATION
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 42, fontWeight: 900, textAlign: 'center' }}>
        Searching Blindly Through Infinite Spaces
      </div>
      <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
        Random Mutations • 99.9% Failure Rate
      </div>
    </div>
  );
};

const BeatTheoreticalOptimization: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: 16, padding: '32px 56px', textAlign: 'center' }}>
        <div style={{ color: '#60A5FA', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE THEORETICAL DREAM
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 6 }}>
          Model Optimizes Its Own Search Algorithm
        </div>
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', fontWeight: 700, marginTop: 12 }}>
          BLOCKED BY REAL-WORLD EVALUATION WALL
        </div>
      </div>
    </div>
  );
};

const BeatTheEvaluationWall: React.FC = () => {
  const frame = useCurrentFrame();
  const height = interpolate(frame, [0, 40], [10, 420], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 880, height: 440, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height, backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '2px solid #EF4444', borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 50px rgba(239, 68, 68, 0.4)' }}>
          <AlertOctagon size={48} color="#EF4444" style={{ marginBottom: 12 }} />
          <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, fontFamily: 'monospace' }}>
            THE EVALUATION WALL
          </div>
          <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800, marginTop: 6 }}>
            COST TO VERIFY O(N) POLICIES IN REAL COMPUTE SANDBOXES
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatComputeDollarCounter: React.FC = () => {
  const frame = useCurrentFrame();
  const cost = Math.round(interpolate(frame, [0, 90], [5000, 240000], { extrapolateRight: 'clamp' }));

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 12 }}>
        ESTIMATED ONLINE VERIFICATION BURN
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 88, fontWeight: 900, fontFamily: 'monospace', textShadow: '0 0 40px rgba(239, 68, 68, 0.5)' }}>
        ${cost.toLocaleString()}
      </div>
      <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 10 }}>
        Per Exploration Policy Candidate • Exponential Compute Drain
      </div>
    </div>
  );
};

const BeatOverheatedSandboxes: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 20, maxWidth: 880, width: '100%' }}>
        {[1, 2, 3].map((node) => (
          <div key={node} style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
            <Server size={32} color="#EF4444" style={{ margin: '0 auto 8px' }} />
            <div style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 800 }}>SANDBOX #{node}</div>
            <div style={{ color: '#EF4444', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, marginTop: 4 }}>100% LOAD • TIMEOUT</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BeatOnlineLatencyImpasse: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 16, padding: '32px 48px', textAlign: 'center' }}>
        <Clock size={40} color="#EAB308" style={{ margin: '0 auto 12px' }} />
        <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 900 }}>
          Thousands of Real-World Runs Required
        </div>
        <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', marginTop: 8 }}>
          Each verification takes minutes to hours • Latency bottleneck
        </div>
      </div>
    </div>
  );
};

const BeatComputeInsolvency: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', borderRadius: 20, padding: '8px 24px', marginBottom: 20 }}>
        <Flame size={20} color="#EF4444" />
        <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          ECONOMIC RUNAWAY
        </span>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, textAlign: 'center' }}>
        Millions of Dollars in Compute Burn
      </div>
    </div>
  );
};

const BeatHeuristicsSurrender: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '2px solid rgba(239, 68, 68, 0.5)', borderRadius: 20, padding: '36px 64px', textAlign: 'center' }}>
        <Ban size={44} color="#EF4444" style={{ margin: '0 auto 12px' }} />
        <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          THE COMPROMISE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 6 }}>
          Self-Improvement Abandoned
        </div>
        <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 8 }}>
          Industry forced to settle for rigid, hand-coded heuristics
        </div>
      </div>
    </div>
  );
};
