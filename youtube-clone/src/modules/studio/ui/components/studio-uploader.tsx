import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";

interface Props {
  endpoint?: string | null;
  onSuccess: () => void;
}

const StudioUploader = ({ onSuccess, endpoint }: Props) => {
  return (
    <div>
      <MuxUploader endpoint={endpoint} />
    </div>
  );
};
export default StudioUploader;

