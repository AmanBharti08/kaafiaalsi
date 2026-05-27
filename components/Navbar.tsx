export default function Navbar() {
  return (
    <div className="flex justify-center w-[250px] md:w-[400px] lg:w-[500px] xl:w-[600px] p-3 px-10 fixed bg-white/70 z-10 rounded-4xl mt-5 lg:text-2xl md:text-xl sm:text-lg shadow-xl">
      <div className="flex justify-between w-full">
        <a href="#" className="text-blue-700 hover:text-amber-100">
          Home
        </a>
        <a href="#" className="text-amber-100 hover:text-amber-800">
          About
        </a>
        <a href="#" className="text-red-700 hover:text-amber-100">
          Contact
        </a>
      </div>
    </div>
  );
}
