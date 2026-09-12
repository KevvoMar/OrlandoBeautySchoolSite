import Container from "./Container";
import SectionHeading from "./SectionHeading";

const services = [
  { name: "Signature Facial", price: "from $45" },{ name: "1hr Deep Cleaning Facial", price: "from $65" },{ name: "Microdermabrasion", price: "from $75" },{ name: "Saline Microdermabrasion", price: "$150" },{ name: "Micro Glycolic Peel and Mask (35%)", price: "$55" },{ name: "Micro, Glycolic Peel and Mask (50%)", price: "$60" },{ name: "Micro, Glycolic Peel and Mask (Layered)", price: "$85" },{ name: "Get Manicure & Pedicure", price: "$55" },{ name: "Haircut (Wet)", price: "from $15" },{ name: "Kid Haircut (Wet)", price: "$5" },{ name: "Shampoo and Style", price: "$25" },{ name: "Shampoo, Cut and Blow Dry", price: "from $35" },{ name: "Color", price: "from $25" },{ name: "Foil or Cap Highlights", price: "from $75" },{ name: "Perm", price: "from $45" },{ name: "Spiral or Piggyback Perm", price: "from $45" },{ name: "Hair Relaxers", price: "from $45" },{ name: "Brazilian Keratin Straightener", price: "$120 per ounce" },{ name: "Magic Sleek", price: "$120 per ounce" },{ name: "Deluxe Pedicure", price: "from $35" },{ name: "Diabetic Pedicure (First Visit)", price: "from $125" },{ name: "Diabetic Pedicure (Recurring Visit)", price: "from $65" },{ name: "Deluxe Manicure", price: "from $20" },{ name: "Deluxe Pedicure & Manicure", price: "from $45" },{ name: "Leg Facial(Deluxe Massage & Exfoliation)", price: "$55" },{ name: "Full Set Of Builder Gel Nails", price: "from $35" },{ name: "Builder Gel Nail Fill", price: "from $35" },{ name: "Full Set of Acrylics", price: "from $30" },{ name: "Full Set of Acrylics (Pink & White)", price: "from $40" },{ name: "Acrylic Fill", price: "from $25" },{ name: "Drill or Soak Off Nails (Remove Product)", price: "from $10" },{ name: "Lip or Chin Wax", price: "$10" },{ name: "Eyebrow wax", price: "$13" },{ name: "Arms wax", price: "from $40" },{ name: "Back Wax & Love Handles", price: "from $75" },{ name: "Half Leg Wax", price: "$60" },{ name: "Full Leg Wax", price: "$85" },{ name: "Bikini Or Underarm Wax", price: "$22" },{ name: "Brazilian Wax", price: "$65" },{ name: "Brazilian Sugar Wax", price: "$95" },{ name: "Classic Massage", price: "$150" },{ name: "Therapeutic Massage", price: "$300" },{ name: "Auriculotherapy", price: "from $150" },{ name: "Gemotherapy", price: "from $150" },{ name: "Chromotherapy", price: "from $150" },{ name: "Sound Therapy", price: "from $150" },{ name: "Aromatherapy", price: "from $150" },{ name: "Feet Reflexology", price: "from $150" },{ name: "Reflexology on your hands", price: "from $150" },{ name: "Reflexology on the head, scalp and face", price: "from $150" },{ name: "Lymphatic Drainage", price: "from $150" },{ name: "Thai Massage", price: "from $150" },{ name: "Lomi Lomi Massage", price: "from $150" },{ name: "Biodecoding", price: "from $150" },{ name: "Mirimiri and Romiromi Massage", price: "from $150" },{ name: "Candle Massages", price: "from $150" },{ name: "Cupping Therapy", price: "from $150" },{ name: "Gua Sha", price: "from $150" },{ name: "Wood Therapy", price: "from $150" },{ name: "Bach Flowers", price: "from $150" },{ name: "Sports massage", price: "from $150" },{ name: "Ayurvedic massages", price: "from $150" },{ name: "Massages for pregnant women", price: "from $150" },{ name: "Geriatric massage", price: "from $150" }
];

export default function Services({ onOpenInquiry }) {
  return (
    <section id="services" className="bg-bg-main py-24">
      <Container>
        <SectionHeading
          kicker="Student clinic services"
          title="Salon-quality services, taught by our students"
          description="At the Artistic School of Nails & Cosmetology, we provide leading beauty education through hands-on student training. Our clients enjoy high-quality services from skilled students in a supervised environment—all at discounted rates. Book your appointment today to experience the magic!"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={onOpenInquiry}
              className="flex items-center justify-between rounded-xl border border-primary/15 bg-bg-surface px-6 py-5 transition-colors duration-200 hover:border-primary/40 hover:cursor-pointer"
            >
              <span className="text-sm font-medium text-text-main">{service.name}</span>
              <span className="text-sm text-primary">{service.price}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenInquiry}
          className="mt-8 text-sm font-medium text-primary hover:text-primary-dark"
        >
          Book a service now
        </button>
      </Container>
    </section>
  );
}
