import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import logoImg from "../assets/artisticschoollogo-withbg.png";

export default function Contact({ onOpenInquiry }) {
  const details = [
    { icon: Phone, label: "Phone", value: "(407) 496-0062" },
    { icon: Mail, label: "Email", value: "orlandobeautyschool@gmail.com" },
    { icon: MapPin, label: "Campus", value: "5232 S. Orange Ave Suite B, Orlando, FL, United States, 32806" },
    { icon: Clock, label: "Front desk hours", value: "Mon, Tue, Thu: 11am–9pm | Wed, Fri: 11am–5pm | Sat: 10am–2pm (Sun: Closed)" },
  ];

  return (
    <section id="contact" className="bg-bg-main py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="Contact" title="Visit, call, or start online" />
          <ul className="mt-8 space-y-5">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-text-muted">{label}</p>
                  <p className="text-sm font-medium text-text-main">{value}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button onClick={onOpenInquiry} variant="primary" className="mt-8">
            Get pricing
          </Button>
        </div>

        <div className="flex items-center justify-center w-full max-w-xl mx-auto lg:max-w-none">
          <div className="p-1 border rounded-[25px] border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_100px_#b8860b,inset_0_0_10px_#b8860b,0_0_30px_rgba(212,175,55,1)]">
            <img
              src={logoImg}
              alt="Artistic School Logo"
              className="w-full h-auto object-contain rounded-[20px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
