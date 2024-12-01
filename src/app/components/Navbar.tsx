"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import img1 from "../svgs/Group49.svg";

function Navbar() {
  const pathname = usePathname(); // Get the current route
  

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
    <div className="grid h-full w-full left-0 text-white grid-rows-4 z-10">
      {/* Top Section with Image */}
      <div className="row-span-1 h-full w-full rounded-lg flex items-start">
        <Image src={img1} alt="Nav Img" className="relative w-20" />
      </div>

      {/* Navbar Section */}
      <div className="w-[4.6rem] h-full relative row-span-3">
        <div className="w-full h-full absolute bg-[#011627] rounded-lg" />
        <div className="w-full h-full absolute flex-col justify-around items-center inline-flex text-2xl text-[#e7f5ff] font-thin font-jupiteroid text-nowrap">
          {filteredLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item -rotate-90 cursor-pointer"
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
