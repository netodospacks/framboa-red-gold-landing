import { useEffect } from "react";
import Navbar from "@/components/halia/Navbar";
import Menu from "@/components/framboa/Menu";
import CartDrawer from "@/components/framboa/CartDrawer";
import FloatingCart from "@/components/framboa/FloatingCart";
import Footer from "@/components/halia/Footer";

const MenuPage = () => {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gold/30 selection:text-black">
      {/* Premium Navbar */}
      <Navbar />

      {/* Main content with padding to prevent navbar overlap */}
      <main className="pt-28 md:pt-36 bg-gradient-cream min-h-[70vh]">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-8">
          <h1 className="font-script text-gold text-4xl lg:text-6xl mb-2">
            Sabores Especiais
          </h1>
          <p className="font-display text-black text-2xl lg:text-4xl uppercase tracking-[0.15em] mb-4">
            CARDÁPIO EXCLUSIVO
          </p>
          <div className="w-20 h-px bg-gold/50 mx-auto mb-6" />
        </div>

        {/* The Mother's Day Interactive Menu */}
        <Menu />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart flow elements */}
      <CartDrawer />
      <FloatingCart />
    </div>
  );
};

export default MenuPage;
