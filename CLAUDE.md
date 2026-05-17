# Sparklight Hospital Website — Project Bible

## Project Overview
A world-class demo website for Sparklight Specialist Hospital, Mushin, Lagos, Nigeria. Built as a client pitch to replace their dead 2022 website. This is a Next.js 14 (App Router) project with Framer Motion animations and a luxury editorial design system.

**Live Goal:** Deployed to Vercel at a custom domain (eventually sparklighthospitals.com)

---

## Client Information
- **Hospital Name:** Sparklight Specialist Hospital
- **Tagline:** "Where Medicine & Nature Meet With God"
- **Secondary tagline:** "Think Health, Think Sparklight"
- **Address:** 99 Palm Avenue, Mushin, Lagos, Nigeria
- **Phone:** +234 808 614 2259
- **Email:** info@sparklightspecialist.com
- **Founded:** 2012
- **Type:** Secondary Health Care Centre, Private Hospital
- **Hours:** 24/7 (Emergency always open)

---

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Cormorant Garamond (display), DM Sans (body) — Google Fonts |
| Deployment | Vercel |
| Images | Unsplash (remote), no CMS |

---

## Brand System

### Colors (CSS Variables in globals.css)
```
--primary:       #1B4332  (deep forest green)
--primary-dark:  #12301f
--primary-light: #2d6a4f
--accent:        #D4A017  (warm amber/gold)
--accent-light:  #e8b931
--background:    #F9F6F0  (warm off-white) ← NEVER use #FFFFFF as page bg
--surface:       #FFFFFF
--text-primary:  #1A1A1A
--text-muted:    #6B7280
--sage:          #A8C5A0  (soft green)
```

### Typography
- **Display (H1–H3):** `font-family: 'Cormorant Garamond'` — always use `font-display` class
- **Body/UI:** `font-family: 'DM Sans'` — always use `font-body` class
- **Heading tracking:** `tracking-[-0.04em]` or Tailwind `tracking-tight`
- **Line height:** `leading-[1.7]` to `leading-[1.85]` for body

### BANNED Fonts (design failure if used)
❌ Inter, Roboto, Arial, Open Sans, Helvetica, Geist

---

## File Structure
```
app/
  layout.tsx          — root layout (fonts, Navbar, Footer, WhatsAppButton)
  page.tsx            — Homepage (8 sections)
  services/page.tsx   — Services & Departments
  about/page.tsx      — About, Timeline, Values, Accreditation
  doctors/page.tsx    — Doctor grid with specialty filter
  appointments/page.tsx — Booking form (client-side only, no backend)
  contact/page.tsx    — Contact form + map + info panel
  globals.css         — CSS vars, Google Fonts import, global styles

components/
  Navbar.tsx              — Floating glass pill, mobile drawer
  Footer.tsx              — Dark green, 4-column layout
  WhatsAppButton.tsx      — Fixed bottom-right float, brand green
  AnimatedCounter.tsx     — InView-triggered count-up animation
  SectionWrapper.tsx      — py-24 container component
  ServiceCard.tsx         — Service card with stagger animation
  DoctorCard.tsx          — Doctor card with avatar, MDCN number
  TestimonialCarousel.tsx — Auto-rotating 3-testimonial carousel
  StatsBar.tsx            — 4 animated stat counters
  AppointmentForm.tsx     — Full booking form with validation
  PageTransition.tsx      — Framer Motion page fade-in wrapper

lib/
  utils.ts                — cn() className utility
```

---

## Design Rules (enforce strictly)
1. **Page background:** Always `#F9F6F0` — never pure white
2. **Headings:** Always Cormorant Garamond (`font-display` class)
3. **Body text:** Always DM Sans (`font-body` or default body font)
4. **Buttons:** `rounded-full` always
5. **Cards:** `rounded-2xl` or `rounded-3xl`
6. **Shadows:** `shadow-sm` default, `shadow-md` or `shadow-lg` on hover
7. **Motion curve:** `ease-[cubic-bezier(0.32,0.72,0,1)]` for all entrances
8. **Entry animation:** `y: 32 → 0, opacity: 0 → 1, duration: 0.65s`
9. **Stagger delay:** `index * 0.08s` for grid items
10. **Amber (#D4A017):** For CTAs, accents, numbers only — never large backgrounds
11. **Mobile:** `min-h-[100dvh]` not `h-screen` (iOS Safari)
12. **IntersectionObserver:** Use Framer `useInView` or `whileInView` — never `window.addEventListener('scroll')`
13. **GPU-safe animations only:** `transform`, `opacity`, `filter` — never `width/height/top/left`

---

## Motion System
```
Golden curve: cubic-bezier(0.32, 0.72, 0, 1)
Entry state:  { opacity: 0, y: 32 }
Final state:  { opacity: 1, y: 0 }
Duration:     0.65s – 0.8s
Stagger:      0ms · 80ms · 160ms · 240ms
Viewport:     { once: true, margin: '-40px' }
```

---

## Navbar Architecture
- **Desktop:** Floating glass pill (`fixed top-5`, `rounded-full`, `backdrop-blur-2xl`)
- **Mobile:** Same pill, compressed, with hamburger → slide-down drawer
- **Scroll behavior:** `IntersectionObserver` on `#nav-sentinel` sentinel div
- **Active link:** Framer `layoutId="nav-pill"` spring animation
- **CTA button:** Amber background, dark text, `rounded-full`

---

## Pages Summary
| Page | Key Content |
|---|---|
| `/` | Hero (full-vh green), Services grid, Why Choose, Stats, Doctors, Testimonials, CTA |
| `/services` | Hero banner, 8 expanded service cards (2-col), bottom CTA |
| `/about` | Story (2-col), Mission/Vision, Values grid, Timeline, Accreditations |
| `/doctors` | Hero, specialty filter pills, 8-doctor grid with bio |
| `/appointments` | Hero, form (3-col) + sidebar (2-col), hospital hours, emergency |
| `/contact` | Emergency banner at top, contact form, info panel, Google Maps iframe |

---

## Content (Hardcoded — no CMS)

### Doctors
- Dr. Aisha Balogun — Obstetrics & Gynecology, 14 yrs
- Dr. Emeka Okonkwo — General Surgery, 11 yrs
- Dr. Fatima Suleiman — Pediatrics, 9 yrs
- Dr. Tunde Adeyemi — Internal Medicine, 16 yrs
- Dr. Ngozi Eze — Emergency Medicine, 8 yrs
- Dr. Seun Oladele — General Practice, 7 yrs
- Dr. Hauwa Musa — Obstetrics & Family Planning, 12 yrs
- Dr. Chidi Nwosu — Diagnostic Medicine, 10 yrs

### Testimonials
- Hajiya Ramota (Mushin), Mrs. Blessing Okafor (Agege), Mr. Ganiyu Salami (Papa Ajao)

### Stats
- 12,000+ Patients · 13+ Years · 20+ Doctors · 10,000+ Procedures

---

## Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Deployment
Push to GitHub → connect to Vercel → deploy. Set `NEXT_PUBLIC_*` env vars if needed.
No backend — all data is hardcoded. Form submissions show success UI only.

---

## Quality Bar
This was built as a $29K agency demo. Every interaction should feel intentional.
If something looks like a template — it's wrong. Fix it.
