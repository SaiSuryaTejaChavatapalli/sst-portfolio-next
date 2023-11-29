"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarLinks } from "@/app/_constants/constants";

type NavbarProps = {
  containerStyles: React.ComponentProps<"div">["className"];
  linkStyles: React.ComponentProps<"div">["className"];
  underlineStyles?: React.ComponentProps<"div">["className"];
};
const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavbarProps) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {navBarLinks?.map((link) => (
        <Link
          href={link.path}
          key={link.id}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId={"underline"}
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
