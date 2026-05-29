import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const DISH_IMAGES = [
  "/pratos/1.jpeg",
  "/pratos/2.jpeg",
  "/pratos/3.jpeg",
  "/pratos/4.jpeg",
  "/pratos/5.jpeg"
];

const Menu = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [currentDishIdx, setCurrentDishIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDishIdx((prev) => (prev + 1) % DISH_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !time) return;

    const message = `Olá! Gostaria de encomendar o Menu Degustação Amor de Cinema.\n\n*Nome:* ${name}\n*Horário de Retirada:* ${time}\n\nEstou ciente de que a retirada é no dia 12 de Junho, a partir das 15h30min no Restaurante Framboá (Manaíra Shopping).`;
    const whatsappUrl = `https://wa.me/5583982309183?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsCheckoutOpen(false);
  };

  return (
    <>
      <section id="cardapio" className="pb-16 relative z-20">
        <div className="container mx-auto px-4 md:px-0 max-w-3xl">
          <div className="relative overflow-hidden bg-[#fdfbf7] p-6 sm:p-12 md:p-16 rounded-[4px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,175,55,0.15)] border border-[#d4af37]/25">
            
            {/* Inner decorative border */}
            <div className="absolute inset-3 border border-[#d4af37]/30 pointer-events-none rounded-[2px] z-20" />
            
            {/* Content */}
            <div className="relative z-10 px-2 sm:px-6">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl text-[#8B0000] uppercase tracking-widest leading-relaxed">
                  Menu Degustação<br />
                  <span className="text-[#d4af37] text-3xl md:text-4xl">Em 5 Momentos</span>
                </h2>
                <div className="w-16 h-px bg-[#d4af37]/50 mx-auto mt-6" />
              </div>

              <div className="space-y-5 font-serif text-[#2C3E50]/90 leading-relaxed text-sm md:text-base text-justify sm:text-left">
                <p>
                  Celebre o amor com uma experiência gastronômica exclusiva, criada pelo nosso chef José Tavares para o Dia dos Namorados. Inspirado em romances do cinema, este menu degustação é uma jornada sensorial em cinco momentos — cada prato conta uma história de sabores harmoniosos, técnicas refinada e ingredientes selecionados.
                </p>
                <p>
                  Cada momento foi inspirado em um filme, onde o amor é o protagonista. Permita-se viver este momento, com um menu que guiará seus sentidos através dos seguintes momentos:
                </p>

                <div className="flex flex-col items-center gap-12 mt-14 max-w-xl mx-auto text-center relative">
                  {/* Linha vertical decorativa (fina) no fundo */}
                  <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent pointer-events-none" />

                  {/* Momento 1 */}
                  <div className="relative bg-[#fdfbf7] px-6 py-2 z-10 group">
                    <span className="block text-[9px] tracking-[0.35em] uppercase text-[#d4af37] font-bold mb-3 transition-colors group-hover:text-[#8B0000]">Primeiro Momento</span>
                    <h4 className="font-serif text-[#8B0000] text-xl lg:text-2xl leading-snug mb-2">Caprese Elevada com Camarões</h4>
                    <p className="text-sm lg:text-base text-[#2C3E50]/80 italic font-serif">Mussarela de búfala e presunto Parma</p>
                    <div className="flex items-center justify-center gap-3 mt-4 opacity-70">
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                      <p className="text-[8px] tracking-[0.2em] uppercase text-[#2C3E50] font-sans">"Cartas para Julieta"</p>
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                    </div>
                  </div>

                  {/* Momento 2 */}
                  <div className="relative bg-[#fdfbf7] px-6 py-2 z-10 group">
                    <span className="block text-[9px] tracking-[0.35em] uppercase text-[#d4af37] font-bold mb-3 transition-colors group-hover:text-[#8B0000]">Segundo Momento</span>
                    <h4 className="font-serif text-[#8B0000] text-xl lg:text-2xl leading-snug mb-2">Lagosta Dourada</h4>
                    <p className="text-sm lg:text-base text-[#2C3E50]/80 italic font-serif">Com maçã e mel trufado</p>
                    <div className="flex items-center justify-center gap-3 mt-4 opacity-70">
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                      <p className="text-[8px] tracking-[0.2em] uppercase text-[#2C3E50] font-sans">"Uma Linda Mulher"</p>
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                    </div>
                  </div>

                  {/* Momento 3 */}
                  <div className="relative bg-[#fdfbf7] px-6 py-2 z-10 group">
                    <span className="block text-[9px] tracking-[0.35em] uppercase text-[#d4af37] font-bold mb-3 transition-colors group-hover:text-[#8B0000]">Terceiro Momento</span>
                    <h4 className="font-serif text-[#8B0000] text-xl lg:text-2xl leading-snug mb-2">Conchiglione de Ricota</h4>
                    <p className="text-sm lg:text-base text-[#2C3E50]/80 italic font-serif">Damascos defumados e presunto Parma</p>
                    <div className="flex items-center justify-center gap-3 mt-4 opacity-70">
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                      <p className="text-[8px] tracking-[0.2em] uppercase text-[#2C3E50] font-sans">"Diário de uma Paixão"</p>
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                    </div>
                  </div>

                  {/* Momento 4 */}
                  <div className="relative bg-[#fdfbf7] px-6 py-2 z-10 group">
                    <span className="block text-[9px] tracking-[0.35em] uppercase text-[#d4af37] font-bold mb-3 transition-colors group-hover:text-[#8B0000]">Quarto Momento</span>
                    <h4 className="font-serif text-[#8B0000] text-xl lg:text-2xl leading-snug mb-2">Arroz Cremoso</h4>
                    <p className="text-sm lg:text-base text-[#2C3E50]/80 italic font-serif">Ragu de costela e farofa cítrica</p>
                    <div className="flex items-center justify-center gap-3 mt-4 opacity-70">
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                      <p className="text-[8px] tracking-[0.2em] uppercase text-[#2C3E50] font-sans">"P.S. Eu Te Amo"</p>
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                    </div>
                  </div>

                  {/* Momento 5 */}
                  <div className="relative bg-[#fdfbf7] px-6 py-2 z-10 group">
                    <span className="block text-[9px] tracking-[0.35em] uppercase text-[#d4af37] font-bold mb-3 transition-colors group-hover:text-[#8B0000]">Quinto Momento</span>
                    <h4 className="font-serif text-[#8B0000] text-xl lg:text-2xl leading-snug mb-2">Mousse de Chocolate</h4>
                    <p className="text-sm lg:text-base text-[#2C3E50]/80 italic font-serif">Com baunilha e crumble de castanhas</p>
                    <div className="flex items-center justify-center gap-3 mt-4 opacity-70">
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                      <p className="text-[8px] tracking-[0.2em] uppercase text-[#2C3E50] font-sans">"Chocolate"</p>
                      <div className="h-px w-6 bg-[#d4af37]/50" />
                    </div>
                  </div>
                </div>

                <p className="text-center font-bold text-[#8B0000] italic pt-6">
                  Garanta o seu menu e surpreenda quem você ama com um jantar digno de cinema.
                </p>
              </div>

              {/* Footer Action */}
              <div className="mt-12 text-center">
                <div className="w-16 h-px bg-[#d4af37]/50 mx-auto mb-6" />
                
                {/* Promotional Badge */}
                <div className="inline-block bg-[#d4af37] text-white text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-[2px] font-bold mb-4 shadow-md">
                  Valor promocional até 4 de Junho
                </div>
                
                <div className="mb-10 flex flex-col items-center justify-center">
                  <span className="block text-[#2C3E50]/60 text-[10px] tracking-widest uppercase mb-1">Valor do Menu Degustação (Casal)</span>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[#2C3E50]/40 line-through text-lg md:text-xl font-serif">R$ 309,90</span>
                    <span className="font-serif text-3xl md:text-5xl text-[#8B0000] font-bold">R$ 259,90</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 mb-10 w-full sm:w-auto bg-[#8B0000] text-white rounded-[2px] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#600000] hover:scale-[1.02] shadow-[0_4px_14px_rgba(139,0,0,0.4)]"
                >
                  Garantir Meu Menu
                </button>

                {/* Luxury Horizontal Image Row */}
                <div className="w-full mb-4 relative">
                  {/* Fades nas bordas para dar efeito de luxo */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fdfbf7] to-transparent z-20 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fdfbf7] to-transparent z-20 pointer-events-none" />
                  
                  <div className="w-full overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory flex gap-4 px-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {DISH_IMAGES.map((src, idx) => (
                      <div 
                        key={idx} 
                        className="relative w-40 md:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-[0_15px_35px_-5px_rgba(0,0,0,0.4)] border border-[#d4af37]/40 snap-center shrink-0 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(139,0,0,0.4)]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                        <img 
                          src={src} 
                          alt={`Detalhe do Prato ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-[#fdfbf7] w-full max-w-md rounded-[4px] shadow-2xl border border-[#d4af37]/30 p-6 md:p-8">
            
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 text-[#2C3E50]/40 hover:text-[#8B0000] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <span className="block text-[#d4af37] tracking-[0.25em] text-[10px] font-bold uppercase mb-2">Finalizar Reserva</span>
              <h3 className="font-serif text-3xl text-[#8B0000] mb-2">Amor de Cinema</h3>
              <p className="text-sm font-sans text-[#2C3E50]/60 uppercase tracking-widest">
                Menu Degustação em 5 Momentos
              </p>
            </div>

            <div className="bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent border-y border-[#d4af37]/20 py-4 mb-8 text-xs text-[#8B0000]/80 font-sans tracking-wide text-center uppercase">
              Retirada dia <strong>12 de Junho</strong> <br /> a partir das <strong>15h30min</strong> <br />
              <span className="text-[9px] text-[#2C3E50]/50 mt-1 block">Restaurante Framboá (Manaíra Shopping)</span>
            </div>

            <form onSubmit={handleCheckout} className="space-y-5">
              <div className="relative">
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#2C3E50]/60 font-bold mb-2 ml-1">
                  Seu Nome Completo
                </label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#d4af37]/30 px-2 py-2 text-sm text-[#2C3E50] focus:outline-none focus:border-[#8B0000] transition-colors font-serif placeholder:text-[#2C3E50]/30"
                  placeholder="Como devemos lhe chamar?"
                />
              </div>

              <div className="relative">
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#2C3E50]/60 font-bold mb-2 ml-1">
                  Horário de Retirada (A partir das 15h30)
                </label>
                <select 
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#d4af37]/30 px-2 py-2 text-sm text-[#2C3E50] focus:outline-none focus:border-[#8B0000] transition-colors appearance-none font-serif cursor-pointer"
                >
                  <option value="" disabled>Selecione o horário</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                </select>
                <div className="absolute right-2 bottom-3 pointer-events-none text-[#d4af37]">
                  ▼
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full relative overflow-hidden group bg-[#128C7E] text-white py-4 rounded-[2px] text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-[0_4px_20px_rgba(18,140,126,0.3)] hover:shadow-[0_6px_25px_rgba(18,140,126,0.4)] hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Reservar via WhatsApp
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                </button>
              </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;