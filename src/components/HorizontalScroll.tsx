import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import wnext from "@/images/Wnext.svg";
import spaceShip from "@/images/spaceShip.jpg";
import eventsImg from "@/images/eventsImg.jpg";
import MainEventCard from "./MainEventCard";

interface eventCard {
  eventId: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  eventDate: Date;
}

type ScrollProps = {
  eventCards: eventCard[];
};

const HorizontalScrollCarousel = ({ eventCards }: ScrollProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#e7f5ff]">
      <div className="absolute h-screen w-full">
        <Image
          src={spaceShip}
          alt="space ship"
          className="object-cover overflow-clip h-full w-full mix-blend-plus-darker saturate-150"
        />
        <div className="absolute inset-0 h-full bg-gradient-to-b via-[#e7f5ff50] from-transparent to-[#e7f5ff] z-0" />
      </div>
      <div className="z-10 text-9xl flex h-screen w-full absolute items-center text-center flex-col uppercase font-milker leading-[6rem] text-[#011627] mt-40 tracking-tight mix-blend-multiply opacity-75">
        <span>
          Recent <br /> Events
        </span>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden  z-10">
        <motion.div style={{ x }} className="flex gap-4">
          {eventCards.map(function (eventCard, index) {
            return (
              <div
                key={eventCard.eventId}
                className="w-[50vw] h-screen bg-[#011627] flex justify-center items-center"

              >
                <MainEventCard
                  cardNo={index + 1}
                  eventId={eventCard.eventId}
                  image={eventCard.image}
                  title={eventCard.title}
                  desc={eventCard.desc}
                  eventDate={eventCard.eventDate}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 h-screen w-screen">
        <Image
          src={eventsImg}
          alt="events"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full z-0 object-cover mix-blend-darken"
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-[#e7f5ff]  p-6 w-[66vw] rounded-tl-2xl">
        <Image
          src={wnext}
          alt="wnext"
          objectFit="cover"
          className="w-[30vw] z-30  fill-[#011627]"
        />
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
