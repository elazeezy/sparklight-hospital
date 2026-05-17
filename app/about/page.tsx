'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2012',
    title: 'Doors Open',
    body: 'Sparklight Hospital opened its doors at 99 Palm Avenue, Mushin, offering primary and general medicine to the community.',
  },
  {
    year: '2015',
    title: 'Department Expansion',
    body: 'We expanded to include a dedicated maternity wing, paediatric unit, and 24/7 emergency care — doubling our capacity.',
  },
  {
    year: '2018',
    title: 'Surgical Theatre',
    body: 'A new fully-equipped surgical theatre was commissioned, enabling us to perform general and specialist surgical procedures in-house.',
  },
  {
    year: '2019',
    title: 'Modern Diagnostics Lab',
    body: 'State-of-the-art diagnostic laboratory and ultrasound imaging centre were established, dramatically improving diagnostic capabilities.',
  },
  {
    year: '2022',
    title: 'Full Renovation',
    body: 'A complete facility renovation upgraded wards, reception areas, and patient facilities to the highest standards of comfort and hygiene.',
  },
  {
    year: '2026',
    title: 'Digital Transformation',
    body: 'Launch of our digital patient booking system and world-class new website — making Sparklight more accessible to every family across Lagos.',
  },
];

const values = [
  {
    title: 'Patient First',
    body: 'Every decision we make starts with the patient. Your comfort, dignity, and recovery are our highest priority.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Clinical Excellence',
    body: 'We adhere to evidence-based medicine, continuous education, and the highest standards of clinical care at every level.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Compassionate Care',
    body: 'We treat every patient like family — with empathy, respect, and genuine concern for their wellbeing and that of their loved ones.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    body: 'We are transparent about diagnoses, treatments, and costs. No hidden fees, no unnecessary tests, no shortcuts.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971z" />
      </svg>
    ),
  },
  {
    title: 'Community Rootedness',
    body: 'Mushin is our home. We are invested in the health of this community and committed to serving it for generations to come.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Improvement',
    body: 'We invest in our people, our technology, and our facilities — always seeking to deliver better care than we did yesterday.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

const accreditations = [
  { name: 'MDCN Registered', body: 'Medical & Dental Council of Nigeria', abbr: 'MDCN' },
  { name: 'Lagos State Ministry of Health', body: 'Lagos State Government', abbr: 'LSMOH' },
  { name: 'NAFDAC Compliant', body: 'National Agency for Food & Drug Administration', abbr: 'NAFDAC' },
];

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=60&auto=format&fit=crop" alt="About Sparklight" fill className="object-cover opacity-10" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/90 to-[#12301f]/80" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="agrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#agrid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white/40 text-sm mb-6"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed"
          >
            Where medicine and nature meet with God — since 2012.
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
            >
              <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
                Built on Service,<br />Grounded in Community
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Sparklight Specialist Hospital opened its doors in 2012 with a clear mission: to provide excellent, affordable, and compassionate healthcare to families in Mushin and across Lagos Mainland.
                </p>
                <p>
                  What started as a modest primary care facility has grown into a full-service specialist hospital with eight departments, 20+ doctors, and thousands of families who trust us year after year.
                </p>
                <p>
                  Located at 99 Palm Avenue, Mushin, we are a Secondary Health Care Centre operating on a 24-hour basis, 7 days a week. We believe that quality private healthcare should be accessible — not just to the privileged, but to every family in our community.
                </p>
                <p>
                  Our motto — <em className="text-[#1B4332] font-medium">Where Medicine & Nature Meet With God</em> — reflects our belief that healing is holistic, and that skilled medical care, a safe environment, and spiritual peace together create the best outcomes for our patients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop"
                  alt="Sparklight Hospital doctors"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1B4332]/20" />
              </div>
              {/* Stat card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
                <p className="font-display text-4xl font-bold text-[#D4A017]">13+</p>
                <p className="text-[#1A1A1A] font-semibold text-sm mt-1">Years of Service</p>
                <p className="text-[#6B7280] text-xs">Serving Lagos since 2012</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-[#1B4332] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: 'Our Mission',
                icon: '🎯',
                text: 'To provide excellent and comprehensive medical services to patients in a friendly, safe, and dignified environment, using qualified and experienced personnel, appropriate technology, and a faith-grounded approach to care.',
              },
              {
                label: 'Our Vision',
                icon: '🔭',
                text: 'To be the most trusted private healthcare institution in Lagos Mainland — known for clinical excellence, compassionate service, and a genuine commitment to the health of every family we serve. Think Health, Think Sparklight.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <p className="text-[#D4A017] text-sm font-semibold tracking-widest uppercase mb-3">{item.label}</p>
                <p className="text-white text-lg leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo mosaic */}
      <section className="py-16 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center mb-10">
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Our Facility</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight">Inside Sparklight Hospital</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80&auto=format&fit=crop', alt: 'Hospital reception', tall: true },
              { src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80&auto=format&fit=crop', alt: 'Laboratory', tall: false },
              { src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=80&auto=format&fit=crop', alt: 'Surgery theatre', tall: false },
              { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80&auto=format&fit=crop', alt: 'Patient care', tall: true },
              { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&auto=format&fit=crop', alt: 'Doctors', tall: false },
              { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80&auto=format&fit=crop', alt: 'Maternity', tall: false },
              { src: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=700&q=80&auto=format&fit=crop', alt: 'Pediatrics', tall: false },
              { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80&auto=format&fit=crop', alt: 'Dental', tall: false },
            ].map(({ src, alt, tall }, i) => (
              <motion.div key={alt} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07, ease: [0.32, 0.72, 0, 1] }}
                className={`group relative ${tall ? 'row-span-2' : ''} rounded-2xl overflow-hidden ${tall ? 'h-full min-h-[280px]' : 'h-36 md:h-44'} shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-108" sizes="350px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-white text-xs font-semibold">{alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mb-14"
          >
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-2 tracking-tight">{value.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F9F6F0] py-20 lg:py-28 border-t border-[#1B4332]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mb-14"
          >
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
              Key Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1B4332]/15 hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className="flex gap-6 sm:gap-8 items-start"
                >
                  {/* Year circle */}
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <div className="h-16 w-16 rounded-full bg-[#1B4332] flex items-center justify-center shadow-md z-10">
                      <span className="font-display text-white font-bold text-sm leading-tight text-center">{m.year}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm">
                    <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-2 tracking-tight">{m.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mb-10"
          >
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Accreditation</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Certified. Regulated. Trusted.
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-5">
            {accreditations.map((a, i) => (
              <motion.div
                key={a.abbr}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="flex items-center gap-4 bg-[#F9F6F0] border border-[#1B4332]/10 rounded-2xl px-6 py-4"
              >
                <div className="h-12 w-12 rounded-full bg-[#1B4332] flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold text-center leading-tight">{a.abbr}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{a.name}</p>
                  <p className="text-[#6B7280] text-xs">{a.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
