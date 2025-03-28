"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

import MagnetMotion from "@/components/MagnetMotion";

// Import the image
import img1 from "../svgs/Group49.svg";

function Navbar() {
  const pathname = usePathname(); // Get the current route

  // Function to navigate to the game page
  const goGame = () => {
    console.log("Game Page");
    window.location.href = "/game";
  };
  

  // Define all navbar links
  const navLinks = [
    { name: ".home", href: "/" },
    { name: ".about us", href: "/about" },
    { name: ".events", href: "/events" },
    { name: ".contact us", href: "/contact" },
  ];

  // Filter out the current route
  const filteredLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <div className="grid h-full w-full left-0 text-main grid-rows-4 z-50">
      {/* Top Section with Image */}
      <div className="row-span-1 h-full w-full rounded-lg flex items-start">
        <MagnetMotion>
        <Image src={img1} alt="Nav Img" className="relative w-20 h-auto hover:w-[5.2rem] transition-all cursor-pointer" onClick={goGame} />
        </MagnetMotion>
      </div>

      {/* Navbar Section */}
      <div className="w-[4.6rem] h-full relative row-span-3">
        <div className="w-full h-full absolute bg-accent rounded-lg" />
        <div className="w-full h-full  flex-col justify-around items-center inline-flex text-2xl text-main font-thin font-jupiteroid text-nowrap">
          {filteredLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item -rotate-90 cursor-pointer "
            >
              <a href={link.href}>{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
