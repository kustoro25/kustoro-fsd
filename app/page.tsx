import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Experience from "./components/main/Experience";
import Projects from "./components/main/Projects";
import Footer from "./components/main/Footer";
import ContactForm from "./components/main/ContactForm";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
