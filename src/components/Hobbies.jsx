import { useState } from 'react';

const HobbyColumn = ({ 
  number, title, description, colorClass, image, icon, textColor, 
  isHovered, onMouseEnter, onMouseLeave, 
  imageClass = ""
}) => (
  <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`
      ${colorClass} p-8 flex flex-col justify-end h-[400px] border-r-4 border-neutral-900 
      transition-all duration-700 ease-in-out relative overflow-hidden cursor-pointer
      ${isHovered ? 'flex-[2.5]' : 'flex-1'}
    `}
  >
    {image && (
      <img 
        src={image} 
        alt={title}
        className={`
          absolute bottom-0 object-contain transition-all duration-700 pointer-events-none z-0
          ${isHovered ? 'opacity-100 grayscale-0 mix-blend-normal' : 'opacity-40 grayscale mix-blend-multiply'}
          ${imageClass || 'right-[-10%] w-[120%] h-[100%]'} 
        `}
      />
    )}
    <div className={`
      relative z-30 mt-auto transition-all duration-500 origin-bottom-left
      ${isHovered ? 'scale-110 translate-y-0' : 'scale-100 translate-y-2'}
    `}>
      <h3 className={`
        text-sm font-black uppercase tracking-widest mb-1 transition-colors duration-500
        ${isHovered ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : textColor}
      `}>
        {title}
      </h3>
      
      <p className={`
        text-[11px] leading-tight font-bold max-w-[160px] transition-colors duration-500
        ${isHovered ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]' : textColor}
      `}>
        {description}
      </p>
    </div>
    <div className={`
      absolute bottom-[-10px] left-[-10px] text-[120px] font-black leading-none select-none z-0 transition-opacity duration-500
      ${isHovered ? 'opacity-5' : 'opacity-15'} ${textColor}
    `}>
      {number}
    </div>
  </div>
);

export default function Hobbies() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white pt-2 pb-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto border-4 border-neutral-900 overflow-hidden rounded-[2.5rem] flex flex-col md:flex-row bg-neutral-900 shadow-xl">

        <HobbyColumn 
          number="01" 
          title="Playing Instruments" 
          image="/Hobbies-1.png" 
          description="I mainly play the guitar and bass for the current bands I'm in."
          colorClass="bg-blue-400" 
          textColor="text-blue-950"
          isHovered={hoveredIndex === 0}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        <HobbyColumn 
          number="02" 
          title="Video Editing" 
          image="/Hobbies-2.png" 
          description="I edit in Adobe Premiere Pro and explore new storytelling styles."
          colorClass="bg-red-500" textColor="text-red-950"
          isHovered={hoveredIndex === 1}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        <HobbyColumn 
          number="03"
          title="Playing Games"
          image="/Hobbies-3.png"
          icon={
                <div className="flex items-center justify-center w-full h-full">
                <img 
                    src="/steam-logo.png" 
                    alt="Steam" 
                    className="w-24 h-24 object-contain opacity-80 drop-shadow-2xl" 
                />
                </div>
            }
          description="I enjoy open-world games like Genshin Impact and Wuthering Waves."
          colorClass="bg-emerald-400" textColor="text-emerald-950"
          isHovered={hoveredIndex === 2}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        <div className={`
          bg-neutral-900 flex items-center justify-center transition-all duration-500 overflow-hidden h-[400px]
          ${hoveredIndex !== null ? 'flex-[0.5] opacity-50' : 'flex-[2.5] opacity-100'}
        `}>
           <div className="text-center">
            <h2 className="text-white text-5xl font-black uppercase italic tracking-tighter">HOBBIES</h2>
            <p className="text-neutral-500 font-mono text-[15px] mt-2 tracking-widest text-center px-4">
              The three hobbies I've had almost all my life ✦
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}