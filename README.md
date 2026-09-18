# The Gilded Lane Academy

A premium beauty academy website built with React (Vite) and Tailwind CSS.
Pure JavaScript — no TypeScript anywhere in the project.

## Getting Started

```bash
npm install
npm run dev
```

## One-Line Re-Theming

All colors resolve from six CSS variables in `src/index.css`:

```css
:root {
  --bg-main: 251 247 241;
  --bg-surface: 243 233 226;
  --primary: 110 30 60;
  --primary-light: 181 87 127;
  --primary-dark: 74 18 40;
  --text-main: 43 22 32;
  --text-muted: 131 112 122;
  --gold: 201 166 107;
}
```

`tailwind.config.js` maps these to semantic utility classes (`bg-bg-main`,
`bg-primary`, `text-text-muted`, etc.) — no component ever references a raw
color name, so changing the palette is a six-line edit in one file.

## The Gated Pricing / Inquiry Flow

`src/components/InquiryGate.jsx` is the core feature:
- `IntakeForm.jsx` — validates first/last name, email, phone, and license
  program (certification + massage CE are optional). All labels,
  placeholders, and error messages come from `src/lib/i18n.js`.
- `SchedulingModule.jsx` — a date/time picker, rendered blurred and
  non-interactive (`pointer-events-none`) until the intake form succeeds.
- On successful submission, the lock overlay plays an `animate-unlock`
  fade+blur-out (defined in `tailwind.config.js`) and the scheduler becomes
  fully interactive.

## Bilingual Toggle

`src/lib/i18n.js` holds the full `en`/`es` dictionary. `App.jsx` lifts
`lang` state and passes the resolved `t` object down — toggling
"Español" / "English" in the navbar re-renders the nav, the whole intake
form, and the scheduler with translated copy instantly, no page reload.

## Before You Launch

Replace `[EMAIL]` and `[CAMPUS ADDRESS]` (in `Footer.jsx` and
`Contact.jsx`), swap every `ImagePlaceholder` for real photography, and
wire `IntakeForm.jsx`'s `handleSubmit` up to your CRM or backend endpoint.

## Structure

```
src/
  App.jsx                  View state (home / inquiry) + language state
  index.css                 Theme CSS variables + base styles
  components/
    Navbar.jsx, Footer.jsx
    Hero.jsx, WhyChooseUs.jsx, Programs.jsx, ContinuedEducation.jsx,
    Services.jsx, Gallery.jsx, StudentSpotlight.jsx, CareerPaths.jsx,
    FAQ.jsx, Contact.jsx, Shop.jsx
    InquiryGate.jsx, IntakeForm.jsx, SchedulingModule.jsx
    Container.jsx, Button.jsx, SectionHeading.jsx, ImagePlaceholder.jsx
  lib/
    i18n.js                 en/es dictionary
    data.js                 Programs, certifications, CE classes, FAQ, etc.
```
