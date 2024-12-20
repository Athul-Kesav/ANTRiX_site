"use client";
import { useEffect, useState } from "react";
import DYK_Card from "./DYK_Card";
import axios from "axios";
import { StaticImageData } from "next/image";
import DYKLoader from "./DYKLoader";

interface DYKItem {
  img: string | StaticImageData; // URL of the image
  desc: string; // Description for the card
  refer: string; // URL to redirect to
}

export default function DYK_Bar() {
  const [items, setItems] = useState<DYKItem[]>([]); // State to store the fetched items
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dykcardDetails"); // Replace with your actual backend API
        setItems(response.data); // Assuming the backend returns an array of objects
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full">
        <DYKLoader />
      </div>
    ); // Loader while data is fetched
  }

  return (
    <div className="relative h-full w-full rounded-xl">
      <div
        className="flex space-x-2 overflow-x-auto bg-accent scrollbar-hide rounded-xl justify-between px-2 items-center align-middle"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }} // Ensures no wrapping
      >
        {items.map((item, index) => (
          <div key={index} className="shrink-0">
            {" "}
            {/* Fixed width */}
            <DYK_Card img={item.img} desc={item.desc} refer={item.refer} />
          </div>
        ))}
        {/* <div className="-rotate-90">
          <button
            type="button"
            className="bg-accent my-1 align-middle px-4 rounded-lg inline-flex items-center text-[#E7F5FF] hover:text-[#FF2323] hover:bg-[#E7F5FF]"
            
          >
            <a href="/dyk" className="font-moonRising text-lg transition-all">
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
        </div> */}
      </div>
    </div>
  );
}
