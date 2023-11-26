"use client";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";
import { type } from "os";

const icons = [
  { id: 1, path: "/", name: <RiLinkedinFill /> },
  { id: 2, path: "/", name: <RiGithubFill /> },
  { id: 3, path: "/", name: <RiYoutubeFill /> },
  { id: 4, path: "/", name: <RiFacebookFill /> },
  { id: 5, path: "/", name: <RiInstagramFill /> },
];

type SocialsProps = {
  containerStyles: React.ComponentProps<"div">["className"];
  iconStyles?: React.ComponentProps<"div">["className"];
};
const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon) => {
        return (
          <Link key={icon.id} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
