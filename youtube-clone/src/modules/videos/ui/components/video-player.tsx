"use client";

import MuxPlayer from "@mux/mux-player-react";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface Props {
  playbackId?: string | null;
  thumbnailUrl?: string | null;
  autoPlay?: boolean;
  onPlay?: () => void;
}

const VideoPlayer = ({ autoPlay, playbackId, thumbnailUrl, onPlay }: Props) => {
  if (!playbackId) return null;

  return (
    <MuxPlayer
      playbackId={playbackId}
      poster={thumbnailUrl ?? THUMBNAIL_FALLBACK}
      playerInitTime={0}
      autoPlay={autoPlay}
      thumbnailTime={0}
      className="w-full h-full object-contain"
      accentColor="#FF2056"
      onPlay={onPlay}
    />
  );
};
export default VideoPlayer;
