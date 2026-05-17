'use client';

import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  specialty: string;
  years: number;
  qualifications?: string;
  mdcn?: string;
  index?: number;
  initials: string;
  color: string;
}

export default function DoctorCard({
  name,
  specialty,
  years,
  qualifications,
  mdcn,
  index = 0,
  initials,
  color,
}: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5"
    >
      {/* Green bottom border reveal */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#1B4332] to-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-left" />

      {/* Avatar area */}
      <div
        className="relative h-52 flex items-center justify-center"
        style={{ background: color }}
      >
        {/* Decorative circles */}
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-white/10" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-3xl font-display font-bold shadow-inner">
            {initials}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight mb-1">
          {name}
        </h3>
        <p className="text-[#D4A017] text-sm font-semibold mb-1">{specialty}</p>
        {qualifications && (
          <p className="text-[#6B7280] text-xs mb-2">{qualifications}</p>
        )}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#F9F6F0]">
          <span className="text-xs font-medium text-[#1B4332] bg-[#1B4332]/8 px-2.5 py-1 rounded-full">
            {years} yrs experience
          </span>
          {mdcn && (
            <span className="text-xs text-[#6B7280]">MDCN: {mdcn}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
