import Html from "@/public/html.png";
import Css from "@/public/css.png";
import Github from "@/public/github.png";
import Tailwind from "@/public/tailwind.png";
// import Reactlogo from "@/public/react.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const techs = [
  {
    id: 1,
    src: Html,
    title: "HTML",
  },
  {
    id: 2,
    src: Css,
    title: "CSS",
  },
  {
    id: 3,
    //src: Reactlogo,
    title: "React",
  },
  {
    id: 4,
    src: Tailwind,
    title: "Tailwind",
  },
  {
    id: 5,
    src: Github,
    title: "GitHub",
  },
];

export const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedinIn size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/meshach-ekene/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/MeshachArinze",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "meshacharinze@gmail.com",
  },
];