import EventHomeCard from "../components/EventHomeCard";
import HomeRecentEvents from "../components/HomeRecentEvents";
import Navbar from "../components/Navbar";

function page() {
  return (
    <div>
      <div className="h-screen bg-[#E7F5FF] p-[45px]">
        <div className="grid grid-cols-10 grid-rows-4 h-full gap-1">
          <div className="grid col-span-2 row-span-5 grid-cols-3">
            {/* First Sidebar (Leftmost) */}
            <div className="col-span-1   flex ">
              <Navbar />
            </div>
          </div>
          <div className="col-span-4 h-full row-span-4">
            <EventHomeCard title="ISRO NSpD'24" desc="Live stream of the space event" eventDate={new Date("2024-12-11")}/>
            <EventHomeCard title="ISRO NSpD'24" desc="Live stream of the space event" eventDate={new Date("2024-12-11")}/>
            <EventHomeCard title="ISRO NSpD'24" desc="Live stream of the space event" eventDate={new Date("2024-12-11")}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
