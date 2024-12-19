import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";

import "./ImageSlider.css";

import { IMAGES } from "./Images";

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const App = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const skipToImage = (imageId: number) => {
    let changeDirection = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main className="overflow-hidden flex flex-col justify-between h-full ">
      <div className="slider-container flex h-full w-full">
        <div className="slider w-full relative h-[500px] overflow-hidden cursor-default">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              className="image w-full h-full bg-cover bg-center pointer-events-none rounded-none object-cover absolute cursor-default"
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
                backgroundPosition: "top",
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="thumbnails flex justify-center gap-2">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container relative h-36 w-full cursor-pointer rounded-lg overflow-hidden"
          >
            <Image
              src={image.imageSrc}
              alt="Musician"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="h-full w-full object-cover"
            />
            <div
              className={`rounded-lg inset-0 active-indicator absolute top-0 left-0 h-full w-full transform scale-x-0 origin-left bg-[#01162775] transition-transform duration-1000 ease-[0.56, 0.03, 0.12, 1.04] ${
                image.id === activeImageIndex ? "scale-x-100" : ""
              } backdrop-blur-[2px]`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
