import React from "react";
import { Composition, Still } from "remotion";
import { MainVideo } from "./MainVideo";
import { DailyVideo } from "./DailyVideo";
import { LongFormDocumentary } from "./LongFormDocumentary";
import { GoogleRSIDocumentary } from "./GoogleRSIDocumentary";
import { Gemini4NewsDocumentary } from "./Gemini4NewsDocumentary";
import { Opus55VsGpt6Documentary } from "./Opus55VsGpt6Documentary";
import { Thumbnail } from "./Thumbnail";
import { ThumbnailGemini4News } from "./ThumbnailGemini4News";

export const Root: React.FC = () => {
  return (
    <>
      {/* 7.42-Minute Claude Opus 5.5 vs GPT-6 Astra & Sol Master Documentary (>5-6 Minutes) */}
      <Composition
        id="Opus55VsGpt6Documentary"
        component={Opus55VsGpt6Documentary}
        durationInFrames={13361}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 6.28-Minute Gemini 4 Pro & Stealth AI News Documentary (>6 Minutes) */}
      <Composition
        id="Gemini4NewsDocumentary"
        component={Gemini4NewsDocumentary}
        durationInFrames={11304}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 5.08-Minute Google DeepMind Dream-RSI & AGI Documentary (>5 Minutes) */}
      <Composition
        id="GoogleRSIDocumentary"
        component={GoogleRSIDocumentary}
        durationInFrames={9140}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 6.01-Minute Master AI Documentary (>5 Minutes) */}
      <Composition
        id="LongFormDocumentary"
        component={LongFormDocumentary}
        durationInFrames={10812}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 4.07-Minute Full Documentary Composition */}
      <Composition
        id="DailyVideo"
        component={DailyVideo}
        durationInFrames={7329}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Legacy Video Composition */}
      <Composition
        id="Video"
        component={MainVideo}
        durationInFrames={6374}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Video-Matched Channel Style Thumbnails */}
      {/* 1. Red Border - OpenAI Verified + THE $200 LIE: GPT-6 LEAKED + Real 3D World Video Screen */}
      <Still
        id="Thumbnail-GPT6-Leak-Evidence"
        component={() => <Thumbnail variant="gpt6_leak_evidence" />}
        width={1920}
        height={1080}
      />

      {/* 2. Blue Border - DeepSeek Verified + THE $200 TRAP: CHEAP AI WON. + Real 4-Way WebGL Reef Screen */}
      <Still
        id="Thumbnail-Cheap-AI-Evidence"
        component={() => <Thumbnail variant="cheap_ai_evidence" />}
        width={1920}
        height={1080}
      />

      {/* 3. Pure Channel Style - Red Border + OpenAI Verified + THE $200 LIE: GPT-6 LEAKED */}
      <Still
        id="Thumbnail-Pure-GPT6-Leak"
        component={() => <Thumbnail variant="pure_gpt6_leak" />}
        width={1920}
        height={1080}
      />

      {/* 5. WorldofAI Channel Style - Blue Border + Google Verified + NEW LEAKS ON GEMINI 4 PRO */}
      <Still
        id="Thumbnail-Gemini4-Blue"
        component={() => <ThumbnailGemini4News variant="blue_leaks" />}
        width={1920}
        height={1080}
      />

      {/* 6. WorldofAI Channel Style - Red Border + Google DeepMind + EARLY LEAKS GEMINI 4 PRO */}
      <Still
        id="Thumbnail-Gemini4-Red"
        component={() => <ThumbnailGemini4News variant="red_early" />}
        width={1920}
        height={1080}
      />

      {/* 7. WorldofAI Channel Style - Blue Border + INTRODUCING GEMINI 4 'ARGON' */}
      <Still
        id="Thumbnail-Gemini4-Argon"
        component={() => <ThumbnailGemini4News variant="blue_argon" />}
        width={1920}
        height={1080}
      />
    </>
  );
};
