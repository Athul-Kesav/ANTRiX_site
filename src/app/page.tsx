import DYK_Bar from "./components/DYK_Bar";
import DYK_Card from "./components/DYK_Card";
import img1 from "./images/Pg1.png";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-blue-100 p-[45px]">
        <div className="grid grid-cols-7 grid-rows-4 gap-2 h-full">
          {/* First Sidebar (Leftmost) */}
          <div className="col-span-1 row-span-5 bg-white border">
            First Sidebar
          </div>

          {/* Second Sidebar */}
          <div className="col-span-1 row-span-5 border flex justify-center items-center">
            <div className="text-[155px] font-bold font-milker tracking-wide transform -rotate-90 text-center text-[#011627]">
              ANTR<span className="font-yesevaOne">i</span>X
            </div>
          </div>

          {/* Top Section */}
          <div className="col-span-5 row-span-1 h-full w-full">
            <DYK_Bar />
          </div>

          {/* Middle Sections */}
          <div className="col-span-1 row-span-2 bg-white border ">
            Middle Left Top
          </div>
          <div className="col-span-4 row-span-2 bg-white border ">
            Middle Right
          </div>
          <div className="col-span-5 row-span-1 bg-white border">
            Middle Left Bottom
          </div>
        </div>
      </div>
    </>
  );
}
