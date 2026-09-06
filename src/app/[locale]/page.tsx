import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/Footer/Footer";
import FeaturedPatterns from "@/components/FeaturedPatterns/FeaturedPatterns";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedPatterns />
        <Features />
      </main>
      <Footer />
    </>
  );
}