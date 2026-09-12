import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero({ onOpenInquiry, onNavigate }) {
  return (
    <section id="home" className="border-b border-primary/10 bg-bg-main">
      <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-primary">Orlando's premier beauty school</span>
          </div>

          <h1 className="max-w-lg text-5xl font-medium leading-[1.05] text-text-main sm:text-6xl">
            Where craft becomes career.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
            Small class sizes, real clients, and a curriculum built by
            working professionals — so you leave licensed, confident, and
            ready to work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button onClick={onOpenInquiry} variant="primary">
              Get pricing <ArrowRight className="h-4 w-4" />
            </Button>
            <Button onClick={() => onNavigate("programs")} variant="outline">
              Explore programs
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-primary/15 pt-8">
            <div>
              <dt className="text-2xl font-medium text-primary">98%</dt>
              <dd className="text-xs text-text-muted">Board pass rate</dd>
            </div>
            <div>
              <dt className="text-2xl font-medium text-primary">15+</dt>
              <dd className="text-xs text-text-muted">Years teaching</dd>
            </div>
            <div>
              <dt className="text-2xl font-medium text-primary">92%</dt>
              <dd className="text-xs text-text-muted">Placed in field</dd>
            </div>
          </dl>
        </div>

        <ImagePlaceholder
          label="Insert editorial hero photo — student styling a client in studio light"
          aspect="aspect-[4/5]"
          className="shadow-sm"
        />
      </Container>
    </section>
  );
}
