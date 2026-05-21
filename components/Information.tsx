import Image from "next/image";

export default function () {
  return (
    <div className="flex w-full bg-black border-2 border-amber-100">
      <div className="p-2 w-1/3">
        <Image src="/path/to/image.jpg" alt="Description" width={500} height={300} />
      </div>
      <div className=" p-2 w-2/3">
        <p>
          Information Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident nemo quis autem delectus molestiae quae beatae aperiam error
          est, praesentium atque pariatur mollitia voluptatum ex!
        </p>
      </div>
    </div>
  );
}
