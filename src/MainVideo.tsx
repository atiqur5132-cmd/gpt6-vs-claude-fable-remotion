import React from "react";
import { Audio, Series, staticFile } from "remotion";
import { Scene1Paradox } from "./scenes/Scene1Paradox";
import { Scene2Operator } from "./scenes/Scene2Operator";
import { Scene3Villa } from "./scenes/Scene3Villa";
import { Scene4Porsche } from "./scenes/Scene4Porsche";
import { Scene5Flight } from "./scenes/Scene5Flight";
import { Scene6Robotics } from "./scenes/Scene6Robotics";
import { Scene7InsaneWorkflows } from "./scenes/Scene7InsaneWorkflows";
import { Scene8Verdict } from "./scenes/Scene8Verdict";

export const MainVideo: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#08090D",
        position: "relative",
      }}
    >
      {/* 100% Synced Audio Track */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Video Scene Series */}
      <Series>
        {/* Scene 1: The Benchmark Paradox [0s -> 20s] */}
        <Series.Sequence durationInFrames={600}>
          <Scene1Paradox durationInFrames={600} />
        </Series.Sequence>

        {/* Scene 2: The Agentic Computer Operator [20s -> 53s] */}
        <Series.Sequence durationInFrames={990}>
          <Scene2Operator durationInFrames={990} />
        </Series.Sequence>

        {/* Scene 3: Spatial Test 1 - The Modernist Villa [53s -> 78s] */}
        <Series.Sequence durationInFrames={750}>
          <Scene3Villa durationInFrames={750} />
        </Series.Sequence>

        {/* Scene 4: Spatial Test 2 - Porsche 911 GT3 RS [78s -> 103s] */}
        <Series.Sequence durationInFrames={750}>
          <Scene4Porsche durationInFrames={750} />
        </Series.Sequence>

        {/* Scene 5: Physics & Simulation - Boeing 777 & Planet Collision [103s -> 136s] */}
        <Series.Sequence durationInFrames={990}>
          <Scene5Flight durationInFrames={990} />
        </Series.Sequence>

        {/* Scene 6: Robotics & The Hallucination Abyss [136s -> 170s] */}
        <Series.Sequence durationInFrames={1020}>
          <Scene6Robotics durationInFrames={1020} />
        </Series.Sequence>

        {/* Scene 7: Real-World Workflows - iPad AAA Gaming & 3D Earth [170s -> 198s] */}
        <Series.Sequence durationInFrames={840}>
          <Scene7InsaneWorkflows durationInFrames={840} />
        </Series.Sequence>

        {/* Scene 8: The Verdict [198s -> 212.5s] */}
        <Series.Sequence durationInFrames={434}>
          <Scene8Verdict durationInFrames={434} />
        </Series.Sequence>
      </Series>
    </div>
  );
};
