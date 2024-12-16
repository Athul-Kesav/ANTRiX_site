import React from "react";
import "./ImageGrid.css";

// Define the ImageGrid component
type ImageGridProps = {
  // Items to be displayed in the grid
  items: {
    image: string;
    title: string;
  }[];
};


const ImageGrid = ({ items }: ImageGridProps) => {
  // Render the image grid section
  return (
    <section id="scene" className="w-full h-screen overflow-hidden flex flex-wrap z-50">
      <div className="layer main flex flex-wrap justify-start">
        {items.map((item, index) => (
          // Each item is rendered as a column with a tile
          <div
            className="col w-1/8 relative cursor-pointer md:w-1/4 sm:w-1/2"
            key={index}
          >
            <a
              href="#"
              className="tile block w-full relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10"
            >
              <div className="hover absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-gradient-to-b from-black/30 to-black/80">
                <div className="demo-icon icon-plus text-white text-2xl mb-2">
                  +
                </div>
                <h2 className="text-sm font-semibold uppercase text-center relative z-10 m-2">
                  {item.title}
                </h2>{" "}
                {/* Display the title for each tile */}
              </div>
              <div
                className="bg-img w-full h-[200px] bg-cover bg-center"
                // Set background image dynamically using inline style
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
