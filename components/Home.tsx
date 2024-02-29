import { bio, githubLink, instagramLink, twitterLink } from "@/lib/constants";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import TextSwitcher from "./TextSwitcher";
function Home() {
  const icons = [
    {
      link: instagramLink,
      Icon: InstagramLogoIcon,
    },
    {
      link: githubLink,
      Icon: GitHubLogoIcon,
    },
    {
      link: twitterLink,
      Icon: TwitterLogoIcon,
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen w-full gap-x-16">
      <div className="flex flex-col gap-y-3 text-light">
        {icons.map((icon) => (
          <Button
            variant="ghost"
            key={icon.link}
            size="icon"
            className="rounded-full text-muted-foreground "
            asChild
          >
            <Link href={icon.link}>
              <icon.Icon />
            </Link>
          </Button>
        ))}
      </div>
      <div className="order-2 text-left">
        <h3 className="font-extrabold text-custom_primary text-2xl md:text-5xl mt-6 mb-4">
          Nkurunziza Saad.
        </h3>
        <TextSwitcher />
        <div className="flex flex-col md:flex-row md:-space-x-16 gap-3 ">
          <div className="flex flex-col gap-y-1 mt-6">
            {/*<p className="leading-5 md:leading-6 font-normal text-xs md:text-sm text-gray-700 dark:text-light my-3 max-w-md">
              {bio}
            </p>*/}
            <div className="flex flex-col gap-y-2">
              <span className="block text-muted-foreground/80 text-xs ">
                #DevOnAndOffTheField
              </span>
              <span className="block text-muted-foreground/80 text-xs ">
                #ManUnitedFan
              </span>
            </div>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[140px] after:w-[210px] after:translate-x-1/3 after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-2]" />
        </div>
        <div className="flex justify-start items-center gap-x-6">
          <Button
            variant="outline"
            className=" shadow-sm px-5 py-1.5 my-6 rounded-lg bg-custom_primary hover:bg-custom_primary/80"
          >
            <div className="flex gap-3 items-center text-xs">
              <GitHubLogoIcon />
              <h3>Hit me up</h3>
            </div>
          </Button>
          <Button
            variant="outline"
            className=" shadow-sm px-5 py-1.5 my-6 rounded-lg"
          >
            <div className="flex gap-3 items-center text-xs">
              <GitHubLogoIcon />
              <h3>Repositries</h3>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;