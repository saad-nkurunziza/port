"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import BlogCard from "./BlogCard";
import SectionContainer from "@/components/SectionContainer";

const blogs = [
  {
    title: "The Dawn of Innovation",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "The Digital Revolution",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "The Art of Design",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "The Art of Design",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];
export const Blogs = () => {
  return (
    <SectionContainer title="Read mi blogs" id="blogs">
      <div className="grid grid-cols-2 md:grid-cols-4  py-2">
        {blogs.map((blog, index) => (
          <div
            // href={blog?.link}
            key={blog?.link}
            className="relative group p-1 w-full h-full"
          >
            <BlogCard title={blog.title} description={blog.description} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
