import React, { useState, useEffect } from "react";
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
  const [view, setView] = useState(() => {
    const path = window.location.pathname.replace("/", "");
    if (!path || path === "home") return "home";
    return path; // Dynamically sets view based on the URL path (e.g., /services -> "services")
  });
  const t = translations[lang];

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace("/", "");
      if (!path || path === "home") {
        setView("home");
      } else {
        setView(path);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function updateUrl(targetView) {
    const targetPath = targetView === "home" ? "/" : `/${targetView}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
    }
  }

  function navigate(id) {
    // If navigating to an id, change page view to match that explicit section path
    setView(id);
    updateUrl(id);
    window.scrollTo({ top: 0, behavior: "smooth"});
  }

  function openInquiry() {
    setView("inquiry");
    updateUrl("inquiry");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToSite() {
    setView("home");
    updateUrl("home");
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

      {/* Standalone Page Render Routing Conditional Block */}
      {view === "inquiry" ? (
        <InquiryGate t={t} onBack={backToSite} />
      ) : view === "programs" ? (
        <Programs onOpenInquiry={openInquiry} />
      ) : view === "continued-education" ? (
        <ContinuedEducation onOpenInquiry={openInquiry} />
      ) : view === "services" ? (
        <Services onOpenInquiry={openInquiry} />
      ) : view === "gallery" ? (
        <Gallery />
      ) : view === "spotlight" ? (
        <StudentSpotlight />
      ) : view === "careers" ? (
        <CareerPaths />
      ) : view === "faq" ? (
        <FAQ />
      ) : view === "contact" ? (
        <Contact onOpenInquiry={openInquiry} />
      ) : view === "shop" ? (
        <Shop />
      ) : (
        /* Base Homepage view Only */
        <>
          <Hero onOpenInquiry={openInquiry} onNavigate={navigate} />
          <WhyChooseUs />
        </>
      )}

      <Footer t={t} onNavigate={navigate} onOpenInquiry={openInquiry} />
    </div>
  );
}
