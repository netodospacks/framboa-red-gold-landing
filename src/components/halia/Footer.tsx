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
          <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-white/50 font-sans text-xs tracking-widest uppercase">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={14} className="text-gold" />
              <span>Manaíra Shopping, João Pessoa - PB</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-gold" />
              <span>(83) 3246-5426</span>
            </div>
          </div>
        </div>

        {/* Institutional Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/30 reveal reveal-delay-200">
          <a href="#" className="hover:text-white transition-colors">Artigos</a>
          <a href="#" className="hover:text-white transition-colors">Direitos Autorais</a>
          <a href="#" className="hover:text-white transition-colors">Carreiras</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-12 reveal reveal-delay-300">
          <p className="text-[10px] tracking-widest text-white/20 uppercase">
            Restaurante Framboá © 2024. Todos os direitos reservados. <br className="md:hidden" />
            Desenvolvido por Senior Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
