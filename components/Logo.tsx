import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="logo-img"
          height={54}
          width={54}
          priority
          className="dark:bg-primary dark:text-white dark:rounded-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
