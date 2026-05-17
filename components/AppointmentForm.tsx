'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const departments = [
  'General Medicine',
  'Maternity & Obstetrics',
  'Pediatrics & Child Health',
  'Emergency & Trauma',
  'Surgery',
  'Diagnostics & Lab',
  'Dental Care',
  'Eye Care',
];

const timeSlots = [
  { value: 'morning', label: 'Morning', time: '8:00 AM – 12:00 PM' },
  { value: 'afternoon', label: 'Afternoon', time: '12:00 PM – 4:00 PM' },
  { value: 'evening', label: 'Evening', time: '4:00 PM – 8:00 PM' },
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  date: string;
  time: string;
  notes: string;
}

const initial: FormData = {
  fullName: '',
  phone: '',
  email: '',
  department: '',
  date: '',
  time: '',
  notes: '',
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^(\+234|0)[0-9]{10}$/.test(form.phone.replace(/\s/g, ''))) {
      e.phone = 'Enter a valid Nigerian phone number (e.g. 08012345678)';
    }
    if (!form.department) e.department = 'Please select a department';
    if (!form.date) e.date = 'Please choose a preferred date';
    if (!form.time) e.time = 'Please select a time slot';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-[#1A1A1A] text-sm placeholder:text-[#6B7280]/50 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332] ${
      errors[field]
        ? 'border-red-300 bg-red-50/30'
        : 'border-[#1A1A1A]/10 hover:border-[#1B4332]/30'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="text-center py-16 px-8"
      >
        <div className="relative mx-auto mb-6 h-20 w-20">
          <div className="absolute inset-0 rounded-full bg-[#1B4332]/10 animate-ping" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#1B4332]">
            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <h3 className="font-display text-3xl font-semibold text-[#1A1A1A] mb-3">
          Appointment Requested!
        </h3>
        <p className="text-[#6B7280] leading-relaxed max-w-md mx-auto mb-2">
          Thank you, <span className="font-semibold text-[#1B4332]">{form.fullName}</span>! We&apos;ll call you within{' '}
          <span className="font-semibold text-[#1B4332]">2 hours</span> to confirm your appointment.
        </p>
        <p className="text-[#6B7280] text-sm mb-8">
          For urgent matters, call us directly at{' '}
          <a href="tel:+2348086142259" className="text-[#1B4332] font-semibold hover:underline">
            +234 808 614 2259
          </a>
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initial); }}
          className="text-sm font-medium text-[#6B7280] hover:text-[#1B4332] transition-colors underline underline-offset-4"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Amina Okafor"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            className={inputClass('fullName')}
          />
          <div className="h-4 mt-1">
            <AnimatePresence>
              {errors.fullName && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
                  {errors.fullName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. 08012345678"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass('phone')}
          />
          <div className="h-4 mt-1">
            <AnimatePresence>
              {errors.phone && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
          Email <span className="text-[#6B7280] font-normal">(optional)</span>
        </label>
        <input
          type="email"
          placeholder="yourname@email.com"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputClass('email')}
        />
      </div>

      {/* Department */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
          Department <span className="text-red-400">*</span>
        </label>
        <select
          value={form.department}
          onChange={(e) => update('department', e.target.value)}
          className={inputClass('department')}
        >
          <option value="">Select a department</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <div className="h-4 mt-1">
          <AnimatePresence>
            {errors.department && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
                {errors.department}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
          Preferred Date <span className="text-red-400">*</span>
        </label>
        <input
          type="date"
          value={form.date}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => update('date', e.target.value)}
          className={inputClass('date')}
        />
        <div className="h-4 mt-1">
          <AnimatePresence>
            {errors.date && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
                {errors.date}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Time slots */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2 tracking-wide uppercase">
          Preferred Time <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((slot) => (
            <label
              key={slot.value}
              className={`cursor-pointer rounded-xl border-2 p-3 text-center transition-all duration-200 ${
                form.time === slot.value
                  ? 'border-[#1B4332] bg-[#1B4332]/5'
                  : 'border-[#1A1A1A]/10 hover:border-[#1B4332]/30 bg-white'
              }`}
            >
              <input
                type="radio"
                name="time"
                value={slot.value}
                checked={form.time === slot.value}
                onChange={(e) => update('time', e.target.value)}
                className="sr-only"
              />
              <p className={`font-semibold text-sm ${form.time === slot.value ? 'text-[#1B4332]' : 'text-[#1A1A1A]'}`}>
                {slot.label}
              </p>
              <p className="text-[#6B7280] text-[10px] mt-0.5 leading-tight">{slot.time}</p>
            </label>
          ))}
        </div>
        <div className="h-4 mt-1">
          <AnimatePresence>
            {errors.time && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs">
                {errors.time}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
          Additional Notes <span className="text-[#6B7280] font-normal">(optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Describe your symptoms or any special requirements..."
          value={form.notes}
          onChange={(e) => update('notes', e.target.value)}
          className={`${inputClass('notes')} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1B4332] text-white font-semibold py-4 rounded-full hover:bg-[#2d6a4f] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#1B4332]/20 hover:shadow-[#1B4332]/30"
      >
        {loading ? (
          <>
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Booking your appointment...
          </>
        ) : (
          <>
            Book Appointment
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
