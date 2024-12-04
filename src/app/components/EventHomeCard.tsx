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
      <div className="m-4 p-4 w-auto h-auto relative md:pt-8 rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-transparent to-[#d0e4f2]">
          <div className="left-0 top-0  leading-tight">
            <div className="text-[#011627] text-md font-normal font-suiGeneris leading-tight text-wrap flex md:text-3xl sm:2xl">
              {title}
              <br />
            </div>
            <div className="py-3 text-[#011627] text-base font-normal font-montserrat leading-tight text-wrap hidden md:block">
              {desc}
            </div>
        </div>
        <div className="hidden right-2 bottom-1 absolute text-[#011627] text-sm font-light font-mono sm:block md:font-bold">
          {formattedDate}
        </div>
      </div>
    </>
  );
}

export default EventHomeCard;
