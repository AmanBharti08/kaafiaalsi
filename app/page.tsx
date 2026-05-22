import Heading from "@/components/Heading";
import Information from "@/components/Information";
import Navbar from "@/components/Navbar";
import Songs from "@/components/Songs";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-black">
      <Navbar/>
      <Heading/>
      <Songs/>
      {/* <Information/> */}
    </div>
  );
}
