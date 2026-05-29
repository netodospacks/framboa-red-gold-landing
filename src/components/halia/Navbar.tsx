import { useState, useEffect } from "react";
import { Instagram, Youtube } from "lucide-react";

const NAV_LINKS = [
  { label: "Início",                    href: "/" },
  { label: "Menu Dia dos Namorados",    href: "/menu" },
  { label: "NOSSAS PREMIAÇÕES",         href: "/premiacao" },
  { label: "Instagram",                 href: "/#instagram" },
];

interface NavbarProps {
  /** When true, hides the logo initially and reveals it on scroll */
  hideLogoOnDesktop?: boolean;
  /** When true, navbar is always dark (for pages without a full-screen dark hero) */
  alwaysDark?: boolean;
}

const Navbar = ({ hideLogoOnDesktop = false, alwaysDark = false }: NavbarProps) => {
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
        ${(isScrolled || alwaysDark)
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-2 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/50 to-transparent py-4 sm:py-6"
        }
      `}
    >
      {/* Container is relative so the absolute center positions correctly */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ── Left side: Instagram ── */}
        <div className="flex-1 flex items-center justify-start">
          <a
            href="https://www.instagram.com/framboarestaurante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`transition-all duration-500 ${
              (!isScrolled && !alwaysDark) ? "opacity-0 pointer-events-none" : "opacity-100"
            } text-white/60 hover:text-gold`}
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* ── Center: Logo ── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none w-full">
          <a
            href="/"
            className={`transition-all duration-500 pointer-events-auto ${
              (!isScrolled && !alwaysDark)
                ? "opacity-0 scale-90 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
          >
            <img
              src="/logo/framboa-logo.png"
              alt="Framboá Restaurante"
              /* Restored elegant sizes */
              className="h-10 sm:h-12 md:h-16 lg:h-22 w-auto object-contain"
              style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.6))" }}
            />
          </a>
        </div>

        {/* ── Right side: Desktop Nav Links + YouTube ── */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6">
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="
                    relative text-white/75 hover:text-white
                    text-[11px]
                    font-semibold tracking-[0.18em]
                    uppercase whitespace-nowrap
                    px-2 py-1
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

          {/* YouTube */}
          <div className="flex items-center lg:border-l lg:border-white/10 lg:pl-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="YouTube"
              className={`transition-all duration-500 ${
                (!isScrolled && !alwaysDark) ? "opacity-0 pointer-events-none" : "opacity-100"
              } text-white/60 hover:text-gold`}
            >
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile nav strip (only on truly small screens, < lg) ── */}
      <div className={`lg:hidden mt-3 px-2 sm:px-4 py-2 flex items-center justify-center gap-3 sm:gap-5 overflow-x-auto scrollbar-none border-t ${(isScrolled || alwaysDark) ? "border-white/10" : "border-transparent"}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white/70 hover:text-gold text-[8.5px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 px-1"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
