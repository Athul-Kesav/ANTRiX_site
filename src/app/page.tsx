import DYK_Bar from "./components/DYK_Bar";
import DYK_Card from "./components/DYK_Card";
import img1 from "./images/Pg1.png";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      {/* <DYK_Card
        img={img1}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis incidunt libero dolores accusamus nam, fugiat praesentium reiciendis natus. Quibusdam ratione repudiandae eius vitae ipsam quis culpa rem, quas voluptas!"
        
      /> */}
      <DYK_Bar />
    </div>
  );
}
