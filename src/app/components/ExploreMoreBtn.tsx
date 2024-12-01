"use client";
import arrow from "../svgs/Group32.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface expBtnType {
  refer: string;
}

export default function ExploreMoreBtn({ refer }: expBtnType) {
  const router = useRouter();

  const handleClick = () => {
    router.push(refer); // Navigate to the specified route
  };

  return (
    <button
      className="relative overflow-hidden flex items-center justify-center bg-transparent text-[#011627] border border-[#011627] px-2 py-1 rounded-md"
      onClick={handleClick}
    >
      <div className="relative z-10 mr-5 font-suiGeneris leading-tight text-[0.5rem] left-0 text-left">
        EXPLORE <br /> MORE
      </div>
      <Image src={arrow} alt="arrow" width={10} height={10} />
    </button>
  );
}
