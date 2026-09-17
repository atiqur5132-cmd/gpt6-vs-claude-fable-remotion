import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import {
  HelpCircle,
  TrendingUp,
  Cpu,
  Zap,
  Globe2,
  DollarSign,
  Activity,
  Layers,
  Terminal,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

export const Act4UnionAlphaMystery: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 15: 0-370 (12.3s) -> Ghost Model Discovery */}
        <Series.Sequence durationInFrames={370}>
          <Beat15GhostDiscovery />
        </Series.Sequence>

        {/* Micro-beat 16: 370-740 (12.3s) -> Terminal-Bench 4.0 Scorecard */}
        <Series.Sequence durationInFrames={370}>
          <Beat16TerminalBenchScorecard />
        </Series.Sequence>

        {/* Micro-beat 17: 740-1110 (12.3s) -> EVIDENCE TWEET 4: Union Alpha Cline & Tradesman */}
        <Series.Sequence durationInFrames={370}>
          <RealTweetEvidence
            imageFile="union_alpha_tweet.png"
            authorName="Cline"
            handle="cline"
            categoryTag="STEALTH MODEL FREE DEPLOY"
            highlightText="Union Alpha (stealth model) is now free in Cline. 256k context, multimodal, built for agentic coding. Near Astra and Opus 5 for ~18x lower expected cost"
            statValue="18X CHEAPER"
            statLabel="COST ADVANTAGE"
            keyInsight="Matches top-tier US frontier models on Terminal-Bench at a fraction of inference cost."
          />
        </Series.Sequence>

        {/* Micro-beat 18: 1110-1489 (12.6s) -> Chinese Open-Weight Disruption */}
        <Series.Sequence durationInFrames={379}>
          <Beat18ChineseDisruption />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// --- BEAT 15: GHOST DISCOVERY ---
const Beat15GhostDiscovery: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 24, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(168,85,247,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <HelpCircle size={24} color="#A855F7" />
            <span style={{ color: '#A855F7', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>STEALTH AI ANOMALY // CLINE & OPENROUTER</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>DETECTED: 2026-09-17 08:30 UTC</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#A855F7', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>ZERO ANNOUNCEMENT // ZERO WHITEPAPER</div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
              UNION ALPHA <br />
              <span style={{ color: '#A855F7' }}>THE GHOST IN THE MACHINE</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 20, lineHeight: 1.5, maxWidth: 840 }}>
              An unidentified frontier model appeared out of nowhere, delivering raw performance matching Claude Fable 5.1 and GPT-6 Astra on complex software benchmarks.
            </p>
          </div>

          <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 320, height: 320, borderRadius: 32, backgroundColor: 'rgba(168,85,247,0.1)', border: '2px solid #A855F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ fontSize: 44, fontWeight: 900, color: '#FFFFFF' }}>α</div>
              <div style={{ color: '#C084FC', fontWeight: 800, fontSize: 18, letterSpacing: 2 }}>UNION ALPHA</div>
              <div style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 13 }}>FREE TRIAL ACTIVE</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>CONTEXT WINDOW</div>
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, fontFamily: 'monospace' }}>256,000 Tokens</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>MODALITY</div>
            <div style={{ color: '#A855F7', fontSize: 24, fontWeight: 800, fontFamily: 'monospace' }}>Native Multimodal</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>HARNESS SPECIALTY</div>
            <div style={{ color: '#38BDF8', fontSize: 24, fontWeight: 800, fontFamily: 'monospace' }}>Agentic Coding</div>
          </div>
          <div>
            <div style={{ color: '#64748B', fontSize: 13, textTransform: 'uppercase' }}>COST MULTIPLIER</div>
            <div style={{ color: '#22C55E', fontSize: 24, fontWeight: 800, fontFamily: 'monospace' }}>18x Cheaper</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 16: TERMINAL-BENCH SCORECARD (ANIMATED LEADERBOARD BARS) ---
const Beat16TerminalBenchScorecard: React.FC = () => {
  const frame = useCurrentFrame();
  const barFable = interpolate(frame, [5, 40], [0, 88.4], { extrapolateRight: 'clamp' });
  const barUnion = interpolate(frame, [15, 50], [0, 88.1], { extrapolateRight: 'clamp' });
  const barAstra = interpolate(frame, [10, 45], [0, 89.2], { extrapolateRight: 'clamp' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 48px', boxSizing: 'border-box' }}>
      <div style={{ width: 1824, height: 864, backgroundColor: '#070B14', border: '1px solid rgba(168,85,247,0.35)', borderRadius: 24, padding: '32px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Terminal size={24} color="#22C55E" />
            <span style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 900 }}>TERMINAL-BENCH 4.0 // AGENTIC CODING LEADERBOARD</span>
          </div>
          <span style={{ color: '#A855F7', fontFamily: 'monospace', fontSize: 14, fontWeight: 700, backgroundColor: 'rgba(168,85,247,0.15)', padding: '6px 14px', borderRadius: 8, border: '1px solid #A855F7' }}>
            AUTONOMOUS BUG RESOLUTION ACCURACY
          </span>
        </div>

        {/* 3 Benchmark Interactive Cards with Animated Fill Bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, margin: '14px 0' }}>
          
          {/* Fable 5.1 */}
          <div style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.12)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#D97706', fontSize: 13, fontWeight: 800 }}>ANTHROPIC TOP TIER</div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800, marginTop: 4 }}>Claude Fable 5.1</div>
              <div style={{ color: '#FCD34D', fontSize: 52, fontWeight: 900, marginTop: 12, fontFamily: 'monospace' }}>
                {barFable.toFixed(1)}%
              </div>
              <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 5, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ width: `${barFable}%`, height: '100%', backgroundColor: '#FCD34D' }} />
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14, marginTop: 16 }}>
              <div style={{ color: '#64748B', fontSize: 13 }}>INFERENCE COST</div>
              <div style={{ color: '#EF4444', fontSize: 20, fontWeight: 800, fontFamily: 'monospace' }}>$11.80 / 1M Tokens</div>
            </div>
          </div>

          {/* Union Alpha */}
          <div style={{ backgroundColor: 'rgba(88,28,135,0.25)', borderRadius: 18, border: '2px solid #A855F7', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 45px rgba(168,85,247,0.25)' }}>
            <div>
              <div style={{ color: '#A855F7', fontSize: 13, fontWeight: 900 }}>GHOST CONTENDER // FREE IN CLINE</div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>Union Alpha</div>
              <div style={{ color: '#C084FC', fontSize: 52, fontWeight: 900, marginTop: 12, fontFamily: 'monospace' }}>
                {barUnion.toFixed(1)}%
              </div>
              <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 5, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ width: `${barUnion}%`, height: '100%', backgroundColor: '#A855F7', boxShadow: '0 0 10px #A855F7' }} />
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(168,85,247,0.3)', paddingTop: 14, marginTop: 16 }}>
              <div style={{ color: '#C084FC', fontSize: 13, fontWeight: 700 }}>INFERENCE COST (18X LOWER)</div>
              <div style={{ color: '#22C55E', fontSize: 22, fontWeight: 900, fontFamily: 'monospace' }}>~$0.65 / 1M Tokens</div>
            </div>
          </div>

          {/* GPT-6 Astra */}
          <div style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.12)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#10A37F', fontSize: 13, fontWeight: 800 }}>OPENAI FRONTIER</div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800, marginTop: 4 }}>GPT-6 Astra Max</div>
              <div style={{ color: '#6EE7B7', fontSize: 52, fontWeight: 900, marginTop: 12, fontFamily: 'monospace' }}>
                {barAstra.toFixed(1)}%
              </div>
              <div style={{ width: '100%', height: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 5, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ width: `${barAstra}%`, height: '100%', backgroundColor: '#10A37F' }} />
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14, marginTop: 16 }}>
              <div style={{ color: '#64748B', fontSize: 13 }}>INFERENCE COST</div>
              <div style={{ color: '#F59E0B', fontSize: 20, fontWeight: 800, fontFamily: 'monospace' }}>$6.50 / 1M Tokens</div>
            </div>
          </div>

        </div>

        <div style={{ backgroundColor: '#02040A', padding: '16px 24px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 15 }}>ECONOMIC DISRUPTION: <strong style={{ color: '#FFFFFF' }}>Statistical dead-heat with US frontier titans at 1/18th the compute expenditure.</strong></span>
          <span style={{ color: '#22C55E', fontWeight: 800, fontSize: 15 }}>PARITY VERIFIED ON OPENROUTER</span>
        </div>

      </div>
    </div>
  );
};

// --- BEAT 18: CHINESE DISRUPTION ---
const Beat18ChineseDisruption: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>OPEN-WEIGHT FRONTIER SHIFT</div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, marginTop: 8 }}>
            WHO BUILT UNION ALPHA?
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', padding: 32, borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)' }}>
            <Globe2 size={36} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Linguistic Token Analysis</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
              Internal prompt trace reveals dense Chinese tokenization patterns and system instructions. 
              The community believes it is an unannounced open-weight release from a top Asian AI research lab testing weights in the wild.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', padding: 32, borderRadius: 18, border: '1px solid rgba(34,197,94,0.3)' }}>
            <DollarSign size={36} color="#22C55E" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>The $200 Subscription Threat</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
              When a stealth model performs at Claude Fable 5.1 levels for 18x lower cost, corporate $200/month subscriptions face immediate margin collapse.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#64748B', fontSize: 16 }}>STATUS: <strong>STILL FREE ON CLINE & OPENROUTER</strong></span>
          <span style={{ color: '#A855F7', fontSize: 16, fontWeight: 700 }}>NEXT INVESTIGATION: OPENAI SPONSORED AGENTS →</span>
        </div>
      </div>
    </div>
  );
};
