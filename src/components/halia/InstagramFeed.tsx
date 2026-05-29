import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  return null; // Ocultado a pedido do usuário
  
  const images = [
    { src: "/images/halia/halia_insta_1_1778790904538.png", url: "https://www.instagram.com/reel/DF5_AMiNEz1/?igsh=aWNpaWVnZ3Fibnlv" },
    { src: "/images/halia/halia_insta_2_1778791170834.png", url: "https://www.instagram.com/reel/DHJMieMOEJg/?igsh=MWp2am9zMnR6NWV3NQ==" },
    { src: "/images/halia/halia_insta_3_1778791206595.png", url: "https://www.instagram.com/reel/DIlitgpqwVU/?igsh=MTMzbWE0M3BnMnNyeA==" },
    { src: "/images/halia/halia_story_interior_1778790306848.png", url: "https://www.instagram.com/reel/DQU16l7kW0P/?igsh=MTFwdHRxdWFuZHk4OQ==" },
    { src: "/images/halia/halia_story_dish_1778790460696.png", url: "https://www.instagram.com/framboarestaurante" },
  ];

  return (
    <section className="py-24 bg-neutral-50" id="instagram">

      {/* Section heading */}
      <div className="container mx-auto px-6 text-center mb-16 reveal">
        <h3 className="mb-4">
          <span className="block font-script text-gold text-3xl lg:text-5xl mb-2">Momentos no</span>
          <span className="block font-display text-black text-4xl lg:text-5xl uppercase tracking-widest">INSTAGRAM</span>
        </h3>
        <p className="text-black/50 font-sans text-sm tracking-widest uppercase flex items-center justify-center gap-2">
          <Instagram size={16} /> @framboarestaurante
        </p>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-2 max-w-[1920px] mx-auto">
        {images.map((img, idx) => (
          <a
            key={idx}
            href={img.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`aspect-square overflow-hidden group relative block reveal reveal-delay-${(idx % 5 + 1) * 100}`}
          >
            <img
              src={img.src}
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
