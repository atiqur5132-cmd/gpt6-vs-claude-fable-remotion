import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import { MillenniumProblemsDossier } from '../../components/MillenniumProblemsDossier';
import {
  Award,
  Compass,
  Cpu,
  Atom,
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const Act5DemisHassabisAGI: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 53: 166f (5.5s) -> EVIDENCE TWEET 6: Big Brain AI */}
        <Series.Sequence durationInFrames={166}>
          <RealTweetEvidence
            imageFile="hassabis_deepmind_tweet.png"
            authorName="Big Brain AI"
            handle="realBigBrainAI"
            categoryTag="EXECUTIVE PIVOT"
            highlightText="Demis Hassabis steps back to dedicate entire focus to AGI architecture"
          />
        </Series.Sequence>

        {/* Micro-beat 54: 162f (5.4s) -> Demis Hassabis Leadership Dossier */}
        <Series.Sequence durationInFrames={162}>
          <BeatDemisDossier />
        </Series.Sequence>

        {/* Micro-beat 55: 113f (3.8s) -> 100% Focus Dedicated to AGI */}
        <Series.Sequence durationInFrames={113}>
          <BeatFocusOnAGI />
        </Series.Sequence>

        {/* Micro-beat 56: 115f (3.8s) -> Exiting Commercial Chatbot War */}
        <Series.Sequence durationInFrames={115}>
          <BeatExitChatbotWar />
        </Series.Sequence>

        {/* Micro-beat 57: 71f (2.4s) -> EVIDENCE TWEET 7: Dr. Ganapathi Pulipaka */}
        <Series.Sequence durationInFrames={71}>
          <RealTweetEvidence
            imageFile="pulipaka_agi_tweet.png"
            authorName="Dr. Ganapathi Pulipaka"
            handle="gp_pulipaka"
            categoryTag="MILLENNIUM PROBLEMS"
            highlightText="AGI will solve the 7 Millennium Prize Problems in 20 years"
            maxHeight={820}
          />
        </Series.Sequence>

        {/* Micro-beat 58: 117f (3.9s) -> THE 7 CLAY MILLENNIUM PROBLEMS DOSSIER */}
        <Series.Sequence durationInFrames={117}>
          <MillenniumProblemsDossier />
        </Series.Sequence>

        {/* Micro-beat 59: 126f (4.2s) -> Novel Physics & Protein Decoding */}
        <Series.Sequence durationInFrames={126}>
          <BeatNovelPhysicsAndBiology />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------
// EXPANSIVE 1720px SUB-BEATS
// -------------------------------------------------------------

const BeatDemisDossier: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(66, 133, 244, 0.45)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 70px rgba(0,0,0,0.9)' }}>
        <div style={{ color: '#4285F4', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          STRATEGIC LEADERSHIP RE-ALIGNMENT
        </div>

        <div>
          <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, lineHeight: 1.1 }}>
            Sir Demis Hassabis
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 18, color: '#38BDF8', fontSize: 18, fontFamily: 'monospace', fontWeight: 700 }}>
            <span>Nobel Laureate in Chemistry</span>
            <span>•</span>
            <span>Alphabet Chief Scientist</span>
            <span>•</span>
            <span>DeepMind Chair</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(66, 133, 244, 0.1)', border: '1px solid rgba(66, 133, 244, 0.3)', borderRadius: 16, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'monospace' }}>MANDATE</div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800, marginTop: 4 }}>
              100% Dedicated Focus on Artificial General Intelligence (AGI) Architecture
            </div>
          </div>
          <div style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>
            ZERO CORPORATE OVERHEAD
          </div>
        </div>
      </div>
    </div>
  );
};

const BeatFocusOnAGI: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(34, 197, 94, 0.25)' }}>
        <Target size={68} color="#22C55E" style={{ marginBottom: 20 }} />
        <div style={{ color: '#22C55E', fontSize: 16, fontFamily: 'monospace', letterSpacing: '0.3em', fontWeight: 800 }}>
          STRATEGIC PIVOT MANDATE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 68, fontWeight: 900, textAlign: 'center', marginTop: 12 }}>
          100% Focus on AGI Architecture
        </div>
        <div style={{ color: '#94A3B8', fontSize: 20, fontFamily: 'monospace', marginTop: 16 }}>
          Pivoting Beyond Consumer Products to Foundational Scientific Automation
        </div>
      </div>
    </div>
  );
};

const BeatExitChatbotWar: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ width: 1720, height: 680, backgroundColor: 'rgba(15, 23, 42, 0.92)', border: '2px solid rgba(255, 255, 255, 0.12)', borderRadius: 24, padding: '48px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px rgba(0,0,0,0.85)' }}>
        <div style={{ color: '#64748B', textDecoration: 'line-through', fontSize: 26, fontFamily: 'monospace' }}>
          COMMERCIAL CHATBOT COMMODITY WAR
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 900, textAlign: 'center', marginTop: 18 }}>
          Building the Algorithmic Discovery Engine
        </div>
        <div style={{ color: '#38BDF8', fontSize: 18, fontFamily: 'monospace', marginTop: 16 }}>
          Shifting compute from dialogue simulation to automated theorem proving
        </div>
      </div>
    </div>
  );
};

const BeatNovelPhysicsAndBiology: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 32, maxWidth: 1720, width: '100%', height: 680 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06B6D4', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(6, 182, 212, 0.2)' }}>
          <Atom size={56} color="#06B6D4" />
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900 }}>Novel Quantum Physics</div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6 }}>Automated discovery of non-linear field equations and superconductor lattices.</p>
          </div>
          <div style={{ color: '#06B6D4', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>DISCOVERY ENGINE ACTIVE</div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '2px solid #22C55E', borderRadius: 24, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px rgba(34, 197, 94, 0.2)' }}>
          <Sparkles size={56} color="#22C55E" />
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900 }}>Proteomics &amp; Cell Biology</div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, lineHeight: 1.6 }}>Next-generation dynamic protein simulations surpassing static structural benchmarks.</p>
          </div>
          <div style={{ color: '#22C55E', fontFamily: 'monospace', fontSize: 14, fontWeight: 800 }}>DISCOVERY ENGINE ACTIVE</div>
        </div>
      </div>
    </div>
  );
};
