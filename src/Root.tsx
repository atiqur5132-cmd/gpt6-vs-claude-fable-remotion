import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const Root: React.FC = () => {
  return (
    <>
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
