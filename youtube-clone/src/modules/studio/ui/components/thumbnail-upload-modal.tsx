import ResponsiveDialog from "@/components/responsive-dialog";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface Props {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ThumbnailUploadModal = ({ videoId, open, onOpenChange }: Props) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    onOpenChange(false);
    utils.studio.getOne.invalidate({ id: videoId });
  };
  return (
    <ResponsiveDialog
      title="Upload a thumbnail"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint={"thumbnailUploader"}
        input={{ videoId }}
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveDialog>
  );
};
export default ThumbnailUploadModal;
