export default function Navbar() {
  return (
    <div className="flex justify-center w-[30%] p-2 px-10 fixed bg-white/40 z-10 rounded-4xl mt-5 lg:text-2xl md:text-xl sm:text-lg shadow-xl">
      <div className="flex space-x-18">
        <a href="#" className="text-blue-700 hover:text-amber-100">
          Home
        </a>
        <a href="#" className="text-amber-100 hover:text-amber-400">
          About
        </a>
        <a href="#" className="text-red-700 hover:text-amber-100">
          Contact
        </a>
      </div>
    </div>
  );
}
