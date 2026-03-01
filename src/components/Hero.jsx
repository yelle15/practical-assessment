export default function Hero() {
  return (
    <header id="about" className="flex w-full flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:px-20">
      <div className="flex flex-col items-center gap-6"> 
        <div className="relative flex h-[450px] max-w-[600px] items-end justify-center overflow-visible bg-red-700 md:h-64 md:w-80">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] text-yellow-100 opacity-90">✦</span>
          <img
            src="/Arielle.png"
            alt="Arielle"
            className="relative z-10 h-[120%] w-auto object-contain ml-auto"
          />
        </div>

        <div className="flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/20">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold mb-1">Age</span>
            <span className="text-white font-space-grotesk font-bold italic text-xl">21 YRS OLD</span>
          </div>
          
          <div className="h-10 w-[1px] bg-white/20"></div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold mb-1">Born</span>
            <span className="text-white font-space-grotesk font-bold italic text-xl">AUG 15, 2004</span>
          </div>
        </div>
      </div>

      <div className="max-w-[550px] flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-white mb-1">
          Hi, I am Arielle Aventura!
        </h1>
        <p className="text-neutral-300 text-lg mb-3 leading-relaxed">
          I am a 3rd year BS Computer Science student currently working on student-led projects focused on software development 
          in collaboration with public and private partners. Other practiced fields are multimedia (video editing) 
          and music.
        </p>
        <div className="flex justify-center w-full">
          <button className="rounded-lg bg-red-600 px-8 py-2 font-bold text-white hover:bg-red-700">
            Download Portfolio
          </button>
        </div>
      </div>
    </header>
  );
}