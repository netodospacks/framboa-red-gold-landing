import { useEffect } from "react";
import Navbar from "@/components/halia/Navbar";
import Menu from "@/components/framboa/Menu";
import CartDrawer from "@/components/framboa/CartDrawer";
import FloatingCart from "@/components/framboa/FloatingCart";
import MiniChefChat from "@/components/framboa/MiniChefChat";
import Footer from "@/components/halia/Footer";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-black" style={{ background: "linear-gradient(to bottom, #0c0604 0%, #0c0604 25%, #5a0a0a 55%, #8B0000 75%, #3d0000 90%, #000000 100%)" }}>
      {/* Premium Navbar */}
      <Navbar />

      {/* Cinematic Banner */}
      <div className="relative w-full h-[70vw] min-h-[260px] max-h-[80vw] lg:h-[55vh] bg-[#0c0604]">
        
        {/* Mobile Background */}
        <div 
          className="lg:hidden absolute inset-0 w-full h-full bg-no-repeat bg-cover" 
          style={{ backgroundImage: "url('/images/amor-de-cinema.jpg')", backgroundPosition: "center 20px" }} 
        />
        
        {/* Desktop Background */}
        <div 
          className="hidden lg:block absolute inset-0 w-full h-full bg-no-repeat bg-cover" 
          style={{ backgroundImage: "url('/fundo_PC/IMG_3722.JPG.jpeg')", backgroundPosition: "center 30%" }} 
        />
        
        {/* Top Fade para dar leitura ao Header (Sombra preta) - mais suave */}
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none z-20" style={{ background: "linear-gradient(to bottom, rgba(12,6,4,0.7) 0%, rgba(12,6,4,0.2) 50%, transparent 100%)" }} />
        
        {/* Bottom Fade into the red background */}
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-20" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(12,6,4,0.6) 50%, #0c0604 100%)" }} />
      </div>

      {/* Main Menu Content — sobre fundo vermelho */}
      <main className="pt-10 pb-4 min-h-[70vh] relative z-20 overflow-hidden">
        {/* The Menu Card */}
        <div className="relative z-10">
          <Menu />
        </div>
      </main>

      {/* Footer — igual ao da tela Início (fundo bg-black) */}
      <Footer />

      {/* Interactive Cart flow elements */}
      <CartDrawer />
      <FloatingCart />
      <MiniChefChat />
    </div>
  );
};

export default MenuPage;
