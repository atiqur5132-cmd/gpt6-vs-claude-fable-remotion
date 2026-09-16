import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';

export const MillenniumProblemsDossier: React.FC = () => {
  const frame = useCurrentFrame();

  const problems = [
    { name: 'Riemann Hypothesis', field: 'Number Theory / Non-Trivial Zeta Zeros', status: 'ACTIVE SOLVER' },
    { name: 'P vs NP Problem', field: 'Computational Complexity & Verification', status: 'ACTIVE SOLVER' },
    { name: 'Navier–Stokes Existence', field: 'Nonlinear PDE Fluid Dynamics', status: 'ACTIVE SOLVER' },
    { name: 'Yang–Mills & Mass Gap', field: 'Quantum Field Theory & Gauge Symmetry', status: 'ACTIVE SOLVER' },
    { name: 'Birch & Swinnerton-Dyer', field: 'Elliptic Curves & Rank Conjecture', status: 'ACTIVE SOLVER' },
    { name: 'Hodge Conjecture', field: 'Complex Algebraic Geometry & Cycles', status: 'ACTIVE SOLVER' },
    { name: 'Poincaré Conjecture', field: '3-Manifold Topology (Perelman 2003)', status: 'SOLVED' },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 60px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(234, 179, 8, 0.15)',
          border: '1px solid rgba(234, 179, 8, 0.4)',
          borderRadius: 20,
          padding: '8px 24px',
          marginBottom: 24,
        }}
      >
        <Award size={18} color="#EAB308" />
        <span style={{ color: '#EAB308', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          CLAY MATHEMATICS INSTITUTE • 7 MILLENNIUM PRIZE PROBLEMS
        </span>
      </div>

      {/* Main Problems Grid (1480px width) */}
      <div
        style={{
          width: '100%',
          maxWidth: 1480,
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          border: '1px solid rgba(234, 179, 8, 0.35)',
          borderRadius: 20,
          padding: '28px 36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 18,
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
        }}
      >
        {problems.map((p, idx) => {
          const isSolved = p.status === 'SOLVED';
          const itemAnim = interpolate(frame, [idx * 3, idx * 3 + 12], [0, 1], {
            extrapolateRight: 'clamp',
          });

          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(5, 8, 17, 0.75)',
                border: isSolved
                  ? '2px solid rgba(34, 197, 94, 0.5)'
                  : '1px solid rgba(234, 179, 8, 0.28)',
                borderRadius: 12,
                padding: '14px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: itemAnim,
              }}
            >
              <div>
                <div style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 800 }}>
                  {p.name}
                </div>
                <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 2 }}>
                  {p.field}
                </div>
              </div>

              <div>
                {isSolved ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22C55E', backgroundColor: 'rgba(34, 197, 94, 0.15)', padding: '4px 12px', borderRadius: 8 }}>
                    <CheckCircle2 size={16} />
                    <span style={{ fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>
                      VERIFIED SOLVED
                    </span>
                  </div>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      backgroundColor: 'rgba(234, 179, 8, 0.15)',
                      padding: '4px 12px',
                      borderRadius: 8,
                      color: '#EAB308',
                      fontSize: 12,
                      fontFamily: 'monospace',
                      fontWeight: 800,
                    }}
                  >
                    <Sparkles size={14} />
                    <span>DREAM-RSI TARGET</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Target Timeline Telemetry Strip */}
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          gap: 28,
          color: '#94A3B8',
          fontSize: 13,
          fontFamily: 'monospace',
        }}
      >
        <span>TIMELINE: 2026 – 2046</span>
        <span>•</span>
        <span style={{ color: '#EAB308', fontWeight: 800 }}>GOAL: AUTOMATE MATHEMATICAL PROOFS</span>
        <span>•</span>
        <span>INSTITUTION: GOOGLE DEEPMIND &amp; ALPHABET</span>
      </div>
    </div>
  );
};
