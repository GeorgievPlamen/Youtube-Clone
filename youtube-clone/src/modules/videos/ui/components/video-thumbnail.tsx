import { formatDuration } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title: string;
  duration: number;
  imageUrl?: string;
  previewUrl?: string;
}

const VideoThumbnail = ({ title, duration, imageUrl, previewUrl }: Props) => {
  return (
    <div className="relative group">
      <div className="relativge w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className="h-full w-full object-cover group-hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className="h-full w-full object-cover group-hover:opacity-100 opacity-0"
        />
      </div>
      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-wihte text-xs font-medium">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
export default VideoThumbnail;
