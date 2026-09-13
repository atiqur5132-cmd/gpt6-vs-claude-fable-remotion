import React from "react";
import { Composition, Still } from "remotion";
import { MainVideo } from "./MainVideo";
import { DailyVideo } from "./DailyVideo";
import { Thumbnail } from "./Thumbnail";

export const Root: React.FC = () => {
  return (
    <>
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

      {/* 4. Pure Channel Style - Blue Border + OpenAI Verified + THE FRONTIER LIE: THE $200 TRAP */}
      <Still
        id="Thumbnail-Pure-Frontier-Trap"
        component={() => <Thumbnail variant="pure_the_200_trap" />}
        width={1920}
        height={1080}
      />
    </>
  );
};
