'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    tagline: 'Your first point of care',
    description: 'Our General Medicine department provides comprehensive primary and secondary healthcare for adults of all ages. We manage acute and chronic conditions including hypertension, diabetes, malaria, typhoid, respiratory illnesses, and more.',
    longDescription: 'Our experienced physicians perform thorough consultations, order appropriate investigations, and coordinate specialist referrals when needed. We believe in treating the whole patient, not just the condition.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    highlights: ['Chronic disease management', 'Malaria & typhoid treatment', 'Hypertension & diabetes care', 'Adult vaccinations'],
  },
  {
    id: 'maternity',
    name: 'Maternity & Obstetrics',
    tagline: 'Safe births, healthy beginnings',
    description: 'Our maternity department offers expert antenatal, intrapartum, and postnatal care. We are committed to making every birth experience safe, dignified, and memorable.',
    longDescription: 'Services include full antenatal clinic (ANC), safe delivery suite, caesarean section, postnatal care, family planning, and management of high-risk pregnancies. Our ward is clean, private, and staffed 24/7.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    highlights: ['Antenatal care (ANC)', 'Safe delivery suite', 'Caesarean section', 'Postnatal & family planning'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Child Health',
    tagline: 'Specialist care for your little ones',
    description: 'We provide specialized medical care for infants, children, and adolescents. Our paediatricians are experienced in managing childhood illnesses, growth disorders, and developmental concerns.',
    longDescription: 'Services include routine immunizations (EPI schedule), nutrition counselling, growth monitoring, management of neonatal conditions, and treatment of childhood diseases including malaria, pneumonia, and diarrhoea.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    highlights: ['Childhood immunizations', 'Growth & nutrition monitoring', 'Neonatal care', 'Adolescent medicine'],
  },
  {
    id: 'emergency',
    name: 'Emergency & Trauma',
    tagline: '24/7 rapid response',
    description: 'Our emergency unit operates around the clock with trained staff, essential equipment, and immediate specialist access. We respond fast because every second counts.',
    longDescription: 'We handle road traffic accidents, acute medical emergencies, poisoning, severe infections, cardiac events, and all trauma presentations. Our triage system ensures critical cases receive immediate attention.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    highlights: ['24/7 availability', 'Trauma management', 'Acute cardiac response', 'Rapid triage system'],
  },
  {
    id: 'surgery',
    name: 'Surgery',
    tagline: 'Precise, safe, expert',
    description: 'Our surgical department handles general and specialist surgical procedures in a fully equipped theatre with an experienced surgical team and anaesthesiologists.',
    longDescription: 'We perform appendectomies, hernia repairs, caesarean sections, wound debridement, and other general surgical procedures. Pre-operative and post-operative care are managed in-house for a seamless patient experience.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.71-1.135 2.71H3.933c-1.365 0-2.135-1.71-1.135-2.71L4.2 15.3" />
      </svg>
    ),
    highlights: ['General surgery', 'Hernia & appendix', 'Wound management', 'Pre & post-op care'],
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics & Lab',
    tagline: 'Accurate results, faster answers',
    description: 'Our modern diagnostic centre offers comprehensive laboratory services, imaging, and specialized tests with rapid turnaround times.',
    longDescription: 'Available tests include full blood count, malaria RDT and microscopy, urinalysis, liver and kidney function tests, HIV screening, hepatitis panel, blood glucose, and more. Ultrasound imaging is also available on-site.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.71-1.135 2.71H3.933c-1.365 0-2.135-1.71-1.135-2.71L4.2 15.3" />
      </svg>
    ),
    highlights: ['Full blood work', 'Malaria diagnosis', 'HIV & hepatitis screening', 'Ultrasound imaging'],
  },
  {
    id: 'dental',
    name: 'Dental Care',
    tagline: 'Healthy smiles for life',
    description: 'Our dental unit provides preventive and restorative dental care in a comfortable, hygienic environment for patients of all ages.',
    longDescription: 'Services include dental consultations, scaling and polishing, tooth extractions, fillings, treatment of dental infections, and oral health education. We use sterile instruments and modern dental equipment.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlights: ['Scaling & polishing', 'Tooth extractions', 'Dental fillings', 'Oral health education'],
  },
  {
    id: 'eye-care',
    name: 'Eye Care',
    tagline: 'Protecting your vision',
    description: 'Our eye care unit offers comprehensive vision examinations and treatment of common eye conditions for both adults and children.',
    longDescription: 'Services include visual acuity testing, prescription for glasses, treatment of conjunctivitis, foreign body removal, glaucoma screening, cataract assessment, and referral for specialist surgical care when needed.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    highlights: ['Vision examination', 'Glasses prescription', 'Conjunctivitis treatment', 'Glaucoma screening'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sgrid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-2 text-white/40 text-sm mb-6"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5"
          >
            Our Services &<br />Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed"
          >
            Eight departments. One goal — your health and wellbeing. From routine care to specialist intervention, we are fully equipped for your needs.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-transparent hover:border-[#1B4332]/10 relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B4332] to-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B4332]/8 text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-1">{service.tagline}</p>
                    <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] tracking-tight mb-3">{service.name}</h2>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-2">{service.description}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{service.longDescription}</p>

                    {/* Highlights */}
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-[#1A1A1A]/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6 pt-5 border-t border-[#F9F6F0]">
                      <Link
                        href="/appointments"
                        className="inline-flex items-center gap-2 bg-[#1B4332] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2d6a4f] transition-all duration-300 hover:shadow-md"
                      >
                        Book for this department
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1B4332] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Not Sure Which Department?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Book a general consultation and our physicians will direct you to the right specialist.
            </p>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-[#1A1A1A] font-bold px-8 py-4 rounded-full hover:bg-[#e8b931] transition-all duration-300 hover:shadow-xl"
            >
              Book a Consultation
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
