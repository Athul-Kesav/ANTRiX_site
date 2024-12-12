"use client";

import Image from "next/image";

import Navbar from "../components/Navbar";
import clubLogo from "../svgs/ClubLogo.svg";
import moon from "../svgs/moon_about_us.png";
import nitpy from "../svgs/nitpy.svg";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import instagram from "../svgs/instagram.svg";
import whatsapp from "../svgs/whatsapp.svg";
import discord from "../svgs/discord.svg";

export default function () {

  const links = {
    github: "https://github.com/ASTRON-by-ANTRiX",
    instagram: "https://www.instagram.com/antrix_nitpy",
    whatsapp: "https://chat.whatsapp.com/FGWuJcEfPQbCFX4qU2TDcR",
    linkedin: "https://www.linkedin.com/company/antrix-nitpy",
    discord: "https://discord.gg/...",
  }
  return (
    <div>
      <div className="h-screen bg-[#E7F5FF] p-[45px]">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1 w-full">
          <div className="grid col-span-1 row-span-5 ">
            {/* First Sidebar (Leftmost) */}
            <div className=" flex ">
              <Navbar />
            </div>
          </div>

          <div className="col-span-5 row-span-1  flex flex-col justify-center">
            <span className="font-jupiteroid text-7xl text-[#011627]">
              Who Are We ?
            </span>
          </div>

          <div className="col-span-4 row-span-4 flex flex-row-reverse">
            <Image src={moon} alt="Moon Image" className="h-full w-full object-contain object-right"/>
          </div>

          <div className="col-span-5 row-span-2  border border-[#011627] rounded-lg p-5 text-[#011627]">
            <p className="font-jupiteroid text-xl text-justify">
              We are a group of passionate and enthusiastic college students
              driven by an insatiable curiosity to explore the universe and
              uncover its wonders. Our mission is not just to learn but to
              ignite the spark of curiosity in others, fostering a community
              that dreams, discovers, and grows together. "The universe is a
              canvas, and curiosity is the brush that paints our understanding."
              Join us on this incredible journey of exploration and inspiration!
              <br />
              <br />
              Our vision extends beyond the stars, aiming to bridge the gap
              between theoretical knowledge and practical application. We
              believe in the power of collaboration, innovation, and relentless
              pursuit of excellence. Together, we strive to push the boundaries
              of what is known and venture into the realms of the unknown.
            </p>
          </div>

          <div className="col-span-5 row-span-1  grid grid-cols-5 items-center h-full ">
            <div className="col-span-1 h-full  flex items-center justify-center">
              <Image src={clubLogo} alt="Club Logo Image" className=" h-fit object-contain w-24"/>
            </div>
            <div className="col-span-1   h-full flex items-center justify-center">
              <Image src={nitpy} alt="College Logo" className="w-auto h-fit object-contain"/>
            </div>  
            <div className=" col-span-3 w-full h-full flex flex-row-reverse">
                <div className="grid grid-rows-2 grid-cols-2 h-full w-1/3">
                  <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                    <Image src={linkedin} alt="linkedin acc" className="cursor-pointer" onClick={() => {window.location.href = links["linkedin"]}}/>
                  </div>
                  <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                    <Image src={discord} alt="discord acc" className="cursor-pointer" onClick={() => {window.location.href = links["discord"]}}/>
                  </div>
                  <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                    <Image src={whatsapp} alt="whatsapp grp" className="cursor-pointer" onClick={() => {window.location.href = links["whatsapp"]}}/>
                  </div>
                  <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                    <Image src={github} alt="github page" className="cursor-pointer" onClick={() => {window.location.href = links["github"]}}/>
                  </div>
                </div>
                <div className="w-1/3 h-full flex items-center justify-center">
                    <Image src={instagram} alt="instagram page" className="cursor-pointer" onClick={() => {window.location.href = links["instagram"]}}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
