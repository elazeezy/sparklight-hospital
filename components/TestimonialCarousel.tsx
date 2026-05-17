'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Sparklight saved my mother during a health emergency. The doctors were calm and professional. I'll always be grateful.",
    name: 'Hajiya Ramota',
    location: 'Mushin',
    rating: 5,
  },
  {
    quote:
      'I delivered my baby here and the maternity team was exceptional. Clean, caring, and affordable. I felt safe the entire time.',
    name: 'Mrs. Blessing Okafor',
    location: 'Agege',
    rating: 5,
  },
  {
    quote:
      'Best private hospital on the mainland. No stories, no delays. They treat you like a person, not just a patient number.',
    name: 'Mr. Ganiyu Salami',
    location: 'Papa Ajao',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  const t = testimonials[current];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm max-w-3xl mx-auto"
          >
            {/* Amber quote mark */}
            <div className="font-display text-8xl leading-none text-[#D4A017]/25 mb-2 select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="h-5 w-5 text-[#D4A017]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-display text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed font-light italic mb-6">
              {t.quote}
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center">
                <span className="text-[#1B4332] font-semibold text-sm">
                  {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                <p className="text-[#6B7280] text-xs">{t.location}, Lagos</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${i === current ? 'w-8 bg-[#1B4332]' : 'w-2 bg-[#1B4332]/25'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
