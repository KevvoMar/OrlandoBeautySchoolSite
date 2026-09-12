import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const galleryLabels = [
  "Student cutting hair in the training salon",
  "Close-up of a completed balayage color service",
  "Esthetics student performing a facial",
  "Graduation day, cap and shears",
  "Nail art detail shot",
  "Massage therapy clinical practice",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-surface py-24">
      <Container>
        <SectionHeading
          kicker="Gallery"
          title="A look inside the school"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryLabels.map((label, i) => (
            <ImagePlaceholder
              key={label}
              label={`Insert photo — ${label}`}
              aspect={i % 3 === 0 ? "aspect-square" : "aspect-[4/5]"}
              rounded="rounded-xl"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
