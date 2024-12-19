"use client";

import React, { useEffect, useState, useRef } from "react";
import "./MagGrid.css";

const Grid = () => {
  const [items, setItems] = useState([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Calculate the number of items based on the wrapper size
  // Calculate the number of items based on the wrapper size
  useEffect(() => {
    const calculateItems = () => {
      if (wrapperRef.current) {
        const { clientWidth, clientHeight } = wrapperRef.current;
        const columns = Math.floor(clientWidth / 60); // 40px item + 1.5rem gap
        const rows = Math.floor(clientHeight / 60); // 40px item + 1.5rem gap
        const totalItems = columns * rows;
        setItems(Array.from({ length: totalItems }));

        wrapperRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        wrapperRef.current.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      }
    };

    calculateItems();
    window.addEventListener("resize", calculateItems);
    return () => window.removeEventListener("resize", calculateItems);
  }, []);

  // Handle mouse movement to rotate items
  useEffect(() => {
    interface MouseMoveEvent extends MouseEvent {
      pageX: number;
      pageY: number;
    }

    const handleMouseMove = (e: MouseMoveEvent) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      const squares = document.querySelectorAll(".item");

      squares.forEach((sqr) => {
        const sqrElement = sqr as HTMLElement;
        const sqrX = sqrElement.offsetLeft;
        const sqrY = sqrElement.offsetTop;

        const diffX = mouseX - sqrX;
        const diffY = mouseY - sqrY;

        const radians = Math.atan2(diffY, diffX);
        const angle = 2 * (radians * 180) / Math.PI;

        sqrElement.style.transform = `rotate(${angle}deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      {items.map((_, index) => (
        <div className="item" key={index}></div>
      ))}
    </div>
  );
};

export default Grid;
