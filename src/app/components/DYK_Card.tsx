import ExploreMoreBtn from "./ExploreMoreBtn";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface DYKCardProps {
  img: string | StaticImageData;
  desc: string;
  refer: string;
}

export default function DYK_Card({ img, desc, refer }: DYKCardProps) {
  return (
    <div className="flex grow shrink-0">
      <div className="p-1 grid grid-cols-2 w-full h-fit max-w-[200px] rounded-md shadow-lg bg-[#E7F5FF]">
        {/* Left Image Section */}
        <div className="relative h-full">
          <Image
            src={img}
            alt="Card Image"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Maintains the image aspect ratio
            className="rounded-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="grid grid-rows-3 px-2">
          {/* Top Two Rows: Text */}
          <div className="row-span-2 flex items-center text-sm text-[#011627] overflow-hidden text-wrap">
            <p className="line-clamp-4 sm:line-clamp-4 md:line-clamp-6 w-fill leading-tight text-xs">
              {desc}
            </p>
          </div>

          {/* Bottom Row: Button */}
          <div className="row-span-1 flex items-end">
            <ExploreMoreBtn refer={refer} />
          </div>
        </div>
      </div>
    </div>
  );
}
