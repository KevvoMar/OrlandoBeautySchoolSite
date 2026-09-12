import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Programs from "./components/Programs";
import ContinuedEducation from "./components/ContinuedEducation";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import StudentSpotlight from "./components/StudentSpotlight";
import CareerPaths from "./components/CareerPaths";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import InquiryGate from "./components/InquiryGate";
import { translations } from "./lib/i18n";

export default function App() {
  const [lang, setLang] = useState("en");
  const [view, setView] = useState("home");
  const t = translations[lang];

  function navigate(id) {
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function openInquiry() {
    setView("inquiry");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToSite() {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-bg-main font-body text-text-main">
      <Navbar
        t={t}
        lang={lang}
        onToggleLang={() => setLang((l) => (l === "en" ? "es" : "en"))}
        onNavigate={navigate}
        onOpenInquiry={openInquiry}
        view={view}
      />

      {view === "inquiry" ? (
        <InquiryGate t={t} onBack={backToSite} />
      ) : (
        <>
          <Hero onOpenInquiry={openInquiry} onNavigate={navigate} />
          <WhyChooseUs />
          <Programs onOpenInquiry={openInquiry} />
          <ContinuedEducation onOpenInquiry={openInquiry} />
          <Services onOpenInquiry={openInquiry} />
          <Gallery />
          <StudentSpotlight />
          <CareerPaths />
          <FAQ />
          <Contact onOpenInquiry={openInquiry} />
          <Shop />
        </>
      )}

      <Footer t={t} onNavigate={navigate} onOpenInquiry={openInquiry} />
    </div>
  );
}
