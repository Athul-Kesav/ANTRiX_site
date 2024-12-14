import { useEffect, useRef } from "react";

const ScrollContainer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (container) {
        event.preventDefault(); // Prevent default vertical scroll
        container.scrollBy({
          left: event.deltaY, // Map vertical scroll (deltaY) to horizontal
          behavior: "smooth", // Smooth scroll effect
        });
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-container flex overflow-x-scroll overflow-y-hidden w-full h-full snap-x snap-mandatory"
    >
      {/* Horizontal scrolling items */}
      <div className="snap-center w-full flex-shrink-0 flex items-center justify-center bg-blue-500 text-white text-3xl h-screen">
        Section 1
      </div>
      <div className="snap-center w-full flex-shrink-0 flex items-center justify-center bg-green-500 text-white text-3xl h-screen">
        Section 2
      </div>
      <div className="snap-center w-full flex-shrink-0 flex items-center justify-center bg-red-500 text-white text-3xl h-screen">
        Section 3
      </div>
      <div className="snap-center w-full flex-shrink-0 flex items-center justify-center bg-red-500 text-white text-3xl h-screen">
        Section 4
      </div>
      <div className="snap-center w-full flex-shrink-0 flex items-center justify-center bg-red-500 text-white text-3xl h-screen">
        Section 5
      </div>
    </div>
  );
};

export default ScrollContainer;
