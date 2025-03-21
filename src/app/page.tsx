"use client";

import DYK_Bar from "@/components/DYK_Bar";
import Navbar from "@/components/Navbar";
import HeroImage from "@/images/Hero.jpg";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

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
      <div className="h-screen box-border bg-main p-[45px] relative hidden lg:flex">
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
            <div className="hidden lg:col-span-2  lg:flex justify-center items-center z-0 ">
              <div
                className="text-[173px] font-bold font-milker tracking-wide transform -rotate-90 text-center text-accent"
                style={{
                  fontSize: "clamp(2rem, 10.5vw, 12rem)", // Minimum 2rem, scales up to 10rem
                  lineHeight: "clamp(3rem, 8.5vw, 9rem)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
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
                <Link
                  href="/events"
                  className="font-moonRising text-xs transition-all"
                >
                  MORE
                </Link>
              </button>
            </div>
            <div className=" h-full w-full flex items-start align-middle overflow-x-hidden shadow-[inset_0_4px_10px_#01162730] rounded-e-xl">
              <div className="w-[3px] bg-accent h-full ml-0" />
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
              className={`rounded-2xl  brightness-75 contrast-125`} /* Optional: Add rounded corners or other styles */
            />
          </div>
          <div className="flex-col col-span-2 row-span-1 z-10 items-end">
            <div className="bg-accent h-auto w-full text-main items-center flex justify-center font-montserrat leading-tight rounded-md mt-10 mb-4 text-center text-sm py-2">
              National Institute of Technology
            </div>
            <div className="flex-col align-bottom text-accent items-center flex justify-center font-montserrat leading-tight rounded-md text-center text-sm py-2">
              <span className="font-moonRising text-[1.5rem] inline-flex"
              >
                &quot;The cosmos is within us. We are made of star-stuff.&quot;
              </span>
              <span className="font-mixedFeelings text-2xl inline-flex">
                ~ Carl Sagan
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-0 transform origin-left">
          <span className="font-jupiteroid text-lg text-accent p-3">
            Made with ❤️ by Team Antrix
          </span>
        </div>
      </div>
      <div className="h-screen w-screen flex-col items-center justify-center bg-main p-[45px] flex lg:hidden">
          <h1 className="font-montserrat text-xl sm:text-2xl md:text-3xl text-accent">
                The mobile version of the site is still under development.<br/>
                Please visit the site on a desktop for the best experience.
          </h1>
      </div>
    </>
  );
}
