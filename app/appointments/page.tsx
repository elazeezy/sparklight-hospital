'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AppointmentForm from '@/components/AppointmentForm';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM (Consultations)' },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM (Consultations)' },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM (Consultations)' },
  { day: 'Emergency', time: '24 Hours, 7 Days a Week' },
];

export default function AppointmentsPage() {
  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="apgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#apgrid)" />
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
            <span className="text-white/80">Book Appointment</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5"
          >
            Book an<br />Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed"
          >
            Fill in the form below and we&apos;ll call you within 2 hours to confirm. No long queues, no delays.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-sm"
            >
              <h2 className="font-display text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-2">
                Request Your Appointment
              </h2>
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
                All fields marked with <span className="text-red-400">*</span> are required. Our staff will contact you to confirm within 2 hours during working hours.
              </p>
              <AppointmentForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Hospital hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight">Hospital Hours</h3>
                </div>
                <ul className="space-y-3">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-start gap-3">
                      <span className="text-sm font-medium text-[#1A1A1A] shrink-0">{h.day}</span>
                      <span className={`text-sm text-right ${h.day === 'Emergency' ? 'text-[#D4A017] font-semibold' : 'text-[#6B7280]'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h3 className="font-semibold text-red-700 text-sm">Medical Emergency?</h3>
                </div>
                <p className="text-red-600 text-sm leading-relaxed mb-4">
                  Do not use this form for emergencies. Call us directly or come in immediately.
                </p>
                <a
                  href="tel:+2348086142259"
                  className="flex items-center justify-center gap-2 w-full bg-red-500 text-white font-bold text-sm py-3 rounded-xl hover:bg-red-600 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Emergency Line Now
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#1B4332]/5 border border-[#1B4332]/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="h-5 w-5 text-[#1B4332]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <h3 className="font-semibold text-[#1B4332] text-sm">Prefer WhatsApp?</h3>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  Send us a message and our team will respond promptly.
                </p>
                <a
                  href={`https://wa.me/2348078003890?text=${encodeURIComponent("Hello, I'd like to book an appointment at Sparklight Hospital.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#1B4332] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#2d6a4f] transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A] tracking-tight mb-3">Visit Us</h3>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex gap-2.5">
                    <svg className="h-4 w-4 text-[#D4A017] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>99 Palm Avenue, Mushin, Lagos, Nigeria</span>
                  </div>
                  <div className="flex gap-2.5">
                    <svg className="h-4 w-4 text-[#D4A017] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href="tel:+2348086142259" className="hover:text-[#1B4332] transition-colors">+234 808 614 2259</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
