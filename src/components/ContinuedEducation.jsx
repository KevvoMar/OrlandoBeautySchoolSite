import { GraduationCap } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { certificationClasses, massageCEClasses } from "../lib/data";

export default function ContinuedEducation({ onOpenInquiry }) {
  return (
    <section id="continued-education" className="bg-bg-surface py-24">
      <Container>
        <SectionHeading
          kicker="Continued education"
          title="Keep growing after licensure"
          description="Short-form certifications and required CE hours for working professionals."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-bg-main p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-medium text-text-main">Certification classes</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {certificationClasses.map((c) => (
                <li key={c} className="flex items-center justify-between border-b border-primary/10 pb-3 text-sm text-text-muted last:border-0">
                  {c}
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenInquiry}
              className="mt-6 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Get pricing on a certification
            </button>
          </div>

          <div className="rounded-2xl bg-bg-main p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-medium text-text-main">Massage CE classes</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {massageCEClasses.map((c) => (
                <li key={c} className="flex items-center justify-between border-b border-primary/10 pb-3 text-sm text-text-muted last:border-0">
                  {c}
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenInquiry}
              className="mt-6 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Get pricing on a CE class
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
