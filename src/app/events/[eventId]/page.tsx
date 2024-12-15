"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import Image from "next/image";
import { StaticImageData } from "next/image";
import "./page.css";

import samplePic from "@/images/Hero.jpg";

import { ScreenFitText } from "@/components/FitText";

interface EventDetails {
  eventId: number;
  title: string;
  desc: string;
  eventDate: string;
  image: string | StaticImageData;

  // Add other event details properties here
}

export default function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const [eventId, setEventId] = useState<string | null>(null);
  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null);

  const router = useRouter();
  useEffect(() => {
    async function fetchEventId() {
      try {
        const { eventId } = await params;
        setEventId(eventId);
      } catch (error) {
        //console.error("Failed to get event ID:", error);
        //notFound(); // Render 404 page if event ID is not found or an error occurs
      }
    }

    fetchEventId();
  }, []);

  useEffect(() => {
    if (eventId) {
      async function fetchEventDetails() {
        try {
          const response = await axios.get<EventDetails>(
            `/api/eventDetails?eventId=${eventId}`
          );
          setEventDetails(response.data);
        } catch (error) {
          console.log("Failed to fetch event details:", error);
          return;
        }
      }

      fetchEventDetails();
    }
  }, [eventId]);

  if (eventId === null) {
    return (
      <div className="h-screen w-screen items-center flex justify-center font-montserrat text-3xl font-medium bg-[#e7f5ff]">
        Loading...
      </div>
    ); // Display a loading state while waiting for the event ID
  }

  if (eventId !== null) {
    if (eventDetails === null) {
      return; // Display a loading state while waiting for the event details
    }
  }

  //console.log(eventDetails);

  const formattedDate = eventDetails?.eventDate
    ? format(new Date(eventDetails.eventDate), "MMM dd, yyyy")
    : "";
  return (
    <>
      <div className="flex h-full w-full bg-[#e7f5ff] flex-col scrollbar-hide overflow-x-clip relative">
        <div
          className="absolute top-0 w-fit h-fit right-0 transform origin-bottom-right -rotate-90 hover:scale-[105%] z-20 bg-[#011627]/50 backdrop-blur-sm p-3 cursor-pointer flex justify-start items-start rounded-tr-xl rounded-tl-xl border-t-2 border-r-2 border-l-2 border-[#e7f5ff]"
          onClick={() => router.push("/events")}
        >
          <span className="text-xl font-jupiteroid text-[#e7f5ff] leading-none">
            Back to Events
          </span>
        </div>

        <div className="h-screen w-full flex flex-col-reverse justify-start text-left items-center text-black  font-milker relative  ">
          <div className="absolute inset-0  z-0">
            <Image
              src={eventDetails?.image || samplePic}
              alt="event image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative">
            <span
              className="z-10 text-[#e7f5ff] mix-blend-difference text-center flex mb-16 "
              style={{
                fontSize: "clamp(2rem, 10vw, 10rem)", // Minimum 2rem, scales up to 10rem
                lineHeight: "clamp(3rem, 9vw, 9rem)",
                whiteSpace: "wrap", //wrapping
              }}
            >
              {eventDetails?.title}
            </span>
          </div>
        </div>

        <div className="h-screen bg-[#e7f5ff] w-full p-20 flex flex-col justify-center items-center text-[#011627] font-milker relative">
          <div className="grid grid-cols-2 gap-7 h-full w-full">
            <div className="col-span-1  grid grid-rows-3 w-full text-[#011627]">
              <div className="row-span-1  w-full flex flex-col justify-center">
                <span className="text-7xl font-suiGeneris">Event Recap</span>
                <span className="text-xl font-mono">{formattedDate}</span>
              </div>
              <div className="row-span-2  w-full flex flex-col justify-start">
                <div className="text-xl font-montserrat text-left leading-snug">
                  {eventDetails?.desc}
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-blue-200 rounded-3xl"></div>
          </div>
        </div>
        <div className="h-screen w-full flex flex-col justify-center items-center text-black font-milker relative bg-slate-200">
          HELLO
        </div>
      </div>
    </>
  );
}
