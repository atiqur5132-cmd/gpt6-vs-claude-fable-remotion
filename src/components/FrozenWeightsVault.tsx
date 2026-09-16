import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Lock, Cpu, Layers, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const FrozenWeightsVault: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = Math.sin(frame / 8) * 0.1 + 0.9;
  const frostAnim = interpolate(frame, [0, 30], [0.3, 1], { extrapolateRight: 'clamp' });

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
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: 20,
          padding: '8px 24px',
          marginBottom: 28,
        }}
      >
        <Lock size={18} color="#38BDF8" />
        <span style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          ARCHITECTURAL INSIGHT • ZERO WEIGHT RETRAINING
        </span>
      </div>

      {/* Main Dual-Layer Visualizer (1440px width) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 1440,
          width: '100%',
        }}
      >
        {/* Layer 1: Evolving Metacognitive Orchestrator (Active / Glowing Green) */}
        <div
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '2px solid rgba(34, 197, 94, 0.5)',
            borderRadius: 20,
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 0 35px rgba(34, 197, 94, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(34, 197, 94, 0.6)',
              }}
            >
              <Sparkles size={32} color="#22C55E" />
            </div>
            <div>
              <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
                METACOGNITIVE ORCHESTRATION LAYER
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>
                Programmable Search Grammar (Evolving &amp; Mutating)
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.25)',
              border: '1px solid #22C55E',
              borderRadius: 10,
              padding: '10px 22px',
              color: '#22C55E',
              fontFamily: 'monospace',
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            ACTIVE RE-PROGRAMMING
          </div>
        </div>

        {/* Layer 2: Frozen Neural Model Weights (Cryogenic Locked / Ice-Blue) */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid rgba(56, 189, 248, 0.45)',
            borderRadius: 20,
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(2, 6, 23, 0.95) 100%)',
            boxShadow: '0 0 35px rgba(56, 189, 248, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(56, 189, 248, 0.6)',
              }}
            >
              <Lock size={32} color="#38BDF8" />
            </div>
            <div>
              <div style={{ color: '#38BDF8', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
                BASE FOUNDATION MODEL
              </div>
              <div style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 900, marginTop: 4 }}>
                Neural Weights 100% Frozen (0% Retraining Required)
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              borderRadius: 10,
              padding: '10px 22px',
            }}
          >
            <ShieldCheck size={20} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontFamily: 'monospace', fontSize: 15, fontWeight: 800 }}>
              ZERO BACKPROPAGATION
            </span>
          </div>
        </div>

        {/* Telemetry Footer Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 24px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 14,
          }}
        >
          <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>
            ENERGY CONSUMPTION: <span style={{ color: '#22C55E', fontWeight: 800 }}>MINIMAL (Zero Megawatt Datacenter Waste)</span>
          </div>
          <div style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>
            SAFETY GUARANTEE: <span style={{ color: '#38BDF8', fontWeight: 800 }}>DETERMINISTIC VERIFIABLE SEARCH GRAMMAR</span>
          </div>
        </div>
      </div>
    </div>
  );
};
