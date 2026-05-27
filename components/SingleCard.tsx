import Image from "next/image";

type props = {
  song: any;
};

export default function ({ song }: props) {
  return (
    <div>
      <Image
        src={song.album_art}
        alt={song.name}
        width={250}
        height={250}
        className={`shadow-xl ${song.shadow} hover:scale-[103%] transition-all duration-400 rounded-2xl cursor-pointer`}
      ></Image>
    </div>
  );
}
