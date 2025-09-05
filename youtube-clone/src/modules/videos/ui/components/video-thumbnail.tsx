import Image from "next/image";

interface Props {
  imageUrl?: string;
}

const VideoThumbnail = ({ imageUrl }: Props) => {
  return (
    <div className="relative">
      <div className="relativge w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/* TODO: Video Duration*/}
    </div>
  );
};
export default VideoThumbnail;
