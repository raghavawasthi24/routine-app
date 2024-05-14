import React from "react";
import TrackCard from "./track-card";
import Image from "next/image";

export const trackList = [
  {
    icon: "/assets/img1.png",
    text: "Workout for 20 mins",
    checked: false,
    color: "#9E4CB8",
  },
  {
    icon: "/assets/img2.png",
    text: "Read book for 15 mins",
    checked: false,
    color: "#D15439",
  },
  {
    icon: "/assets/img3.png",
    text: "30 mins walk",
    checked: false,
    color: "#81B47D",
  },
  {
    icon: "/assets/img4.png",
    text: "Sleep at 11 sharp",
    checked: false,
    color: "#63A7A7",
  },
  {
    icon: "/assets/img5.png",
    text: "Drink 3L water",
    checked: false,
    color: "#5A92CB",
  },
];
export default function Tracks({ setTrackCompleted }: any) {
  return (
    <section>
      <div className="flex justify-between items-center p-2">
        <p>Today&apos;s Goal</p>
        <Image src="/assets/heart.gif" width={30} height={30} alt="progress" />
      </div>
      <div className="flex flex-col gap-2">
        {trackList.map((track, index) => {
          return (
            <TrackCard
              key={index}
              track={track}
              setTrackCompleted={setTrackCompleted}
            />
          );
        })}
      </div>
    </section>
  );
}
