import exp from "constants";
import styles from "./bubble.module.css";

const BubbleText = ({text}:{text:string}) => {
    return (
      <h2 className="text-center text-5xl font-thin text-[#011627] text-[173px]">
        {text.split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    );
  };

  export default BubbleText;