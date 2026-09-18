import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import Button from "./Button";

const products = [
  { name: "School shears kit", price: "$189" },
  { name: "Signature styling bundle", price: "$64" },
  { name: "Esthetics starter kit", price: "$120" },
];

export default function Shop() {
  return (
    <section id="shop" className="bg-bg-surface py-24">
      <Container>
        <SectionHeading
          kicker="Shop"
          title="Tools our students actually use"
          description="Professional-grade kits available to students and the public."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col">
              <ImagePlaceholder label={`Insert product photo — ${product.name}`} aspect="aspect-square" rounded="rounded-xl" />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-text-main">{product.name}</span>
                <span className="text-sm text-primary">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-10">
          Visit the full shop
        </Button>
      </Container>
    </section>
  );
}
