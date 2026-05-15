import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FitCheck from "@/components/FitCheck";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyUs />
        <CaseStudies />
        <Process />
        <About />
        <Portfolio />
        <FitCheck />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
