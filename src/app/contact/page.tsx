"use client";

import Image from "next/image";

import Navbar from "@/components/Navbar";
import "./page.css";

import contactUsBg from "@/images/contactUsBg.jpg";
import contactUsPic from "@/images/contactUsPic2.svg";
import DarkLightToggle from "@/components/DarkLightToggle";

export default function () {
  return (
    <div>
      <div className="h-screen bg-[#E7F5FF] p-[45px] relative">
        <div className="absolute top-5 right-0 z-20 rotate-90">
          <DarkLightToggle />
        </div>
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="grid col-span-1 row-span-5 ">
            {/* First Sidebar (Leftmost) */}
            <div className=" flex ">
              <Navbar />
            </div>
          </div>
          <div className="col-span-9 row-span-1 text-[#011627] flex flex-col  z-0">
            <div
              className="glitch text-9xl font-milker tracking-tighter leading-[5.5rem] text-nowrap"
              title="KNOCK KNOCK !"
              style={{
                fontSize: "clamp(2rem, 9vw, 15rem)", // Minimum 2rem, scales up to 10rem
                lineHeight: "clamp(3rem,7vw, 9rem)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              KNOCK KNOCK !
            </div>
            <div className="text-5xl my-7 font-suiGeneris lowercase">
              We're All Ears
            </div>
          </div>
          <div className="col-span-9 grid grid-cols-2 gap-3 row-span-3 justify-start items-start z-0">
            <div className="col-span-1 h-full w-full p-5 rounded-xl bg-[#011627] text-[#e7f5ff] relative overflow-clip">
              <Image
                src={contactUsBg}
                alt="Contact Us"
                layout="fill"
                className="absolute opacity-50 h-full w-full rounded-xl object-cover mix-blend-lighten pointer-events-none scale-110"
                objectPosition="top"
              />
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-[15%] flex items-center text-3xl font-montserrat font-bold border-b-2 border-[#e7f5ff] mb-3">
                  Get in Touch
                </div>
                <div className="w-full h-1/6 flex gap-3 justify-between">
                  <div className="w-full h-full flex flex-col justify-end items-start  font-montserrat border-b-2 border-[#e7f5ff]">
                    <span className="font-montserrat text-md">
                      Hi 👋! My name is...
                    </span>
                    <input
                      type="text"
                      className="w-full h-10 rounded-t-md font-mono focus:outline-none text-lg bg-[#e7f5ff50] p-2 text-[#e7f5ff]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="w-full h-full flex flex-col justify-end items-start  font-montserrat border-b-2 border-[#e7f5ff]">
                    <span className="font-montserrat text-md">Email</span>
                    <input
                      type="text"
                      className="w-full h-10 rounded-t-md font-mono focus:outline-none text-lg bg-[#e7f5ff50] p-2 text-[#e7f5ff]"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>

                <div className="w-full h-1/6 flex border-b border-[#01162750]">
                  <div className="w-full h-full flex flex-col justify-end items-start  font-montserrat border-b-2 border-[#e7f5ff]">
                    <span className="font-montserrat text-md">Phone</span>
                    <input
                      type="text"
                      className="w-full h-10 rounded-t-md font-mono focus:outline-none text-lg bg-[#e7f5ff50] p-2 text-[#e7f5ff]"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="w-full h-1/6 flex border-b border-[#e7f5ff]">
                  <div className="w-full h-full flex flex-col justify-end items-start  font-montserrat border-b-2 border-[#e7f5ff]">
                    <span className="font-montserrat text-md">Subject</span>
                    <input
                      type="text"
                      className="w-full h-10 rounded-t-md font-mono focus:outline-none text-lg bg-[#e7f5ff50] p-2 text-[#e7f5ff]"
                      placeholder="Hey, I've got an Idea!"
                    />
                  </div>
                </div>

                <div className="w-full h-1/3 block">
                  <div className="w-full h-full flex flex-col justify-start items-start  font-montserrat">
                    <span className="font-montserrat text-md pt-4">
                      I'd love to ask about...
                    </span>
                    <textarea
                      className="w-full h-full min-h-10 max-h-[7rem] rounded-t-md font-mono focus:outline-none text-lg bg-[#e7f5ff] p-2 text-[#011627]"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>

                <div className="w-full h-fit flex justify-start items-end">
                  <button className="w-fit h-12 bg-[#e7f5ff] text-[#011627]  px-4 font-montserrat font-bold text-lg border-2 border-[#e7f5ff] rounded-b-md hover:bg-[#011627] hover:text-[#e7f5ff] active:bg-red-500 active:after:bg-red-500  duration-500">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full w-full flex box-border flex-col gap-3 justify-between">
              <div className="h-full w-full flex rounded-xl text-[#e7f5ff]  text-wrap bg-[#011627] overflow-clip relative">
                <Image
                  src={contactUsPic}
                  alt="Instagram"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="scale-110"
                />
              </div>
              <div className="h-full flex flex-col justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.547338144801!2d79.84476647712745!3d10.985792336958273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55112c91a20079%3A0xee7677dfa4776c23!2sNational%20Institute%20of%20Technology%20Puducherry!5e1!3m2!1sen!2sin!4v1734349749289!5m2!1sen!2sin"
                  className="w-full h-full rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
