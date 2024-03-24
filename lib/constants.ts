import { HomeIcon, BoxIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
export const navLinks = [
  { link: "", path: "home", icon: HomeIcon },
  { link: "Projects", path: "projects", icon: BoxIcon },
  // { link: "Skills", path: "skills", icon: ChatBubbleIcon },
  { link: "About Me", path: "about_me", icon: ChatBubbleIcon },
  // { link: "Contact_Me", path: "contactme", icon: ChatBubbleIcon },
];

export const bio = `Web app whiz and system sorcerer. `;
export const number = +250790963467;
export const email = "saddynkurunziza8@gmail.com";
export const instagramLink =
  "https://instagram.com/nkurunziza____?igshid=MzMyNGUyNmU2YQ==";
export const twitterLink =
  "https://x.com/NkurunzizaSaddy?t=MMRT-KPVwEOYQVCw2Uh4Pw&s=09";
export const githubLink = "https://github.com/saad-nkurunziza";
export const sponsors = [
  { title: "Github", path: "#" },
  { title: "Next.js", path: "#" },
  { title: "React", path: "#" },
  { title: "Vue.js", path: "#" },
  { title: "Express.js", path: "#" },
];

export const projects = [
  {
    siteName: "Treed App",
    description:
      "Discover and share your thoughts in a treemendous way! Treed is a social platform where users can plant their ideas, thoughts, and opinions like seeds, watch them grow into conversations, and nurture meaningful connections.",
    author: {
      name: "Saad Nkurunziza",
      image: "saad_nkurunziza.jpg",
    },
    type: "website",
    keywords: ["nextjs", "tailwind", "nextauth", "prisma"],
    tags: ["api", "auth", "database"],
    to_live: {
      isLive: true,
      link_to_live: "https://treed-seven.vercel.app/",
    },
    to_repo: {
      isPublic: true,
      link_to_repo: "https://github.com/saad_nkurunziza/treed",
    },
    siteImagePath: "treed_app_image.jpg",
  },
  {
    siteName: "Movie Mingle",
    description:
      "Get ready to mingle with your favorite movies and TV shows! Movie Mingle is your go-to destination for discovering, discussing, and sharing the latest and greatest in entertainment.",
    author: {
      name: "Saad Nkurunziza",
      image: "saad_nkurunziza.jpg",
    },
    type: "website",
    keywords: ["nextjs", "tailwind", "restApi"],
    tags: ["next", "tailwind", "api"],
    to_live: {
      isLive: true,
      link_to_live: "https://movie-mingle-one.vercel.app/",
    },
    to_repo: {
      isPublic: true,
      link_to_repo: "https://github.com/saad_nkurunziza/MovieMingle",
    },
    siteImagePath: "movie_mingle_image.jpg",
  },
  {
    siteName: "Book Library",
    description:
      "Step into the world of boundless knowledge with Book Library! Explore a vast collection of books and empower your reading journey. Seamlessly manage your library activities and discover literary treasures with ease.",
    author: {
      name: "Saad Nkurunziza",
      image: "saad_nkurunziza.jpg",
    },
    type: "website",
    keywords: ["react", "api", "database"],
    tags: ["react", "api", "database"],
    to_live: {
      isLive: true,
      link_to_live: "https://library-one.vercel.app/",
    },
    to_repo: {
      isPublic: true,
      link_to_repo: "https://github.com/saad_nkurunziza/library",
    },
    siteImagePath: "book_library_image.jpg",
  },
  {
    siteName: "saadynkurunziza.vercel.app",
    description:
      "An old portofolio (2020) built on top of Vue An old portofolio (2020) built on top of Vue",
    author: {
      name: "Saad Nkurunziza",
      image: "saad_nkurunziza.jpg",
    },
    type: "website",
    keywords: ["vite", "tailwind"],
    tags: ["vite", "tailwind"],
    to_live: {
      isLive: true,
      link_to_live: "https://library-one.vercel.app/",
    },
    to_repo: {
      isPublic: true,
      link_to_repo: "https://github.com/saad_nkurunziza/library",
    },
    siteImagePath: "book_library_image.jpg",
  },
];
