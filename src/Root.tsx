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

      {/* Channel Reference Exact Thumbnails */}
      {/* 1. Red Border - OpenAI BEST USECASE GPT-6 ASTRA */}
      <Still
        id="Thumbnail-GPT6-Astra"
        component={() => <Thumbnail variant="gpt6_astra_red" />}
        width={1920}
        height={1080}
      />

      {/* 2. Blue Border - OpenAI INTRODUCING GPT-6 'SOL' */}
      <Still
        id="Thumbnail-GPT6-Sol"
        component={() => <Thumbnail variant="gpt6_sol_blue" />}
        width={1920}
        height={1080}
      />

      {/* 3. Blue Border - DeepSeek INTRODUCING DEEPSEEK V4.1 */}
      <Still
        id="Thumbnail-DeepSeek-V4"
        component={() => <Thumbnail variant="deepseek_v4_blue" />}
        width={1920}
        height={1080}
      />

      {/* 4. Blue Border - OpenAI NEW LEAKS ON GPT-6 & FABLE */}
      <Still
        id="Thumbnail-Frontier-Leaks"
        component={() => <Thumbnail variant="frontier_leaks_blue" />}
        width={1920}
        height={1080}
      />
    </>
  );
};
