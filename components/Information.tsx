import Image from "next/image";

export default function () {
  return (
    <div className="flex w-full mt-1 bg-black p-4">

        <div className="+shadow-md shadow-amber-600">
          <Image src="/Pic.JPG" alt="Description" width={500} height={400} />
        </div>
        <p className="p-8 text-amber-600 text-2xl">
          Information Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident nemo quis autem delectus molestiae quae beatae aperiam error
          est, praesentium atque pariatur mollitia voluptatum ex!
        </p>
    </div>
  );
}
