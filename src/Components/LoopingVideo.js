// LoopingVideo.js

import React, { useEffect } from "react";
import VideoPlayer from "react-video-js-player";

const LoopingVideo = () => {
  // Replace 'background-video.mp4' with the actual path to your video file
  const videoSrc = "/Users/oriofir/Downloads/RenderedVideo.mov";

  const videoOptions = {
    autoplay: true,
    loop: true,
    muted: true,
  };

  return (
    <div className="background-video">
      <VideoPlayer src={videoSrc} options={videoOptions} />
    </div>
  );
};

export default LoopingVideo;
