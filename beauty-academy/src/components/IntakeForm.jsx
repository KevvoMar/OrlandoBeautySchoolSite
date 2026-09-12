import { useState } from "react";
import { Loader2 } from "lucide-react";
import Button from "./Button";
import { licensePrograms, certificationClasses, massageCEClasses } from "../lib/data";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  licenseProgram: "",
  certification: "",
  massageCE: "",
};

export default function IntakeForm({ t, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  function validate() {
    const next = {};
    const required = ["firstName", "lastName", "email", "phone", "licenseProgram"];

    required.forEach((field) => {
      if (!form[field] || !form[field].trim()) {
        next[field] = t.intake.errors.required;
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t.intake.errors.email;
    }

    if (form.phone) {
      const digits = form.phone.replace(/\D/g, "");
      if (digits.length !== 10) {
        next.phone = t.intake.errors.phone;
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // NOTE: wire this up to your CRM / backend endpoint of choice.
    setTimeout(() => {
      setSubmitting(false);
      onSuccess(form);
    }, 600);
  }

  const inputClasses = (field) =>
    `w-full rounded-lg border bg-bg-main px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
      errors[field] ? "border-red-400" : "border-primary/20 focus:border-primary"
    }`;
  const labelClasses = "mb-1.5 block text-sm font-medium text-text-main";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="firstName">{t.intake.firstName}</label>
          <input
            id="firstName"
            className={inputClasses("firstName")}
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="lastName">{t.intake.lastName}</label>
          <input
            id="lastName"
            className={inputClasses("lastName")}
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">{t.intake.email}</label>
          <input
            id="email"
            type="email"
            className={inputClasses("email")}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">{t.intake.phone}</label>
          <input
            id="phone"
            type="tel"
            className={inputClasses("phone")}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(407) 208-0608"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="licenseProgram">{t.intake.licenseProgram}</label>
        <select
          id="licenseProgram"
          className={inputClasses("licenseProgram")}
          value={form.licenseProgram}
          onChange={(e) => update("licenseProgram", e.target.value)}
        >
          <option value="">{t.intake.licenseProgramPlaceholder}</option>
          {licensePrograms.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.licenseProgram && <p className="mt-1 text-xs text-red-500">{errors.licenseProgram}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="certification">
            {t.intake.certification} <span className="text-text-muted">({t.intake.optional})</span>
          </label>
          <select
            id="certification"
            className={inputClasses("certification")}
            value={form.certification}
            onChange={(e) => update("certification", e.target.value)}
          >
            <option value="">{t.intake.certificationPlaceholder}</option>
            {certificationClasses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="massageCE">
            {t.intake.massageCE} <span className="text-text-muted">({t.intake.optional})</span>
          </label>
          <select
            id="massageCE"
            className={inputClasses("massageCE")}
            value={form.massageCE}
            onChange={(e) => update("massageCE", e.target.value)}
          >
            <option value="">{t.intake.massageCEPlaceholder}</option>
            {massageCEClasses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {t.intake.submitting}
          </>
        ) : (
          t.intake.submit
        )}
      </Button>
    </form>
  );
}
