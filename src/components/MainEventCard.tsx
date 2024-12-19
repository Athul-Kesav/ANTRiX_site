"use client";

import Image, { StaticImageData } from "next/image";
import { format } from "date-fns";
import { useEffect } from "react";

function MainEventCard (eventCard: {
  eventId: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  eventDate: Date;
  cardNo: number;
}) {
  const formattedDate = format(eventCard.eventDate, "MMM dd yyyy");

  useEffect(() => {
    // Restore scroll position if saved
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      //Make the scroll smooth
      window.scrollTo({
        top: parseInt(savedScrollPosition, 10),
        behavior: "smooth",
      });
      sessionStorage.removeItem("scrollPosition"); // Clear the saved position
    }
  }, []);

  function goToEvent({ url }: { url: string }) {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString()); // Save current scroll position
    window.location.href = url; // Navigate to another page
  }

  return (
    <>
      
        <div className="grid grid-rows-7 h-screen w-[50vw] relative z-0 overflow-clip border border-accent group cursor-pointer" onClick={() => goToEvent({ url: `/events/${eventCard.eventId}` })}>
          <div className="border-2 border-accent absolute top-5 right-5 flex z-10 rounded-full bg-main p-7 -rotate-90 group-hover:-rotate-[135deg] group-hover:scale-[250%] transition-transform duration-500 overflow-clip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="current"
              className="size-10 z-10 stroke-accent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
          <div className="row-span-5 relative ">
            <div className="absolute bottom-0 tracking-tighter leading-[12rem] -right-16 font-montserrat font-black text-[20rem] z-20 text-[#e7f5ff]">
              {eventCard.cardNo}
            </div>
            <Image
              src={eventCard.image}
              alt="event"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="overflow-hidden transition-transform duration-500 scale-110 transform group-hover:scale-100 "
            />
          </div>
          <div className="row-span-2  bg-main relative flex flex-col justify-start text-accent p-7">
            <span className="font-suiGeneris font-black text-4xl text-wrap">
              {eventCard.title}
            </span>
            <span className="font-montserrat text-md pb-3 font-extralight">
              {formattedDate}
            </span>
            <div className="w-full font-montserrat text-xl mb-5 line-clamp-3 sm:line-clamp-3 overflow-hidden text-ellipsis">
              {eventCard.desc}
            </div>
          </div>
        </div>
    </>
  );
}
export default MainEventCard;
