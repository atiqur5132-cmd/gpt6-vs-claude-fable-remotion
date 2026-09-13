import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { HookVideoMontage } from './scenes/HookVideoMontage';
import { RajathTweetInspection } from './scenes/RajathTweetInspection';
import { CleanTweetScreen } from './CleanTweetScreen';
import { FlatVideoEvidence } from './FlatVideoEvidence';
import { SubscriptionTrapScene } from './scenes/SubscriptionTrapScene';
import { GrandVerdictScene } from './scenes/GrandVerdictScene';

export const DailyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
      {/* 4.07-Minute Studio Mastered Voiceover Audio */}
      <Audio src={staticFile('daily_voiceover.wav')} />

      {/* Frame-Accurate Series Sequencer (Total: 7,329 frames @ 30fps = 244.3s) */}
      <Series>
        {/* Beat 1a: COLD OPEN HOOK 1 - Full-Screen Real 1080p Video: GPT-6 3D City (0 to 140 | 0.0s - 4.67s) */}
        {/* Spoken Voice: "Right now, the most powerful AI labs on Earth are publicly begging the world to slow down..." */}
        <Series.Sequence durationInFrames={140}>
          <HookVideoMontage clip="mirochill" />
        </Series.Sequence>

        {/* Beat 1b: COLD OPEN HOOK 2 - Full-Screen Real Video: Recursive Fly Duel (140 to 260 | 4.67s - 8.67s) */}
        {/* Spoken Voice: "...while secretly flooring the accelerator through the floorboards." */}
        <Series.Sequence durationInFrames={120}>
          <HookVideoMontage clip="fly_duel" />
        </Series.Sequence>

        {/* Beat 2: COLD OPEN HOOK 3 - Full-Screen Real Video: 4-Way Budget Shootout 60 FPS (260 to 450 | 8.67s - 15.0s) */}
        {/* Spoken Voice: "Over the weekend, Anthropic CEO Dario Amodei went on record warning that Frontier AI is advancing too dangerously fast..." */}
        <Series.Sequence durationInFrames={190}>
          <HookVideoMontage clip="cheap_models" />
        </Series.Sequence>

        {/* Beat 3: Act 1 Evidence - Rajath Gowda Clean Desktop Tweet: Dario & Opus 5.2 (450 to 657 | 15.0s - 21.9s) */}
        {/* Spoken Voice: "Almost immediately after, Anthropic pushed Opus 5.2 and Fable 5.2 directly..." */}
        <Series.Sequence durationInFrames={207}>
          <RajathTweetInspection section="dario" />
        </Series.Sequence>

        {/* Beat 4: Act 1 Evidence - Rajath Gowda Clean Desktop Tweet: Sam & GPT-6 Astra/Sol/Luna (657 to 1045 | 21.9s - 34.8s) */}
        <Series.Sequence durationInFrames={388}>
          <RajathTweetInspection section="sam" />
        </Series.Sequence>

        {/* Beat 5: Act 1 Evidence - Rajath Gowda Clean Desktop Tweet: Elon & xAI Grok 4.7 (1045 to 1411 | 34.8s - 47.0s) */}
        <Series.Sequence durationInFrames={366}>
          <RajathTweetInspection section="elon" />
        </Series.Sequence>

        {/* Beat 6: Act 2 Evidence - Mirochill Clean Desktop Tweet Card (1411 to 1949 | 47.0s - 65.0s) */}
        {/* Uncropped, full avatar, handle, text, engagement metrics, NO sidebar clutter */}
        <Series.Sequence durationInFrames={538}>
          <CleanTweetScreen
            imagePath="daily_evidence/mirochill_clean_card.png"
            author="Mirochill"
            handle="@mirochill"
            sourceUrl="x.com/mirochill/status/2098857024037552522"
            badgeText="GPT-6 ASTRA ONE-SHOT ENGINE"
            maxScrollPx={80}
          />
        </Series.Sequence>

        {/* Beat 7: Act 2 Video Playback - FULL SCREEN 1080p Uncropped Video: Mirochill 3D City (1949 to 2464 | 65.0s - 82.1s) */}
        <Series.Sequence durationInFrames={515}>
          <FlatVideoEvidence
            videoPath="daily_evidence/mirochill_demo.mp4"
            sourceUrl="x.com/mirochill"
            title="GPT-6 PRO: 50-MINUTE PROCEDURAL OPEN WORLD WALKTHROUGH"
            telemetryLabel="1080P UNCUT DEMO"
          />
        </Series.Sequence>

        {/* Beat 8: Act 3 Evidence - Zentrix & Mahdi Clean Desktop Tweet Card (2464 to 3010 | 82.1s - 100.3s) */}
        <Series.Sequence durationInFrames={546}>
          <CleanTweetScreen
            imagePath="daily_evidence/zentrix_clean_card.png"
            author="Zentrix"
            handle="@ZentrixHQ"
            sourceUrl="x.com/ZentrixHQ/status/2099124283209347249"
            badgeText="RECURSIVE SIMULATION BENCHMARK"
            maxScrollPx={70}
          />
        </Series.Sequence>

        {/* Beat 9: Act 3 Video Playback - FULL SCREEN Uncropped Video: Recursive Fly Duel (3010 to 3563 | 100.3s - 118.8s) */}
        <Series.Sequence durationInFrames={553}>
          <FlatVideoEvidence
            videoPath="daily_evidence/fly_duel_demo.mp4"
            sourceUrl="x.com/MahdiSPHP"
            title="RECURSIVE AI: AGENT TEACHES STUDENT FLY LIVE"
            telemetryLabel="PHYSICS ARENA PLAYBACK"
          />
        </Series.Sequence>

        {/* Beat 10: Act 4 Analysis - The $200 Subscription Trap (3563 to 4350 | 118.8s - 145.0s) */}
        <Series.Sequence durationInFrames={787}>
          <SubscriptionTrapScene />
        </Series.Sequence>

        {/* Beat 11: Act 4 Evidence - Max Clean Desktop Tweet Card (4350 to 5101 | 145.0s - 170.0s) */}
        <Series.Sequence durationInFrames={751}>
          <CleanTweetScreen
            imagePath="daily_evidence/max_clean_card.png"
            author="Max"
            handle="@maxt3chno"
            sourceUrl="x.com/maxt3chno/status/2099090324098253268"
            badgeText="BUDGET TIER HEAD-TO-HEAD"
            maxScrollPx={160}
          />
        </Series.Sequence>

        {/* Beat 12: Act 4 Video Playback - FULL SCREEN Uncropped Video: 4-Way 60 FPS WebGL Reef (5101 to 6167 | 170.0s - 205.6s) */}
        <Series.Sequence durationInFrames={1066}>
          <FlatVideoEvidence
            videoPath="daily_evidence/max_cheap_models.mp4"
            sourceUrl="x.com/maxt3chno"
            title="DEEPSEEK V4.1 FLASH & GEMINI 3.8: 60FPS WEBGL REEF"
            telemetryLabel="2-SECOND HOT-RELOAD"
          />
        </Series.Sequence>

        {/* Beat 13: Act 5 Conclusion - The Grand Verdict: The Death of the Closed Moat (6167 to 7329 | 205.6s - 244.3s) */}
        <Series.Sequence durationInFrames={1162}>
          <GrandVerdictScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
