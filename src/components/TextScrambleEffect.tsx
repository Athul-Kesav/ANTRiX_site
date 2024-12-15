import { useRef, useState, useEffect } from "react";

const ScramblingText = ({ targetText, speed }: { targetText: string; speed?: number }) => {
  const intervalRef = useRef<number | null>(null);
  const [text, setText] = useState(targetText);
  const [chars, setChars] = useState("");

  const CYCLES_PER_LETTER = 1; // Adjust to control how many cycles per letter
  const SHUFFLE_TIME = speed || 50; // Use the speed prop to customize or default to 50ms

  // Function to generate the 'CHARS' string
  useEffect(() => {
    const generateChars = (text: string) => {
      return text
        .split("")
        .map((char) => {
          if (char === "A") return "Z"; // Handle wraparound for A
          if (char === "a") return "z"; // Handle wraparound for lowercase a
          if (!/[A-Za-z]/.test(char)) return char; // Non-alphabetic characters remain unchanged
          return String.fromCharCode(char.charCodeAt(0) - 1);
        })
        .join("");
    };

    setChars(generateChars(targetText));
  }, [targetText]);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = window.setInterval(() => {
      const scrambled = targetText.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char; // Set the correct letter when position matches
          }
          return chars[index]; // Use the "previous letter" for scrambling
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(targetText); // Set the final text
  };

  return (
    <div
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className=""
    >
      {text}
    </div>
  );
};

export default ScramblingText;
