import { useState } from "react";
import { Lock, ArrowLeft, Phone } from "lucide-react";
import Container from "./Container";
import IntakeForm from "./IntakeForm";
import SchedulingModule from "./SchedulingModule";

export default function InquiryGate({ t, onBack }) {
  const [unlocked, setUnlocked] = useState(false);
  const [lifting, setLifting] = useState(false);
  const [studentData, setStudentData] = useState(null);

  function handleSuccess(formData) {
    setStudentData(formData); // Securely captures state properties locally
    setLifting(true);
    setTimeout(() => setUnlocked(true), 650);
  }

  return (
    <section className="min-h-screen bg-bg-main py-16">
      <Container>
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" /> {t.nav.backToSite}
        </button>

        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium text-primary">
              {unlocked ? t.intake.success.title : t.intake.title}
            </span>
          </div>
          <h1 className="text-4xl font-medium leading-[1.1] text-text-main sm:text-5xl">
            {unlocked ? t.intake.success.title : t.intake.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-base leading-relaxed text-text-muted">
            {unlocked ? (
              t.intake.success.subtitle
            ) : (
              <>
                <Phone className="h-4 w-4 text-primary" /> {t.intake.subtitle}
              </>
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className={`rounded-2xl border border-primary/15 bg-bg-surface p-7 sm:p-9 transition-all duration-500 ${
            unlocked ? "lg:opacity-40 pointer-events-none scale-[0.99]" : "opacity-100"
          }`}>
            <IntakeForm t={t} onSuccess={handleSuccess} />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-bg-surface p-7 sm:p-9 shadow-sm">
            <div
              className={`transition-all duration-700 ${
                unlocked ? "blur-0 opacity-100 animate-fadeIn" : "blur-md opacity-40 saturate-50 pointer-events-none"
              }`}
            >
              <SchedulingModule t={t} locked={!unlocked} studentInfo={studentData} />
            </div>

            {!unlocked && (
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg-surface/70 p-8 text-center backdrop-blur-sm transition-all duration-500 ${
                  lifting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lock className="h-6 w-6" />
                </span>
                <p className="max-w-[220px] text-sm font-medium text-text-main leading-relaxed">
                  {t.intake.lockedNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
