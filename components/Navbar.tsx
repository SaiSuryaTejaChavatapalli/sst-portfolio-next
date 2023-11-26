"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/projects", name: "my projects" },
  { id: 3, path: "/contact", name: "contact" },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
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
