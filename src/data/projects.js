import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

const projects = [
  {
    id: "01",
    year: "2026",
    title: "Shopverse",
    role: "Frontend Development",
    description:
      "A modern e-commerce application featuring product browsing, shopping cart functionality, and a responsive shopping experience.",
    tags: ["React", "Firebase", "Redux", "JavaScript", "CSS"],
    image: img1,
    link: "https://shopverse-silk.vercel.app/",
  },
  {
    id: "02",
    year: "2026",
    title: "Flix",
    role: "Frontend Development",
    description:
      "A movie discovery application that allows users to explore trending movies, search titles, watch trailers, and view detailed movie information using an external API.",
    tags: ["React", "Tailwind", "TMDB API", "React Router", "JavaScript"],
    image: img2,
    link: "https://flix-eta.vercel.app/",
  },
  {
    id: "03",
    year: "2026",
    title: "Gitscope",
    role: "Frontend Development",
    description:
      "A GitHub profile explorer that fetches user information and top repositories through the GitHub API.",
    tags: ["React", "Github API", "RestAPI", "JavaScript", "CSS"],
    image: img3,
    link: "https://gitscope-lovat.vercel.app/",
  },
  {
    id: "04",
    year: "2026",
    title: "FocusList",
    role: "Frontend Development",
    description:
      "A simple and responsive task management application with features for creating, updating, completing, and managing tasks.",
    tags: ["React", "JavaScript", "CSS", "Local Storage"],
    image: img4,
    link: "https://focuslist-one.vercel.app/",
  },
];

export default projects;
