// DYK_Bar.tsx
"use client"
import { useEffect, useState } from "react";
import DYK_Card from "./DYK_Card";
import axios from "axios";
import { StaticImageData } from "next/image";

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
    return <div>Loading...</div>; // Loader while data is fetched
  }

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-4 bg-[#011627]">
        {items.map((item, index) => (
          <DYK_Card key={index} img={item.img} desc={item.desc} refer={item.refer} />
        ))}
      </div>
    </div>
  );
}
