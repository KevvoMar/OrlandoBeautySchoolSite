import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { programs } from "../lib/data";

export default function Programs({ onOpenInquiry }) {
  return (
    <section id="programs" className="bg-bg-main py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Licensure programs"
            title="Six paths into the beauty industry"
            description="Each program combines classroom theory with supervised clinical floor hours."
          />
        </div>

        <div className="mt-12 divide-y divide-primary/10 border-y border-primary/10">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="sm:max-w-md">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-2xl font-medium text-text-main">{program.name}</h3>
                  <span className="text-sm text-text-muted">{program.hours}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {program.description}
                </p>
              </div>
              <button
                onClick={onOpenInquiry}
                className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary-dark"
              >
                Get pricing <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
