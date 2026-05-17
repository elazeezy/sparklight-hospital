'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 12000, suffix: '+', label: 'Patients Treated', description: 'and counting' },
  { value: 13, suffix: '+', label: 'Years of Service', description: 'since 2012' },
  { value: 20, suffix: '+', label: 'Specialist Doctors', description: 'board-certified' },
  { value: 10000, suffix: '+', label: 'Successful Procedures', description: 'with excellence' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#F9F6F0] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1B4332]/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[#1B4332] text-sm font-semibold tracking-widest uppercase mb-3">Our Impact</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Trusted by Thousands
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4A017] tracking-tight leading-none mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>
              <p className="font-semibold text-[#1A1A1A] text-sm md:text-base mt-2">{stat.label}</p>
              <p className="text-[#6B7280] text-xs mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
