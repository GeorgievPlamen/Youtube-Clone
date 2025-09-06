import VideosSection from "../section/VideosSection";

const StudioView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Channel content</h1>
        <p className="text-xs text-muted-foreground"></p>
        <VideosSection />
      </div>
    </div>
  );
};
export default StudioView;
