import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Video, Img } from 'remotion';
import { Bot, Network, Terminal, CheckCircle2, ShieldAlert, Zap, Layers } from 'lucide-react';
import { GoogleGeminiLogo, OpenAILogo, XTwitterLogo } from '../RealLogos';

interface Gemini4SwarmSceneProps {
  section: 'gemini_leak' | 'altman_swarm_quote' | 'swarm_network_visualizer';
}

export const Gemini4SwarmScene: React.FC<Gemini4SwarmSceneProps> = ({ section }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  // 1. Google Gemini 4 Registry Leak Card
  if (section === 'gemini_leak') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(66, 133, 244, 0.12) 0%, transparent 70%)' }} />

        {/* Top Header */}
        <div style={{ position: 'absolute', top: 50, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <GoogleGeminiLogo size={32} />
            <span style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.15em', fontWeight: 800 }}>
              GOOGLE SILENT AMBUSH • REGISTRY LEAK
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: 20 }}>
            <XTwitterLogo size={18} />
            <span style={{ color: '#E2E8F0', fontSize: 13, fontFamily: 'monospace' }}>x.com/Mr_Salio</span>
          </div>
        </div>

        {/* Dossier Registry Box */}
        <div
          style={{
            position: 'absolute',
            top: 140,
            left: 120,
            right: 120,
            bottom: 80,
            backgroundColor: '#0F172A',
            border: '1px solid rgba(66, 133, 244, 0.3)',
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
            <div style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '0.2em', marginBottom: 8 }}>
              UNANNOUNCED MODEL FAMILY
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, lineHeight: 1.2 }}>
              Gemini 4 Leaks: Antigravity Autonomous Engine
            </div>
            <p style={{ color: '#94A3B8', fontSize: 17, marginTop: 14, lineHeight: 1.6 }}>
              Developer registry scans leaked internal endpoints pointing to next-generation Gemini 4 models specifically engineered for background developer agents.
            </p>
          </div>

          {/* Terminal Code Registry Snippet */}
          <div style={{ backgroundColor: '#050811', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 24, fontFamily: 'monospace', color: '#E2E8F0', fontSize: 16 }}>
            <div style={{ color: '#64748B', marginBottom: 8 }}>// Leaked Model Registry Enums (September 2026)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: '#38BDF8' }}>&gt;</span>
              <span style={{ color: '#10A37F' }}>"antigravity-preview-09-2026"</span>
              <span style={{ color: '#64748B' }}>// Autonomous Multi-Agent Core</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6 }}>
              <span style={{ color: '#38BDF8' }}>&gt;</span>
              <span style={{ color: '#93C5FD' }}>"gemini-4-flash-preview"</span>
              <span style={{ color: '#64748B' }}>// Sub-50ms Fast Execution Engine</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6 }}>
              <span style={{ color: '#38BDF8' }}>&gt;</span>
              <span style={{ color: '#F59E0B' }}>"jules-agent-runtime-v2"</span>
              <span style={{ color: '#64748B' }}>// IDE Self-Healing Background Swarms</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
            <span style={{ color: '#94A3B8', fontSize: 14 }}>
              Confirmed by developer telemetry: <strong style={{ color: '#FFFFFF' }}>@Mr_Salio</strong>
            </span>
            <span style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              STATUS: PRE-RELEASE PRIVATE STAGING
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 2. Sam Altman Swarm Quote & Real Video Evidence
  if (section === 'altman_swarm_quote') {
    return (
      <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
        <div style={{ position: 'absolute', top: 30, left: 60, right: 60, bottom: 90, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: '#000000', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
          <Video
            src={staticFile('evidence/sam_altman_agents.mp4')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            muted
          />

          <div style={{ position: 'absolute', top: 20, left: 24, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', padding: '8px 18px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10A37F', boxShadow: '0 0 10px #10A37F' }} />
            <span style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
              SAM ALTMAN (CEO, OPENAI) • STANFORD LECTURE
            </span>
          </div>

          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(16, 163, 127, 0.4)', borderRadius: 12, padding: '16px 24px' }}>
            <div style={{ color: '#10A37F', fontSize: 12, fontFamily: 'monospace', fontWeight: 800, marginBottom: 4 }}>
              THE NEW REALITY OF SOFTWARE DEVELOPMENT
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, fontStyle: 'italic' }}>
              “Every night, I have a few thousand autonomous agents running with GPT-6 Astra. Thousands of agents working while I sleep...”
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 30, left: 60, right: 60, display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: 14, fontFamily: 'monospace' }}>
          <span>SPEAKER: SAM ALTMAN</span>
          <span>SOURCE: @Grow_withAI (TELEMETRY EVIDENCE)</span>
        </div>
      </AbsoluteFill>
    );
  }

  // 3. Autonomous Swarm Network Visualization
  const nodeCount = 12;
  const pulse = Math.sin(frame / 6) * 0.2 + 0.8;

  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14', opacity }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 163, 127, 0.12) 0%, transparent 70%)' }} />

      <div style={{ position: 'absolute', top: 50, left: 100, right: 100, textAlign: 'center' }}>
        <div style={{ color: '#10A37F', fontSize: 14, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          THE PARADIGM REVOLUTION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 46, fontWeight: 900, marginTop: 6 }}>
          From Chatbots to Ambient Autonomous Swarms
        </div>
      </div>

      {/* Interactive Swarm Grid Visualization */}
      <div style={{ position: 'absolute', top: 180, left: 100, right: 100, bottom: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          { title: 'Compiler Agent 01', task: 'Continuous Type Checking', status: 'RUNNING', color: '#10A37F' },
          { title: 'Refactor Agent 02', task: 'Dead Code Elimination', status: 'ACTIVE', color: '#38BDF8' },
          { title: 'Security Agent 03', task: 'Vulnerability Fuzzing', status: 'VERIFYING', color: '#F59E0B' },
          { title: 'Testing Agent 04', task: 'Unit Test Generation', status: 'PASSING', color: '#10A37F' },
          { title: 'Database Agent 05', task: 'Schema Migration Optimization', status: 'ACTIVE', color: '#38BDF8' },
          { title: 'UI Layout Agent 06', task: 'Responsive Shader Sync', status: 'RUNNING', color: '#10A37F' },
          { title: 'API Gateway Agent 07', task: 'Rate Limit Throttling', status: 'STABLE', color: '#38BDF8' },
          { title: 'Self-Healing Agent 08', task: 'Runtime Patch Injection', status: 'ACTIVE', color: '#A855F7' },
        ].map((node, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              border: `1px solid ${node.color}44`,
              borderRadius: 16,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: `0 0 20px ${node.color}15`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Bot size={20} color={node.color} />
              <span style={{ fontSize: 11, fontFamily: 'monospace', fontWeight: 800, color: node.color, backgroundColor: `${node.color}22`, padding: '3px 8px', borderRadius: 4 }}>
                {node.status}
              </span>
            </div>
            <div>
              <div style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700, marginTop: 8 }}>{node.title}</div>
              <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>{node.task}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: node.color, opacity: pulse }} />
              <span style={{ color: '#64748B', fontSize: 11, fontFamily: 'monospace' }}>2,400+ Background Iterations</span>
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
