import Image from "next/image";
type DevImgProps = {
  containerStyles: React.ComponentProps<"div">["className"];
  imgSrc: string;
};
const DevImg = ({ containerStyles, imgSrc }: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        alt="hero-img"
        fill
        className="object-scale-down"
        priority
      />
    </div>
  );
};

export default DevImg;
