'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import StatsBar from '@/components/StatsBar';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';

/* ── Unsplash image bank ── */
const IMGS = {
  hero: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=85&auto=format&fit=crop',
  heroOverlay: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80&auto=format&fit=crop',
  heroCard1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop',
  heroCard2: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&auto=format&fit=crop',
  services: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop',
  maternity: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&auto=format&fit=crop',
  emergency: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format&fit=crop',
  lab: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop',
  surgery: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80&auto=format&fit=crop',
  whyChoose: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1200&q=80&auto=format&fit=crop',
  doctors: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80&auto=format&fit=crop',
  community: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80&auto=format&fit=crop',
  pediatrics: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=800&q=80&auto=format&fit=crop',
  dental: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop',
};

const serviceData = [
  { name: 'General Medicine', description: 'Comprehensive consultations, chronic disease management, and primary care for all ages.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>, img: IMGS.services },
  { name: 'Maternity & Obstetrics', description: 'Expert antenatal care, safe deliveries, postnatal support, and family planning services.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>, img: IMGS.maternity },
  { name: 'Pediatrics & Child Health', description: 'Specialized care for infants, children, and adolescents — immunizations, growth monitoring, and treatment.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, img: IMGS.pediatrics },
  { name: 'Emergency & Trauma', description: '24/7 emergency response with trained doctors ready to handle critical and traumatic injuries.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>, img: IMGS.emergency },
  { name: 'Surgery', description: 'General and specialist surgeries performed by experienced surgeons in a safe, sterile environment.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.71-1.135 2.71H3.933c-1.365 0-2.135-1.71-1.135-2.71L4.2 15.3" /></svg>, img: IMGS.surgery },
  { name: 'Diagnostics & Lab', description: 'Modern laboratory testing, imaging, and diagnostic services with fast, accurate results.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-8.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" /></svg>, img: IMGS.lab },
  { name: 'Dental Care', description: 'Complete dental services from routine cleaning and fillings to extractions and restorations.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, img: IMGS.dental },
  { name: 'Eye Care', description: 'Comprehensive eye examinations, vision correction, and treatment of eye conditions and diseases.', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, img: IMGS.lab },
];

const doctors = [
  { name: 'Dr. Aisha Balogun', specialty: 'Obstetrics & Gynecology', years: 14, initials: 'AB', color: 'linear-gradient(135deg,#1B4332 0%,#2d6a4f 100%)', mdcn: 'MDCN/00125' },
  { name: 'Dr. Emeka Okonkwo', specialty: 'General Surgery', years: 11, initials: 'EO', color: 'linear-gradient(135deg,#2d6a4f 0%,#40916c 100%)', mdcn: 'MDCN/00218' },
  { name: 'Dr. Fatima Suleiman', specialty: 'Pediatrics', years: 9, initials: 'FS', color: 'linear-gradient(135deg,#12301f 0%,#1B4332 100%)', mdcn: 'MDCN/00341' },
  { name: 'Dr. Tunde Adeyemi', specialty: 'Internal Medicine', years: 16, initials: 'TA', color: 'linear-gradient(135deg,#1B4332 0%,#D4A017 100%)', mdcn: 'MDCN/00089' },
];

/* ─── Parallax Hero ─── */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center bg-[#1B4332] overflow-hidden">
      {/* Parallax BG image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image src={IMGS.hero} alt="Hospital" fill className="object-cover opacity-25" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/95 via-[#1B4332]/80 to-[#12301f]/90" />
      </motion.div>

      {/* Geometric grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full"><defs><pattern id="herogrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#herogrid)"/></svg>
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-[#D4A017]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#A8C5A0]/10 blur-3xl pointer-events-none" />

      {/* ── Floating image cards (right side) ── */}
      <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 xl:gap-4">
        {/* Mobile: compact single card, full on xl */}
        {/* Card 1 — visible from sm upward */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-32 h-24 sm:w-44 sm:h-32 xl:w-52 xl:h-36 rounded-xl xl:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
        >
          <Image src={IMGS.heroCard1} alt="Doctors" fill className="object-cover" sizes="(max-width:640px) 128px,(max-width:1280px) 176px, 208px" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 to-transparent" />
          <div className="absolute bottom-1.5 left-2 xl:bottom-2 xl:left-3">
            <p className="text-white text-[10px] xl:text-xs font-semibold">Expert Doctors</p>
            <p className="text-white/60 text-[9px] xl:text-[10px] hidden sm:block">Board-certified specialists</p>
          </div>
        </motion.div>

        {/* Card 2 — hidden on very small, compact on sm */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="hidden sm:block relative w-32 h-24 sm:w-44 sm:h-32 xl:w-52 xl:h-36 rounded-xl xl:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 ml-4 xl:ml-8"
        >
          <Image src={IMGS.heroCard2} alt="Lab" fill className="object-cover" sizes="(max-width:1280px) 176px, 208px" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 to-transparent" />
          <div className="absolute bottom-1.5 left-2 xl:bottom-2 xl:left-3">
            <p className="text-white text-[10px] xl:text-xs font-semibold">Modern Lab</p>
            <p className="text-white/60 text-[9px] xl:text-[10px] hidden sm:block">Fast, accurate diagnostics</p>
          </div>
        </motion.div>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl xl:rounded-2xl p-2 xl:p-3 flex items-center gap-2 xl:gap-3"
        >
          <span className="relative flex h-2.5 w-2.5 xl:h-3 xl:w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-full w-full bg-emerald-400" /></span>
          <div><p className="text-white text-[10px] xl:text-xs font-semibold">Emergency Open</p><p className="text-white/50 text-[9px] xl:text-[10px]">24/7 · All days</p></div>
        </motion.div>
      </div>

      {/* Main text */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 pr-36 sm:pr-52 xl:pr-80">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            Mushin · Lagos · Est. 2012
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-[-0.04em] mb-6">
            Your Health.<br /><span className="text-[#D4A017]">Our Calling.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Comprehensive private healthcare in the heart of Mushin, Lagos. Trusted by thousands of families since 2012 — where medicine and nature meet with God.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/appointments" className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#1A1A1A] font-bold px-8 py-4 rounded-full hover:bg-[#e8b931] transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/25 active:scale-[0.97] text-base">
              Book an Appointment
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-300 text-base">
              Our Services
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap gap-5">
            {['MDCN Registered Physicians', '24/7 Emergency Care', 'Modern Diagnostics'].map(b => (
              <div key={b} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#D4A017] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/70 text-sm font-medium">{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Full-bleed image section (Services) ─── */
function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section ref={ref} className="bg-[#F9F6F0] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }} className="text-center mb-16">
          <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">Departments & Services</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">From routine check-ups to complex care — we're equipped for your needs.</p>
        </motion.div>

        {/* Full-bleed image banner */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }} className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image src={IMGS.services} alt="Hospital Services" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/80 via-[#1B4332]/40 to-transparent" />
          </motion.div>
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-2">8 Departments</p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">Specialist care under one roof</h3>
              <p className="text-white/70 mt-2 text-sm">Modern facilities. Expert hands. Real results.</p>
            </div>
          </div>
        </motion.div>

        {/* 4-image quick-view strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { img: IMGS.maternity, label: 'Maternity' },
            { img: IMGS.emergency, label: 'Emergency' },
            { img: IMGS.lab, label: 'Diagnostics' },
            { img: IMGS.surgery, label: 'Surgery' },
          ].map(({ img, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
              <Image src={img} alt={label} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110" sizes="300px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 via-[#1B4332]/20 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-sm font-semibold">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceData.map((s, i) => <ServiceCard key={s.name} {...s} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#1B4332] font-semibold hover:text-[#D4A017] transition-colors group">
            View all departments
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Why Choose — with split image ─── */
function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const items = [
    { icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, title: 'Experienced Specialists', body: 'Board-certified doctors with 12+ years average clinical experience. Every specialist is MDCN-registered.' },
    { icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" /></svg>, title: 'Affordable Private Care', body: "Quality care without NHIS delays. Transparent pricing, no hidden fees, flexible payment plans." },
    { icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, title: 'Close to Home', body: 'Located at 99 Palm Avenue, Mushin — serving families across Lagos Mainland since 2012.' },
  ];

  return (
    <section ref={ref} className="bg-[#1B4332] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image half with parallax */}
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <Image src={IMGS.whyChoose} alt="Why Choose Sparklight" fill className="object-cover opacity-70" sizes="50vw" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1B4332]/60 lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B4332]" />

          {/* Overlay stat card */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
            <p className="font-display text-4xl font-bold text-[#D4A017]">98%</p>
            <p className="text-white text-sm font-semibold mt-1">Patient Satisfaction Rate</p>
            <p className="text-white/50 text-xs">Based on 2026 patient surveys</p>
          </motion.div>
        </div>

        {/* Text half */}
        <div className="py-20 lg:py-28 px-8 lg:px-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}>
            <p className="text-[#D4A017] text-sm font-semibold tracking-widest uppercase mb-4">Why Sparklight</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-10">Care You Can Count On</h2>
            <div className="space-y-8">
              {items.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease: [0.32, 0.72, 0, 1] }}
                  className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-white/8 border border-white/10 text-[#D4A017] flex items-center justify-center">{item.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Community photo strip ─── */
function CommunityStrip() {
  const imgs = [
    { src: IMGS.heroCard1, alt: 'Doctor consultation' },
    { src: IMGS.community, alt: 'Community care' },
    { src: IMGS.pediatrics, alt: 'Pediatric care' },
    { src: IMGS.maternity, alt: 'Maternity' },
    { src: IMGS.emergency, alt: 'Emergency' },
  ];

  return (
    <section className="py-20 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center">
          <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Real People, Real Care</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">Life at Sparklight</h2>
        </motion.div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-8 pb-4 snap-x snap-mandatory scrollbar-none">
        {imgs.map(({ src, alt }, i) => (
          <motion.div key={alt} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="group relative shrink-0 w-72 h-52 rounded-2xl overflow-hidden shadow-md snap-center hover:shadow-xl transition-shadow duration-300">
            <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-108" sizes="288px" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xs font-semibold">{alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Doctors section with hero image ─── */
function DoctorsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="bg-[#F9F6F0] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big image banner */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-16 shadow-xl">
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image src={IMGS.doctors} alt="Our Doctors" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/85 via-[#1B4332]/50 to-transparent" />
          </motion.div>
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-xl">
              <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-2">Our Team</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">Meet Our Doctors</h2>
              <p className="text-white/70 text-sm leading-relaxed">20+ board-certified specialists committed to your care.</p>
            </div>
          </div>
        </motion.div>

        <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {doctors.map((doc, i) => (
            <div key={doc.name} className="min-w-[280px] md:min-w-0 snap-center">
              <DoctorCard {...doc} index={i} />
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-10">
          <Link href="/doctors" className="inline-flex items-center gap-2 text-[#1B4332] font-semibold hover:text-[#D4A017] transition-colors group">
            Meet all our doctors
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Membership teaser ─── */
function MembershipTeaser() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1B4332] via-[#2d6a4f] to-[#1B4332] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full"><defs><pattern id="mgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="#D4A017"/></pattern></defs><rect width="100%" height="100%" fill="url(#mgrid)"/></svg>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}>
            <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              ✦ Exclusive Membership
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Become a Sparklight<br />Member
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Priority consultations, discounted lab tests, free annual check-ups, and a dedicated care coordinator — all for one simple monthly fee.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Priority Booking', 'Free Annual Check-up', '20% Lab Discount', 'Dedicated Care Line'].map(b => (
                <span key={b} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="h-3.5 w-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {b}
                </span>
              ))}
            </div>
            <Link href="/membership" className="inline-flex items-center gap-2 bg-[#D4A017] text-[#1A1A1A] font-bold px-8 py-4 rounded-full hover:bg-[#e8b931] transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20">
              Explore Membership Plans
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="grid grid-cols-2 gap-4">
            {[
              { plan: 'Silver', price: '₦5,000', per: '/month', color: 'from-slate-400 to-slate-500' },
              { plan: 'Gold', price: '₦12,000', per: '/month', color: 'from-[#D4A017] to-[#b8860b]', popular: true },
              { plan: 'Platinum', price: '₦25,000', per: '/month', color: 'from-violet-500 to-purple-600' },
              { plan: 'Family', price: '₦35,000', per: '/month', color: 'from-[#1B4332] to-[#40916c]' },
            ].map((p, i) => (
              <motion.div key={p.plan} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className={`relative bg-white/8 border border-white/15 rounded-2xl p-5 hover:bg-white/12 transition-colors duration-300 ${p.popular ? 'ring-2 ring-[#D4A017]' : ''}`}>
                {p.popular && <span className="absolute -top-2.5 left-3 bg-[#D4A017] text-[#1A1A1A] text-[10px] font-bold px-2.5 py-0.5 rounded-full">POPULAR</span>}
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${p.color} mb-3`} />
                <p className="text-white font-semibold text-sm">{p.plan}</p>
                <p className="font-display text-2xl font-bold text-[#D4A017]">{p.price}</p>
                <p className="text-white/40 text-xs">{p.per}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Blog teaser ─── */
function BlogTeaser() {
  const posts = [
    { slug: 'malaria-prevention', category: 'Health Tips', title: 'Malaria Prevention in Lagos: What Every Family Should Know', date: 'May 12, 2026', img: 'https://images.unsplash.com/photo-1581093804475-577d72e35330?w=600&q=80&auto=format&fit=crop', readTime: '4 min read' },
    { slug: 'maternal-health', category: 'Maternity', title: 'Your Complete Antenatal Care Guide for a Healthy Pregnancy', date: 'May 8, 2026', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&auto=format&fit=crop', readTime: '6 min read' },
    { slug: 'child-vaccination', category: 'Pediatrics', title: "The 2026 Nigerian Immunization Schedule: Your Child's Vaccine Checklist", date: 'Apr 29, 2026', img: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&q=80&auto=format&fit=crop', readTime: '5 min read' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Health Knowledge</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">From Our Blog</h2>
          </div>
          <Link href="/blog" className="shrink-0 inline-flex items-center gap-2 text-[#1B4332] font-semibold hover:text-[#D4A017] transition-colors group">
            View all articles
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-108" sizes="400px" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1B4332] text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6B7280] text-xs mb-3 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#6B7280]/40" />
                  <span>{post.readTime}</span>
                </p>
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-4 group-hover:text-[#1B4332] transition-colors">{post.title}</h3>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-[#1B4332] text-sm font-semibold group-hover:text-[#D4A017] transition-colors">
                  Read article
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function AppointmentCTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0"><svg viewBox="0 0 1440 60" className="w-full fill-[#F9F6F0]"><path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" /></svg></div>
      <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 60" className="w-full fill-[#F9F6F0]"><path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" /></svg></div>
      <div className="bg-gradient-to-br from-[#D4A017] via-[#e8b931] to-[#b8860b] py-24 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }} className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-4">Ready to See a Doctor?</h2>
          <p className="text-[#1A1A1A]/60 text-lg mb-10 leading-relaxed">Book an appointment today — no long queues, no delays. Confirmed within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments" className="inline-flex items-center justify-center gap-2 bg-[#1B4332] text-white font-bold px-10 py-4 rounded-full hover:bg-[#2d6a4f] transition-all duration-300 hover:shadow-2xl text-base active:scale-[0.97]">
              Book Now
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <a href="tel:+2348086142259" className="inline-flex items-center justify-center gap-2 bg-white/30 text-[#1A1A1A] font-semibold px-10 py-4 rounded-full hover:bg-white/50 transition-all duration-300 text-base border border-[#1A1A1A]/10">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsBar />
      <CommunityStrip />
      <DoctorsSection />
      <section className="bg-[#1B4332]/5 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }} className="text-center mb-14">
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Patient Stories</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">What Our Patients Say</h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>
      <BlogTeaser />
      <AppointmentCTABanner />
    </>
  );
}
