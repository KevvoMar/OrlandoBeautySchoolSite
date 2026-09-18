import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import logoImg from "../assets/logotrans.png"; 

export default function Navbar({ t, lang, onToggleLang, onNavigate, onOpenInquiry, view }) {
  const [open, setOpen] = useState(false);

  const links = [
    { key: "home", id: "home" },
    { key: "programs", id: "programs" },
    // { key: "continuedEd", id: "continued-education" },
    { key: "services", id: "services" },
    { key: "gallery", id: "gallery" },
    { key: "faq", id: "faq" },
    { key: "contact", id: "contact" },
  ];

  function handleNav(id) {
    setOpen(false);
    onNavigate(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary-dark/10 bg-primary/30 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 mr-5"
          >
            <div className="flex h-16 w-auto items-center justify-center overflow-hidden rounded-md">
              <img
                src={logoImg}
                alt="Artistic School Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-left font-display text-2xl font-medium leading-none text-text-main">
              Artistic
              <span className="block font-body text-[12px] font-medium tracking-[0.16em] text-primary mt-1">
                School
              </span>
            </span>
          </button>

          {/* Desktop Navigation Link Blocks */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const isActive = view === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {t.nav[link.key]}
                  {/* Subtle decorative gold line underneath the active item */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
            <button
              onClick={onOpenInquiry}
              className={`text-sm font-medium transition-colors ${
                view === "inquiry" ? "text-primary font-semibold" : "text-text-muted hover:text-primary"
              }`}
            >
              {t.nav.inquiry}
            </button>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button
              onClick={onToggleLang}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {t.nav.langToggle}
            </button>
            <Button onClick={onOpenInquiry} variant="primary">
              {t.nav.getPricing}
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-main lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Navigation View Panel */}
      {open && (
        <div className="border-t border-primary/10 bg-bg-main/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => {
              const isActive = view === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text-muted hover:bg-bg-surface hover:text-primary"
                  }`}
                >
                  {t.nav[link.key]}
                </button>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                onOpenInquiry();
              }}
              className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                view === "inquiry"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-text-muted hover:bg-bg-surface hover:text-primary"
              }`}
            >
              {t.nav.inquiry}
            </button>
            <button
              onClick={onToggleLang}
              className="mt-1 rounded-lg px-3 py-3 text-left text-sm font-medium text-text-muted hover:bg-bg-surface hover:text-primary"
            >
              {t.nav.langToggle}
            </button>
            <Button
              onClick={() => {
                setOpen(false);
                onOpenInquiry();
              }}
              variant="primary"
              className="mt-2 w-full"
            >
              {t.nav.getPricing}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
