import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Video, Img } from 'remotion';
import { Trophy, DollarSign, Clock, Code, Zap, CheckCircle2 } from 'lucide-react';
import { XTwitterLogo } from '../RealLogos';

interface MarioKartAstraSceneProps {
  section: 'tweet_reveal' | 'video_fullscreen' | 'economics_breakdown';
}

export const MarioKartAstraScene: React.FC<MarioKartAstraSceneProps> = ({ section }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  // 1. Clean Flat Tweet Reveal Card
  if (section === 'tweet_reveal') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)' }} />

        {/* Top Header */}
        <div style={{ position: 'absolute', top: 40, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Trophy size={28} color="#F59E0B" />
            <span style={{ color: '#F59E0B', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.15em', fontWeight: 800 }}>
              WEBGL 3D ARCADE BENCHMARK
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: 20 }}>
            <XTwitterLogo size={18} />
            <span style={{ color: '#E2E8F0', fontSize: 13, fontFamily: 'monospace' }}>x.com/LuminaBench</span>
          </div>
        </div>

        {/* Flat Tweet View Card */}
        <div
          style={{
            position: 'absolute',
            top: 130,
            left: 120,
            right: 120,
            bottom: 70,
            backgroundColor: '#0F172A',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 20,
            padding: 40,
            display: 'flex',
            gap: 40,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            transform: `translateY(${(1 - entrance) * 20}px)`,
          }}
        >
          {/* Tweet Screenshot Clean Card */}
          <div style={{ width: '48%', height: '100%', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#000000' }}>
            <Img
              src={staticFile('evidence/mario_kart_clone_card.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Key Metric Highlights */}
          <div style={{ width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#F59E0B', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.2em', marginBottom: 6 }}>
                1-FILE FULL GAME ENGINE
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
                Mario Kart Wii Clone: 1 HTML File
              </div>
              <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.6 }}>
                Synthesized completely within a single HTML file in under one hour using GPT-6 Astra Pro. Includes 4 courses, 8 racers, dynamic AI, and sound.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', borderRadius: 12, padding: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>API COMPUTE COST</div>
                <div style={{ color: '#10A37F', fontSize: 28, fontWeight: 900, fontFamily: 'monospace' }}>$8.50</div>
              </div>
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', borderRadius: 12, padding: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>TOTAL DURATION</div>
                <div style={{ color: '#38BDF8', fontSize: 28, fontWeight: 900, fontFamily: 'monospace' }}>~1 HOUR</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: 10, padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#F59E0B', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>4 COURSES • 8 AI RACERS</span>
              <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>SELF-CONTAINED BUNDLE</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 2. Full-Screen Video Evidence
  if (section === 'video_fullscreen') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
        <div style={{ position: 'absolute', top: 30, left: 60, right: 60, bottom: 90, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: '#000000', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
          <Video
            src={staticFile('evidence/mario_kart_clone.mp4')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            muted
          />

          <div style={{ position: 'absolute', top: 20, left: 24, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', padding: '8px 18px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B', boxShadow: '0 0 10px #F59E0B' }} />
            <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              LIVE PROOF • MARIO KART WII RUNNING IN BROWSER
            </span>
          </div>

          <div style={{ position: 'absolute', bottom: 20, right: 24, backgroundColor: 'rgba(0,0,0,0.85)', padding: '8px 18px', borderRadius: 8, border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <span style={{ color: '#F59E0B', fontSize: 14, fontFamily: 'monospace', fontWeight: 800 }}>
              ESTIMATED API COST: $8.50
            </span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 30, left: 60, right: 60, display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          <span>COMPILED: GPT-6 ASTRA PRO</span>
          <span>SOURCE: @LuminaBench (OFFICIAL BENCHMARK TEST)</span>
        </div>
      </AbsoluteFill>
    );
  }

  // 3. Economics Breakdown: $8.50 vs $60,000 Studio Budget
  const costScale = interpolate(frame, [10, 45], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 70%)' }} />

      <div style={{ position: 'absolute', top: 60, left: 100, right: 100, textAlign: 'center' }}>
        <div style={{ color: '#F59E0B', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE EXPONENTIAL COST DEFLATION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, marginTop: 6 }}>
          Indie Studio vs Single-Shot AI
        </div>
      </div>

      <div style={{ position: 'absolute', top: 190, left: 120, right: 120, bottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Traditional Studio Sprint */}
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#EF4444', marginBottom: 8 }}>
              <Clock size={20} />
              <span style={{ fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>TRADITIONAL TIMELINE</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800 }}>6 Months Development</div>
            <p style={{ color: '#94A3B8', fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>
              Engineers, 3D modellers, physics programmers, QA debugging sprints, audio designers.
            </p>
          </div>

          <div>
            <div style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>DEVELOPMENT EXPENSE</div>
            <div style={{ color: '#EF4444', fontSize: 54, fontWeight: 900, fontFamily: 'monospace', marginTop: 4 }}>
              $60,000+
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, color: '#64748B', fontSize: 14 }}>
            Burn Rate: High Risk Capital
          </div>
        </div>

        {/* GPT-6 Astra Single Pass */}
        <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.12)', border: '2px solid #10A37F', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 0 30px rgba(16, 163, 127, 0.15)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#10A37F', marginBottom: 8 }}>
              <Zap size={20} />
              <span style={{ fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>ASTRA EXECUTION</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 800 }}>50 Minutes (Lunch Break)</div>
            <p style={{ color: '#94A3B8', fontSize: 15, marginTop: 8, lineHeight: 1.5 }}>
              Single zero-shot prompt. Self-contained HTML file. Physics, sound, and tracks generated in parallel.
            </p>
          </div>

          <div>
            <div style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>ACTUAL COMPUTE COST</div>
            <div style={{ color: '#10A37F', fontSize: 54, fontWeight: 900, fontFamily: 'monospace', marginTop: 4 }}>
              ${(8.5 * costScale).toFixed(2)}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(16, 163, 127, 0.3)', paddingTop: 16, color: '#FFFFFF', fontSize: 14, fontWeight: 700 }}>
            Equates to: <span style={{ color: '#10A37F' }}>Less than the price of a sandwich</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
