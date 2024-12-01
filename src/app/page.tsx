import DYK_Bar from "./components/DYK_Bar";
import Navbar from "./components/Navbar";
import HeroImage from "./images/Hero.jpg";
import moreArrow from "./svgs/Line9.svg";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[#E7F5FF] p-[45px]">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="grid col-span-2 row-span-5 grid-cols-3">
            {/* First Sidebar (Leftmost) */}
            <div className="col-span-1   flex ">
              <Navbar />
            </div>

            {/* Second Sidebar */}
            <div className="col-span-2  flex justify-center items-center z-0">
              <div className="text-[155px] font-bold font-milker tracking-wide transform -rotate-90 text-center text-[#011627]">
                ANTR<span className="font-yesevaOne">i</span>X
              </div>
            </div>
          </div>

          {/* Top Section */}
          <div className="col-span-8 row-span-1 h-full w-full">
            <DYK_Bar />
          </div>

          {/* Middle Sections */}
          <div className="col-span-3 row-span-2  font-suiGeneris text-2xl">
            <div className="flex w-full justify-between">

            .recent events
            <button type="button" className=" bg-[#011627] mx-3 my-1 align-middle px-2 rounded-lg inline-flex items-center text-[#E7F5FF] hover:text-[#FF2323] hover:bg-[#E7F5FF]">
              <a href="/events" className="font-moonRising text-xs  ">MORE</a>
              <Image src={moreArrow} alt="More Arrow" width={20} height={20} className="mx-1"/>
            </button>
            </div>
          </div>
          <div className="col-span-5 row-span-2 bg-white  relative">
            <Image
              src={HeroImage}
              alt="Nav Img"
              layout="fill" /* Makes the image fill the parent div */
              objectFit="cover" /* Ensures the image covers the div without distortion */
              objectPosition="center"
              className="rounded-lg" /* Optional: Add rounded corners or other styles */
            />
          </div>
          <div className="col-span-8 row-span-1 bg-white ">
            Middle Left Bottom
          </div>
        </div>
      </div>
    </>
  );
}
