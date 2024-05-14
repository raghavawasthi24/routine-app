"use client"
import Graph from "@/components/shared/graph";
import ProgressBar from "@/components/shared/progress-bar";
import SwipeTrack from "@/components/shared/swipe-track";
import Tracks, { trackList } from "@/components/shared/tracks";
import { useState } from "react";

export default function Home() {
  const data = [
    {
      day: "3/11",
      count: 5,
    },
    {
      day: "3/11",
      count: 5,
    },
    {
      day: "3/11",
      count: 5,
    },
    {
      day: "3/11",
      count: 5,
    },
  ];
   const [goals, setGoals] = useState(
     trackList.map((goal) => ({ ...goal, isChecked: false }))
   );
   const [allGoalsTracked, setAllGoalsTracked] = useState(false);
   const handleTrackAllGoals = () => {
     const allGoalsTracked = goals.map((goal) => ({
       ...goal,
       isChecked: true,
     }));
     setGoals(allGoalsTracked);
     setAllGoalsTracked(true);
   };

   // Function to handle untracking all goals
   const handleUntrackAllGoals = () => {
     const allGoalsUntracked = goals.map((goal) => ({
       ...goal,
       isChecked: false,
     }));
     setGoals(allGoalsUntracked);
     setAllGoalsTracked(false);
   };
  return (
    <div className="flex flex-col gap-4 overflow-auto bg-[#212121] w-[22rem] p-4 text-white">
      <ProgressBar />
      <Tracks />
      <SwipeTrack
        onSwipe={allGoalsTracked ? handleUntrackAllGoals : handleTrackAllGoals}
        allGoalsTracked={allGoalsTracked}
      />
      <Graph data={data} />
    </div>
  );
}
