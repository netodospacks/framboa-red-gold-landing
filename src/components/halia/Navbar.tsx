import { useState, useEffect } from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Início",                    href: "/" },
  { label: "Reserva Dia dos Namorados", href: "/menu" },
  { label: "Nossa História",            href: "/#our-story" },
  { label: "Instagram",                 href: "/#instagram" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-out
        ${isScrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/5 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/50 to-transparent py-4 sm:py-5"
        }
      `}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/logo/Framboá-02.png"
            alt="Framboá Restaurante"
            className="h-12 md:h-16 lg:h-22 w-auto object-contain"
            style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.5))" }}
          />
        </a>

        {/* ── Nav Links (visible on all sizes, hidden on very small via clamp) ── */}
        <ul className="hidden xs:flex sm:flex items-center gap-1 sm:gap-1 md:gap-2 lg:gap-6 flex-1 justify-center">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="
                  relative text-white/75 hover:text-white
                  text-[9px] sm:text-[10px] lg:text-[11px]
                  font-semibold tracking-[0.12em] sm:tracking-[0.18em]
                  uppercase whitespace-nowrap
                  px-1.5 sm:px-2 py-1
                  transition-colors duration-200
                  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px
                  after:bg-gold after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Social icons ── */}
        <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
          <a
            href="https://www.facebook.com/framboarestaurante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 hover:text-gold transition-colors duration-200"
          >
            <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href="https://www.instagram.com/framboarestaurante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-gold transition-colors duration-200"
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href="mailto:contato@framboarestaurante.com.br"
            aria-label="E-mail"
            className="text-white/60 hover:text-gold transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>

      {/* ── Mobile nav strip (only on truly small screens, < sm) ── */}
      <div className="sm:hidden border-t border-white/10 mt-2 px-4 py-2 flex items-center justify-center gap-4 overflow-x-auto scrollbar-none">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white/70 hover:text-gold text-[9px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
