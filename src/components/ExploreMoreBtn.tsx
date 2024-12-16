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
      className="relative overflow-hidden flex items-center justify-between bg-transparent text-[#011627] border border-[#011627] active:bg-[#FF2323] p-2 rounded-md hover:bg-[#011627] hover:text-[#E7F5FF] transition-all group w-full"
      onClick={handleClick}
    >
      <div className="relative z-10 mr-5 font-montserrat tracking-tight font-medium leading-tight text-xs  text-left">
        EXPLORE
      </div>
      <div className="">

      <svg
        width="21"
        height="25"
        viewBox="0 0 21 25"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#e7f5ff] size-[20px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.75 16.1084L7 12.4999L0.75 8.8915V0.808594L21 12.4999L0.75 24.1913V16.1084Z"
          fill="#011627"
        />
      </svg>
      </div>
    </button>
  );
}
