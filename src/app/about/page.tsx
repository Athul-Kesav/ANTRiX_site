"use client";

import Image from "next/image";
import FlipLink from "@/components/FlipLink";
import MagnetMotion from "@/components/MagnetMotion";

import Navbar from "@/components/Navbar";
import clubLogo from "@/svgs/ClubLogo.svg";
import moon from "@/svgs/moon_about_us.png";
import nitpy from "@/svgs/nitpy.svg";
import linkedin from "@/svgs/linkedin.svg";
import github from "@/svgs/github.svg";
import instagram from "@/svgs/instagram.svg";
import whatsapp from "@/svgs/whatsapp.svg";
import discord from "@/svgs/discord.svg";
import DarkLightToggle from "@/components/DarkLightToggle";

export default function () {
  const links = {
    github: "https://github.com/ASTRON-by-ANTRiX",
    instagram: "https://www.instagram.com/antrix_nitpy",
    whatsapp: "https://chat.whatsapp.com/FGWuJcEfPQbCFX4qU2TDcR",
    linkedin: "https://www.linkedin.com/company/antrixnitpy/",
    discord: "https://discord.gg/Rrqzd4Nb5A",
  };

  /* const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink: React.FC<{ children: string; href: string }> = ({ children, href }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className="relative block overflow-hidden whitespace-nowrap text-xl font-suiGeneris  sm:text-5xl md:text-6xl lg:text-8xl text-[#011627]"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    );
  }; */

  return (
    <div>
      <div className="h-screen bg-[#E7F5FF] p-[45px] relative">
        <div className="absolute top-5 right-0 z-20 rotate-90">
          <DarkLightToggle />
        </div>
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1 w-full">
          <div className="grid col-span-1 row-span-5 ">
            {/* First Sidebar (Leftmost) */}
            <div className=" flex ">
              <Navbar />
            </div>
          </div>

          <div className="col-span-9 lg:col-span-6 row-span-4 h-full w-full grid gap-2 grid-cols-9 lg:grid-cols-6 grid-rows-4">
            <div className="col-span-6 row-span-1 flex flex-col justify-center SMN_effect-43 relative">
              <FlipLink
                href="https://www.instagram.com/p/C97AMcPCpfJ/"
                font="suiGeneris"
                fontSize="8xl"
              >
                Who Are We ?
              </FlipLink>
            </div>

            <div className="col-span-9 lg:col-span-6 row-span-2  border border-[#011627] rounded-lg p-5 text-[#011627]">
              <p className="font-montserrat text-xl text-justify">
                We are a group of passionate and enthusiastic college students
                driven by an insatiable curiosity to explore the universe and
                uncover its wonders. Our mission is not just to learn but to
                ignite the spark of curiosity in others, fostering a community
                that dreams, discovers, and grows together.
                <br />
                <br />
                <span className="font-jupiteroid text-xl font-bold">
                  "The universe is a canvas, and curiosity is the brush that
                  paints our understanding."
                </span>
                <br />
                <br />
                Our vision extends beyond the stars, aiming to bridge the gap
                between theoretical knowledge and practical application. We
                believe in the power of collaboration, innovation, and
                relentless pursuit of excellence. Together, we strive to push
                the boundaries of what is known and venture into the realms of
                the unknown.
              </p>
            </div>

            <div className="col-span-6 row-span-1  grid grid-cols-5 items-center h-full ">
              <div className="col-span-1 h-full  flex items-center justify-center">
                <MagnetMotion>
                  <Image
                    src={clubLogo}
                    alt="Club Logo Image"
                    className=" h-fit object-contain w-24 hover:w-28 cursor-pointer"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  />
                </MagnetMotion>
              </div>
              <div className="col-span-1  h-full flex items-center justify-center">
                <MagnetMotion>
                  <Image
                    src={nitpy}
                    alt="College Logo"
                    className="w-[6.2rem] h-fit object-contain hover:w-28 cursor-pointer"
                    onClick={() => {
                      window.location.href = "https://nitpy.ac.in/";
                    }}
                  />
                </MagnetMotion>
              </div>
              <div className=" col-span-3 w-full h-full flex flex-row-reverse">
                <div className="w-1/3 h-full flex items-center justify-center ">
                  <MagnetMotion>
                    <Image
                      src={instagram}
                      alt="instagram page"
                      className="cursor-pointer w-24 hover:w-28"
                      onClick={() => {
                        window.location.href = links["instagram"];
                      }}
                    />
                  </MagnetMotion>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 row-span-4 lg:flex flex-row-reverse hidden relative">
            <Image
              src={moon}
              alt="Moon Image"
              className="h-full w-full object-contain object-center"
            />

            <div className="absolute bottom-0 left-0 flex w-full h-1/4">
              <div className="grid grid-rows-2 grid-cols-2 h-full w-1/3">
                <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                  <MagnetMotion>
                    <Image
                      src={linkedin}
                      alt="linkedin acc"
                      className="cursor-pointer w-14 hover:w-16"
                      onClick={() => {
                        window.location.href = links["linkedin"];
                      }}
                    />
                  </MagnetMotion>
                </div>
                <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                  <MagnetMotion>
                    <Image
                      src={discord}
                      alt="discord acc"
                      className="cursor-pointer w-14 hover:w-16"
                      onClick={() => {
                        window.location.href = links["discord"];
                      }}
                    />
                  </MagnetMotion>
                </div>
                <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                  <MagnetMotion>
                    <Image
                      src={whatsapp}
                      alt="whatsapp grp"
                      className="cursor-pointer w-14 hover:w-16"
                      onClick={() => {
                        window.location.href = links["whatsapp"];
                      }}
                    />
                  </MagnetMotion>
                </div>
                <div className="row-span-1 col-span-1 h-full w-full items-center justify-center flex">
                  <MagnetMotion>
                    <Image
                      src={github}
                      alt="github page"
                      className="cursor-pointer w-14 hover:w-16"
                      onClick={() => {
                        window.location.href = links["github"];
                      }}
                    />
                  </MagnetMotion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
