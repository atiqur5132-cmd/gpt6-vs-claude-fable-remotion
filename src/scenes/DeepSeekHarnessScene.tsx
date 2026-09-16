import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Video, Img } from 'remotion';
import { ShieldCheck, Unlock, Cpu, Zap, Box, Layers } from 'lucide-react';
import { DeepSeekLogo, XTwitterLogo } from '../RealLogos';

interface DeepSeekHarnessSceneProps {
  section: 'trap_intro' | 'budget_shootout' | 'harness_reveal';
}

export const DeepSeekHarnessScene: React.FC<DeepSeekHarnessSceneProps> = ({ section }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  // 1. The $200 Paywall Trap Intro Card
  if (section === 'trap_intro') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(239, 68, 68, 0.12) 0%, transparent 70%)' }} />

        {/* Header */}
        <div style={{ position: 'absolute', top: 50, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Unlock size={28} color="#EF4444" />
            <span style={{ color: '#EF4444', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.15em', fontWeight: 800 }}>
              MARKET DISRUPTION REPORT
            </span>
          </div>
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 14px', borderRadius: 20 }}>
            <span style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>THE $200 MYTH</span>
          </div>
        </div>

        {/* Main Content Box */}
        <div
          style={{
            position: 'absolute',
            top: 140,
            left: 120,
            right: 120,
            bottom: 80,
            backgroundColor: '#0F172A',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 24,
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
            transform: `translateY(${(1 - entrance) * 20}px)`,
          }}
        >
          <div>
            <div style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.2em', marginBottom: 8 }}>
              THE ARTIFICIAL MOAT
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 50, fontWeight: 900, lineHeight: 1.15 }}>
              The Two-Hundred-Dollar Subscription Trap
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6, maxWidth: 1000 }}>
              Closed frontier labs convinced developers that spatial reasoning and autonomous coding required a $200/month enterprise paywall. Real benchmarks just destroyed that premise.
            </p>
          </div>

          {/* 3 Comparison Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 }}>
              <div style={{ color: '#EF4444', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>PROPRIETARY LOCK-IN</div>
              <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 6 }}>Claude Fable & Astra</div>
              <div style={{ color: '#EF4444', fontSize: 32, fontWeight: 900, marginTop: 8, fontFamily: 'monospace' }}>$200 / mo</div>
              <div style={{ color: '#64748B', fontSize: 13, marginTop: 4 }}>Gatekept cloud inference</div>
            </div>

            <div style={{ backgroundColor: 'rgba(77, 107, 254, 0.1)', border: '1px solid rgba(77, 107, 254, 0.3)', borderRadius: 16, padding: 24 }}>
              <div style={{ color: '#4D6BFE', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>BUDGET TIER SHOOTOUT</div>
              <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 6 }}>DeepSeek V4.1 Flash</div>
              <div style={{ color: '#4D6BFE', fontSize: 32, fontWeight: 900, marginTop: 8, fontFamily: 'monospace' }}>Sub-Cent</div>
              <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>60 FPS WebGL local recompile</div>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 163, 127, 0.1)', border: '1px solid rgba(16, 163, 127, 0.3)', borderRadius: 16, padding: 24 }}>
              <div style={{ color: '#10A37F', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>OPEN FRAMEWORK</div>
              <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 6 }}>deepseek-harness</div>
              <div style={{ color: '#10A37F', fontSize: 32, fontWeight: 900, marginTop: 8, fontFamily: 'monospace' }}>FREE / MIT</div>
              <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Modular plugin architecture</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#94A3B8', fontSize: 14 }}>
              Investigated by: <strong style={{ color: '#FFFFFF' }}>@maxt3chno</strong> & <strong style={{ color: '#FFFFFF' }}>@sauda_coder</strong>
            </span>
            <span style={{ color: '#4D6BFE', fontSize: 13, fontFamily: 'monospace', fontWeight: 700 }}>
              100% LOCAL COMPLIANT
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 2. Budget Shootout Video Evidence (Reef Ecosystem 60fps)
  if (section === 'budget_shootout') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
        <div style={{ position: 'absolute', top: 30, left: 60, right: 60, bottom: 90, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: '#000000', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
          <Video
            src={staticFile('evidence/max_cheap_models.mp4')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            muted
          />

          <div style={{ position: 'absolute', top: 20, left: 24, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', padding: '8px 18px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#4D6BFE', boxShadow: '0 0 10px #4D6BFE' }} />
            <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              BUDGET SHOOTOUT: DEEPSEEK V4.1 FLASH vs GEMINI 3.8 FLASH vs MUSE SPARK
            </span>
          </div>

          <div style={{ position: 'absolute', bottom: 20, right: 24, backgroundColor: 'rgba(16, 163, 127, 0.9)', padding: '8px 18px', borderRadius: 8 }}>
            <span style={{ color: '#070B14', fontSize: 13, fontFamily: 'monospace', fontWeight: 900 }}>
              SHADER RECOMPILE: &lt; 2 SECONDS (60 FPS)
            </span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 30, left: 60, right: 60, display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          <span>WEBGL CORAL REEF ECOSYSTEM SIMULATION</span>
          <span>SOURCE: @maxt3chno (BLIND ONE-SHOT TEST)</span>
        </div>
      </AbsoluteFill>
    );
  }

  // 3. DeepSeek-Harness Open Source Guillotine Reveal
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(77, 107, 254, 0.15) 0%, transparent 70%)' }} />

      {/* Top Header */}
      <div style={{ position: 'absolute', top: 40, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <DeepSeekLogo size={32} />
          <span style={{ color: '#4D6BFE', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.15em', fontWeight: 800 }}>
            DEEPSEEK-HARNESS LAUNCH
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: 20 }}>
          <XTwitterLogo size={18} />
          <span style={{ color: '#E2E8F0', fontSize: 13, fontFamily: 'monospace' }}>x.com/sauda_coder</span>
        </div>
      </div>

      {/* Side by Side Tweet Card & Video Preview */}
      <div
        style={{
          position: 'absolute',
          top: 130,
          left: 100,
          right: 100,
          bottom: 70,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 36,
          transform: `translateY(${(1 - entrance) * 20}px)`,
        }}
      >
        {/* Flat Tweet Screenshot Card */}
        <div style={{ backgroundColor: '#0F172A', border: '1px solid rgba(77, 107, 254, 0.3)', borderRadius: 20, overflow: 'hidden', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ width: '100%', height: '70%', borderRadius: 12, overflow: 'hidden', backgroundColor: '#000000' }}>
            <Img
              src={staticFile('evidence/deepseek_harness_card.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ color: '#4D6BFE', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>OPEN SOURCE CODING AGENTS</div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800, marginTop: 4 }}>"Everything is a Plugin"</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>
              Claude’s most complete plan costs $200 a month. This framework is completely free.
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div style={{ backgroundColor: '#000000', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
          <Video
            src={staticFile('evidence/deepseek_harness.mp4')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            muted
          />
          <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: 'rgba(0,0,0,0.8)', padding: '10px 18px', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 700 }}>deepseek-ai / deepseek-harness</span>
            <span style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>ZERO TOLL</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
