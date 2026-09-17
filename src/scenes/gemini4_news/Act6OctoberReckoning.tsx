import React from 'react';
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from 'remotion';
import { RealTweetEvidence } from '../../components/RealTweetEvidence';
import { GoogleGeminiLogo, OpenAILogo, AnthropicLogo } from '../../RealLogos';
import {
  Flame,
  Cpu,
  DollarSign,
  TrendingDown,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  CheckCircle2,
  Bell,
  Radio,
} from 'lucide-react';

export const Act6OctoberReckoning: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#05070E' }}>
      <Series>
        {/* Micro-beat 23: 0-162 (5.4s) -> Meta Watermelon Leak Intro */}
        <Series.Sequence durationInFrames={162}>
          <Beat23MetaWatermelonIntro />
        </Series.Sequence>

        {/* Micro-beat 24: 162-390 (7.6s) -> EVIDENCE TWEET 6: @apikey_official Meta Watermelon */}
        <Series.Sequence durationInFrames={228}>
          <RealTweetEvidence
            imageFile="meta_watermelon_tweet.png"
            authorName="API Key Official"
            handle="apikey_official"
            categoryTag="INTERNAL ROADMAP LEAK"
            highlightText="Meta's next AI model just leaked. Codename: Watermelon — not 'Spark 2'. Internal docs reportedly target an October release"
            statValue="WATERMELON"
            statLabel="OCTOBER FLAGSHIP"
            keyInsight="Meta bypassing Spark 2 naming, targeting direct competition with Astra and Fable."
          />
        </Series.Sequence>

        {/* Micro-beat 25: 390-1091 (23.4s) -> DeepSeek 21% Price Crash */}
        <Series.Sequence durationInFrames={701}>
          <Beat25DeepSeekPriceCrash />
        </Series.Sequence>

        {/* Micro-beat 26: 1091-1640 (18.3s) -> TPU v6e Ironwood Compute Moat */}
        <Series.Sequence durationInFrames={549}>
          <Beat26TpuIronwoodMoat />
        </Series.Sequence>

        {/* Micro-beat 27: 1640-2413 (25.8s) -> The 2026 Asymmetrical Verdict & Outro */}
        <Series.Sequence durationInFrames={773}>
          <Beat27AsymmetricalVerdict />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// --- BEAT 23: META WATERMELON INTRO ---
const Beat23MetaWatermelonIntro: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(236,72,153,0.3)', borderRadius: 24, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(236,72,153,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: '#EC4899', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>META AI LEAKED ROADMAP</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'monospace' }}>TARGET: OCTOBER 2026</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1.2 }}>
            <div style={{ color: '#EC4899', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>INTERNAL CODENAME DISCLOSURE</div>
            <div style={{ color: '#FFFFFF', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
              PROJECT WATERMELON <br />
              <span style={{ color: '#EC4899' }}>NOT SPARK 2</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 20, marginTop: 20, lineHeight: 1.5, maxWidth: 840 }}>
              Meta internal documents reveal an aggressive timeline to follow up Muse Spark 1.3 with a massive multimodal architecture aimed directly at OpenAI's Astra tier.
            </p>
          </div>

          <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 320, height: 320, borderRadius: 32, backgroundColor: 'rgba(236,72,153,0.1)', border: '2px solid #EC4899', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ fontSize: 64 }}>🍉</div>
              <div style={{ color: '#F472B6', fontWeight: 900, fontSize: 22, letterSpacing: 2 }}>WATERMELON</div>
              <div style={{ color: '#CBD5E1', fontFamily: 'monospace', fontSize: 14 }}>OCTOBER ROLLOUT</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>PRIOR BASELINE</div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Muse Spark 1.3</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>TARGET AUDIENCE</div>
            <div style={{ color: '#EC4899', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Frontier Visual & Reasoning</div>
          </div>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.6)', padding: 20, borderRadius: 14 }}>
            <div style={{ color: '#64748B', fontSize: 13 }}>STRATEGY</div>
            <div style={{ color: '#38BDF8', fontSize: 22, fontWeight: 800, marginTop: 4 }}>Subsidized Open Weights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 25: DEEPSEEK PRICE CRASH ---
const Beat25DeepSeekPriceCrash: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>OPEN-SOURCE PRICE WAR</div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, marginTop: 8 }}>
            DEEPSEEK'S 21% PRICE GUILLOTINE
          </div>
        </div>

        {/* Price drop display */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, margin: '24px 0' }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.8)', padding: 36, borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: '#64748B', fontSize: 15, textTransform: 'uppercase' }}>OPENROUTER REPRICING TODAY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 16 }}>
              <span style={{ color: '#EF4444', fontSize: 44, fontWeight: 800, textDecoration: 'line-through' }}>$0.088/M</span>
              <span style={{ color: '#22C55E', fontSize: 72, fontWeight: 900, fontFamily: 'monospace' }}>$0.070/M</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 18, marginTop: 16, lineHeight: 1.6 }}>
              DeepSeek cut V4.1 Flash pricing by another 21% today. Western enterprise subscriptions of $200/month face immediate economic obsolescence.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(34,197,94,0.1)', padding: 36, borderRadius: 20, border: '2px solid #22C55E', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ color: '#22C55E', fontSize: 64, fontWeight: 900, fontFamily: 'monospace' }}>98%</div>
            <div style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 800, marginTop: 8 }}>CHEAPER WORKLOADS</div>
            <div style={{ color: '#86EFAC', fontSize: 15, marginTop: 4, textAlign: 'center' }}>Jev + DeepSeek Router Hybrid</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#94A3B8', fontSize: 16 }}>ROUTER STRATEGY: <strong>Expensive models as planners, sub-cent open weights as executors.</strong></span>
          <span style={{ color: '#22C55E', fontSize: 16, fontWeight: 700 }}>HYBRID EFFICIENCY MAXIMIZED</span>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 26: TPU V6E IRONWOOD MOAT ---
const Beat26TpuIronwoodMoat: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(96,165,250,0.4)', borderRadius: 24, padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 60px -15px rgba(96,165,250,0.2)' }}>
        <div>
          <div style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>HARDWARE INFRASTRUCTURE MOAT</div>
          <div style={{ color: '#FFFFFF', fontSize: 52, fontWeight: 900, marginTop: 8 }}>
            GOOGLE TPU v6e "IRONWOOD"
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, margin: '24px 0' }}>
          <div style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 28 }}>
            <Cpu size={36} color="#38BDF8" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Massive Pod Density</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>
              Tens of thousands of TPU v6e accelerators operating in continuous liquid-cooled optical matrix meshes.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 28 }}>
            <DollarSign size={36} color="#22C55E" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Cost Absorption</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>
              Google can absorb massive consumer inference costs on Gemini 4 Pro while competitors pay GPU premiums.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', padding: 28 }}>
            <Zap size={36} color="#F59E0B" />
            <div style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 800, marginTop: 16 }}>Near-Zero Latency</div>
            <p style={{ color: '#94A3B8', fontSize: 16, marginTop: 12, lineHeight: 1.5 }}>
              High-bandwidth inter-chip interconnects deliver frontier reasoning speeds without queue timeouts.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          <span style={{ color: '#94A3B8', fontSize: 16 }}>TELEMETRY: <strong>GOOGLE CUSTOM SILICON PROVIDES UNRIVALED MARGIN DEFENSE</strong></span>
          <span style={{ color: '#38BDF8', fontSize: 16, fontWeight: 800 }}>IRONWOOD PODS ONLINE</span>
        </div>
      </div>
    </div>
  );
};

// --- BEAT 27: ASYMMETRICAL VERDICT ---
const Beat27AsymmetricalVerdict: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 60px', boxSizing: 'border-box' }}>
      <div style={{ width: 1760, height: 820, backgroundColor: '#070B14', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 24, padding: '56px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
        <div>
          <div style={{ color: '#38BDF8', fontSize: 18, fontWeight: 800, letterSpacing: 4 }}>THE 2026 FRONTIER VERDICT</div>
          <div style={{ color: '#FFFFFF', fontSize: 64, fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            THE ASYMMETRICAL AVALANCHE
          </div>
          <p style={{ color: '#94A3B8', fontSize: 24, marginTop: 20, maxWidth: 1100, margin: '20px auto 0', lineHeight: 1.5 }}>
            Between Google's stealth Gemini 4 Pro, the ghost model Union Alpha, and OpenAI's autonomous commercial agents... the battle for superintelligence is happening right now in the wild.
          </p>
        </div>

        {/* 4 Brand Logos Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 64, margin: '32px 0' }}>
          <GoogleGeminiLogo size={64} />
          <OpenAILogo size={64} color="#10A37F" />
          <AnthropicLogo size={64} color="#D97706" />
        </div>

        {/* Channel Outro Action */}
        <div style={{ backgroundColor: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 16, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 800 }}>SUBSCRIBE FOR DAILY BREAKTHROUGH AI FORENSICS</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Bell size={22} color="#38BDF8" />
            <span style={{ color: '#38BDF8', fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>TURN NOTIFICATIONS ON</span>
          </div>
        </div>
      </div>
    </div>
  );
};
