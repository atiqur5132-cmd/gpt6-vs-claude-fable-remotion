import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { HookVideoMontage } from './scenes/HookVideoMontage';
import { RajathTweetInspection } from './scenes/RajathTweetInspection';
import { LeakSolScene } from './scenes/LeakSolScene';
import { SteamGameRebuildScene } from './scenes/SteamGameRebuildScene';
import { MarioKartAstraScene } from './scenes/MarioKartAstraScene';
import { DeepSeekHarnessScene } from './scenes/DeepSeekHarnessScene';
import { Gemini4SwarmScene } from './scenes/Gemini4SwarmScene';
import { FrontierVerdictFinalScene } from './scenes/FrontierVerdictFinalScene';
import { Atmosphere } from './Atmosphere';

export const LongFormDocumentary: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#070B14' }}>
      {/* 6.01-Minute Full Mastered Audio (Loudnorm -16 LUFS) */}
      <Audio src={staticFile('documentary_voiceover.wav')} />

      {/* Subtle Cinematic Grid Background */}
      <Atmosphere />

      {/* Series Sequence: Exactly 10,812 frames @ 30fps (6.01 Minutes) */}
      <Series>
        {/* ========================================================= */}
        {/* ACT 1: THE SILICON VALLEY PARADOX & THE SLOW-DOWN LIE      */}
        {/* ========================================================= */}
        {/* 1. Cold Open Hook 1: Split Screen Telemetry (0 to 142) */}
        <Series.Sequence durationInFrames={142}>
          <HookVideoMontage clip="mirochill" />
        </Series.Sequence>

        {/* 2. Cold Open Hook 2: GPU Redline & Accelerator (142 to 317) */}
        <Series.Sequence durationInFrames={175}>
          <HookVideoMontage clip="fly_duel" />
        </Series.Sequence>

        {/* 3. Dario Amodei Warning Card (317 to 488) */}
        <Series.Sequence durationInFrames={171}>
          <RajathTweetInspection section="dario" />
        </Series.Sequence>

        {/* 4. Anthropic Opus 5.2 / Fable 5.2 Deploy Telemetry (488 to 687) */}
        <Series.Sequence durationInFrames={199}>
          <HookVideoMontage clip="cheap_models" />
        </Series.Sequence>

        {/* 5. Rajath Gowda Flat Native Tweet (Dario & Opus section) (687 to 1010) */}
        <Series.Sequence durationInFrames={323}>
          <RajathTweetInspection section="dario" />
        </Series.Sequence>

        {/* 6. OpenAI Counter & Astra (1010 to 1224) */}
        <Series.Sequence durationInFrames={214}>
          <RajathTweetInspection section="sam" />
        </Series.Sequence>

        {/* 7. Rajath Gowda Tweet (Sam & Sol/Luna section) (1224 to 1427) */}
        <Series.Sequence durationInFrames={203}>
          <RajathTweetInspection section="sam" />
        </Series.Sequence>

        {/* 8. Elon Musk & Grok 4.7 (1427 to 1626) */}
        <Series.Sequence durationInFrames={199}>
          <RajathTweetInspection section="elon" />
        </Series.Sequence>

        {/* 9. Silicon Valley Redline Speedometer (1626 to 1798) */}
        <Series.Sequence durationInFrames={172}>
          <HookVideoMontage clip="mirochill" />
        </Series.Sequence>

        {/* 10. Software Mutation Radar (1798 to 2052) */}
        <Series.Sequence durationInFrames={254}>
          <HookVideoMontage clip="fly_duel" />
        </Series.Sequence>

        {/* ========================================================= */}
        {/* ACT 2: THE LEAKED WEAPON: MOZAIK-ALPHA-FDM & GPT-6 SOL     */}
        {/* ========================================================= */}
        {/* 11. Secret Checkpoint Mozaik Dossier (2052 to 2255) */}
        <Series.Sequence durationInFrames={203}>
          <LeakSolScene section="mozaik" />
        </Series.Sequence>

        {/* 12. Astra Outer Boundary (2255 to 2431) */}
        <Series.Sequence durationInFrames={176}>
          <LeakSolScene section="mozaik" />
        </Series.Sequence>

        {/* 13. Internal API Leaks Siren (2431 to 2630) */}
        <Series.Sequence durationInFrames={199}>
          <LeakSolScene section="mozaik" />
        </Series.Sequence>

        {/* 14. Leaked Model Tag Sol Card (2630 to 2803) */}
        <Series.Sequence durationInFrames={173}>
          <LeakSolScene section="sol_leak" />
        </Series.Sequence>

        {/* 15. Real Video: GPT-6 Sol Leaks (2803 to 2974) */}
        <Series.Sequence durationInFrames={171}>
          <LeakSolScene section="sol_leak" />
        </Series.Sequence>

        {/* 16. Dual Gauge Latency Benchmark (2974 to 3160) */}
        <Series.Sequence durationInFrames={186}>
          <LeakSolScene section="latency_benchmark" />
        </Series.Sequence>

        {/* 17. Dual Gauge Reasoning Parity (3160 to 3362) */}
        <Series.Sequence durationInFrames={202}>
          <LeakSolScene section="latency_benchmark" />
        </Series.Sequence>

        {/* 18. Sub-Cent Utility Pricing Matrix (3362 to 3515) */}
        <Series.Sequence durationInFrames={153}>
          <LeakSolScene section="pricing_matrix" />
        </Series.Sequence>

        {/* 19. Real Engineering Transition (3515 to 3698) */}
        <Series.Sequence durationInFrames={183}>
          <LeakSolScene section="pricing_matrix" />
        </Series.Sequence>

        {/* ========================================================= */}
        {/* ACT 3: THE GENERATIVE GAUNTLET: VIDEO-TO-GAME & MARIO KART */}
        {/* ========================================================= */}
        {/* 20. noclipepe Tweet Intro (3698 to 3879) */}
        <Series.Sequence durationInFrames={181}>
          <SteamGameRebuildScene section="tweet_intro" />
        </Series.Sequence>

        {/* 21. Steam Game Video In / Playable Out (3879 to 4076) */}
        <Series.Sequence durationInFrames={197}>
          <SteamGameRebuildScene section="video_comparison" />
        </Series.Sequence>

        {/* 22. Zero-Shot Constraint Telemetry (4076 to 4256) */}
        <Series.Sequence durationInFrames={180}>
          <SteamGameRebuildScene section="tweet_intro" />
        </Series.Sequence>

        {/* 23. Rod Bending Physics & Line Tension Video (4256 to 4456) */}
        <Series.Sequence durationInFrames={200}>
          <SteamGameRebuildScene section="video_comparison" />
        </Series.Sequence>

        {/* 24. Underwater Fish Species & Collision Meshes (4456 to 4792) */}
        <Series.Sequence durationInFrames={336}>
          <SteamGameRebuildScene section="physics_deepdive" />
        </Series.Sequence>

        {/* 25. Playable Simulation Out Verdict (4792 to 5164) */}
        <Series.Sequence durationInFrames={372}>
          <SteamGameRebuildScene section="video_comparison" />
        </Series.Sequence>

        {/* 26. Lumina Mario Kart Tweet Reveal (5164 to 5338) */}
        <Series.Sequence durationInFrames={174}>
          <MarioKartAstraScene section="tweet_reveal" />
        </Series.Sequence>

        {/* 27. Mario Kart Fullscreen Video Evidence (5338 to 5708) */}
        <Series.Sequence durationInFrames={370}>
          <MarioKartAstraScene section="video_fullscreen" />
        </Series.Sequence>

        {/* 28. $8.50 Compute vs 6-Month Sprint (5708 to 5938) */}
        <Series.Sequence durationInFrames={230}>
          <MarioKartAstraScene section="economics_breakdown" />
        </Series.Sequence>

        {/* 29. Economics Deep Dive ($8.50 vs $60k) (5938 to 6277) */}
        <Series.Sequence durationInFrames={339}>
          <MarioKartAstraScene section="economics_breakdown" />
        </Series.Sequence>

        {/* 30. Lunch Break Revolution (6277 to 6445) */}
        <Series.Sequence durationInFrames={168}>
          <MarioKartAstraScene section="video_fullscreen" />
        </Series.Sequence>

        {/* ========================================================= */}
        {/* ACT 4: THE $200 TRAP & DEEPSEEK'S OPEN-SOURCE GUILLOTINE  */}
        {/* ========================================================= */}
        {/* 31. The $200 Paywall Trap Intro (6445 to 6621) */}
        <Series.Sequence durationInFrames={176}>
          <DeepSeekHarnessScene section="trap_intro" />
        </Series.Sequence>

        {/* 32. Enterprise Paywall Illusion (6621 to 6967) */}
        <Series.Sequence durationInFrames={346}>
          <DeepSeekHarnessScene section="trap_intro" />
        </Series.Sequence>

        {/* 33. maxt3chno Tweet Inspection (6967 to 7135) */}
        <Series.Sequence durationInFrames={168}>
          <DeepSeekHarnessScene section="budget_shootout" />
        </Series.Sequence>

        {/* 34. Budget Shootout Video Evidence (WebGL Reef) (7135 to 7547) */}
        <Series.Sequence durationInFrames={412}>
          <DeepSeekHarnessScene section="budget_shootout" />
        </Series.Sequence>

        {/* 35. 60fps Shader Hot Reload Telemetry (7547 to 8072) */}
        <Series.Sequence durationInFrames={525}>
          <DeepSeekHarnessScene section="budget_shootout" />
        </Series.Sequence>

        {/* 36. Local Hardware RTX Badge (8072 to 8266) */}
        <Series.Sequence durationInFrames={194}>
          <DeepSeekHarnessScene section="trap_intro" />
        </Series.Sequence>

        {/* 37. DeepSeek-Harness Open Source Launch Video (8266 to 8440) */}
        <Series.Sequence durationInFrames={174}>
          <DeepSeekHarnessScene section="harness_reveal" />
        </Series.Sequence>

        {/* 38. sauda_coder Tweet Card (Zero Lock-in) (8440 to 8644) */}
        <Series.Sequence durationInFrames={204}>
          <DeepSeekHarnessScene section="harness_reveal" />
        </Series.Sequence>

        {/* ========================================================= */}
        {/* ACT 5: GOOGLE'S SILENT AMBUSH & THE OVERNIGHT SWARMS      */}
        {/* ========================================================= */}
        {/* 39. Google Gemini 4 Registry Leak Card (8644 to 8894) */}
        <Series.Sequence durationInFrames={250}>
          <Gemini4SwarmScene section="gemini_leak" />
        </Series.Sequence>

        {/* 40. Antigravity IDE Autonomous Registry (8894 to 9137) */}
        <Series.Sequence durationInFrames={243}>
          <Gemini4SwarmScene section="gemini_leak" />
        </Series.Sequence>

        {/* 41. Compiler Stack Agent Flow (9137 to 9313) */}
        <Series.Sequence durationInFrames={176}>
          <Gemini4SwarmScene section="gemini_leak" />
        </Series.Sequence>

        {/* 42. Sam Altman Quote Reveal Intro (9313 to 9533) */}
        <Series.Sequence durationInFrames={220}>
          <Gemini4SwarmScene section="altman_swarm_quote" />
        </Series.Sequence>

        {/* 43. Full-Screen Video: Sam Altman Agent Swarms (9533 to 9881) */}
        <Series.Sequence durationInFrames={348}>
          <Gemini4SwarmScene section="altman_swarm_quote" />
        </Series.Sequence>

        {/* 44. Ambient Swarm Network Visualizer (9881 to 10194) */}
        <Series.Sequence durationInFrames={313}>
          <Gemini4SwarmScene section="swarm_network_visualizer" />
        </Series.Sequence>

        {/* ========================================================= */}
        {/* ACT 6: THE 2026 FRONTIER VERDICT                          */}
        {/* ========================================================= */}
        {/* 45. 4-Quadrant Battlefield Grid (10194 to 10370) */}
        <Series.Sequence durationInFrames={176}>
          <FrontierVerdictFinalScene />
        </Series.Sequence>

        {/* 46. Ambient Intelligence Cost Curve (10370 to 10528) */}
        <Series.Sequence durationInFrames={158}>
          <FrontierVerdictFinalScene />
        </Series.Sequence>

        {/* 47. Final Kinetic Takeaway & Outro (10528 to 10812) */}
        <Series.Sequence durationInFrames={284}>
          <FrontierVerdictFinalScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
