"use client";
import BottomBar from "@/components/shared/bottom-bar";
import Graph from "@/components/shared/graph";
import ProgressBar from "@/components/shared/progress-bar";
import SwipeTrack from "@/components/shared/swipe-track";
import Tracks, { trackList } from "@/components/shared/tracks";
import { set } from "date-fns";
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
  const [tracks, setTracks] = useState(
    trackList.map((track) => ({ ...track, isChecked: false }))
  );
  const [allTracksTracked, setAllTracksTracked] = useState(false);
  const handleTrackAllTracks = () => {
    const allTracksTracked = tracks.map((goal) => ({
      ...goal,
      checked: true,
    }));
    setTracks(allTracksTracked);
    setAllTracksTracked(true);
    setTrackCompleted(5);
  };

  // Function to handle untracking all Tracks
  const handleUntrackAllTracks = () => {
    const allTracksUntracked = tracks.map((goal) => ({
      ...goal,
      checked: false,
    }));
    setTracks(allTracksUntracked);
    setAllTracksTracked(false);
    setTrackCompleted(0);
  };

  const [trackCompleted, setTrackCompleted] = useState(0);
  return (
    <div className="flex flex-col gap-4 overflow-auto bg-[#212121] w-[22rem] p-4 text-white mb-[77px]">
      <ProgressBar trackCompleted={trackCompleted} />
      <Tracks setTrackCompleted={setTrackCompleted} tracks={tracks}/>
      <SwipeTrack
        onSwipe={allTracksTracked ? handleUntrackAllTracks : handleTrackAllTracks}
        allTracksTracked={allTracksTracked}
      />
      <Graph />
    </div>
  );
}
