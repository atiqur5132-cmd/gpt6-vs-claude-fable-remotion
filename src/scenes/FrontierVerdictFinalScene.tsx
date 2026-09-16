import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { OpenAILogo, AnthropicLogo, DeepSeekLogo, GoogleGeminiLogo } from '../RealLogos';
import { ShieldCheck, Zap, Sparkles, TrendingDown, CheckCircle2 } from 'lucide-react';

export const FrontierVerdictFinalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const pulse = Math.sin(frame / 8) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      {/* Subtle Dynamic Ambient Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top Header */}
      <div style={{ position: 'absolute', top: 50, left: 100, right: 100, textAlign: 'center' }}>
        <div style={{ color: '#38BDF8', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE 2026 FRONTIER VERDICT
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, letterSpacing: '-0.02em', marginTop: 6 }}>
          The Dissolution of the Closed Moat
        </div>
      </div>

      {/* 4-Quadrant Ecosystem Grid */}
      <div
        style={{
          position: 'absolute',
          top: 170,
          left: 100,
          right: 100,
          height: 380,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
          transform: `translateY(${(1 - entrance) * 20}px)`,
        }}
      >
        {/* Quad 1: OpenAI */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(16, 163, 127, 0.3)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <OpenAILogo size={32} color="#10A37F" />
            <span style={{ color: '#10A37F', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>SCALE LEADER</span>
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800 }}>GPT-6 Astra & Sol</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>1-Shot 3D engines, -70% latency leak, thousands of background agents</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, color: '#10A37F', fontSize: 12, fontFamily: 'monospace' }}>
            STATUS: ACTIVE DEPLOYMENT
          </div>
        </div>

        {/* Quad 2: Anthropic */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AnthropicLogo size={32} color="#D97706" />
            <span style={{ color: '#D97706', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>REASONING CODER</span>
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800 }}>Opus 5.2 & Fable 5.2</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>SWE-bench domination, enterprise safety narrative, high subscription tier</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, color: '#D97706', fontSize: 12, fontFamily: 'monospace' }}>
            STATUS: CLOSED ENTERPRISE
          </div>
        </div>

        {/* Quad 3: DeepSeek */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(77, 107, 254, 0.3)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <DeepSeekLogo size={32} color="#4D6BFE" />
            <span style={{ color: '#4D6BFE', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>OPEN DISRUPTOR</span>
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800 }}>V4.1 Flash & Harness</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>Sub-2s WebGL recompile, 60fps local GPU, MIT open agent architecture</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, color: '#4D6BFE', fontSize: 12, fontFamily: 'monospace' }}>
            STATUS: 100% LOCAL COMPLIANT
          </div>
        </div>

        {/* Quad 4: Google DeepMind */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(66, 133, 244, 0.3)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <GoogleGeminiLogo size={32} />
            <span style={{ color: '#4285F4', fontSize: 11, fontFamily: 'monospace', fontWeight: 800 }}>AGENTIC PLATFORM</span>
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800 }}>Gemini 4 & Antigravity</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>IDE self-healing compiler integration, multi-agent sandbox execution</div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, color: '#4285F4', fontSize: 12, fontFamily: 'monospace' }}>
            STATUS: STAGING PREVIEW
          </div>
        </div>
      </div>

      {/* Bottom Kinetic High-Stakes Takeaway Box */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 100,
          right: 100,
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          border: '2px solid rgba(56, 189, 248, 0.4)',
          borderRadius: 20,
          padding: '24px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
        }}
      >
        <div>
          <div style={{ color: '#38BDF8', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.15em', marginBottom: 4 }}>
            CORE TAKEAWAY FOR BUILDERS
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800 }}>
            Master autonomous execution. The closed subscription moat is gone.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10A37F', opacity: pulse, boxShadow: '0 0 12px #10A37F' }} />
          <span style={{ color: '#E2E8F0', fontSize: 15, fontFamily: 'monospace', fontWeight: 800 }}>
            2026 FRONTIER AGENTIC ERA
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
