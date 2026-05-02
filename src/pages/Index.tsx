import Header from "@/components/framboa/Header";
import Hero from "@/components/framboa/Hero";
import Countdown from "@/components/framboa/Countdown";
import Awards from "@/components/framboa/Awards";
import Menu from "@/components/framboa/Menu";
import Footer from "@/components/framboa/Footer";
import WhatsAppButton from "@/components/framboa/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cream">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Awards />
        <Menu />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
