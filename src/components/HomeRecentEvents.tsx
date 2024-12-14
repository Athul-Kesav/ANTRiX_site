"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import EventHomeCard from "./EventHomeCard";

interface eventCard {
  title: string;
  desc: string;
  eventDate: Date;
}

export default function HomeRecentEvents() {
  const [items, setItems] = useState<eventCard[]>([]); // State to store the fetched items
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/eventDetails"); // Replace with your actual backend API
        setItems(response.data); // Assuming the backend returns an array of objects
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* return (
    <>
      <div className="h-full w-full bg-pink-400 p-2 flex overflow-y-auto">
      {items.map((item, index) => (
          <div key={index} className="shrink-0">
            {" "}
            {/* Fixed width *}
            <EventHomeCard title={item.title} desc={item.desc} eventDate={item.eventDate} />
          </div>
        ))}
      </div>
    </>
  ); */
  

  return (
    <div className="bg-gray-700 w-[540px] h-[500px] mx-auto mt-16 relative shadow-lg">
      <div className="absolute top-[-5%] left-5 w-1/6 h-[110%] bg-green-400 shadow-lg"></div>

      <div className="pl-34">
        <div className="font-sans w-1/2 mx-auto relative overflow-y-auto">
          <ul className="my-10 pl-0 inline-block ">
            {items.map((item, index) => (
              <EventHomeCard key={index} title={item.title} desc={item.desc} eventDate={item.eventDate} /> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
