'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initial: ContactForm = { name: '', phone: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initial);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<ContactForm> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.message.trim()) e.message = 'Please enter your message';
    if (!form.phone.trim() && !form.email.trim()) {
      e.phone = 'Please provide a phone number or email';
    }
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const update = (f: keyof ContactForm, v: string) => {
    setForm(p => ({ ...p, [f]: v }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: undefined }));
  };

  const inputClass = (f: keyof ContactForm) =>
    `w-full px-4 py-3 rounded-xl border text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332] ${errors[f] ? 'border-red-300 bg-red-50/30' : 'border-[#1A1A1A]/10 hover:border-[#1B4332]/30'}`;

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 text-center">
        <p className="text-sm font-semibold">
          Emergency?{' '}
          <a href="tel:+2348086142259" className="underline underline-offset-2 hover:text-red-100 transition-colors">
            Call Now: +234 808 614 2259
          </a>
          {' '}— 24 hours, 7 days a week
        </p>
      </div>

      {/* Hero */}
      <section className="bg-[#1B4332] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cgrid)" />
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
            <span className="text-white/80">Contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed"
          >
            Questions, feedback, or just want to find us? We&apos;re here 24/7 and always happy to help.
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-sm"
            >
              <h2 className="font-display text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-2">Send a Message</h2>
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
                For appointments, please use our <Link href="/appointments" className="text-[#1B4332] font-medium hover:underline">booking page</Link>. For all other enquiries, fill in the form below.
              </p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="relative mx-auto mb-5 h-16 w-16">
                      <div className="absolute inset-0 rounded-full bg-[#1B4332]/10 animate-ping" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#1B4332]">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-2">Message Received!</h3>
                    <p className="text-[#6B7280] mb-6">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => { setSent(false); setForm(initial); }} className="text-sm font-medium text-[#6B7280] hover:text-[#1B4332] transition-colors underline underline-offset-4">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Name *</label>
                        <input type="text" placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} className={inputClass('name')} />
                        <div className="h-4 mt-1"><AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">{errors.name}</motion.p>}</AnimatePresence></div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Phone</label>
                        <input type="tel" placeholder="08012345678" value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass('phone')} />
                        <div className="h-4 mt-1"><AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">{errors.phone}</motion.p>}</AnimatePresence></div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Email</label>
                      <input type="email" placeholder="yourname@email.com" value={form.email} onChange={e => update('email', e.target.value)} className={inputClass('email')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Subject</label>
                      <input type="text" placeholder="What is this about?" value={form.subject} onChange={e => update('subject', e.target.value)} className={inputClass('subject')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Message *</label>
                      <textarea rows={5} placeholder="Write your message here..." value={form.message} onChange={e => update('message', e.target.value)} className={`${inputClass('message')} resize-none`} />
                      <div className="h-4 mt-1"><AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">{errors.message}</motion.p>}</AnimatePresence></div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1B4332] text-white font-semibold py-4 rounded-full hover:bg-[#2d6a4f] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#1B4332]/15"
                    >
                      {loading ? (
                        <><svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
                      ) : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight mb-5">Contact Information</h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg className="h-5 w-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      ),
                      label: 'Address',
                      content: '99 Palm Avenue, Mushin, Lagos, Nigeria',
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      ),
                      label: 'Phone',
                      content: '+234 808 614 2259',
                      href: 'tel:+2348086142259',
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: 'Email',
                      content: 'info@sparklightspecialist.com',
                      href: 'mailto:info@sparklightspecialist.com',
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: 'Hours',
                      content: 'Open 24 Hours · 7 Days a Week',
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3 items-start">
                      <span className="shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#1A1A1A] text-sm hover:text-[#1B4332] transition-colors">{item.content}</a>
                        ) : (
                          <p className="text-[#1A1A1A] text-sm">{item.content}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#1B4332] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <h3 className="font-semibold text-white">Chat on WhatsApp</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Quick responses, anytime. Start a conversation with our team.
                </p>
                <a
                  href={`https://wa.me/2348078003890?text=${encodeURIComponent("Hello, I'd like to enquire about Sparklight Hospital.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#D4A017] text-[#1A1A1A] font-bold py-3 rounded-full hover:bg-[#e8b931] transition-colors text-sm"
                >
                  Open WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Sparklight Hospital Location — Mushin, Lagos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3887697785165!2d3.3572!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4f0000001%3A0x1!2sPalm+Avenue%2C+Mushin%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <p className="text-center text-[#6B7280] text-sm mt-4">
            99 Palm Avenue, Mushin, Lagos — near Papa Ajao, easily accessible from Agege and Lagos Mainland
          </p>
        </div>
      </section>
    </div>
  );
}
