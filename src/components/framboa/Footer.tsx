import { MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="font-display text-3xl font-bold">Framboá</div>
                <div className="mt-1 text-xs uppercase tracking-[0.4em] text-accent">Restaurante</div>
                <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
                  Há 36 anos servindo o sabor do mundo do jeito da gente. Tradição,
                  hospitalidade e excelência em cada prato.
                </p>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold text-accent">Visite-nos</h4>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Manaíra Shopping
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Das 10h às 22h de segunda a domingo
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold text-accent">Campanha Dia das Mães</h4>
                <p className="mt-4 text-sm text-primary-foreground/80">
                  Combos especiais válidos para reservas até o segundo domingo de maio.
                  Sujeito à disponibilidade. Não cumulativo com outras promoções.
                </p>
                <p className="mt-3 text-xs text-primary-foreground/60">
                  Imagens meramente ilustrativas.
                </p>
              </div>
            </div>

            <div className="gold-divider mt-12 opacity-60" />

            <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-primary-foreground/60 md:flex-row">
              <span>© {new Date().getFullYear()} Restaurante Framboá. Todos os direitos reservados.</span>
              <span>CNPJ 12.924.627/0001-18</span>
            </div>
      </div>
    </footer>
  );
};

export default Footer;