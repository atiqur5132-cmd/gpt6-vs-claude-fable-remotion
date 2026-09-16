import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { GitBranch, CheckCircle2, XCircle, Sparkles, Cpu } from 'lucide-react';

interface BranchingDiscoveryTreeProps {
  mode?: 'growth' | 'dream_replay' | 'pruning';
}

export const BranchingDiscoveryTree: React.FC<BranchingDiscoveryTreeProps> = ({
  mode = 'growth',
}) => {
  const frame = useCurrentFrame();

  const anim = interpolate(frame, [0, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const pulse = Math.sin(frame / 6) * 0.15 + 0.85;

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
      {/* Header Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          borderRadius: 20,
          padding: '8px 24px',
          marginBottom: 20,
        }}
      >
        <GitBranch size={18} color="#60A5FA" />
        <span style={{ color: '#60A5FA', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          {mode === 'pruning'
            ? 'OFFLINE REPLAY SIMULATOR • PRUNING DEAD ENDS'
            : mode === 'dream_replay'
            ? 'COGNITIVE SANDBOX • SIMULATING PAST EXPLORATIONS'
            : 'HISTORICAL EXPLORATION FOOTPRINT • ACCUMULATED DISCOVERY TREE'}
        </span>
      </div>

      {/* High Canvas Utilization SVG Tree (1560 x 680) */}
      <div
        style={{
          width: 1560,
          height: 680,
          backgroundColor: 'rgba(10, 15, 30, 0.9)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: 24,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
        }}
      >
        <svg width="1560" height="680" viewBox="0 0 1560 680">
          <defs>
            <linearGradient id="line-green-lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
            <linearGradient id="line-red-lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <filter id="glow-green-lg" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Root Node: Initial Problem State */}
          <circle cx="160" cy="340" r="32" fill="#1E293B" stroke="#3B82F6" strokeWidth="4" />
          <text x="160" y="346" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="900" textAnchor="middle">
            ROOT
          </text>

          {/* Branches Tier 1 */}
          {/* Top Branch: Toward Global Optima */}
          <path
            d="M 192 340 C 360 340, 420 180, 540 180"
            fill="none"
            stroke="url(#line-green-lg)"
            strokeWidth="4"
            strokeDasharray="600"
            strokeDashoffset={600 * (1 - anim)}
          />
          {/* Middle Branch: Dead End */}
          <path
            d="M 192 340 C 360 340, 420 340, 540 340"
            fill="none"
            stroke="url(#line-red-lg)"
            strokeWidth="3.5"
            strokeDasharray="600"
            strokeDashoffset={600 * (1 - anim)}
          />
          {/* Bottom Branch: Dead End */}
          <path
            d="M 192 340 C 360 340, 420 500, 540 500"
            fill="none"
            stroke="url(#line-red-lg)"
            strokeWidth="3.5"
            strokeDasharray="600"
            strokeDashoffset={600 * (1 - anim)}
          />

          {/* Tier 1 Nodes */}
          {anim > 0.3 && (
            <>
              {/* Node P1 (Progress) */}
              <circle cx="540" cy="180" r="26" fill="#0F172A" stroke="#22C55E" strokeWidth="3.5" />
              <text x="540" y="185" fill="#22C55E" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                P1
              </text>

              {/* Node Fail 1 */}
              <circle cx="540" cy="340" r="22" fill="#0F172A" stroke="#EF4444" strokeWidth="2.5" opacity={mode === 'pruning' ? 0.25 : 1} />
              <text x="540" y="345" fill="#EF4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                FAIL
              </text>

              {/* Node Fail 2 */}
              <circle cx="540" cy="500" r="22" fill="#0F172A" stroke="#EF4444" strokeWidth="2.5" opacity={mode === 'pruning' ? 0.25 : 1} />
              <text x="540" y="505" fill="#EF4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                FAIL
              </text>
            </>
          )}

          {/* Tier 2 Branches from P1 */}
          {anim > 0.5 && (
            <>
              <path
                d="M 566 180 C 740 180, 800 100, 960 100"
                fill="none"
                stroke="url(#line-green-lg)"
                strokeWidth="4"
                strokeDasharray="500"
                strokeDashoffset={500 * (1 - interpolate(frame, [25, 55], [0, 1], { extrapolateRight: 'clamp' }))}
              />
              <path
                d="M 566 180 C 740 180, 800 250, 960 250"
                fill="none"
                stroke="url(#line-red-lg)"
                strokeWidth="3"
                strokeDasharray="500"
                strokeDashoffset={500 * (1 - interpolate(frame, [25, 55], [0, 1], { extrapolateRight: 'clamp' }))}
              />
            </>
          )}

          {/* Tier 2 Nodes */}
          {anim > 0.7 && (
            <>
              {/* Breakthrough Node OPT */}
              <circle cx="960" cy="100" r="28" fill="#0F172A" stroke="#22C55E" strokeWidth="4" filter="url(#glow-green-lg)" />
              <text x="960" y="105" fill="#FFFFFF" fontSize="13" fontFamily="monospace" fontWeight="900" textAnchor="middle">
                OPT
              </text>

              {/* Error Branch */}
              <circle cx="960" cy="250" r="20" fill="#0F172A" stroke="#EF4444" strokeWidth="2.5" opacity={mode === 'pruning' ? 0.25 : 1} />
              <text x="960" y="255" fill="#EF4444" fontSize="11" fontFamily="monospace" textAnchor="middle">
                ERR
              </text>
            </>
          )}

          {/* Tier 3: Final Solution Node */}
          {anim > 0.85 && (
            <>
              <path
                d="M 988 100 C 1140 100, 1220 160, 1340 160"
                fill="none"
                stroke="#22C55E"
                strokeWidth="5"
                strokeDasharray="400"
                strokeDashoffset={400 * (1 - interpolate(frame, [40, 65], [0, 1], { extrapolateRight: 'clamp' }))}
              />
              <circle
                cx="1340"
                cy="160"
                r={36 * pulse}
                fill="rgba(34, 197, 94, 0.2)"
                stroke="#22C55E"
                strokeWidth="4"
                filter="url(#glow-green-lg)"
              />
              <text x="1340" y="166" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="900" textAnchor="middle">
                DISCOVERY
              </text>
            </>
          )}
        </svg>

        {/* Dynamic Telemetry Strip at Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 32,
            right: 32,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={18} color="#22C55E" />
              <span style={{ color: '#22C55E', fontSize: 14, fontFamily: 'monospace', fontWeight: 700 }}>
                Breakthrough Branch (Preserved Ground Truth)
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <XCircle size={18} color="#EF4444" />
              <span style={{ color: '#EF4444', fontSize: 14, fontFamily: 'monospace', fontWeight: 700 }}>
                Historical Dead Ends (Pruned from Search)
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: 8,
              padding: '6px 16px',
              color: '#06B6D4',
              fontSize: 13,
              fontFamily: 'monospace',
              fontWeight: 800,
            }}
          >
            EVALUATION LATENCY: 0.00ms (OFFLINE DREAM SIMULATOR)
          </div>
        </div>
      </div>
    </div>
  );
};
