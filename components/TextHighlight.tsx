"use client";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/highlight";

export default function TextHighlight() {
  return (
    <div className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="md:text-4xl lg:text-lg font-medium text-muted-foreground max-w-4xl lg:leading-snug mx-auto "
      >
        I build
        <Highlight className="mx-2 text-background">
          digital solutions.
        </Highlight>
      </motion.h1>
    </div>
  );
}
