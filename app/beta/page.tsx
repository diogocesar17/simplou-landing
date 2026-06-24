import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DemoWhatsApp from "../components/DemoWhatsApp";
import Problema from "../components/Problema";
import ComparacaoPlanilhas from "../components/ComparacaoPlanilhas";
import Funcionalidades from "../components/Funcionalidades";
import ComoFunciona from "../components/ComoFunciona";
import PublicoAlvo from "../components/PublicoAlvo";
import Planos from "../components/Planos";
import ProvasSocial from "../components/ProvasSocial";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";

export default function Beta() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoWhatsApp />
      <Problema />
      <ComparacaoPlanilhas />
      <Funcionalidades />
      <ComoFunciona />
      <PublicoAlvo />
      <Planos />
      <ProvasSocial />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
