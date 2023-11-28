"use client";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    id: 1,
    path: "https://www.linkedin.com/in/saisuryatejachavatapalli/",
    name: <RiLinkedinFill />,
  },
  {
    id: 2,
    path: "https://github.com/SaiSuryaTejaChavatapalli",
    name: <RiGithubFill />,
  },
  { id: 3, path: "https://twitter.com/saisuryateja8", name: <RiTwitterFill /> },
  {
    id: 4,
    path: "https://www.youtube.com/@saisuryatejachavatapalli",
    name: <RiYoutubeFill />,
  },
  {
    id: 5,
    path: "https://www.instagram.com/iam_surya_tej?igshid=YTQwZjQ0NmI0OA%3D%3D",
    name: <RiInstagramFill />,
  },
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
          <Link key={icon.id} href={icon.path} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
