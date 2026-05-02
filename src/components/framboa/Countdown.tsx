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
    <section className="container mt-12 md:mt-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-wine md:p-14 text-center flex flex-col items-center">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-2xl flex flex-col items-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent backdrop-blur-sm border border-accent/20">
            <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> 
            <span>Especial</span>
          </div>
          
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl text-gradient-gold">
            Dia das Mães
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-primary-foreground/85 max-w-lg">
            Um momento inesquecível merece um sabor à altura. O contador já começou para o domingo mais especial do ano!
          </p>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-4 gap-3 md:gap-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="min-w-[72px] rounded-2xl border border-accent/30 bg-background/10 px-3 py-4 md:px-5 md:py-6 backdrop-blur-md md:min-w-[100px] shadow-sm transition-transform hover:scale-105"
            >
              <div className="font-display text-3xl font-bold tabular-nums text-accent md:text-5xl">
                {String(it.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70 md:text-xs">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;