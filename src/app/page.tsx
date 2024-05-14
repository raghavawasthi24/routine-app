import ProgressBar from "@/components/shared/progress-bar";
import Tracks from "@/components/shared/tracks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-screen bg-[#212121] w-[22rem] p-4 text-white">
      <ProgressBar />
      <Tracks />
    </div>
  );
}
