import { githubLink, instagramLink, twitterLink } from "@/lib/constants";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import ShimmerButton from "@/components/ui/light-button";
import { ChatBubbleOvalLeftIcon, HashtagIcon } from "@heroicons/react/24/solid";
import { ChatIcon, GithubIcon } from "@/components/icons/index";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import TextHighlight from "@/components/TextHighlight";
function Home() {
  return (
    <div className="relative flex md:justify-center h-screen">
      <GridPattern
        width={250}
        height={250}
        className={cn(
          "-z-50 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="px-3.5 md:px-0 z-20 flex flex-col gap-4 order-2 text-left my-auto">
        <h3 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Nkurunziza Saad
        </h3>
        <TextHighlight />
        <div className="text-muted-foreground text-[10px] md:text-[11px] flex items-center">
          <HashtagIcon className="h-3 w-3" />
          <span>ManUnitedFan</span>
        </div>
        <div className="flex mt-6 space-x-4">
          <button className="px-4 md:px-4 py-0.5 md:py-1 backdrop-blur-sm border bg-emerald-500/90 dark:bg-emerald-300/10 border-emerald-700/80 dark:border-emerald-500/20  text-center rounded-lg relative">
            <span className="text-background dark:text-foreground/75 text-sm">
              Hit me up
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-700 dark:via-emerald-500 to-transparent" />
          </button>

          <button className="px-4 md:px-4 py-0.5 md:py-1 backdrop-blur-sm border bg-background/40 text-center rounded-lg relative">
            <span className="text-foreground/75 text-sm">Mi hub</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-border to-transparent" />
          </button>
          {/* <Button size="wide" variant="colored" className="">
            <Link
              target="_blank"
              className="flex gap-3 items-center text-xs"
              href={`mailto:saddynkurunziza8@gmail.com?subject=${encodeURIComponent(
                "Portofolio Email"
              )}`}
            >
              <ChatIcon className="text-white" />
              <h3>Hit me up</h3>
            </Link>
          </Button>
          <Button size="wide" variant="outline" className="">
            <Link
              target="_blank"
              className="flex gap-3 items-center text-xs"
              href={githubLink}
            >
              <GithubIcon className="dark:text-white text-black" />
              <h3>Projects</h3>
            </Link>
          </Button>
          <ShimmerButton className="shadow-2xl">
        <span className="text-foreground">
          Github
        </span>
      </ShimmerButton> */}
        </div>
      </div>
      {/* <div className="pointer-events-none w-screen absolute inset-0 h-full bg-[radial-gradient(circle_at_80%_300%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
    </div>
  );
}

export default Home;
