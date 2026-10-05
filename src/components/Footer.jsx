import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"; // Removed Video from here
import Container from "./Container";
import logoTransImg from "../assets/logotrans.png";

export default function Footer({ t, onNavigate, onOpenInquiry }) {
  return (
    <footer className="border-t border-primary/10 bg-primary-dark text-bg-main transition-colors duration-200">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col">
          <div>
            <div className="flex items-center gap-3 justify-start">
              <div className="flex h-10 w-15 items-center justify-center overflow-hidden rounded-md">
                <img 
                  src={logoTransImg} 
                  alt="Artistic School Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold tracking-wide text-white leading-none">
                Artistic School
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bg-main/70">
              A premium cosmetology, esthetics, and massage therapy school built
              around hands-on craft and real career outcomes.
            </p>
          </div>
          
          {/* Social Row Wrapper */}
          <div className="mt-6 flex gap-3">
            <a 
              href="https://www.instagram.com/artisticschoolofnails/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-bg-main/80 transition-all duration-200 hover:bg-gold hover:text-primary-dark hover:scale-105"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="https://www.facebook.com/orlandobeautyschool" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-bg-main/80 transition-all duration-200 hover:bg-gold hover:text-primary-dark hover:scale-105"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@orlandobeautyschool" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-bg-main/80 transition-all duration-200 hover:bg-gold hover:text-primary-dark hover:scale-105"
            >
              <svg 
                className="h-4 w-4 fill-current" 
                viewBox="0 0 448 512" 
                xmlns="http://w3.org"
              >
                <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a72.69 72.69 0 1 0 40.23 65.1V0h89.89a109.13 109.13 0 0 0 109.11 109.11v89.8a208.46 208.46 0 0 1-22.23 1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Explore Routes */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gold">{t.nav.programs || "Explore"}</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-bg-main/70">
            <li>
              <button onClick={() => onNavigate("programs")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.programs}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("gallery")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.gallery}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.services}
              </button>
            </li>
            <li>
              <button onClick={onOpenInquiry} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.inquiry}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources Info */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Resources</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-bg-main/70">
            <li>
              <button onClick={() => onNavigate("gallery")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.gallery}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("faq")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.faq}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("contact")} className="text-left transition-colors duration-200 hover:text-gold">
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Details */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Location</h4>
          <ul className="mt-5 space-y-4 text-sm text-bg-main/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold/80" /> 
              <a href="tel:4074960062" className="transition-colors duration-200 hover:text-gold">(407) 496-0062</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold/80" /> 
              <a href="mailto:orlandobeautyschool@gmail.com" className="break-all transition-colors duration-200 hover:text-gold">orlandobeautyschool@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" /> 
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="leading-relaxed transition-colors duration-200 hover:text-gold"
              >
                5232 S. Orange Ave Suite B,<br />Orlando, FL 32806
              </a>
            </li>
          </ul>
        </div>
      </Container>

      {/* Sub-footer Attribution Strip */}
      <div className="border-t border-white/5 py-6 bg-black/10">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-bg-main/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kevin Marrero. All rights reserved.</p>
          <p className="font-medium tracking-wide">Licensed by the State Board of Cosmetology</p>
        </Container>
      </div>
    </footer>
  );
}
