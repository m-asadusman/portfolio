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
      "A modern e-commerce platform featuring user authentication, user profiles, a persistent shopping cart, order history, and an admin dashboard for complete product management.",
    tags: ["React", "Redux Toolkit", "Firebase", "JavaScript", "CSS"],
    image: img1,
    link: "https://shopverse-silk.vercel.app/",
  },
  {
    id: "02",
    year: "2026",
    title: "Flix",
    role: "Frontend Development",
    description:
      "A movie discovery application that allows users to explore trending movies, search titles, watch trailers, and view detailed movie information using an TMDB API.",
    tags: ["React", "React Router", "TMDB API", "Tailwind", "JavaScript"],
    image: img2,
    link: "https://flix-eta.vercel.app/",
  },
  {
    id: "03",
    year: "2026",
    title: "Gitscope",
    role: "Frontend Development",
    description:
      "A GitHub profile explorer that displays user information and top repositories through the GitHub API.",
    tags: ["React", "GitHub API", "REST API", "JavaScript", "CSS"],
    image: img3,
    link: "https://gitscope-lovat.vercel.app/",
  },
  {
    id: "04",
    year: "2026",
    title: "FocusList",
    role: "Frontend Development",
    description:
      "A simple task management application for creating, updating, completing, and organizing daily tasks with local data persistence.",
    tags: ["React", "JavaScript", "Local Storage", "CSS"],
    image: img4,
    link: "https://focuslist-one.vercel.app/",
  },
];

export default projects;
