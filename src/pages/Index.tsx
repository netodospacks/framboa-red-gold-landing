import Header from "@/components/framboa/Header";
import Hero from "@/components/framboa/Hero";
import Menu from "@/components/framboa/Menu";
import Footer from "@/components/framboa/Footer";
import WhatsAppButton from "@/components/framboa/WhatsAppButton";
import FloatingCart from "@/components/framboa/FloatingCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cream">
      <Header />
      <main className="pb-24">
        <Hero />
        <Menu />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCart />
    </div>
  );
};

export default Index;
