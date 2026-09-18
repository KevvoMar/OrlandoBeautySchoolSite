import React, { useState } from "react"; // Added useState here
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { faqs } from "../lib/data";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  // Track the unique 'q' text string of the currently opened FAQ row item
  const [openFaq, setOpenFaq] = useState(null);

  // Filter the questions using case-insensitive matches
  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Safely toggle the row state or shut the previous one cleanly
  function handleToggle(e, questionId) {
    e.preventDefault(); // Prevents browser default <details> toggle behavior
    setOpenFaq((prev) => (prev === questionId ? null : questionId));
  }

  return (
    <section id="faq" className="bg-bg-surface py-24 border-b border-primary/10">
      <Container className="max-w-3xl">
        <SectionHeading 
          kicker="FAQ" 
          title="Common questions" 
          align="center" 
        />

        {/* Live Filter Search Input Element */}
        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search questions or answers..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenFaq(null); // Collapses active selections on fresh filter loops
            }}
            className="w-full rounded-xl border border-primary/20 bg-bg-main px-4 py-3 text-sm text-text-main placeholder-text-muted outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
          />
        </div>

        {filteredFaqs.length === 0 ? (
          <p className="mt-12 text-center text-sm text-text-muted">
            No common questions match your search "{searchTerm}".
          </p>
        ) : (
          <div className="mt-12 divide-y divide-primary/5 rounded-2xl border border-primary/10 bg-bg-main overflow-hidden shadow-sm">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.q;
              return (
                <details 
                  key={faq.q} 
                  open={isOpen} // Controlled open flag reading state directly
                  className={`group transition-all duration-200 ${isOpen ? "bg-bg-surface/30" : ""}`}
                >
                  <summary 
                    onClick={(e) => handleToggle(e, faq.q)} // Overrides browser defaults safely
                    className="flex cursor-pointer list-none items-center justify-between p-6 text-base font-medium text-text-main transition-colors duration-200 hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden"
                  >
                    <span className="pr-4 leading-snug">{faq.q}</span>
                    <div className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-transform duration-300 group-hover:border-primary ${
                      isOpen ? "rotate-180 border-primary" : ""
                    }`}>
                      <svg 
                        className="h-3 w-3" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-1 animate-fadeIn">
                    <p className="text-sm leading-relaxed text-text-muted whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
