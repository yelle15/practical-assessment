const Tag = ({ text, isNegative }) => (
  <span className={`
    px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] border transition-all duration-300 font-sans cursor-default
    ${isNegative 
      ? 'bg-transparent text-red-700 border-red-200 hover:bg-red-700 hover:text-white hover:border-red-700' 
      : 'bg-transparent text-emerald-800 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'}
  `}>
    {text.toUpperCase()}
  </span>
);

export default function LikesDislikes() {
  const likes = ["OPM & J-Rock Music", "Coffee", "Dogs & Cats", "Rainy Days"];
  const dislikes = ["Cramming", "Smoke", "Hot Weather"];

  return (
    <section className="relative bg-white pt-60 pb-12 overflow-hidden">
      <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none select-none z-0">
        <h2 
          className="text-[9vw] font-black uppercase italic leading-none font-space-grotesk tracking-[-0.02em] text-white opacity-100"
          style={{
            WebkitTextStroke: '2px #b91c1c',
            paintOrder: 'stroke fill',
          }}
        >
          Likes & Dislikes
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-10">
          <div className="w-full md:w-[420px] bg-white border-2 border-neutral-900 p-10 rounded-[3rem] 
                          relative group transition-all duration-500 hover:-translate-y-3
                          rotate-[-1deg] hover:rotate-0 hover:shadow-[15px_15px_0px_0px_rgba(16,185,129,0.1)]">
            <div className="absolute top-6 right-8 text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity">✦</div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[4px] w-12 bg-emerald-500 rounded-full"></div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter font-space-grotesk text-neutral-900">
                My Vibes
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {likes.map(item => <Tag key={item} text={item} isNegative={false} />)}
            </div>
          </div>

          <div className="w-full md:w-[420px] bg-white border-2 border-neutral-900 p-10 rounded-[3rem] 
                          relative group transition-all duration-500 hover:-translate-y-3
                          rotate-[1deg] hover:rotate-0 hover:shadow-[15px_15px_0px_0px_rgba(185,28,28,0.1)]">
            <div className="absolute top-6 right-8 text-red-700 opacity-20 group-hover:opacity-100 transition-opacity">✦</div>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-[4px] w-12 bg-red-700 rounded-full"></div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter font-space-grotesk text-neutral-900">
                Not My Vibes
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {dislikes.map(item => <Tag key={item} text={item} isNegative={true} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}