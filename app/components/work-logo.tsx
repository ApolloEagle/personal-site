import Image from "next/image";

const WorkLogo = ({ src, size }: { src: string; size: number }) => (
  <Image
    src={src}
    height={size}
    width={size}
    alt="Picture of the author"
    priority
    className="rounded-full"
  />
);

export default WorkLogo;
