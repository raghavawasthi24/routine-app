import React, { Dispatch, SetStateAction } from "react";
import TrackCard from "./track-card";
import Image from "next/image";

type props = {
  tracks: any;
  setTrackCompleted: Dispatch<SetStateAction<number>>;
  setAllTracksTracked: Dispatch<SetStateAction<boolean>>;
};

export default function Tracks({ tracks,setTrackCompleted,setAllTracksTracked }: props) {
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
