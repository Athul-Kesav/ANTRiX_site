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
      <div className="m-2 py-4 px-2 w-auto text-accent h-auto relative rounded-lg  bg-main z-0 shadow-lg shadow-accent">
        <div className="absolute rounded-full w-5 h-[2px] bg-accent top-1/2 -left-5"/>
          <div className="left-0 top-0 leading-tight">
        <div className=" text-xs font-normal font-suiGeneris leading-tight text-wrap flex md:text-md">
          {title}
          <br />
        </div>
        <div className="py-1 pb-2 text-xs font-normal font-montserrat leading-tight tracking-tight text-nowrap overflow-hidden hidden md:block text-ellipsis line-clamp-2">
          {desc}
        </div>
        </div>
        <div className="hidden right-2 bottom-1 absolute text-sm font-extralight font-mono sm:block md:font-light">
          {formattedDate}
        </div>
      </div>
    </>
  );
}

export default EventHomeCard;
