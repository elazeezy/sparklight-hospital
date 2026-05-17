'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    category: 'Appointments',
    icon: '📅',
    items: [
      { q: 'How do I book an appointment at Sparklight Hospital?', a: 'You can book via our website booking form, call us on +234 808 614 2259, or send us a WhatsApp message. We confirm all appointments within 2 hours during business hours.' },
      { q: 'Can I walk in without an appointment?', a: 'Yes, walk-ins are welcome for our General Medicine and Emergency departments. However, booking ahead is strongly recommended for specialist consultations to avoid waiting.' },
      { q: 'What should I bring to my appointment?', a: 'Please bring a valid ID (National ID, driver\'s licence, or passport), any previous medical records or test results, and your medication list if you are currently on any drugs.' },
      { q: 'How far in advance can I book an appointment?', a: 'You can book up to 4 weeks in advance. For urgent cases, same-day appointments may be available depending on doctor availability — call us directly.' },
      { q: 'Can I reschedule or cancel my appointment?', a: 'Yes. Please call or WhatsApp us at least 24 hours before your appointment to reschedule or cancel. Late cancellations may incur a small administrative fee.' },
    ],
  },
  {
    category: 'Services & Departments',
    icon: '🏥',
    items: [
      { q: 'What departments does Sparklight Hospital have?', a: 'We have 8 departments: General Medicine, Maternity & Obstetrics, Pediatrics & Child Health, Emergency & Trauma, Surgery, Diagnostics & Lab, Dental Care, and Eye Care.' },
      { q: 'Does the hospital operate 24 hours?', a: 'Our Emergency department operates 24 hours, 7 days a week with no exceptions. Scheduled outpatient consultations run Monday–Friday (8am–8pm), Saturday (8am–4pm), and Sunday (10am–2pm).' },
      { q: 'Do you offer antenatal (ANC) services?', a: 'Yes. Our Maternity & Obstetrics department runs a full antenatal clinic with weekly ANC sessions. We follow the WHO recommended 8-contact model. Deliveries are managed by experienced midwives and obstetricians.' },
      { q: 'Do you perform surgery on-site?', a: 'Yes. We have a fully equipped surgical theatre for general surgical procedures. Our surgical team handles appendectomies, hernia repairs, caesarean sections, and wound management.' },
      { q: 'What lab tests are available?', a: 'We run a comprehensive in-house laboratory including full blood count, malaria (RDT and microscopy), blood glucose, liver and kidney function tests, HIV screening, hepatitis B & C, urinalysis, and more. Ultrasound imaging is also available.' },
    ],
  },
  {
    category: 'Costs & Payment',
    icon: '💳',
    items: [
      { q: 'How much does a consultation cost?', a: 'General practitioner consultations start from ₦3,000. Specialist consultations vary by department. We are transparent with our pricing — you will always be informed of costs before any procedure.' },
      { q: 'Do you accept HMO or health insurance?', a: 'We are working to on-board selected HMO providers. Currently, we accept self-pay in cash or bank transfer. Our membership plans also offer significant discounts as an alternative to traditional HMO.' },
      { q: 'Can I pay in instalments?', a: 'Payment plans may be arranged for major procedures. Speak to our billing office at the reception for assistance — we are committed to making care accessible.' },
      { q: 'Do you have a membership or discount programme?', a: 'Yes! Our Sparklight Membership Programme offers plans starting from ₦5,000/month with priority booking, lab discounts, free consultations, and more. Visit our Membership page to sign up.' },
    ],
  },
  {
    category: 'Emergency & Safety',
    icon: '🚨',
    items: [
      { q: 'What do I do in a medical emergency?', a: 'Come directly to our Emergency department at 99 Palm Avenue, Mushin — we are open 24/7. Alternatively, call +234 808 614 2259 and our emergency team will guide you. Do not delay in seeking care.' },
      { q: 'Do you have an ambulance service?', a: 'We currently do not operate our own ambulance. In an emergency, proceed to the hospital as fast as safely possible or contact Lagos State Emergency number (767 or 112) for ambulance dispatch.' },
      { q: 'Is the hospital safe for children?', a: 'Absolutely. Our premises are child-safe with a dedicated paediatric unit, trained paediatric nurses, and child-friendly examination rooms. We follow all infection control protocols.' },
      { q: 'How do you handle infection control?', a: 'We follow strict WHO and Nigerian Ministry of Health infection control guidelines. All clinical areas are regularly sanitised, sterile equipment is used for all procedures, and our waste disposal complies with all regulations.' },
    ],
  },
  {
    category: 'Membership & Digital',
    icon: '✦',
    items: [
      { q: 'How do I become a Sparklight member?', a: 'Visit our Membership page, choose your preferred plan, and fill in the sign-up form. Our team will contact you within 24 hours to activate your member card and benefits.' },
      { q: 'Can I use the chatbot for medical advice?', a: 'Our chatbot can answer general questions about the hospital, help you book appointments, and provide basic health information. For medical diagnosis or treatment decisions, always consult one of our qualified doctors.' },
      { q: 'Is my personal health data secure?', a: 'Yes. All patient data is stored securely and handled in strict confidence in line with the Nigerian Data Protection Act. We never share your medical information with third parties without your explicit consent.' },
    ],
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className={`font-semibold text-sm transition-colors duration-200 ${open ? 'text-[#1B4332]' : 'text-[#1A1A1A]'}`}>{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }} className="shrink-0">
          <svg className="h-5 w-5 text-[#1B4332]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }} className="overflow-hidden">
            <div className="px-6 pb-5 pt-0">
              <div className="h-px w-full bg-[#F9F6F0] mb-4" />
              <p className="text-[#6B7280] text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const allCategories = ['All', ...faqData.map(d => d.category)];

  const filtered = faqData
    .filter(section => activeCategory === 'All' || section.category === activeCategory)
    .map(section => ({
      ...section,
      items: section.items.filter(item =>
        !search || item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(section => section.items.length > 0);

  const totalResults = filtered.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full"><defs><pattern id="fgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#fgrid)"/></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">FAQ</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight mb-5">
            Frequently Asked<br /><span className="text-[#D4A017]">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg mb-8 leading-relaxed">
            Can't find your answer here? Our 24/7 chatbot is always ready to help.
          </motion.p>

          {/* Search box */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.32, 0.72, 0, 1] }} className="relative max-w-xl">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search questions..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017]/50 focus:border-[#D4A017] backdrop-blur" />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <div className="sticky top-20 z-30 bg-[#F9F6F0]/95 backdrop-blur border-b border-[#1B4332]/5 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {allCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-[#1B4332] text-white shadow-md' : 'bg-white text-[#6B7280] hover:text-[#1B4332] border border-[#1B4332]/10'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {search && (
            <p className="text-[#6B7280] text-sm mb-8">{totalResults} result{totalResults !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;</p>
          )}

          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-2">No results found</h3>
              <p className="text-[#6B7280] mb-6">Try a different search term or ask our chatbot.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="text-[#1B4332] font-semibold text-sm hover:underline">Clear search</button>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {filtered.map(section => (
                <div key={section.category}>
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{section.icon}</span>
                    <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] tracking-tight">{section.category}</h2>
                  </motion.div>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <AccordionItem key={item.q} q={item.q} a={item.a} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="mt-20 bg-[#1B4332] rounded-3xl p-10 text-center">
            <p className="text-4xl mb-4">💬</p>
            <h3 className="font-display text-3xl font-semibold text-white mb-3">Still Have Questions?</h3>
            <p className="text-white/60 mb-7 max-w-md mx-auto">Our 24/7 chatbot can answer in seconds. Or speak directly with our team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#1A1A1A] font-bold px-8 py-3.5 rounded-full hover:bg-[#e8b931] transition-colors text-sm">
                Contact Us
              </Link>
              <a href="tel:+2348086142259" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm">
                Call +234 808 614 2259
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
