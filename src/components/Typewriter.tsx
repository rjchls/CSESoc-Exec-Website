import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseAfterTypeMs?: number;
  pauseBeforeTypeMs?: number;
};

type Phase = "waiting" | "typing" | "pausedTyped" | "deleting";

export default function Typewriter({
  text,
  className = "",
  typeSpeedMs = 40,
  deleteSpeedMs = 25,
  pauseAfterTypeMs = 1800,
  pauseBeforeTypeMs = 500,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("waiting");

  useEffect(() => {
    setCount(0);
    setPhase("waiting");
  }, [text]);

  useEffect(() => {
    const delay =
      phase === "typing"
        ? typeSpeedMs
        : phase === "deleting"
          ? deleteSpeedMs
          : phase === "pausedTyped"
            ? pauseAfterTypeMs
            : pauseBeforeTypeMs;

    const timeout = setTimeout(() => {
      if (phase === "waiting") {
        setPhase("typing");
      } else if (phase === "typing") {
        if (count < text.length) {
          setCount((c) => c + 1);
        } else {
          setPhase("pausedTyped");
        }
      } else if (phase === "pausedTyped") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        if (count > 0) {
          setCount((c) => c - 1);
        } else {
          setPhase("waiting");
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [count, phase, text, typeSpeedMs, deleteSpeedMs, pauseAfterTypeMs, pauseBeforeTypeMs]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="ml-[0.1em] animate-[blink_1s_infinite]">|</span>
    </span>
  );
}
