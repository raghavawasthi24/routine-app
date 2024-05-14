import React from "react";
import TrackCard from "./track-card";
import Image from "next/image";


export default function Tracks({ tracks,setTrackCompleted,setAllTracksTracked }: any) {
  return (
    <section>
      <div className="flex justify-between items-center p-2">
        <p>Today&apos;s Goal</p>
        <Image src="/assets/heart.gif" width={30} height={30} alt="progress" />
      </div>
      <div className="flex flex-col gap-2">
        {tracks.map((track:any, index:any) => {
          return (
            <TrackCard
              key={index}
              track={track}
              setTrackCompleted={setTrackCompleted}
              setAllTracksTracked={setAllTracksTracked}
            />
          );
        })}
      </div>
    </section>
  );
}
