import Link from "next/link";
import { Button } from "./ui/button";
import { RiArrowDownSLine, RiDownload2Fill } from "react-icons/ri";
import { Send } from "lucide-react";
import Socials from "./Socials";
import DevImg from "./DevImg";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-16">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-6">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My name is Sai Surya Teja</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights tnto myself, my vocational
              journey, and what I engage in professionally.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="gap-x-2" variant={"secondary"}>
                  Download CV <RiDownload2Fill size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>

          <div className="hidden xl:flex  relative">
            <DevImg
              containerStyles={"w-[510px] h-[462px] relative bg-bottom"}
              imgSrc={"/hero/home-face-icon.svg"}
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
