import Image from "next/image";
const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        alt="hero-img"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default DevImg;
