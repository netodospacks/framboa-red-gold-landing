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

const nextValentinesDay = () => {
  // Brazil: June 12th
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 5, 12, 12, 0, 0); // Month 5 is June in JS (0-indexed)
  if (target.getTime() < now.getTime()) {
    target = new Date(year + 1, 5, 12, 12, 0, 0);
  }
  return target;
};

const Countdown = () => {
  const [target] = useState(nextValentinesDay);
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
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Especial Dia dos Namorados</span>
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