"use client";

import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [clientX, setClientX] = useState(-100);
  const [clientY, setClientY] = useState(-100);
  const [isStuck, setIsStuck] = useState(false);
  const [stuckX, setStuckX] = useState(0);
  const [stuckY, setStuckY] = useState(0);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);
  const outerCursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setClientX(e.clientX);
      setClientY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (innerCursorRef.current && outerCursorRef.current) {
      const cursorSize = 20; // Size of inner cursor
      const ringSize = 40; // Size of the outer circle ring

      innerCursorRef.current.style.transform = `translate(${clientX - cursorSize / 2}px, ${clientY - cursorSize / 2}px)`;
      outerCursorRef.current.style.transform = `translate(${clientX - ringSize / 2}px, ${clientY - ringSize / 2}px)`;
    }
  }, [clientX, clientY]);

  const handleMouseEnter = (e: MouseEvent) => {
    const navItem = e.currentTarget as HTMLElement;
    const navItemBox = navItem.getBoundingClientRect();
    setStuckX(Math.round(navItemBox.left + navItemBox.width / 2));
    setStuckY(Math.round(navItemBox.top + navItemBox.height / 2));
    setIsStuck(true);
  };

  const handleMouseLeave = () => {
    setIsStuck(false);
  };

  useEffect(() => {
    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter as EventListener);
      item.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });

    return () => {
      linkItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        item.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      });
    };
  }, []);

  return (
    <div>
      {/* Outer Cursor Ring */}
      <div
        ref={outerCursorRef}
        className="cursor--outer fixed pointer-events-none z-[11000] w-10 h-10 rounded-full border-4 border-red-500"
      ></div>

      {/* Inner Cursor Ball */}
      <div
        ref={innerCursorRef}
        className="cursor--inner fixed pointer-events-none z-[12000] w-5 h-5 bg-white rounded-full"
      ></div>
    </div>
  );
};

export default Cursor;
