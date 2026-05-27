import { useEffect } from "react";
import Navbar from "@/components/halia/Navbar";
import Hero from "@/components/halia/Hero";
import Story from "@/components/halia/Story";
import InstagramFeed from "@/components/halia/InstagramFeed";
import Footer from "@/components/halia/Footer";

const Index = () => {
  useEffect(() => {
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
      {
        threshold: 0.08,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gold/30 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
