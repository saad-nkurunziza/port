import PageContainer from "@/components/PageContainer";
import { HashtagIcon } from "@heroicons/react/24/solid";

export default function page() {
  const hashtags = [
    "SelfTaughtDev",
    "WebAndCode",
    "DigitalDreams",
    "GameOfThrones",
  ];
  return (
    <PageContainer header="About Me">
      <h3 className="font-extrabold text-gray-400 text-lg md:text-xl mt-6 mb-4">
        Nkurunziza Saad.
      </h3>
      <article className="flex justify-between items-center gap-x-4">
        <div className="text-sm prose">
          <p className="max-w-xl leading-6 text-gray-500 dark:text-light">
            Hey there, I&apos;m Saad, a self-taught developer with a passion for
            infinite web development and strategic moves in system design.
            I&apos;m on a quest for digital brilliance and constantly expanding
            my skills. Freelancing keeps me busy during the weekdays, while I
            enjoy watching football during my downtime. Speaking of great shows,
            have you seen Game of Thrones (#GOT)? It&apos;s definitely worth
            watching!
          </p>
          <p className="max-w-xl my-5 leading-6 text-gray-500 dark:text-light">
            By combining my knowledge of web development and system design, I
            strive to create innovative solutions that push the boundaries of
            what&apos;s possible. Whether it&apos;s building robust web
            applications or designing efficient systems, I&apos;m always up for
            a challenge. Join me on this journey towards digital excellence!
          </p>

          <div className="flex flex-col gap-2 my-3 text-xs">
            {hashtags.map((tag) => (
              <div
                className="flex text-gray-500/60 dark:text-light/60 "
                key={tag}
              >
                <HashtagIcon className="h-3 w-3" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </PageContainer>
  );
}
