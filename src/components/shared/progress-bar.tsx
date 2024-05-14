"use client";
import Image from "next/image";
import React from "react";

export default function ProgressBar() {
  const [percentage, setPercentage] = React.useState(50);
  return (
    <div className="h-fit flex items-center gap-4 p-2 rounded-xl bg-gradient-to-r from-[#7DA7CE] to-[#0E77D9]">
      <Image
        src="/assets/progress.png"
        width={50}
        height={50}
        alt="progressGoal"
        className="opacity-80"
      />
      <div className="w-full text-white">
        <p className="text-sm font-semibold">Your daily goal almost done</p>
        <p className="text-xs">4 of 5 completed</p>
        <div className="progressbarfull mt-2">
          <div className="progressbar" style={{ width: `${percentage}` }}></div>
        </div>
        <div className="percentage mt-1 ">{percentage}%</div>
      </div>
    </div>
  );
}
