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
    <section className="container mt-6 md:mt-8">
      <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-md border border-accent/20 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="h-4 w-4 text-primary fill-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Especial Dia das Mães</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 w-full">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex flex-col items-center rounded-xl bg-secondary/30 border border-border/50 py-2.5 shadow-sm"
            >
              <div className="font-display text-2xl font-bold tabular-nums text-primary">
                {String(it.value).padStart(2, "0")}
              </div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">
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