import "./VelocityText.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 75,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 10], {
    clamp: false,
  });

  // Transform the motion value and wrap it so it loops seamlessly
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * Repeat the text dynamically enough times to avoid abrupt jumps.
   * For a smooth loop, ensure the text content is duplicated and fills the viewport.
   */
  return (
    <section>
      <div className="parallax">
        <motion.div className="scroller text-black font-milker text-9xl" style={{ x }}>
          {Array(10)
            .fill(children)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ParallaxText;
