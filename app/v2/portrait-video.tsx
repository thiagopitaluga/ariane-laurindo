"use client";

import { useRef, useState } from "react";

export function PortraitVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => setIsPlaying(false));
  };

  return (
    <div className="v2-portrait-video">
      <video
        ref={videoRef}
        controls={isPlaying}
        playsInline
        preload="metadata"
        poster="/images/video-ariane-poster.jpg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/videos/ariane-mensagem-mobile.mp4" type="video/mp4" />
        Seu navegador não oferece suporte à reprodução deste vídeo.
      </video>
      {!isPlaying ? (
        <button type="button" className="v2-video-play" onClick={playVideo} aria-label="Assistir à apresentação de Ariane Laurindo">
          <span aria-hidden="true">▶</span>
        </button>
      ) : null}
      <span className="v2-video-signature">Ariane Laurindo</span>
    </div>
  );
}
