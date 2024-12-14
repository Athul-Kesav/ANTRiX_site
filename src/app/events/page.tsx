"use client";

import EventHomeCard from "@/components/EventHomeCard";
import HomeRecentEvents from "@/components/HomeRecentEvents";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
      <div className="h-full bg-[#E7F5FF] p-[45px]">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="grid col-span-2 row-span-5 grid-cols-3">
            {/* First Sidebar (Leftmost) */}
            <div className="col-span-1  h-screen fixed pb-24">
              <Navbar />
            </div>
          </div>
          <div className="col-span-8 row-span-1 h-full w-full">
            <div className="h-full w-full p-2 flex flex-col overflow-y-auto scrollbar-hide">
              <HomeRecentEvents />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
