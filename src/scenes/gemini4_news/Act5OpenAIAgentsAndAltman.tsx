import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate, Video, staticFile } from 'remotion';
import { OpenAILogo } from '../../RealLogos';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import {
  Bot,
  MessageSquare,
  Sparkles,
  Calendar,
  AlertOctagon,
  ArrowRight,
  TrendingDown,
  UserCheck,
  Building,
  Terminal,
  Layers,
} from 'lucide-react';

export const Act5OpenAIAgentsAndAltman: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 19: 0-364 (12.1s) -> The Sponsored Agent Paradigm */}
        <Series.Sequence durationInFrames={364}>
          <Beat19SponsoredAgentIntro />
        </Series.Sequence>

        {/* Micro-beat 20: 364-856 (16.4s) -> EVIDENCE TWEET 5: @zaibatsu ChatGPT Ad Agents */}
        <Series.Sequence durationInFrames={492}>
          <RealTweetEvidence
            imageFile="zaibatsu_ads_tweet.png"
            authorName="Reg Saddler"
            handle="zaibatsu"
            categoryTag="CHATGPT AD OVERHAUL"
            highlightText="ChatGPT ads now hand you to an advertiser's agent inside the chat... Two agents, 2 principals, 1 window"
            statValue="IN-CHAT AGENTS"
            statLabel="ZERO REDIRECTS"
            keyInsight="Clicking an ad launches an interactive conversational company agent inside ChatGPT."
          />
        </Series.Sequence>

        {/* Micro-beat 21: 856-1531 (22.5s) -> Sam Altman Stanford Bombshell */}
        <Series.Sequence durationInFrames={675}>
          <Beat21AltmanStanfordQuote />
        </Series.Sequence>

        {/* Micro-beat 22: 1531-1902 (12.4s) -> GPT-5.5 Sunset Graveyard */}
        <Series.Sequence durationInFrames={371}>
          <Beat22ModelSunsetting />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// --- BEAT 19: SPONSORED AGENT INTRO ---
const Beat19SponsoredAgentIntro: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 24, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(16,185,129,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Bot size={24} color="#10A37F" />
            <span style={{ color: '#10A37F', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>OPENAI ECOSYSTEM TRANSFORMATION</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>ACTIVE LIVE TESTING // SEPT 2026</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#10A37F', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>DEATH OF THE WEB REDIRECT</div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
              SPONSORED AGENTS <br />
              <span style={{ color: '#10A37F' }}>TWO PRINCIPALS, ONE WINDOW</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 20, lineHeight: 1.5, maxWidth: 840 }}>
              Instead of ads taking users out of ChatGPT to an external landing page, clicking a sponsored card triggers an immediate conversational takeover by the company's autonomous representative.
            </p>
          </div>

          <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 340, height: 340, borderRadius: 32, backgroundColor: 'rgba(16,185,129,0.1)', border: '2px solid #10A37F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <OpenAILogo size={100} color="#10A37F" />
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 18 }}>AUTONOMOUS COMMERCIAL AGENT</div>
              <div style={{ color: '#34D399', fontFamily: 'monospace', fontSize: 13 }}>NEGOTIATION IN-CHAT</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>OLD PARADIGM</div>
            <div style={{ color: '#EF4444', fontSize: 22, fontWeight: 800, marginTop: 4 }}>"Look At This Website"</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>NEW PARADIGM</div>
            <div style={{ color: '#10A37F', fontSize: 22, fontWeight: 800, marginTop: 4 }}>"Let Me Do This For You"</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>DATA SEPARATION</div>
            <div style={{ color: '#38BDF8', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Isolated Sandboxed Context</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 21: ALTMAN STANFORD QUOTE & LIVE VIDEO EVIDENCE ---
const Beat21AltmanStanfordQuote: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 48px', boxSizing: 'border-box' }}>
      <div style={{ width: 1824, height: 864, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 24, padding: '36px 44px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800, letterSpacing: 3, fontFamily: 'monospace' }}>STANFORD UNIVERSITY KEYNOTE ADDRESS // SAM ALTMAN</span>
          </div>
          <div style={{ padding: '6px 14px', borderRadius: 8, backgroundColor: 'rgba(56,189,248,0.15)', color: '#38BDF8', fontSize: 13, fontWeight: 800, border: '1px solid #38BDF8' }}>
            VERIFIED EVIDENCE VIDEO
          </div>
        </div>

        {/* Dual Split: Quote Left, Real Interview Video Right */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, margin: '16px 0', alignItems: 'center' }}>
          
          {/* Left: High-Impact Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#64748B', fontSize: 64, fontFamily: 'serif', lineHeight: 0.5 }}>“</div>
            <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.5, marginTop: 8 }}>
              You don’t need to write prompts anymore.
            </div>
            <div style={{ color: '#38BDF8', fontSize: 26, fontWeight: 700, marginTop: 18, lineHeight: 1.4 }}>
              Prompt engineering was a temporary bridge. Future intelligence deploys swarms.
            </div>

            {/* Audio Waveform visualization */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 24, height: 40 }}>
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: `${12 + Math.abs(Math.sin((frame * 0.2) + (i * 0.4))) * 28}px`,
                    backgroundColor: '#38BDF8',
                    borderRadius: 3,
                  }}
                />
              ))}
              <span style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace', marginLeft: 12 }}>
                VOICE TELEMETRY ACTIVE
              </span>
            </div>
          </div>

          {/* Right: Real Native 16:9 Video Evidence Player */}
          <div style={{ backgroundColor: '#02040A', borderRadius: 18, border: '2px solid rgba(255,255,255,0.2)', overflow: 'hidden', height: 440, position: 'relative', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)' }}>
            <Video
              src={staticFile('evidence_rsi/sam_altman_agents.mp4')}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              muted
            />
            
            {/* Live Camera Badge */}
            <div style={{ position: 'absolute', top: 16, left: 18, backgroundColor: 'rgba(0,0,0,0.75)', padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <span style={{ color: '#FFFFFF', fontSize: 12, fontFamily: 'monospace', fontWeight: 800 }}>LIVE ARCHIVAL TAPE</span>
            </div>

            <div style={{ position: 'absolute', bottom: 16, left: 18, right: 18, backgroundColor: 'rgba(15,23,42,0.85)', padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              <div style={{ color: '#94A3B8', fontSize: 12 }}>TOPIC DISCLOSURE:</div>
              <div style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 700, marginTop: 2 }}>The Era of Autonomous Agent Ecosystems</div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <OpenAILogo size={28} color="#FFFFFF" />
            <span style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 800 }}>SAM ALTMAN // CEO, OPENAI</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 15 }}>NEXT EVOLUTION: <strong style={{ color: '#38BDF8' }}>AUTONOMOUS SUBAGENT SWARMS RUNNING 24/7</strong></span>
        </div>

      </div>
    </div>
  );
};

// --- BEAT 22: MODEL SUNSETTING ---
const Beat22ModelSunsetting: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>OPENAI MODEL SUNSET DIRECTIVE</div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, marginTop: 8 }}>
            THE CLEARING OF THE RUNWAY
          </div>
        </div>

        {/* Sunset Card */}
        <div style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '2px solid rgba(239,68,68,0.4)', borderRadius: 20, padding: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>OFFICIAL RETIREMENT NOTICE</div>
            <div style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 900, marginTop: 8 }}>GPT-5.5 Leaves ChatGPT & Codex</div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 14, maxWidth: 880, lineHeight: 1.5 }}>
              OpenAI issued mandatory migration notices today. All developer workflows pinning GPT-5.5 must transition to GPT-5.6 Sol or GPT-6 Astra before October 14.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#EF4444', fontSize: 64, fontWeight: 900, fontFamily: 'monospace' }}>OCT 14</div>
            <div style={{ color: '#94A3B8', fontSize: 16, textTransform: 'uppercase' }}>DEATH DATE</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#94A3B8', fontSize: 16 }}>DESTINATION TIER: <strong style={{ color: '#10A37F' }}>GPT-6 SOL & LUNA RUNWAY PREPARED</strong></span>
          <span style={{ color: '#EF4444', fontSize: 16, fontWeight: 700 }}>LEGACY ARCHITECTURES DECOMMISSIONED</span>
        </div>
      </div>
    </div>
  );
};
