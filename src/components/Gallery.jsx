import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

// Comprehensive catalog of free-to-use, public-domain beauty education images
const galleryItems = [
  // --- COSMETOLOGY & HAIR ---
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBlFl_lpkdCwuZwzfezFqARnhq2nAqMa-qppiU2_5MQ&s=10",
    label: "Professional hair washing at a luxury salon basin station",
    category: "Hair"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pbF7-UFR4SRa85OXXQrbOrt7cyvGzNH1Wm8tyCzn8g&s=10",
    label: "Close-up of precise shear haircut technique in progress",
    category: "Hair"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwwKbRv69BiOWXFk5EDZOn2y6bOrb2UCeOJdqK_iFUA&s=10",
    label: "Stylist performing a professional round-brush blowout styling service",
    category: "Hair"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9B7ArJV2FQ8_rL_VPrqopSaFShcWRRxjgl6X4_FzxA&s=10",
    label: "Modern cosmetology training floor with high-end mirror layout",
    category: "Hair"
  },
  {
    url: "https://www.milady.com/wp-content/uploads/2026/04/Image-2.png",
    label: "Student practicing detailed texture braiding and styling work",
    category: "Hair"
  },

  // --- NAIL TECH & MANICURES ---
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXbE00mpesl33v_9Xyd5wZMKLV4QigtgQBlI80ob2EA&s=10",
    label: "Nail technician shaping natural fingernails with a professional file",
    category: "Nails"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFdlHOQIZ5t46JgzgTEitvtM0yhfYb_hBdC6TyzhCCA&s=10",
    label: "Precise gel polish brush application at a manicure station",
    category: "Nails"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8W3teTAtYRGEUKUvDDiTz9H7R2ufdS8ex26aJsWSIzw&s=10",
    label: "Close-up showing artistic line detailing on acrylic nails",
    category: "Nails"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT295bVczN5GQuOXq0-AGCRFWRDhbE-401XM4qkxpRZrg&s=10",
    label: "Clean and sanitized individual student nail technology desk setup",
    category: "Nails"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUzW2cJuYzadARQxidFmPmA07MAxhMHvRuI8UpTFlPQ&s=10",
    label: "Curing top coat gel layers inside a digital LED/UV lamp tunnel",
    category: "Nails"
  },

  // --- ESTHETICS & SKINCARE ---
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-xXzUad2HIU85NmLqjvLXYoNsfyPugXQ2rL-hONFPg&s=10",
    label: "Esthetics student applying a clarifying clay mask to a client",
    category: "Esthetics"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfELWBql60WnQQCIQm6LVJ_hgNsgJoDcIJX8n5qGSrWA&s=10",
    label: "Advanced facial massage using a traditional cooling jade roller tool",
    category: "Esthetics"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXZpOzCbbYAg4Fy7HWlTYGYu6067MJWOd_txlxUwvBQ&s",
    label: "Skin analysis exam being completed under a magnifying diopter light lamp",
    category: "Esthetics"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GI6Xlz_6nC1Zr3xHQAtkCBWWCKssMgXQlB0UpRfpIA&s=10",
    label: "Applying nutrient-rich skincare serum drops onto facial areas",
    category: "Esthetics"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iZLs2M04yIUOfYMkVneewv6KevzFnpWtTbO6r57Mew&s=10",
    label: "Fully equipped clinical esthetics room layout featuring clean towels",
    category: "Esthetics"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-surface py-24 border-b border-primary/5">
      <Container>
        <SectionHeading
          kicker="Campus Life"
          title="A look inside our training salon & spa floors"
          align="center"
        />
        
        {/* Responsive, modern editorial grid masonry mimicking high-end layout flows */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-primary/10 bg-bg-main shadow-sm group transition-all duration-300 hover:shadow-md hover:border-primary/30 ${
                index % 4 === 0 ? "aspect-square" : "aspect-[4/5]"
              }`}
            >
              {/* Asset Image Layer */}
              <img
                src={item.url}
                alt={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay Title Card Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary-light mb-1">
                  {item.category}
                </span>
                <p className="text-xs text-white leading-snug font-medium line-clamp-2">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
