import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import ComoFunciona from "./components/ComoFunciona";
import Funcionalidades from "./components/Funcionalidades";
import Planos from "./components/Planos";
import ProvasSocial from "./components/ProvasSocial";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problema />
      <ComoFunciona />
      <Funcionalidades />
      <Planos />
      <ProvasSocial />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
