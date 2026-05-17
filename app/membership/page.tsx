'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    id: 'silver',
    name: 'Silver Care',
    price: '₦5,000',
    period: 'per month',
    color: 'from-slate-400 to-slate-500',
    description: 'Essential coverage for individuals seeking affordable private care.',
    features: [
      'Priority appointment booking',
      '2 free GP consultations/month',
      '10% discount on lab tests',
      'Discounted pharmacy rates',
      'Health tips newsletter',
      'Member support line (8am–8pm)',
    ],
    notIncluded: ['Specialist consultations', 'Free annual check-up', 'Emergency priority'],
  },
  {
    id: 'gold',
    name: 'Gold Care',
    price: '₦12,000',
    period: 'per month',
    color: 'from-[#D4A017] to-[#b8860b]',
    popular: true,
    description: 'Our most popular plan — complete care with specialist access.',
    features: [
      'Priority appointment booking',
      '4 free GP consultations/month',
      '2 specialist consultations/month',
      '20% discount on all lab tests',
      'Free annual health check-up',
      'Dedicated care coordinator',
      'Emergency department priority',
      '15% pharmacy discount',
    ],
    notIncluded: ['Family members coverage'],
  },
  {
    id: 'platinum',
    name: 'Platinum Elite',
    price: '₦25,000',
    period: 'per month',
    color: 'from-violet-500 to-purple-600',
    description: 'Unlimited access to all departments. VIP experience.',
    features: [
      'Unlimited GP consultations',
      'Unlimited specialist access',
      '30% discount on all services',
      'Free annual executive check-up',
      'VIP ward access',
      'Dedicated personal doctor',
      'Emergency priority — no wait',
      'Free prescription delivery',
      'Telemedicine video calls',
    ],
    notIncluded: [],
  },
  {
    id: 'family',
    name: 'Family Shield',
    price: '₦35,000',
    period: 'per month',
    color: 'from-[#1B4332] to-[#40916c]',
    description: 'Complete Gold-level coverage for the whole family (up to 5 members).',
    features: [
      'Covers up to 5 family members',
      'All Gold Care benefits',
      'Children immunizations included',
      'Maternity priority booking',
      'Family health coordinator',
      'Shared care portal access',
      '20% discount on all services',
      'Emergency priority for all members',
    ],
    notIncluded: [],
  },
];

const faqs = [
  { q: 'Can I cancel my membership at any time?', a: 'Yes. You can cancel with 30 days notice and your benefits continue until the end of your billing period.' },
  { q: 'Does membership cover hospitalisation?', a: 'Membership covers outpatient consultations and discounts. For inpatient/admission, supplementary fees apply based on ward type.' },
  { q: 'Can I add family members to my individual plan?', a: 'Individual plans cover the member only. For family coverage, we recommend the Family Shield plan which covers up to 5 members.' },
  { q: 'How do I access my member benefits?', a: 'After signing up, you receive a member card and ID within 48 hours. Show your card at reception to enjoy all your benefits immediately.' },
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  plan: string;
  dob: string;
}

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('gold');
  const [step, setStep] = useState<'plans' | 'signup' | 'success'>('plans');
  const [form, setForm] = useState<FormData>({ fullName: '', phone: '', email: '', plan: 'gold', dob: '' });
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStep('success');
  };

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=60&auto=format&fit=crop" alt="Membership" fill className="object-cover opacity-10" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/90 to-[#12301f]/80" />
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full"><defs><pattern id="memgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="#D4A017"/></pattern></defs><rect width="100%" height="100%" fill="url(#memgrid)"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Membership</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
              ✦ Sparklight Membership Programme
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5">
              Wanna Become a<br /><span className="text-[#D4A017]">Sparklight Member?</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Join thousands of Lagos families who enjoy priority care, exclusive discounts, and a dedicated health team — all for one simple monthly plan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-white border-b border-[#1B4332]/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '⚡', label: 'Priority Booking' },
              { icon: '🧪', label: 'Lab Discounts' },
              { icon: '👨‍⚕️', label: 'Dedicated Doctor' },
              { icon: '🚨', label: 'Emergency Priority' },
              { icon: '💊', label: 'Pharmacy Savings' },
              { icon: '📱', label: 'Digital Care Card' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="text-xl">{b.icon}</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center mb-14">
            <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Choose Your Plan</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">No hidden fees. Cancel anytime. Pick the plan that fits you.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${selectedPlan === plan.id ? 'border-[#1B4332] bg-white shadow-xl -translate-y-2' : 'border-transparent bg-white shadow-sm hover:shadow-md hover:-translate-y-1'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1A1A1A] text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap">MOST POPULAR</div>
                )}
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${plan.color} mb-4`} />
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight mb-1">{plan.name}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed mb-4">{plan.description}</p>
                <div className="mb-5">
                  <span className="font-display text-3xl font-bold text-[#1B4332]">{plan.price}</span>
                  <span className="text-[#6B7280] text-xs ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#1A1A1A]">
                      <svg className="h-3.5 w-3.5 text-[#1B4332] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#6B7280]/50 line-through">
                      <svg className="h-3.5 w-3.5 text-[#6B7280]/30 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => { setSelectedPlan(plan.id); setStep('signup'); setForm(p => ({ ...p, plan: plan.id })); }}
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${selectedPlan === plan.id ? 'bg-[#1B4332] text-white hover:bg-[#2d6a4f]' : 'bg-[#1B4332]/8 text-[#1B4332] hover:bg-[#1B4332] hover:text-white'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup form */}
      <section className="py-16 bg-white" id="signup">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {step === 'success' ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="relative mx-auto mb-6 h-20 w-20">
                  <div className="absolute inset-0 rounded-full bg-[#D4A017]/20 animate-ping" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#D4A017]">
                    <span className="text-3xl">✦</span>
                  </div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-[#1A1A1A] mb-3">Welcome to Sparklight!</h3>
                <p className="text-[#6B7280] mb-2 max-w-md mx-auto">
                  Your membership application has been received. Our team will contact you within <strong className="text-[#1B4332]">24 hours</strong> to activate your member card and onboard you.
                </p>
                <p className="text-[#6B7280] text-sm mb-8">Selected plan: <span className="font-semibold text-[#1B4332] capitalize">{form.plan}</span></p>
                <Link href="/" className="text-sm font-medium text-[#1B4332] hover:underline">Back to Home</Link>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                <div className="text-center mb-10">
                  <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Sign Up</p>
                  <h2 className="font-display text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-2">Create Your Member Profile</h2>
                  <p className="text-[#6B7280] text-sm">Our team will review and activate your membership within 24 hours.</p>
                </div>
                <form onSubmit={handleSignup} className="bg-[#F9F6F0] rounded-3xl p-8 space-y-5">
                  {/* Plan selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-2 tracking-wide uppercase">Selected Plan</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {plans.map(p => (
                        <button key={p.id} type="button" onClick={() => setForm(prev => ({ ...prev, plan: p.id }))}
                          className={`py-2.5 px-3 rounded-xl border-2 text-xs font-semibold transition-all duration-200 ${form.plan === p.id ? 'border-[#1B4332] bg-white text-[#1B4332]' : 'border-transparent bg-white/60 text-[#6B7280] hover:border-[#1B4332]/30'}`}>
                          {p.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Full Name *</label>
                      <input required type="text" placeholder="e.g. Amina Okafor" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Date of Birth *</label>
                      <input required type="date" value={form.dob} onChange={e => setForm(p => ({ ...p, dob: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Phone Number *</label>
                    <input required type="tel" placeholder="08012345678" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">Email Address *</label>
                    <input required type="email" placeholder="yourname@email.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-[#1A1A1A]/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332]" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-[#1B4332] text-white font-bold py-4 rounded-full hover:bg-[#2d6a4f] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#1B4332]/20 text-sm">
                    {loading ? (<><svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</>) : 'Apply for Membership'}
                  </button>
                  <p className="text-center text-[#6B7280] text-xs">By applying, you agree to our membership terms. Cancel anytime with 30 days notice.</p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center mb-10">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A1A] tracking-tight">Membership FAQs</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-[#1A1A1A] text-sm">{faq.q}</span>
                  <svg className="h-5 w-5 text-[#1B4332] shrink-0 transition-transform duration-300 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
