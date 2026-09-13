import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
};

export default function Typewriter({ text, className = "", speedMs = 40, startDelayMs = 400 }: TypewriterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="ml-[0.1em] inline-block w-[0.5em] animate-[blink_1s_infinite]">|</span>
    </span>
  );
}
