import { format } from "date-fns";

type eventCardType = {
  title: string;
  desc: string;
  eventDate: Date;
};

function EventHomeCard({ title, desc, eventDate }: eventCardType) {
  const formattedDate = format(eventDate, "dd/MM/yy");

  return (
    <>
      <div className="m-2 py-4 px-2 w-auto h-auto relative  rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-transparent to-[#cde8fc] z-0 shadow-xl">
        <div className="absolute rounded-full w-5 h-[2px] bg-[#011627] top-1/2 -left-5"/>
          <div className="left-0 top-0  leading-tight">
            <div className="text-[#011627] text-xs font-normal font-suiGeneris leading-tight text-wrap flex md:text-md">
              {title}
              <br />
            </div>
            <div className="py-1 pb-2 text-[#011627] text-xs font-normal font-montserrat leading-tight tracking-tight text-nowrap overflow-hidden hidden md:block text-ellipsis line-clamp-2">
              {desc}
            </div>
        </div>
        <div className="hidden right-2 bottom-1 absolute text-[#011627] text-sm font-extralight font-mono sm:block md:font-light">
          {formattedDate}
        </div>
      </div>
    </>
  );
}

export default EventHomeCard;
