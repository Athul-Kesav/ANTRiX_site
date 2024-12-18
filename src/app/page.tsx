"use client";


import DYK_Bar from "@/components/DYK_Bar";
import Navbar from "@/components/Navbar";
import HeroImage from "@/images/Hero.jpg";
import moreArrow from "@/svgs/Line9.svg";
import copyright from "@/svgs/Group51.svg";

import Image from "next/image";
import { useEffect } from "react";

import HomeRecentEvents from "@/components/HomeRecentEvents";
import DarkLightToggle from "@/components/DarkLightToggle";

export default function Home() {

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);


  return (
    <>
      <div className="h-screen box-border bg-main p-[45px] relative">
        <div className="absolute top-5 right-0 z-20 rotate-90">
          <DarkLightToggle />
        </div>
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1 relative">
          <div className="grid col-span-2 row-span-5 grid-cols-3">
            {/* First Sidebar (Leftmost) */}
            <div className="col-span-1 flex ">
              <Navbar />
            </div>

            {/* Second Sidebar */}
            <div className="col-span-2  flex justify-center items-center z-0">
              <div className="text-[173px] font-bold font-milker tracking-wide transform -rotate-90 text-center text-accent">
                ANTR{<span className="font-yesevaOne">i</span>}X
              </div>
            </div>
          </div>

          {/* Top Section */}
          <div className="col-span-8 row-span-1 h-full w-full">
            <DYK_Bar />
          </div>

          {/* Middle Sections */}
          <div className="col-span-2 row-span-2  font-suiGeneris text-xl">
            <div className="flex w-full justify-between pb-2 text-accent">
              .recent events
              <button
                type="button"
                className=" bg-accent mx-3 w-fit py-1  justify-between px-7  rounded-lg inline-flex items-center text-main border border-accent hover:text-accent active:bg-[#FF2323] hover:bg-main duration-300 ease-out"
              >
                <a
                  href="/events"
                  className="font-moonRising text-xs transition-all"
                >
                  MORE
                </a>
              </button>
            </div>
            <div className=" h-full w-full flex items-start align-middle overflow-x-hidden shadow-[inset_0_4px_10px_#01162730] rounded-xl border border-accent">
              <div className="w-[3px] bg-accent h-full ml-0"/>
              <HomeRecentEvents />
            </div>
          </div>
          <div className="col-span-6 row-span-3 relative z-2 ml-3">
            <Image
              src={HeroImage}
              alt="Nav Img"
              layout="fill" /* Makes the image fill the parent div */
              objectFit="cover" /* Ensures the image covers the div without distortion */
              objectPosition="center"
              className="rounded-2xl" /* Optional: Add rounded corners or other styles */
            />
          </div>
          <div className="flex-col col-span-2 row-span-1 z-10 items-end">
            <div className="bg-accent h-auto w-full text-main items-center flex justify-center font-montserrat leading-tight rounded-md mt-10 mb-4 text-center text-sm py-2">
              National Institute of Technology
            </div>
            <div className="flex-col align-bottom text-accent">
              <span className="font-moonRising text-2xl ">
                “The cosmos is within us. We are made of star-stuff."
              </span>
              <span className="font-mixedFeelings text-2xl inline-flex">
                ~ Carl Sagan
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-1">
          <Image src={copyright} alt="made w love" width={15} height={15} />
        </div>
      </div>
    </>
  );
}
