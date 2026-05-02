import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const calc = (target: Date) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const nextMothersDay = () => {
  // Brazil: 2nd Sunday of May
  const now = new Date();
  for (let year = now.getFullYear(); year <= now.getFullYear() + 1; year++) {
    const may = new Date(year, 4, 1);
    const firstSunday = 1 + ((7 - may.getDay()) % 7);
    const target = new Date(year, 4, firstSunday + 7, 12, 0, 0);
    if (target.getTime() > now.getTime()) return target;
  }
  return new Date(now.getFullYear() + 1, 4, 12, 12, 0, 0);
};

const Countdown = () => {
  const [target] = useState(nextMothersDay);
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Dias", value: time.d },
    { label: "Horas", value: time.h },
    { label: "Min", value: time.m },
    { label: "Seg", value: time.s },
  ];

  return (
    <section className="container mt-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-wine md:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-md">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accent">
              <Heart className="h-3 w-3 fill-accent text-accent" /> Campanha especial
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Dia das Mães no <span className="text-gradient-gold">Framboá</span>
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Reserve sua mesa e celebre quem nos ensinou o verdadeiro sabor de casa.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {items.map((it) => (
              <div
                key={it.label}
                className="min-w-[68px] rounded-2xl border border-accent/30 bg-background/10 px-3 py-4 backdrop-blur-md md:min-w-[88px]"
              >
                <div className="font-display text-3xl font-bold tabular-nums text-accent md:text-5xl">
                  {String(it.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70 md:text-xs">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;