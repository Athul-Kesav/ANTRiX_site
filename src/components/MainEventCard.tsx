import Image, { StaticImageData } from "next/image";
import { format } from "date-fns";
import ScramblingText from "./TextScrambleEffect";

export default function (eventCard: {
  eventId: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  eventDate: Date;
}) {
  const formattedDate = format(eventCard.eventDate, "MMM dd yyyy");

  return (
    <>
      <div className="grid grid-rows-7 h-full w-full relative z-0 overflow-clip">
        <div className="row-span-5 relative ">
          <div className="absolute bottom-0 tracking-tighter leading-[12rem] -right-14 font-montserrat font-black text-[20rem] z-20 text-[#e7f5ff]">
            {eventCard.eventId}
          </div>
          <Image
            src={eventCard.image}
            alt="event"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className=""
          />
        </div>
        <div className="row-span-2  relative flex flex-col justify-start text-[#e7f5ff] p-7">
          <span className="font-suiGeneris font-black text-4xl text-wrap">
            {eventCard.title}
          </span>
          <span className="font-montserrat text-md pb-3 font-extralight">
            {formattedDate}
          </span>
          <div className="w-full font-montserrat text-xl mb-5 line-clamp-3 sm:line-clamp-3 overflow-hidden text-ellipsis">
            {eventCard.desc}
          </div>
        </div>
      </div>
    </>
  );
}
