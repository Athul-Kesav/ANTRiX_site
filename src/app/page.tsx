import DYK_Bar from "@/components/DYK_Bar";
import Navbar from "@/components/Navbar";
import HeroImage from "@/images/Hero.jpg";
import moreArrow from "@/svgs/Line9.svg";
import copyright from "@/svgs/Group51.svg";

import Image from "next/image";
import HomeRecentEvents from "@/components/HomeRecentEvents";
import EventHomeCard from "@/components/EventHomeCard";
import DarkLightToggle from "@/components/DarkLightToggle";
import WavyImage from "@/components/WavyImage";

export default function Home() {
  return (
    <>
      <div className="h-screen box-border bg-[#E7F5FF] p-[45px] relative">
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
              <div className="text-[173px] font-bold font-milker tracking-wide transform -rotate-90 text-center text-[#011627]">
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
            <div className="flex w-full justify-between pb-2">
              .recent events
              <button
                type="button"
                className=" bg-[#011627] mx-3 my-1 align-middle px-2 rounded-lg inline-flex items-center text-[#E7F5FF] hover:text-[#FF2323] hover:bg-[#E7F5FF]"
              >
                <a
                  href="/events"
                  className="font-moonRising text-xs transition-all"
                >
                  MORE
                </a>
                <Image
                  src={moreArrow}
                  alt="More Arrow"
                  width={20}
                  height={20}
                  className="mx-1"
                />
              </button>
            </div>
            <div className=" h-full w-full flex items-center align-middle overflow-x-hidden ">
              {/* <EventHomeCard title="asdasf" desc="adfvdsvsf" eventDate={new Date("2024-12-11")}/> */}
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
            <div className="bg-[#011627] h-auto w-full text-white items-center flex justify-center font-montserrat leading-tight rounded-md mt-10 mb-4 text-center text-sm py-2">
              National Institute of Technology
            </div>
            <div className="flex-col align-bottom">
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
