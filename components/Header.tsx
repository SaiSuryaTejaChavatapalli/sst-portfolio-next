"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { ThemeToggler } from "./ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const scrollEventFn = () => {
    window.scrollY >= 50 ? setHeader(true) : setHeader(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEventFn);
    return () => {
      window.removeEventListener("scroll", scrollEventFn);
    };
  }, []);
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#f3f9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles={"hidden xl:flex gap-x-8 items-center"}
              linkStyles={"relative hover:text-primary transition-all"}
              underlineStyles={
                "absolute left-0 top-full h-[2px] bg-primary w-full"
              }
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
