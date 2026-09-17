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
  Activity,
  Zap,
  Terminal,
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
// EXPANSIVE 1720px SUB-BEATS
// -------------------------------------------------------------

const BeatWhyRSIFailed: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(239, 68, 68, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', borderRadius: 20, padding: '8px 24px', width: 'fit-content' }}>
          <ShieldAlert size={18} color="#EF4444" />
          <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            HISTORICAL FAILURE ROOT CAUSE • THE EVALUATION BOTTLENECK
          </span>
        </div>

        <div>
          <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, fontFamily: 'monospace', lineHeight: 1.15 }}>
            WHY SELF-IMPROVEMENT WAS IMPOSSIBLE
          </div>
          <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 18, maxWidth: 1200, lineHeight: 1.6 }}>
            Every past attempt at creating a self-improving AI hit an insurmountable economic barrier: evaluating new search strategies required millions of dollars in real compute sandboxes.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            PROBLEM TYPE: <span style={{ color: '#EF4444', fontWeight: 700 }}>O(N) Real-World Verification</span>
          </div>
          <div style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 14 }}>
            STATUS: <span style={{ color: '#EF4444', fontWeight: 700 }}>Industry Impasse for 10+ Years</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatAutonomousCodingAgent: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 700, backgroundColor: 'rgba(10, 15, 30, 0.95)', border: '2px solid rgba(59, 130, 246, 0.35)', borderRadius: 24, padding: '36px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(0,0,0,0.9)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#3B82F6', fontSize: 15, fontFamily: 'monospace', fontWeight: 800 }}>
            <Terminal size={18} />
            <span>AUTONOMOUS AGENT GOAL: GPU TILE KERNEL OPTIMIZATION</span>
          </div>
          <span style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 14 }}>TARGET: NVIDIA H100 SXM5</span>
        </div>

        <div style={{ display: 'flex', gap: 32, flex: 1, margin: '20px 0' }}>
          <div style={{ flex: 1.2, backgroundColor: '#000000', borderRadius: 14, padding: '24px', fontFamily: 'monospace', fontSize: 16, color: '#94A3B8', lineHeight: 1.9, border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ color: '#3B82F6' }}>__global__ void</span> matmul_tile_kernel(<span style={{ color: '#EAB308' }}>const float*</span> A, <span style={{ color: '#EAB308' }}>const float*</span> B) &#123;<br />
            &nbsp;&nbsp;<span style={{ color: '#64748B' }}>// Agent explores faster shared memory tile layout</span><br />
            &nbsp;&nbsp;<span style={{ color: '#22C55E' }}>__shared__ float</span> tile_A[64][64];<br />
            &nbsp;&nbsp;<span style={{ color: '#22C55E' }}>__shared__ float</span> tile_B[64][64];<br />
            &nbsp;&nbsp;<span style={{ color: '#38BDF8' }}>#pragma unroll</span><br />
            &nbsp;&nbsp;for (<span style={{ color: '#EAB308' }}>int</span> k = 0; k &lt; BLOCK_SIZE; ++k) &#123; ... &#125;<br />
            &#125;
          </div>

          <div style={{ flex: 0.8, backgroundColor: 'rgba(15, 23, 42, 0.8)', borderRadius: 14, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>SEARCH HEURISTIC</div>
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 4 }}>Static Monte-Carlo Tree Search</div>
            </div>
            <div>
              <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>PROBLEM</div>
              <div style={{ color: '#EF4444', fontSize: 20, fontWeight: 800, marginTop: 4 }}>Cannot adapt search policy dynamically</div>
            </div>
          </div>
        </div>

        <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 14 }}>
          CANNOT VERIFY SEARCH MUTATIONS WITHOUT EXPENSIVE RUNTIME EXECUTION
        </div>
      </div>
    </div>
  );
};

const BeatStaticHeuristicLock: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
        <div style={{ width: 88, height: 88, borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '2px solid #EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Lock size={44} color="#EF4444" />
        </div>
        <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          PARALYSIS POINT
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          Static Pre-Programmed Heuristics
        </div>
        <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 14 }}>
          Frozen Hardcoded Search Strategy • Zero Autonomous Self-Adaptation
        </div>
      </div>
    </div>
  );
};

const BeatBlindSearchSpace: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(10, 15, 30, 0.92)', border: '2px solid rgba(234, 179, 8, 0.4)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
        <div style={{ width: 88, height: 88, borderRadius: '50%', backgroundColor: 'rgba(234, 179, 8, 0.15)', border: '2px solid #EAB308', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Compass size={44} color="#EAB308" />
        </div>
        <div style={{ color: '#EAB308', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          HIGH-DIMENSIONAL COMBINATORIAL SPACE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          Searching Blindly Through Infinite Spaces
        </div>
        <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 14 }}>
          Random Search Mutations • 99.9% Historical Failure Rate
        </div>
      </div>
    </div>
  );
};

const BeatTheoreticalOptimization: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(59, 130, 246, 0.4)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
        <div style={{ color: '#60A5FA', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE THEORETICAL PROMISE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, fontFamily: 'monospace', marginTop: 12, textAlign: 'center' }}>
          Model Optimizes Its Own Search Algorithm
        </div>
        <div style={{ color: '#EF4444', fontSize: 20, fontFamily: 'monospace', fontWeight: 800, marginTop: 18 }}>
          BLOCKED BY THE REAL-WORLD EVALUATION WALL
        </div>
      </div>
    </div>
  );
};

const BeatTheEvaluationWall: React.FC = () => {
  const frame = useCurrentFrame();
  const height = interpolate(frame, [0, 40], [10, 640], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 720, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height, backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '3px solid #EF4444', borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 70px rgba(239, 68, 68, 0.5)' }}>
          <AlertOctagon size={64} color="#EF4444" style={{ marginBottom: 16 }} />
          <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, fontFamily: 'monospace' }}>
            THE EVALUATION WALL
          </div>
          <div style={{ color: '#EF4444', fontSize: 18, fontFamily: 'monospace', fontWeight: 800, marginTop: 12 }}>
            EXPONENTIAL COST TO EVALUATE O(N) POLICIES IN LIVE COMPUTE SANDBOXES
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatComputeDollarCounter: React.FC = () => {
  const frame = useCurrentFrame();
  const cost = Math.round(interpolate(frame, [0, 90], [15000, 480000], { extrapolateRight: 'clamp' }));

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(239, 68, 68, 0.3)' }}>
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800, marginBottom: 16 }}>
          ONLINE VERIFICATION COMPUTE BURN RATE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 124, fontWeight: 900, fontFamily: 'monospace', textShadow: '0 0 50px rgba(239, 68, 68, 0.6)', lineHeight: 0.95 }}>
          ${cost.toLocaleString()}
        </div>
        <div style={{ color: '#94A3B8', fontSize: 18, fontFamily: 'monospace', marginTop: 24 }}>
          Burn per Single Exploration Policy Candidate • Exponential Insolvency
        </div>
      </div>
    </div>
  );
};

const BeatOverheatedSandboxes: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', marginBottom: 28 }}>
        ONLINE CLUSTER OVERLOAD TELEMETRY
      </div>
      <div style={{ display: 'flex', gap: 32, maxWidth: 1720, width: '100%', height: 620 }}>
        {[1, 2, 3, 4].map((node) => (
          <div key={node} style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.45)', borderRadius: 20, padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
            <Server size={44} color="#EF4444" />
            <div>
              <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800 }}>SANDBOX #{node}</div>
              <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800, marginTop: 8 }}>THERMAL OVERHEAT</div>
              <div style={{ color: '#94A3B8', fontSize: 13, fontFamily: 'monospace', marginTop: 4 }}>100% GPU Exhaustion</div>
            </div>
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', padding: '8px 14px', borderRadius: 8, color: '#EF4444', fontFamily: 'monospace', fontSize: 12, fontWeight: 800, textAlign: 'center' }}>
              TIMEOUT: VERIFICATION STALLED
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BeatOnlineLatencyImpasse: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(234, 179, 8, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.8)' }}>
        <Clock size={64} color="#EAB308" style={{ marginBottom: 20 }} />
        <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, textAlign: 'center' }}>
          Thousands of Real-World Runs Required
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Each online verification run took hours • Complete Latency Impasse
        </div>
      </div>
    </div>
  );
};

const BeatComputeInsolvency: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(239, 68, 68, 0.12)', border: '2px solid #EF4444', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(239, 68, 68, 0.3)' }}>
        <Flame size={64} color="#EF4444" style={{ marginBottom: 20 }} />
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          ECONOMIC INSOLVENCY
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          Millions of Dollars Burned in Compute
        </div>
      </div>
    </div>
  );
};

const BeatHeuristicsSurrender: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '2px solid rgba(239, 68, 68, 0.6)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(239, 68, 68, 0.35)' }}>
        <Ban size={64} color="#EF4444" style={{ marginBottom: 20 }} />
        <div style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          THE COMPROMISE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 900, marginTop: 12 }}>
          Self-Improvement Abandoned
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Industry forced to settle for rigid, hand-coded heuristics until now
        </div>
      </div>
    </div>
  );
};
