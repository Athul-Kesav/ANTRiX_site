import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import wnext from "@/images/Wnext.svg"
import spaceShip from "@/images/spaceShip.jpg"
import eventsImg from "@/images/eventsImg.jpg"

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);
  
    return (
      <section ref={targetRef} className="relative h-[400vh] bg-[#e7f5ff]">
        <div className="absolute h-screen w-full">
            <Image src={spaceShip} alt="space ship" className="object-cover -z-10 overflow-clip"/>
            <div className="absolute inset-0 h-[122vh] bg-gradient-to-b via-[#e7f5ff50] from-transparent to-[#e7f5ff] z-[0]"/>
        </div>
        <div className="z-10 text-9xl flex h-screen w-full absolute items-center text-center flex-col uppercase font-milker leading-[6rem] text-[#011627] mt-40 tracking-tight">
            <span>Recent <br/> Events</span>
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden  z-10">
          <motion.div style={{ x }} className="flex gap-4 ">
            <div className="w-[50vw]  z-50 h-screen bg-[#011627] rounded-lg">1</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">2</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">3</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">4</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">5</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">6</div>
            <div className="w-[50vw] h-screen bg-[#011627] rounded-lg">7</div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 h-screen w-screen bg-red-200">

            <Image src={eventsImg} alt="events" objectFit="cover" objectPosition="center" className="w-full h-full z-0 object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 bg-[#011627]  p-6 w-[66vw] rounded-tl-2xl">
            <Image src={wnext} alt="wnext" objectFit="cover" className="w-[30vw] z-30" />
        </div>
      </section>
    );
  };

  export default HorizontalScrollCarousel;