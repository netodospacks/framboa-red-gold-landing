import { Menu, Search, Share2 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container relative flex h-20 items-center justify-between">
        <button
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary"
        >
          <Menu className="h-5 w-5" />
        </button>

        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 select-none text-center"
          aria-label="Framboá — início"
        >
          <div className="font-display text-3xl font-bold tracking-wide text-primary md:text-4xl">
            Framboá
          </div>
          <div className="-mt-1 text-[10px] uppercase tracking-[0.4em] text-accent">
            Restaurante
          </div>
        </a>

        <div className="flex items-center gap-1">
          <button
            aria-label="Buscar"
            className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Compartilhar"
            className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;