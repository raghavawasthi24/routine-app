import React from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";

export default function TrackCard({ track, setTrackCompleted }: any) {
  const check = (e: any) => {
    console.log("cahbjh");
    if(e){
      setTrackCompleted((prev: any) => {
        return prev + 1;
      });
    }
    else{
      setTrackCompleted((prev: any) => {
        return prev - 1;
      });
    }
  };
  return (
    <div className="flex items-center justify-between bg-[#282828] p-3 rounded-sm">
      <div className="flex items-center gap-2">
        <Image src={track.icon} width={30} height={30} alt="icon" />
        <p className="text-sm">{track.text}</p>
      </div>
      <Checkbox
        className={`w-8 h-8 rounded-lg text-white`}
        style={{ backgroundColor: track.color }}
        onCheckedChange={(e) => check(e)}
      />
    </div>
  );
}
