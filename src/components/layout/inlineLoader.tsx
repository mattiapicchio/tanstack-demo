import { OctocatIcon } from "../icons/OctocatIcon";

function InlineLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
        <OctocatIcon className="h-6 w-6 animate-spin" />
      </div>
    </div>
  );
}

export default InlineLoader;
