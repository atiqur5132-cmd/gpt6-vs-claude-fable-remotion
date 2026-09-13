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

      {/* High-CTR Channel Thumbnail Option 1: The Frontier Hypocrisy */}
      <Still
        id="ThumbnailOption1"
        component={() => <Thumbnail variant="hypocrisy" />}
        width={1920}
        height={1080}
      />

      {/* High-CTR Channel Thumbnail Option 2: The Cheap Tier Shootout */}
      <Still
        id="ThumbnailOption2"
        component={() => <Thumbnail variant="shootout" />}
        width={1920}
        height={1080}
      />

      {/* High-CTR Channel Thumbnail Option 3: The Leak / Real World */}
      <Still
        id="ThumbnailOption3"
        component={() => <Thumbnail variant="leak" />}
        width={1920}
        height={1080}
      />
    </>
  );
};
