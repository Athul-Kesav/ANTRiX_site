import Image, { StaticImageData } from "next/image";
import { format } from "date-fns";
import ScramblingText from "./TextScrambleEffect";
import Link from "next/link";

export default function (eventCard: {
  eventId: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  eventDate: Date;
  cardNo : number;
}) {
  const formattedDate = format(eventCard.eventDate, "MMM dd yyyy");

  return (
    <>
    <Link href={`/events/${eventCard.eventId}`}>
      <div className="grid grid-rows-7 h-screen w-[50vw] relative z-0 overflow-clip border border-[#011627]">
        <div className="row-span-5 relative ">
          <div className="absolute bottom-0 tracking-tighter leading-[12rem] -right-16 font-montserrat font-black text-[20rem] z-20 text-[#e7f5ff]">
            {eventCard.cardNo}
          </div>
          <Image
            src={eventCard.image}
            alt="event"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="overflow-hidden transition-transform duration-500 transform hover:scale-110"
          />
        </div>
        <div className="row-span-2  bg-[#e7f5ff] relative flex flex-col justify-start text-[#011627] p-7">
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
      </Link>
    </>
  );
}
