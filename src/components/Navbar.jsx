export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-neutral-800 w-full">

      <div className="text-yellow-100 text-6xl select-none cursor-pointer hover:scale-110 transition-transform">
        ✦ 
      </div>

      <div className="flex items-center gap-6 md:gap-10">
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-red-500 transition-colors">About Me</a>
          </li>
          <li>
            <a href="#numberguessing" className="hover:text-red-500 transition-colors">Number Guessing Game</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
