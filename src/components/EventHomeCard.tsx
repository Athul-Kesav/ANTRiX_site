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
      <div className="my-2 py-4 px-2 w-auto text-accent h-auto relative rounded-sm border-l-2 border-l-accent  bg-main z-0 bg-gradient-to-br from-transparent via-[#D0E4F250] to-[#8396a3]">
        <div className="absolute rounded-full w-3 h-[3px] bg-accent top-1/2 -left-3" />
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
