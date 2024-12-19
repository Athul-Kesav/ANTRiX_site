import { motion } from "framer-motion";


const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink: React.FC<{ children: string; href: string; font:string; fontSize:string}> = ({ children, href, font, fontSize }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className={`relative block overflow-hidden whitespace-nowrap text-xl font-${font}  sm:text-5xl md:text-6xl lg:text-${fontSize} text-accent`}
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    );
  };


  export default FlipLink;