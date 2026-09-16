import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { GoogleGeminiLogo } from '../../RealLogos';
import { Award, Compass, Dna, Atom, BrainCircuit, Globe } from 'lucide-react';

export const Act5DemisHassabisAGI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E', opacity }}>
      {/* Deep Blue Cosmic Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(66, 133, 244, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <GoogleGeminiLogo size={32} />
          <span style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800 }}>
            ALPHABET CHIEF SCIENTIST INITIATIVE
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(66, 133, 244, 0.15)', border: '1px solid rgba(66, 133, 244, 0.3)', padding: '6px 16px', borderRadius: 20 }}>
          <Compass size={18} color="#4285F4" />
          <span style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            THE FUTURE OF AGI
          </span>
        </div>
      </div>

      {/* Main Hassabis Blueprint Card */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 120,
          right: 120,
          bottom: 80,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(66, 133, 244, 0.3)',
          borderRadius: 24,
          padding: 44,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
          transform: `translateY(${(1 - entrance) * 20}px)`,
        }}
      >
        <div>
          <div style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.2em', fontWeight: 800, marginBottom: 8 }}>
            DEMIS HASSABIS STRATEGIC PIVOT
          </div>
          <div style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 900, lineHeight: 1.15 }}>
            Moving Beyond Commercial Chatbots to Pure Science
          </div>
          <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 12, lineHeight: 1.6, maxWidth: 1000 }}>
            Demis Hassabis stepped back from day-to-day administrative duties to focus 100% on the architecture of AGI: building recursive engines to solve humanity's hardest scientific puzzles.
          </p>
        </div>

        {/* 3 Scientific Frontier Targets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Award size={24} color="#F59E0B" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Millennium Problems</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
              Recursive proof exploration targeting the remaining 6 Clay Mathematics Millennium problems.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Dna size={24} color="#10A37F" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Biological Physics</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
              Pushing AlphaFold beyond static predictions into dynamic cellular kinetic simulations.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
            <Atom size={24} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800, marginTop: 12 }}>Automated Physics</div>
            <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
              Self-improving algorithmic hypothesis generation for fusion and quantum materials.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(66, 133, 244, 0.1)', border: '1px solid rgba(66, 133, 244, 0.25)', borderRadius: 12, padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#E2E8F0', fontSize: 15 }}>
            Executive Focus: <strong style={{ color: '#FFFFFF' }}>Alphabet Chief Scientist & Chair of Google DeepMind</strong>
          </span>
          <span style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
            TARGET HORIZON: 2026 - 2030
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
