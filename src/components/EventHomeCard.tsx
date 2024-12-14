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
      <div className="m-2 py-4 w-auto h-auto relative  rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-transparent to-[#cde8fc] z-0">
          <div className="left-0 top-0  leading-tight">
            <div className="text-[#011627] text-xs font-normal font-suiGeneris leading-tight text-wrap flex md:text-md">
              {title}
              <br />
            </div>
            <div className="py-1 pb-2 text-[#011627] text-xs font-normal font-montserrat leading-tight text-wrap hidden md:block">
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
