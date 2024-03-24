"use client";
import Typewriter from "typewriter-effect";

const TextSwitcher = () => {
  return (
    <h3 className="text-[25px] md:text-4xl font-bold text-primary/70">
      <Typewriter
        options={{
          strings: ["Fullstack Dev", "System Designer"],
          autoStart: true,
          loop: true,
          delay: 300,
        }}
      />
    </h3>
  );
};

export default TextSwitcher;
