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

  return (
    <>
      <div className="h-full w-full p-2 flex flex-col overflow-y-auto scrollbar-hide">
      {items.map((item, index) => (
          <div key={index} className="shrink-0">
        {" "}
        {/* Fixed width */}
        <EventHomeCard title={item.title} desc={item.desc} eventDate={item.eventDate} />
          </div>
        ))}
      </div>
    </>
  );
  

 
}
