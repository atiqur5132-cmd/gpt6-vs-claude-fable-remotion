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
            maxHeight={520}
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
// SUB-BEATS
// -------------------------------------------------------------

const BeatDemisDossier: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(66, 133, 244, 0.4)', borderRadius: 20, padding: '36px 54px', maxWidth: 840, width: '100%', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.8)' }}>
        <div style={{ color: '#4285F4', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.25em', fontWeight: 800 }}>
          STRATEGIC LEADERSHIP TRANSITION
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 44, fontWeight: 900, marginTop: 8 }}>
          Sir Demis Hassabis
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 14, color: '#94A3B8', fontSize: 13, fontFamily: 'monospace' }}>
          <span>Nobel Laureate (Chemistry)</span>
          <span>•</span>
          <span>Alphabet Chief Scientist</span>
          <span>•</span>
          <span>DeepMind Chair</span>
        </div>
      </div>
    </div>
  );
};

const BeatFocusOnAGI: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '2px solid #22C55E', borderRadius: 20, padding: '36px 64px', textAlign: 'center', boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)' }}>
        <Target size={44} color="#22C55E" style={{ margin: '0 auto 12px' }} />
        <div style={{ color: '#22C55E', fontSize: 13, fontFamily: 'monospace', fontWeight: 800 }}>
          STRATEGIC MANDATE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 42, fontWeight: 900, marginTop: 4 }}>
          100% Focus on AGI Architecture
        </div>
      </div>
    </div>
  );
};

const BeatExitChatbotWar: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 18, padding: '32px 56px', textAlign: 'center' }}>
        <div style={{ color: '#64748B', textDecoration: 'line-through', fontSize: 18, fontFamily: 'monospace' }}>
          COMMERCIAL CHATBOT COMMODITY RACE
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, marginTop: 12 }}>
          Building the Algorithmic Discovery Engine
        </div>
      </div>
    </div>
  );
};

const BeatNovelPhysicsAndBiology: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 24, maxWidth: 880, width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid #06B6D4', borderRadius: 16, padding: '28px', textAlign: 'center' }}>
          <Atom size={36} color="#06B6D4" style={{ margin: '0 auto 10px' }} />
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>Quantum Physics</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>Autonomous Equation Discovery</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22C55E', borderRadius: 16, padding: '28px', textAlign: 'center' }}>
          <Sparkles size={36} color="#22C55E" style={{ margin: '0 auto 10px' }} />
          <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>Proteomics &amp; Biology</div>
          <div style={{ color: '#94A3B8', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>Next-Generation AlphaFold Frontiers</div>
        </div>
      </div>
    </div>
  );
};
