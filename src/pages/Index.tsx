import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AcademicPrograms } from "@/components/AcademicPrograms";
import { NewsEvents } from "@/components/NewsEvents";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <AcademicPrograms />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
