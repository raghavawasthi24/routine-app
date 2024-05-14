import ProgressBar from "@/components/shared/progress-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-4 h-screen bg-[#212121] w-[22rem] p-4">
      <ProgressBar />
    </div>
  );
}
