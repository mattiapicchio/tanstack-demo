import { OctocatIcon } from "../icons/OctocatIcon";

function FullscreenLoader() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center">
        <OctocatIcon className="h-12 w-12 animate-spin" />
      </div>
    </div>
  );
}

export default FullscreenLoader;
