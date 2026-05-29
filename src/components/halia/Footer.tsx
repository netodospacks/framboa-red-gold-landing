import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6">

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12 reveal">
          <a href="#" className="text-white/60 hover:text-gold transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/framboarestaurante" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-gold transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-gold transition-colors">
            <Mail size={24} />
          </a>
        </div>

        {/* Brand */}
        <div className="text-center mb-16 reveal reveal-delay-100">
          <h2 className="font-display text-3xl lg:text-4xl tracking-widest uppercase mb-2">Framboá</h2>
          <p className="text-white/60 text-sm font-serif italic mb-6 max-w-md mx-auto">
            Há 36 anos servindo o sabor do mundo do jeito da gente. Tradição, hospitalidade e excelência em cada prato.
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-white/50 font-sans text-xs tracking-widest uppercase">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={14} className="text-gold" />
              <span>Manaíra Shopping, João Pessoa - PB</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-gold" />
              <span>Das 10h às 22h</span>
            </div>
          </div>
        </div>

        {/* Campanha Dia dos Namorados */}
        <div className="text-center mb-12 max-w-2xl mx-auto reveal reveal-delay-200">
          <h4 className="font-display text-lg tracking-widest uppercase text-gold mb-3">Campanha Dia dos Namorados</h4>
          <p className="text-white/60 text-xs leading-relaxed mb-2">
            Combos especiais válidos para reservas exclusivas no dia 12 de junho. Sujeito à disponibilidade. Não cumulativo com outras promoções.
          </p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            Imagens meramente ilustrativas.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-12 reveal reveal-delay-300">
          <p className="text-[10px] tracking-widest text-white/20 uppercase">
            Restaurante Framboá © {new Date().getFullYear()}. CNPJ 12.924.627/0001-18. Todos os direitos reservados. <br className="md:hidden" />
            Desenvolvido por Senior Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
