import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { VideoEvidenceDossier } from '../VideoEvidenceDossier';
import { OfficialLogoBadge } from '../components/OfficialLogoBadge';
import { KineticPunchText } from '../components/KineticPunchText';
import { SpeedometerGauge } from '../components/SpeedometerGauge';
import { NeuralFlowCanvas } from '../components/NeuralFlowCanvas';
import { SiliconDieSchematic } from '../components/SiliconDieSchematic';

export const Higgsfield3DBlenderScene: React.FC<{ beatIndex: number }> = ({ beatIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 350], [1.0, 1.05], { extrapolateRight: 'clamp' });
  const subPhase = Math.floor(frame / 65);

  // =========================================================================
  // BEAT 0: 3D Engine Warfare & Model Context Protocol
  // =========================================================================
  if (beatIndex === 0) {
    if (subPhase === 0) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#F57C18" secondaryColor="#00F0FF" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
            <OfficialLogoBadge logo="blender" size={135} label="BLENDER 3D PIPELINE" glowColor="rgba(245, 124, 24, 0.85)" />
            <KineticPunchText words={['3D', 'ENGINE', 'WARFARE']} accentWordIndex={1} accentColor="#F57C18" fontSize={88} />
          </div>
        </AbsoluteFill>
      );
    }

    if (subPhase === 1) {
      return (
        <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
          <NeuralFlowCanvas color="#00F0FF" secondaryColor="#A855F7" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, zIndex: 10 }}>
            <SiliconDieSchematic color="#00F0FF" label="MODEL CONTEXT PROTOCOL (MCP)" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <OfficialLogoBadge logo="blender" size={100} label="MCP PROTOCOL" glowColor="rgba(245, 124, 24, 0.7)" />
              <KineticPunchText words={['DIRECT', 'API', 'CONTROL']} accentWordIndex={0} accentColor="#00F0FF" fontSize={76} />
            </div>
          </div>
        </AbsoluteFill>
      );
    }

    // Phase 2+: Cinema Grade Prompts
    return (
      <AbsoluteFill style={{ backgroundColor: '#030712', transform: `scale(${zoom})`, justifyContent: 'center', alignItems: 'center' }}>
        <NeuralFlowCanvas color="#F59E0B" secondaryColor="#10B981" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
            <OfficialLogoBadge logo="claude" size={100} label="OPUS DRIVES" glowColor="rgba(245, 158, 11, 0.8)" />
            <OfficialLogoBadge logo="blender" size={120} label="BLENDER API" glowColor="rgba(245, 124, 24, 0.85)" />
          </div>
          <KineticPunchText words={['AUTONOMOUS', 'CINEMATIC', 'PROMPTS']} accentWordIndex={1} accentColor="#F59E0B" fontSize={80} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 1: Real 1080p Blender DeLorean & ThreeJS Playback
  // =========================================================================
  if (beatIndex === 1) {
    const blenderWords =
      subPhase === 0
        ? ['BLENDER', 'DELOREAN', 'DEMO']
        : subPhase === 1
        ? ['AUTONOMOUS', 'MESH', 'RIGGING']
        : ['KEYED', 'LIGHTING', 'CURVES'];

    return (
      <AbsoluteFill>
        <VideoEvidenceDossier
          videoPath="evidence/openai_astra_blender_threejs.mp4"
          author="Higgsfield AI"
          handle="@higgsfield_ai"
          sourceUrl="higgsfield.ai/mcp/blender-delorean"
          title="HIGGSFIELD MCP • AUTONOMOUS 3D DELOREAN & BLENDER GENERATION"
          tagText="1080P REAL UNEDITED BLENDER API DEMO"
          mode="dossier16x9"
        />

        {/* Real Official Blender PNG Logo Badge at Top Right */}
        <div style={{ position: 'absolute', top: 35, right: 80, zIndex: 60 }}>
          <OfficialLogoBadge logo="blender" size={70} label="BLENDER 3D" glowColor="rgba(245, 124, 24, 0.8)" />
        </div>

        {/* Bottom Kinetic Punch Words */}
        <div style={{ position: 'absolute', bottom: 40, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 60 }}>
          <KineticPunchText words={blenderWords} accentWordIndex={1} accentColor="#00F0FF" fontSize={64} />
        </div>
      </AbsoluteFill>
    );
  }

  // =========================================================================
  // BEAT 2: Unreal Engine 5 & The Evaporating Barrier
  // =========================================================================
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030712',
        transform: `scale(${zoom})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <NeuralFlowCanvas color="#0EA5E9" secondaryColor="#10B981" intensity={1.2} />

      {/* Phase 0: Unreal Engine Official Badge */}
      {subPhase === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <OfficialLogoBadge logo="unreal" size={135} label="UNREAL ENGINE 5" sublabel="PROCEDURAL GAME MECHANICS" glowColor="rgba(14, 165, 233, 0.85)" />
          <KineticPunchText words={['UNREAL', 'ENGINE', 'FIVE']} accentWordIndex={0} accentColor="#0EA5E9" fontSize={88} />
        </div>
      )}

      {/* Phase 1: Spatial Physics & Hitboxes */}
      {subPhase === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 10 }}>
          <SpeedometerGauge value={100} maxValue={100} label="SPATIAL HITBOX PRECISION" unit="%" color="#0EA5E9" size={280} />
          <KineticPunchText words={['CLOTH', 'KINEMATICS', 'SOLVED']} accentWordIndex={1} accentColor="#0EA5E9" fontSize={80} />
        </div>
      )}

      {/* Phase 2+: Barrier Evaporated */}
      {subPhase >= 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, zIndex: 10 }}>
          <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
            <OfficialLogoBadge logo="unreal" size={110} label="UNREAL 5" glowColor="rgba(14, 165, 233, 0.8)" />
            <OfficialLogoBadge logo="blender" size={110} label="BLENDER" glowColor="rgba(245, 124, 24, 0.8)" />
          </div>
          <KineticPunchText words={['THE', 'BARRIER', 'EVAPORATED']} accentWordIndex={1} accentColor="#00F0FF" fontSize={84} />
        </div>
      )}
    </AbsoluteFill>
  );
};
