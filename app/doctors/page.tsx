'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const allDoctors = [
  {
    name: 'Dr. Aisha Balogun',
    specialty: 'Obstetrics & Gynecology',
    category: 'Maternity',
    years: 14,
    qualifications: 'MBBS, FWACS, Fellow RCOG',
    bio: 'Dr. Balogun is a Fellow of the West African College of Surgeons specialising in obstetrics and gynaecology. She has delivered over 3,000 babies and manages complex high-risk pregnancies.',
    initials: 'AB',
    color: 'linear-gradient(135deg, #1B4332 0%, #2d6a4f 100%)',
    mdcn: 'MDCN/00125',
    days: 'Mon, Wed, Fri',
  },
  {
    name: 'Dr. Emeka Okonkwo',
    specialty: 'General Surgery',
    category: 'Surgery',
    years: 11,
    qualifications: 'MBBS, FWACS (Surgery)',
    bio: 'Dr. Okonkwo is an experienced general surgeon with expertise in laparoscopic and open procedures. He trained at LUTH and has practiced at major hospitals across Lagos State.',
    initials: 'EO',
    color: 'linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)',
    mdcn: 'MDCN/00218',
    days: 'Tue, Thu, Sat',
  },
  {
    name: 'Dr. Fatima Suleiman',
    specialty: 'Pediatrics',
    category: 'Pediatrics',
    years: 9,
    qualifications: 'MBBS, FWACP (Paediatrics)',
    bio: 'Dr. Suleiman specialises in general paediatrics including neonatal care, childhood infections, and nutritional disorders. She is known for her gentle bedside manner with children.',
    initials: 'FS',
    color: 'linear-gradient(135deg, #12301f 0%, #1B4332 100%)',
    mdcn: 'MDCN/00341',
    days: 'Mon, Tue, Thu',
  },
  {
    name: 'Dr. Tunde Adeyemi',
    specialty: 'Internal Medicine',
    category: 'General',
    years: 16,
    qualifications: 'MBBS, FWACP (Internal Medicine)',
    bio: 'With 16 years of experience, Dr. Adeyemi manages complex adult medical conditions including diabetes, hypertension, liver disease, and chronic kidney disease. He leads our General Medicine department.',
    initials: 'TA',
    color: 'linear-gradient(135deg, #1B4332 0%, #D4A017 100%)',
    mdcn: 'MDCN/00089',
    days: 'Mon – Fri',
  },
  {
    name: 'Dr. Ngozi Eze',
    specialty: 'Emergency Medicine',
    category: 'Emergency',
    years: 8,
    qualifications: 'MBBS, Dip. Emergency Med.',
    bio: 'Dr. Eze heads our 24/7 emergency unit. Trained in emergency and trauma management, she brings calm, precision, and speed to every critical case.',
    initials: 'NE',
    color: 'linear-gradient(135deg, #b8860b 0%, #D4A017 100%)',
    mdcn: 'MDCN/00412',
    days: 'Rotating (24/7)',
  },
  {
    name: 'Dr. Seun Oladele',
    specialty: 'General Practice',
    category: 'General',
    years: 7,
    qualifications: 'MBBS, Dip. Family Medicine',
    bio: 'Dr. Oladele is a passionate family physician who handles routine consultations, preventive care, and chronic disease monitoring with a whole-patient approach.',
    initials: 'SO',
    color: 'linear-gradient(135deg, #40916c 0%, #74c69d 100%)',
    mdcn: 'MDCN/00503',
    days: 'Mon, Wed, Fri',
  },
  {
    name: 'Dr. Hauwa Musa',
    specialty: 'Obstetrics & Family Planning',
    category: 'Maternity',
    years: 12,
    qualifications: 'MBBS, Dip. Obs, MPH',
    bio: 'Dr. Musa provides antenatal care, safe delivery services, and family planning counselling. She also runs our maternal health outreach programme for the Mushin community.',
    initials: 'HM',
    color: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)',
    mdcn: 'MDCN/00197',
    days: 'Tue, Thu, Sat',
  },
  {
    name: 'Dr. Chidi Nwosu',
    specialty: 'Diagnostic Medicine',
    category: 'General',
    years: 10,
    qualifications: 'MBBS, Dip. Clinical Pathology',
    bio: 'Dr. Nwosu oversees our diagnostic and laboratory services, ensuring accuracy, speed, and proper interpretation of all tests and imaging results.',
    initials: 'CN',
    color: 'linear-gradient(135deg, #1B4332 0%, #52b788 100%)',
    mdcn: 'MDCN/00286',
    days: 'Mon – Sat',
  },
];

const categories = ['All', 'General', 'Maternity', 'Pediatrics', 'Surgery', 'Emergency'];

export default function DoctorsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allDoctors : allDoctors.filter((d) => d.category === active);

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dgrid)" />
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
            <span className="text-white/80">Our Doctors</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed"
          >
            20+ board-certified specialists with a combined clinical experience of over 150 years, all dedicated to your health.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-20 z-30 bg-[#F9F6F0]/95 backdrop-blur border-b border-[#1B4332]/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#1B4332] text-white shadow-md'
                    : 'bg-white text-[#6B7280] hover:text-[#1B4332] hover:bg-[#1B4332]/5 border border-[#1B4332]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.32, 0.72, 0, 1] }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Avatar */}
                  <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: doc.color }}>
                    <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-white/10" />
                    <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-white/10" />
                    <div className="relative z-10 h-20 w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-2xl font-display font-bold shadow-inner">
                      {doc.initials}
                    </div>
                    {/* Green accent bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-[#1A1A1A] tracking-tight mb-0.5">{doc.name}</h3>
                    <p className="text-[#D4A017] text-xs font-semibold mb-1">{doc.specialty}</p>
                    <p className="text-[#6B7280] text-xs mb-3">{doc.qualifications}</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3 mb-4">{doc.bio}</p>

                    <div className="space-y-1.5 pt-3 border-t border-[#F9F6F0]">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-[#1B4332] bg-[#1B4332]/8 px-2 py-0.5 rounded-full">{doc.years} yrs exp</span>
                        <span className="text-xs text-[#6B7280]">MDCN: {doc.mdcn}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-[#6B7280]">{doc.days}</span>
                      </div>
                    </div>

                    <Link
                      href="/appointments"
                      className="mt-4 block w-full text-center bg-[#1B4332]/8 text-[#1B4332] text-xs font-semibold py-2.5 rounded-xl hover:bg-[#1B4332] hover:text-white transition-all duration-300"
                    >
                      Book with this doctor
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4332] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Ready to Meet Your Doctor?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Book an appointment and get matched with the right specialist for your needs.
            </p>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-[#1A1A1A] font-bold px-8 py-4 rounded-full hover:bg-[#e8b931] transition-all duration-300"
            >
              Book an Appointment
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
