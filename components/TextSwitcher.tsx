"use client";
import Typewriter from "typewriter-effect";

const TextSwitcher = () => {
  return (
    <h3 className="text-3xl md:text-4xl font-bold text-primary/70">
      <Typewriter
        options={{
          strings: ["Web Developer", "System Designer"],
          autoStart: true,
          loop: true,
          delay: 300,
        }}
      />
    </h3>
  );
};

export default TextSwitcher;
