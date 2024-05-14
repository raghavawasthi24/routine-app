"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomBar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between w-[22rem] p-4 fixed bottom-0 bg-[#242424]">
      <Link
        href="/"
        className="w-fit flex flex-col justify-center items-center gap-2"
      >
        <Image
          src={pathname === "/" ? "/assets/page1c.png" : "/assets/page1.png"}
          width={15}
          height={15}
          alt="home"
        />
        <p
          className={
            pathname === "/" ? "text-[#D15439] text-xs" : "text-white text-xs"
          }
        >
          Page 1
        </p>
      </Link>
      <Link
        href="/page2"
        className="w-fit flex flex-col justify-center items-center gap-2"
      >
        <Image
          src={
            pathname === "/page2" ? "/assets/page2c.png" : "/assets/page2.png"
          }
          width={20}
          height={20}
          alt="home"
        />
        <p
          className={
            pathname === "/page2"
              ? "text-[#D15439] text-xs"
              : "text-white text-xs"
          }
        >
          Page 2
        </p>
      </Link>
      <Link
        href="/page3"
        className="w-fit flex flex-col justify-center items-center gap-2"
      >
        <Image
          src={
            pathname === "/page3" ? "/assets/page3c.png" : "/assets/page3.png"
          }
          width={20}
          height={20}
          alt="home"
        />
        <p
          className={
            pathname === "/page3"
              ? "text-[#D15439] text-xs"
              : "text-white text-xs"
          }
        >
          Page 3
        </p>
      </Link>
      <Link
        href="/page4"
        className="w-fit flex flex-col justify-center items-center gap-2"
      >
        <Image
          src={
            pathname === "/page4" ? "/assets/page4c.png" : "/assets/page4.png"
          }
          width={20}
          height={20}
          alt="home"
        />
        <p
          className={
            pathname === "/page4"
              ? "text-[#D15439] text-xs"
              : "text-white text-xs"
          }
        >
          Page 4
        </p>
      </Link>
    </div>
  );
}
