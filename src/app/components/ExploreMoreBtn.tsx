"use client";
import arrow from "../svgs/Group32.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface expBtnType{
  refer :string;
}

export default function ExploreMoreBtn({refer}:expBtnType) {
  const router = useRouter();


  const handleClick = (e: React.MouseEvent) => {
    // Trigger the animation
    const button = e.currentTarget;
    if (button) {
      button.classList.add('shine-effect');
      setTimeout(() => button.classList.remove('shine-effect'), 2000); // Remove after animation
    }

    // Redirect the user to another route after animation
    setTimeout(() => {
      router.push(refer); // Adjust the route path as needed
    }, 2000); // Matches the duration of the animation
  };


  return (
    <>
      <button
        className="relative overflow-hidden flex items-center justify-center bg-transparent text-[#011627] border border-[#011627] px-4 py-2 rounded-md text-left group"
        onClick={handleClick}
      >
        <div className="relative z-10 mr-5 font-suiGeneris leading-tight text-[0.7rem]">
          EXPLORE <br /> MORE
        </div>
        <Image src={arrow} alt="arrow" width={20} height={20} />
      </button>
    </>
  );
}
