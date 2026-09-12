import { Quote } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import { studentSpotlights } from "../lib/data";

export default function StudentSpotlight() {
  return (
    <section className="bg-bg-main py-24">
      <Container>
        <SectionHeading kicker="Student spotlight" title="Where our graduates land" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {studentSpotlights.map((student) => (
            <div key={student.name} className="flex flex-col">
              <ImagePlaceholder
                label={`Insert portrait of ${student.name}`}
                aspect="aspect-[4/5]"
              />
              <Quote className="mt-5 h-5 w-5 text-gold" />
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-main">
                "{student.quote}"
              </p>
              <div className="mt-4 border-t border-primary/10 pt-4">
                <p className="text-sm font-medium text-text-main">{student.name}</p>
                <p className="text-xs text-text-muted">{student.program}</p>
                <p className="mt-1 text-xs font-medium text-primary">{student.now}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
