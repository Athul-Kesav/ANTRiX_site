"use client";

import "./page.css";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import HorizontalScrollCarousel from "@/components/HorizontalScroll";

import spaceImg from "@/images/spaceImg.jpg";
import noise from "@/images/noiseTex.png";
import copyright from "@/svgs/Group51.svg";

export default function page() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls down by the viewport height
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="h-fit bg-[#011627] relative scrollbar-hide">
      <div className="h-screen ">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="col-span-full row-span-4 h-screen w-full  flex breathe-animation relative overflow-clip">
            <Image
              src={noise}
              alt="noise texture"
              className="absolute z-10  mix-blend-difference opacity-75  contrast-125 object-cover h-full w-full"
            />
            <Image
              src={spaceImg}
              alt="space Image"
              className="absolute z-0 object-cover h-full w-full"
            />
            <span className="z-20 absolute bottom-0 right-0 leading-0 tracking-tighter bg-[#e7f5ff] text-[#011627] px-2 effectText rounded-tl-2xl">
              EVENTS
            </span>
            <span className="m-9 z-10 rotate-90 hover:scale-[200%] transition-transform cursor-pointer hover:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#e7f5ff"
                className="size-10 "
                onClick={handleScroll}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </div>
          <div className=" h-screen w-fit fixed pb-[5.6rem] z-[60] m-[45px] ">
            <Navbar />
          </div>
          {/* <div className="col-span-9 row-span-2 h-full w-full bg-black"></div> */}
        </div>
        <div className=" h-screen relative">
          <div className="absolute top-0 left-0 w-[10vw] h-[500vh] bg-gradient-to-r from-[#011627] via-[#e7f5ff15] to-transparent z-50" />
          <HorizontalScrollCarousel />
          <h1 className="text-9xl absolute right-0 text-right uppercase font-milker leading-0 text-[#E7F5FF] h-screen bg-[#011627]">
            More EVENTS Coming Soon
            <div className="absolute bottom-11 right-1 z-[70] bg-[#E7F5FF] p-2 rounded-lg">
              <Image src={copyright} alt="made w love" width={15} height={15} />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
