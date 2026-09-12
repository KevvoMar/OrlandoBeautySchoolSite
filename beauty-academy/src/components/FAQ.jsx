import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { faqs } from "../lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg-surface py-24">
      <Container className="max-w-3xl">
        <SectionHeading kicker="FAQ" title="Common questions" align="center" />

        <div className="mt-12 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-bg-main">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-main">
                {faq.q}
                <span className="ml-4 text-primary transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
