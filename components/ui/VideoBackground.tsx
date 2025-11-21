'use client';

import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

export default function VideoBackground({ src, className = '', ariaLabel }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay prevented:', error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        aria-label={ariaLabel || 'Background video'}
        title={ariaLabel || 'Background video'}
      >
        <source src={src} type="video/mp4" />
        {ariaLabel && <track kind="descriptions" label="Video description" />}
      </video>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
    </div>
  );
}