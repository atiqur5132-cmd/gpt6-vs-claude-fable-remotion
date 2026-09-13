import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { DailyVideo } from "./DailyVideo";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="DailyVideo"
        component={DailyVideo}
        durationInFrames={7329}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Video"
        component={MainVideo}
        durationInFrames={6374}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
