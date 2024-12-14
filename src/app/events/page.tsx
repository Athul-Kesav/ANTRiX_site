"use client";

import EventHomeCard from "@/components/EventHomeCard";
import HomeRecentEvents from "@/components/HomeRecentEvents";
import Navbar from "@/components/Navbar";

import "./page.css";
import { Main } from "next/document";
import MainEventBar from "@/components/MainEventBar";

function page() {
  return (
    <div className="h-full bg-[#E7F5FF] relative">
      <div className="h-screen p-[45px]">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className=" col-span-1 flex">
            {/* First Sidebar (Leftmost) */}
            <div className=" h-screen fixed pb-[5.6rem]">
              <Navbar />
            </div>
          </div>
          <div className="col-span-9 row-span-4 h-full w-full bg-[#011627] flex items-center justify-center rounded-lg breathe-animation">
            <span>EVENTS</span>
          </div>
          {/* <div className="col-span-9 row-span-2 h-full w-full bg-black"></div> */}
        </div>
        <div className=" h-screen  bg-[#E7F5FF] pl-36 pb-12">
        <HorizontalScrollCarousel />
        </div>
      </div>
    </div>
  );
}

export default page;

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
          <div className="w-52 h-52 bg-neutral-500"></div>
        </motion.div>
      </div>
    </section>
  );
};


