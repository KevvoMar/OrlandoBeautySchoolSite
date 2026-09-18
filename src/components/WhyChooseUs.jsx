import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "../lib/data";

export default function WhyChooseUs() {
  const [large, ...rest] = whyChooseUs;

  return (
    <section className="bg-bg-surface py-24">
      <Container>
        <SectionHeading
          kicker="Why choose us"
          title="Training that respects both your craft and your time"
          description="Every number below reflects the outcomes we actually track, term over term."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-bg-main lg:col-span-1 lg:row-span-2">
            <span className="text-6xl font-medium leading-none">{large.stat}</span>
            <div className="mt-8">
              <h3 className="text-xl font-medium">{large.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bg-main/80">{large.body}</p>
            </div>
          </div>

          {rest.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/15 bg-bg-main p-7 transition-colors duration-200 hover:border-primary/40"
            >
              <span className="text-2xl font-medium text-primary">{item.stat}</span>
              <h3 className="mt-3 text-base font-medium text-text-main">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
