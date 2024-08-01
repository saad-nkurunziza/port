import React from "react";
import { Button } from "./ui/button";
import { GalleryThumbnails } from "lucide-react";

const BlogCard = ({
  title,
  description,
}: //   link,
{
  title: string;
  description: string;
  //   link: string;
}) => {
  return (
    <div className="rounded-2xl p-2 overflow-hidden bg-background border hover:border relative z-20 dark:shadow-[0_8px_16px_rgb(0_0_0/0.4)] shadow-[0_8px_16px_rgb(255_255_255/0.4)]">
      <div className="relative z-50">
        <div className="p-4 flex flex-col space-y-2 md:space-y-4 justify-between">
          <h4 className="text-muted-foreground text-sm font-semibold tracking-wide">
            {title}
          </h4>
          <p className="mt-1 line-clamp-2 text-muted-foreground leading-5 text-xs">
            {description}
          </p>
          <Button
            variant={"outline"}
            size={"sm"}
            className="hidden md:flex gap-3 items-center w-fit text-xs"
          >
            <GalleryThumbnails className="w-2.5 h-2.5" />
            Read
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
