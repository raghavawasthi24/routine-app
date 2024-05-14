"use client";
import Image from "next/image";
import React from "react";

type props= {
  trackCompleted: number;
}

export default function ProgressBar({ trackCompleted }:props) {
  var percentage = trackCompleted * 20;
  
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
        <p className="text-xs">{trackCompleted} of 5 completed</p>
        <div className="progressbarfull mt-2">
          <div
            className="progressbar"
            style={{ width: `${trackCompleted*20}%` }}
          ></div>
        </div>
        <div className="percentage mt-1 ">{trackCompleted*20}%</div>
      </div>
    </div>
  );
}
