import Image from "next/image";

const ProfilePicture = ({ size }: { size: number }) => {
  return (
    <div className="relative">
      <a className={`block h-${size} w-${size}`} href="/">
        <Image
          src="/profile-picture.png"
          height={size * 4}
          width={size * 4}
          alt="Picture of the author"
          priority
          className="rounded-full ring-1 p-0.5 ring-zinc-600"
        />
      </a>
    </div>
  );
};

export default ProfilePicture;
