import Navbar from "@/components/Navbar";

export default function () {
  
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
        </div>
      </div>
    </div>
  );
}
