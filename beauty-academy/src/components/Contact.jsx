import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Contact({ onOpenInquiry }) {
  const details = [
    { icon: Phone, label: "Phone", value: "(407) 496-0062" },
    { icon: Mail, label: "Email", value: "orlandobeautyschool@gmail.com" },
    { icon: MapPin, label: "Campus", value: "5232 S. Orange Ave Suite B, Orlando, FL, United States, 32806" },
    { icon: Clock, label: "Front desk hours", value: "Mon–Sat, 9am–7pm" },
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

        <div className="rounded-2xl border border-dashed border-primary/30 bg-bg-surface p-8 text-sm leading-relaxed text-text-muted">
          <p className="font-medium text-text-main">Insert map embed here</p>
          <p className="mt-2">
            Replace this block with an embedded map pointing to the campus
            address above.
          </p>
        </div>
      </Container>
    </section>
  );
}
