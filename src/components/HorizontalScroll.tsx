import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";


import spaceShip from "@/images/spaceShip.jpg";
import eventsImg from "@/images/eventsImg.jpg";
import MainEventCard from "./MainEventCard";
import MagGrid from "./MagGrid";

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
    <section ref={targetRef} className="relative h-[400vh] bg-main">
      <div className="absolute h-screen w-full">
        <Image
          src={spaceShip}
          alt="space ship"
          className="object-cover overflow-clip h-full w-full mix-blend-plus-darker saturate-150  bg-gradient-to-b from-transparent to-main"
        />
        {/* <div className="absolute inset-0 h-full bg-gradient-to-b via-transparent from-transparent to-main z-0" /> */}
      </div>
      <div className="z-10 text-9xl flex h-screen w-full absolute items-center text-center flex-col uppercase font-milker leading-[6rem] text-[#011627] mt-40 tracking-tight mix-blend-darken opacity-65">
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
                className="w-[50vw] h-screen bg-accent flex justify-center items-center"
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
      <div className="absolute bottom-0 right-0 h-screen   w-full z-0">
        <MagGrid />
      </div>
      <div className="absolute bottom-0 right-0 h-screen w-screen">
        <Image
          src={eventsImg}
          alt="events"
          objectFit="cover"
          objectPosition="bottom"
          className="w-full h-full z-0 mix-blend-difference pointer-events-none"
        />
      </div>

      <div className="absolute bottom-0 right-0 bg-main  p-6 w-[66vw] rounded-tl-2xl z-50">
        <svg
          width="435"
          height="261"
          viewBox="0 0 435 261"
          fill="var(--AccentColor)"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30vw] z-30"
        >
          <g clipPath="url(#clip0_170_2513)">
            <path
              d="M102.84 0.999994C104.12 0.999994 105.12 1.51999 105.84 2.56C106.64 3.52 106.92 4.64 106.68 5.92L87.72 81.64C87.48 82.68 86.96 83.52 86.16 84.16C85.36 84.72 84.48 85 83.52 85H66.72C63.84 85 61.28 84.12 59.04 82.36C56.8 80.6 55.36 78.36 54.72 75.64C54 78.36 52.52 80.6 50.28 82.36C48.04 84.12 45.52 85 42.72 85H25.92C24.88 85 23.96 84.72 23.16 84.16C22.36 83.52 21.84 82.68 21.6 81.64L2.76 5.92C2.44 4.64 2.68 3.52 3.48 2.56C4.28 1.51999 5.32 0.999994 6.6 0.999994H28.32C29.2 0.999994 30 1.28 30.72 1.84C31.44 2.4 31.92 3.12 32.16 4C32.64 5.44 33.28 7.4 34.08 9.87999C34.88 12.28 36.24 16.84 38.16 23.56C40.08 30.2 41.68 36.4 42.96 42.16C44.32 47.84 45.4 53.76 46.2 59.92C47 66.08 47.04 70.8 46.32 74.08C47.44 73.28 48.48 71.12 49.44 67.6C50.48 64 50.68 60.4 50.04 56.8C48.76 50.4 46.56 41.24 43.44 29.32C42.24 24.52 41.52 20.4 41.28 16.96C41.04 13.52 41.2 10.8 41.76 8.79999C42.32 6.8 43.32 5.24 44.76 4.12C46.2 2.92 47.64 2.16 49.08 1.84C50.6 1.44 52.48 1.2 54.72 1.11999C56.88 1.2 58.72 1.44 60.24 1.84C61.76 2.16 63.2 2.92 64.56 4.12C66 5.24 67 6.8 67.56 8.79999C68.12 10.8 68.28 13.52 68.04 16.96C67.88 20.4 67.16 24.52 65.88 29.32C62.76 41.24 60.6 50.4 59.4 56.8C58.68 60.56 58.68 64.12 59.4 67.48C60.12 70.84 61.12 73.04 62.4 74.08C61.84 70.64 61.96 65.92 62.76 59.92C63.64 53.84 64.84 47.68 66.36 41.44C67.96 35.2 69.56 29.24 71.16 23.56C72.76 17.8 74.2 13.08 75.48 9.39999L77.28 4C77.44 3.12 77.88 2.4 78.6 1.84C79.32 1.28 80.12 0.999994 81 0.999994H102.84ZM171.493 0.999994C172.933 0.999994 174.133 1.51999 175.093 2.56C176.133 3.52 176.653 4.68 176.653 6.03999V79.96C176.653 81.32 176.133 82.52 175.093 83.56C174.133 84.52 172.933 85 171.493 85H151.813C150.453 85 149.253 84.52 148.213 83.56C147.253 82.52 146.773 81.32 146.773 79.96V52.96H141.973V79.96C141.973 81.32 141.453 82.52 140.413 83.56C139.453 84.52 138.293 85 136.933 85H117.133C115.773 85 114.573 84.52 113.533 83.56C112.573 82.52 112.093 81.32 112.093 79.96V6.03999C112.093 4.68 112.573 3.52 113.533 2.56C114.573 1.51999 115.773 0.999994 117.133 0.999994H136.933C138.293 0.999994 139.453 1.51999 140.413 2.56C141.453 3.52 141.973 4.68 141.973 6.03999V48.16H146.773V6.03999C146.773 4.68 147.253 3.52 148.213 2.56C149.253 1.51999 150.453 0.999994 151.813 0.999994H171.493ZM232.599 4.35999L251.559 80.08C251.799 81.36 251.519 82.52 250.719 83.56C249.999 84.52 248.999 85 247.719 85H225.999C225.039 85 224.199 84.72 223.479 84.16C222.759 83.6 222.319 82.88 222.159 82L215.439 55.36H210.639C210.639 55.52 210.639 55.76 210.639 56.08C210.719 56.4 210.759 56.6 210.759 56.68C211.479 61.32 211.879 65.32 211.959 68.68C212.119 71.96 211.839 74.64 211.119 76.72C210.479 78.72 209.799 80.32 209.079 81.52C208.439 82.64 207.239 83.48 205.479 84.04C203.799 84.52 202.359 84.8 201.159 84.88C200.039 84.96 198.319 85 195.999 85C195.679 85 195.439 85 195.279 85H180.999L201.879 0.999994H228.399C229.359 0.999994 230.239 1.31999 231.039 1.96C231.839 2.51999 232.359 3.31999 232.599 4.35999ZM209.799 50.56H214.239L207.039 21.76C206.799 20.56 205.839 16.92 204.159 10.84C205.439 20.84 207.319 34.08 209.799 50.56ZM309.404 1.48C314.364 2.27999 318.404 3.91999 321.524 6.4C324.644 8.88 326.724 12 327.764 15.76C328.884 19.52 329.404 23.44 329.324 27.52C329.244 31.6 328.644 36.08 327.524 40.96C327.204 40.96 326.764 40.96 326.204 40.96C325.644 40.88 324.564 40.76 322.964 40.6C321.444 40.36 319.964 40.12 318.524 39.88C317.084 39.56 315.484 39.08 313.724 38.44C311.964 37.72 310.444 36.92 309.164 36.04C307.884 35.16 306.804 34.04 305.924 32.68C305.124 31.24 304.724 29.64 304.724 27.88C304.884 16.6 303.324 9.2 300.044 5.68C298.764 4.32 296.964 3.48 294.644 3.16C296.324 4.44 297.684 6.28 298.724 8.68C299.444 10.2 299.884 11.8 300.044 13.48C300.124 14.12 300.164 14.76 300.164 15.4V80.44C300.164 83.48 298.484 85 295.124 85H279.764C278.484 85 277.324 84.6 276.284 83.8C275.244 82.92 274.724 81.8 274.724 80.44V15.4C274.724 14.76 274.764 14.12 274.844 13.48C275.004 11.8 275.444 10.2 276.164 8.68C277.204 6.28 278.564 4.44 280.244 3.16C277.924 3.48 276.124 4.32 274.844 5.68C271.564 9.2 270.004 16.6 270.164 27.88C270.164 30.28 269.404 32.36 267.884 34.12C266.364 35.88 264.484 37.2 262.244 38.08C260.004 38.88 257.764 39.52 255.524 40C253.284 40.48 251.404 40.76 249.884 40.84L247.484 40.96C246.364 36.96 245.804 32.92 245.804 28.84C245.884 24.68 246.524 20.68 247.724 16.84C248.924 13 251.124 9.67999 254.324 6.88C257.604 4.08 261.724 2.27999 266.684 1.48C268.444 1.15999 270.364 0.999994 272.444 0.999994H303.644C305.644 0.999994 307.564 1.15999 309.404 1.48ZM338.109 2.56C339.709 0.959997 341.629 0.159998 343.869 0.159998C346.189 0.159998 348.149 0.959997 349.749 2.56C351.429 4.15999 352.269 6.07999 352.269 8.31999C352.269 11.44 351.749 14.12 350.709 16.36C349.669 18.6 348.389 20.24 346.869 21.28C345.429 22.32 343.989 23.16 342.549 23.8C341.109 24.36 339.869 24.64 338.829 24.64L337.269 24.76V22.24C339.829 22.24 341.549 21.72 342.429 20.68C343.309 19.56 343.629 18.2 343.389 16.6C341.229 16.44 339.389 15.6 337.869 14.08C336.429 12.48 335.709 10.56 335.709 8.31999C335.709 6.07999 336.509 4.15999 338.109 2.56ZM379.778 19.12C381.218 20.4 384.258 22.4 388.898 25.12C393.618 27.76 398.218 30.32 402.698 32.8C407.258 35.28 411.578 38.12 415.658 41.32C419.818 44.52 422.378 47.4 423.338 49.96C424.618 53.56 425.218 57.28 425.138 61.12C425.058 64.64 424.378 67.8 423.098 70.6C421.898 73.32 420.338 75.56 418.418 77.32C416.498 79 414.138 80.4 411.338 81.52C408.618 82.64 405.898 83.48 403.178 84.04C400.458 84.52 397.458 84.84 394.178 85C390.418 85.24 378.938 85.12 359.738 84.64C359.738 81.92 359.738 79.16 359.738 76.36C359.738 73.48 359.738 71.6 359.738 70.72C359.738 69.76 359.738 69.24 359.738 69.16C359.978 64.12 362.178 60.24 366.338 57.52C370.498 54.72 374.858 54.24 379.418 56.08C394.138 61.84 402.658 67.84 404.978 74.08C404.978 74.16 404.978 74.2 404.978 74.2C405.218 74.84 405.338 75.6 405.338 76.48C405.418 77.28 405.458 77.92 405.458 78.4L405.338 79.24L406.658 77.2C406.898 76.8 407.058 76.4 407.138 76C408.098 72.88 407.018 69.92 403.898 67.12C402.858 66.16 400.978 64.84 398.258 63.16C396.098 61.8 392.658 59.88 387.938 57.4C383.218 54.84 379.098 52.48 375.578 50.32C372.058 48.08 368.898 45.72 366.098 43.24C362.738 40.28 360.458 36.56 359.258 32.08C358.138 27.52 358.218 23 359.498 18.52C360.778 13.96 363.098 10.2 366.458 7.24C368.218 5.72 370.498 4.51999 373.298 3.64C376.098 2.76 381.738 2.08 390.218 1.59999C398.778 1.04 410.138 0.959997 424.298 1.36L424.058 16.96C423.738 22 421.498 25.92 417.338 28.72C413.258 31.44 408.938 31.88 404.378 30.04C389.658 24.28 381.178 18.36 378.938 12.28C378.938 12.28 378.898 12.28 378.818 12.28C378.818 12.2 378.818 12.16 378.818 12.16C378.498 11.36 378.298 10.52 378.218 9.64C378.218 8.75999 378.258 8.07999 378.338 7.6L378.458 6.88L377.018 8.92C376.858 9.32 376.738 9.72 376.658 10.12C375.698 13.24 376.738 16.24 379.778 19.12ZM66.48 89H82.92L82.8 173H52.8C50.72 173 49.4 172.88 48.84 172.64C48.36 172.32 47.84 171.68 47.28 170.72L41.04 158.6L38.88 154.52L31.08 139.88L25.2 128.72L17.52 114.44L12.72 105.32C12.16 104.2 10.36 100.92 7.32 95.48C10.68 104.2 14.08 112.72 17.52 121.04C18.56 123.52 20.52 128.16 23.4 134.96C24.2 136.96 24.64 138.12 24.72 138.44C26.16 141.72 27.32 144.8 28.2 147.68C30.2 153.6 31 158.4 30.6 162.08C30.2 165.68 29.04 168.32 27.12 170C25.28 171.6 22.6 172.56 19.08 172.88V173H2.64L2.76 89H32.76C34.76 89 36.04 89.16 36.6 89.48C37.16 89.72 37.68 90.32 38.16 91.28L44.52 103.4L46.68 107.48L54.48 122.12L60.36 133.28L67.92 147.56L72.84 156.68C73.4 157.8 75.16 161.08 78.12 166.52C74.84 157.8 71.44 149.28 67.92 140.96C67.04 138.72 65.12 134.08 62.16 127.04C62 126.72 61.76 126.2 61.44 125.48C61.12 124.68 60.88 124.04 60.72 123.56C59.36 120.2 58.24 117.12 57.36 114.32C55.36 108.4 54.56 103.64 54.96 100.04C55.36 96.36 56.48 93.72 58.32 92.12C60.24 90.44 62.96 89.44 66.48 89.12V89ZM150.347 132.32C150.827 132.32 151.387 132.32 152.027 132.32C154.587 132.32 157.307 132.44 160.187 132.68C160.187 137.72 159.747 142.28 158.867 146.36C158.067 150.44 156.987 153.88 155.627 156.68C154.347 159.4 152.667 161.8 150.587 163.88C148.587 165.96 146.627 167.6 144.707 168.8C142.787 169.92 140.507 170.84 137.867 171.56C135.307 172.2 133.107 172.64 131.267 172.88C129.427 173.12 127.267 173.16 124.787 173C122.387 172.92 120.667 172.84 119.627 172.76C118.587 172.6 117.267 172.4 115.667 172.16C115.427 172.08 115.227 172.04 115.067 172.04C107.787 170.92 101.467 167.44 96.1069 161.6C90.8269 155.76 88.1869 149.2 88.1869 141.92C88.1869 138.16 88.9869 135.36 90.5869 133.52C92.1869 131.6 94.0269 130.64 96.1069 130.64C94.0269 130.64 92.1869 129.8 90.5869 128.12C88.9869 126.36 88.1869 123.44 88.1869 119.36C88.1869 114.56 89.5469 110.16 92.2669 106.16C94.9869 102.08 98.4269 98.8 102.587 96.32C106.827 93.84 111.507 91.96 116.627 90.68C121.827 89.4 126.827 88.84 131.627 89C136.507 89.16 141.027 90.12 145.187 91.88C149.347 93.64 152.427 96.12 154.427 99.32C155.707 101.32 156.627 103.6 157.187 106.16C157.827 108.72 158.187 110.92 158.267 112.76C158.427 114.52 158.507 117 158.507 120.2C158.507 120.44 158.267 120.6 157.787 120.68C150.827 121.96 144.907 121.92 140.027 120.56C135.227 119.12 131.987 116.4 130.307 112.4C128.627 108.4 129.107 103.12 131.747 96.56L133.067 93.56C131.227 94.68 129.187 96.72 126.947 99.68C124.787 102.64 123.267 105.04 122.387 106.88C118.867 113.84 117.867 119.64 119.387 124.28C120.747 128.52 123.387 130.64 127.307 130.64C123.707 130.64 121.187 132.44 119.747 136.04C118.707 138.52 118.507 141.16 119.147 143.96C119.227 144.04 119.267 144.12 119.267 144.2C119.267 144.2 119.267 144.28 119.267 144.44C119.267 144.44 119.307 144.48 119.387 144.56C121.627 151.36 123.827 156.4 125.987 159.68C128.067 162.8 130.427 165.48 133.067 167.72L131.627 165.08C129.307 160.04 127.907 155.6 127.427 151.76C126.947 147.84 127.227 144.72 128.267 142.4C129.307 140 130.987 138.04 133.307 136.52C135.707 135 138.267 133.96 140.987 133.4C143.787 132.76 146.907 132.4 150.347 132.32ZM236.946 89C236.946 89.56 236.906 90.36 236.826 91.4C236.746 92.36 236.506 94.32 236.106 97.28C235.786 100.16 235.346 102.92 234.786 105.56C234.226 108.2 233.346 111.16 232.146 114.44C230.946 117.64 229.546 120.4 227.946 122.72C226.346 125.04 224.266 127 221.706 128.6C219.226 130.2 216.426 131 213.306 131L235.986 167.84V167.96C236.626 168.92 236.946 169.8 236.946 170.6C236.946 172.2 235.986 173 234.066 173H214.386C214.226 173 214.066 173 213.906 173C213.826 173 213.706 172.96 213.546 172.88C213.546 172.88 213.506 172.88 213.426 172.88C213.346 172.88 213.306 172.88 213.306 172.88C213.306 172.88 213.186 172.88 212.946 172.88C212.946 172.88 212.906 172.88 212.826 172.88C212.826 172.8 212.786 172.76 212.706 172.76C212.706 172.76 212.666 172.76 212.586 172.76C209.786 171.96 207.666 170.36 206.226 167.96L193.746 147.68L192.666 145.88L185.586 134.48C184.466 135.6 183.826 136.84 183.666 138.2C183.586 139.56 183.826 141 184.386 142.52C185.026 143.96 185.786 145.52 186.666 147.2C187.626 148.88 188.506 150.68 189.306 152.6C190.186 154.52 190.826 156.52 191.226 158.6C191.706 160.6 191.706 162.88 191.226 165.44C190.746 167.92 189.706 170.44 188.106 173H159.906C159.906 172.44 159.946 171.68 160.026 170.72C160.106 169.68 160.306 167.72 160.626 164.84C161.026 161.88 161.506 159.08 162.066 156.44C162.626 153.8 163.506 150.88 164.706 147.68C165.906 144.4 167.306 141.6 168.906 139.28C170.506 136.96 172.546 135 175.026 133.4C177.586 131.8 180.386 131 183.426 131L160.866 94.16L160.746 94.04C160.186 93.08 159.906 92.2 159.906 91.4C159.906 89.8 160.866 89 162.786 89H182.466C182.626 89 182.786 89 182.946 89C183.026 89 183.146 89.04 183.306 89.12C183.306 89.12 183.346 89.12 183.426 89.12C183.506 89.12 183.546 89.12 183.546 89.12C183.546 89.12 183.626 89.12 183.786 89.12C183.866 89.12 183.906 89.16 183.906 89.24C183.986 89.24 184.066 89.24 184.146 89.24C184.226 89.24 184.266 89.24 184.266 89.24C187.066 90.04 189.186 91.64 190.626 94.04L203.106 114.32L204.186 116.12L211.266 127.52C212.386 126.4 212.986 125.16 213.066 123.8C213.226 122.44 212.986 121.04 212.346 119.6C211.786 118.08 211.026 116.52 210.066 114.92C209.106 113.24 208.226 111.44 207.426 109.52C206.626 107.52 205.986 105.52 205.506 103.52C205.106 101.44 205.146 99.16 205.626 96.68C206.106 94.12 207.146 91.56 208.746 89H236.946ZM302.256 89.48C307.216 90.28 311.256 91.92 314.376 94.4C317.496 96.88 319.576 100 320.616 103.76C321.736 107.52 322.256 111.44 322.176 115.52C322.096 119.6 321.496 124.08 320.376 128.96C320.056 128.96 319.616 128.96 319.056 128.96C318.496 128.88 317.416 128.76 315.816 128.6C314.296 128.36 312.816 128.12 311.376 127.88C309.936 127.56 308.336 127.08 306.576 126.44C304.816 125.72 303.296 124.92 302.016 124.04C300.736 123.16 299.656 122.04 298.776 120.68C297.976 119.24 297.576 117.64 297.576 115.88C297.736 104.6 296.176 97.2 292.896 93.68C291.616 92.32 289.816 91.48 287.496 91.16C289.176 92.44 290.536 94.28 291.576 96.68C292.296 98.2 292.736 99.8 292.896 101.48C292.976 102.12 293.016 102.76 293.016 103.4V168.44C293.016 171.48 291.336 173 287.976 173H272.616C271.336 173 270.176 172.6 269.136 171.8C268.096 170.92 267.576 169.8 267.576 168.44V103.4C267.576 102.76 267.616 102.12 267.696 101.48C267.856 99.8 268.296 98.2 269.016 96.68C270.056 94.28 271.416 92.44 273.096 91.16C270.776 91.48 268.976 92.32 267.696 93.68C264.416 97.2 262.856 104.6 263.016 115.88C263.016 118.28 262.256 120.36 260.736 122.12C259.216 123.88 257.336 125.2 255.096 126.08C252.856 126.88 250.616 127.52 248.376 128C246.136 128.48 244.256 128.76 242.736 128.84L240.336 128.96C239.216 124.96 238.656 120.92 238.656 116.84C238.736 112.68 239.376 108.68 240.576 104.84C241.776 101 243.976 97.68 247.176 94.88C250.456 92.08 254.576 90.28 259.536 89.48C261.296 89.16 263.216 89 265.296 89H296.496C298.496 89 300.416 89.16 302.256 89.48Z"
              fill="var(--AccentColor)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M435 181V91H365C342.909 91 325 108.909 325 131V181L0 181V262H435V261V181ZM423.489 206.728C425.442 204.775 425.442 201.609 423.489 199.657L421.368 197.536C419.415 195.583 416.249 195.583 414.297 197.536L389.025 222.808V119C389.025 116.239 386.786 114 384.025 114H381.025C378.263 114 376.025 116.239 376.025 119V222.903L350.657 197.536C348.704 195.583 345.538 195.583 343.586 197.536L341.465 199.657C339.512 201.609 339.512 204.775 341.465 206.728L373.284 238.548L373.286 238.547L382.478 247.739L391.669 238.548L392.025 238.192L423.489 206.728Z"
              fill="var(--AccentColor)"
            />
          </g>
          <defs>
            <clipPath id="clip0_170_2513">
              <rect
                width="261"
                height="435"
                fill="var(--AccentColor)"
                transform="matrix(0 1 -1 0 435 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
