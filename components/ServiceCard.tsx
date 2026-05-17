'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  index?: number;
  expanded?: boolean;
  longDescription?: string;
}

export default function ServiceCard({
  icon,
  name,
  description,
  index = 0,
  expanded = false,
  longDescription,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 border border-transparent hover:border-[#1B4332]/10"
    >
      {/* Green accent bar on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#1B4332] to-[#D4A017] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9F6F0] group-hover:bg-[#1B4332]/8 transition-colors duration-300 text-[#1B4332]">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-2 tracking-tight">
        {name}
      </h3>
      <p className="text-[#6B7280] text-sm leading-relaxed">
        {description}
      </p>

      {expanded && longDescription && (
        <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
          {longDescription}
        </p>
      )}

      <div className="mt-5 flex items-center gap-2">
        <Link
          href="/appointments"
          className="text-sm font-semibold text-[#1B4332] hover:text-[#D4A017] transition-colors duration-200 flex items-center gap-1.5 group/link"
        >
          Book for this department
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
