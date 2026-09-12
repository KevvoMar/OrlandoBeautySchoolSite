import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import Container from "./Container";

export default function Footer({ t, onNavigate, onOpenInquiry }) {
  return (
    <footer className="border-t border-primary/10 bg-primary-dark text-bg-main">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-primary-dark">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-medium">Artistic School</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-bg-main/70">
            A premium cosmetology, esthetics, and massage therapy school built
            around hands-on craft and real career outcomes.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-primary-dark">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/orlandobeautyschool" target="_blank" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-primary-dark">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gold">{t.nav.programs}</h4>
          <ul className="mt-4 space-y-3 text-sm text-bg-main/80">
            <li><button onClick={() => onNavigate("programs")} className="hover:text-gold">{t.nav.programs}</button></li>
            <li><button onClick={() => onNavigate("continued-education")} className="hover:text-gold">{t.nav.continuedEd}</button></li>
            <li><button onClick={() => onNavigate("services")} className="hover:text-gold">{t.nav.services}</button></li>
            <li><button onClick={onOpenInquiry} className="hover:text-gold">{t.nav.inquiry}</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gold">{t.nav.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm text-bg-main/80">
            <li><button onClick={() => onNavigate("gallery")} className="hover:text-gold">{t.nav.gallery}</button></li>
            <li><button onClick={() => onNavigate("faq")} className="hover:text-gold">{t.nav.faq}</button></li>
            <li><button onClick={() => onNavigate("shop")} className="hover:text-gold">{t.nav.shop}</button></li>
            <li><button onClick={() => onNavigate("contact")} className="hover:text-gold">{t.nav.contact}</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gold">{t.nav.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm text-bg-main/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> (407) 496-0062</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> orlandobeautyschool@gmail.com </li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> 
5232 S. Orange Ave Suite B, Orlando, FL, United States, 32806</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-bg-main/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Artistic School. All rights reserved.</p>
          <p>Licensed by the state board of cosmetology.</p>
        </Container>
      </div>
    </footer>
  );
}
