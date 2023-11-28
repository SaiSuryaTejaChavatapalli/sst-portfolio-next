import Socials from "./Socials";
const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="flex flex-col items-center justify-between">
        {/* socials */}
        <Socials
          containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
          iconStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all"
        />
        <div className="text-muted-foreground flex flex-col xl:flex-row items-center justify-center">
          <span>Copyright &copy; Sai Surya Teja Chavatapalli.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
