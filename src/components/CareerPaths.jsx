import Container from "./Container";
import { careerPaths } from "../lib/data";

export default function CareerPaths() {
  return (
    <section className="bg-primary-dark py-24 text-bg-main">
      <Container>
        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-gold">Career paths</span>
          </div>
          <h2 className="text-3xl font-medium leading-[1.15] sm:text-4xl">
            One license, many directions
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerPaths.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-white/15 p-7 transition-colors duration-200 hover:border-gold/60"
            >
              <h3 className="text-lg font-medium">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bg-main/70">{path.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
