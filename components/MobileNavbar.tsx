import { navBarLinks } from "@/app/_constants/constants";
import Logo from "./Logo";
import Socials from "./Socials";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <nav className={`flex flex-col items-center gap-y-6`}>
              {navBarLinks?.map((link) => (
                <SheetClose asChild key={link.id}>
                  <Link href={link.path} className={`capitalize text-2xl`}>
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>
          <Socials containerStyles="flex gap-x-4 text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
