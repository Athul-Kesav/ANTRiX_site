"use client";

import "./page.css";
import Image, { StaticImageData } from "next/image";

import Navbar from "@/components/Navbar";
import HorizontalScrollCarousel from "@/components/HorizontalScroll";

import spaceImg from "@/images/spaceImg.jpg";

import { useEffect, useState } from "react";
import axios from "axios";
import MagnetMotion from "@/components/MagnetMotion";
import DarkLightToggle from "@/components/DarkLightToggle";

interface eventCard {
  eventId: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  eventDate: Date;
}

function EventPage() {
  const [items, setItems] = useState<eventCard[]>([]); // State to store the fetched items

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/eventDetails"); // Replace with your actual backend API
        setItems(response.data); // Assuming the backend returns an array of objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls down by the viewport height
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
    <div className="h-fit relative scrollbar-hide hidden lg:block">
      <div className="absolute top-5 right-0 z-20 rotate-90">
        <DarkLightToggle />
      </div>
      <div className="h-screen ">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="col-span-full row-span-4 h-screen w-full bg-main flex breathe-animation relative overflow-clip">
            <Image
              src={spaceImg}
              alt="space Image"
              className="absolute z-0 object-cover h-full w-full mix-blend-difference"
            />
            <span className="z-20 absolute bottom-0 right-0 leading-0 tracking-tighter bg-main text-[#011627] px-16 effectText rounded-tl-2xl">
              EVENTS
            </span>
            <span className="m-16 z-10 hover:scale-125 transition-transform cursor-pointer ">
              <MagnetMotion>
                <div className="p-5 rounded-full bg-accent cursor-pointer" onClick={scrollDown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 stroke-red-500"
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              </MagnetMotion>
            </span>
          </div>
          <div className=" h-screen w-fit fixed pb-[5.6rem] z-[60] m-[45px] ">
            <Navbar />
          </div>
          {/* <div className="col-span-9 row-span-2 h-full w-full bg-black"></div> */}
        </div>
        <div className=" h-screen relative">
          <div className="absolute top-0 left-0 w-[10vw] h-[500vh] bg-gradient-to-r from-main via-transparent to-transparent z-50" />
          <HorizontalScrollCarousel eventCards={items} />
          <h1 className="text-9xl absolute right-0 text-right uppercase font-milker leading-0 text-accent h-screen bg-main">
            More EVENTS Coming Soon
            <div className="absolute bottom-0 right-1 z-[70] bg-main p-2 rounded-lg">
              <span className="font-jupiteroid text-lg text-accent bottom-0">Made with ❤️ by Team Antrix</span>
              
              <span className="absolute right-7  bottom-11 z-10  hover:scale-125 transition-transform transform origin-center cursor-pointer">
                <MagnetMotion>
                  <div className="p-5 rounded-full bg-accent cursor-pointer" onClick={scrollUp}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-red-500"
                      
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                      />
                    </svg>
                  </div>
                </MagnetMotion>
              </span>
            </div>
          </h1>
        </div>
      </div>
    </div>
    <div className="h-screen w-screen flex-col items-center justify-center bg-main p-[45px] flex lg:hidden">
        <h1 className="font-montserrat text-xl sm:text-2xl md:text-3xl text-accent">
          The mobile version of the site is still under development.
          <br />
          Please visit the site on a desktop for the best experience.
        </h1>
      </div>
    </>
  );
}

export default EventPage;