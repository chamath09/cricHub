"use client";

import React, { useEffect, useState } from "react";

const HeroVideo: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <video
      src="https://videos.pexels.com/video-files/3192198/3192198-sd_640_360_25fps.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    />
  );
};

export default HeroVideo;
