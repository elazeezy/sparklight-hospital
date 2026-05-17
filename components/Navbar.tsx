'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    const sentinel = document.getElementById('nav-sentinel');
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div id="nav-sentinel" className="absolute top-0 h-1 w-full pointer-events-none" />

      {/* Desktop floating pill */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`
            hidden md:flex items-center gap-5 px-5 py-3 rounded-full max-w-[95vw]
            transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${scrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-lg shadow-black/5 border border-black/5'
              : 'bg-white/80 backdrop-blur-xl border border-white/40 shadow-md shadow-black/5'
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#1B4332]">
              <span className="text-white font-display font-bold text-sm leading-none">S</span>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#D4A017]" />
            </span>
            <span
              className="font-display text-[#1B4332] font-semibold text-lg leading-none tracking-tight whitespace-nowrap"
            >
              Sparklight Hospital
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${active
                      ? 'text-[#1B4332]'
                      : 'text-[#1A1A1A]/70 hover:text-[#1B4332]'
                    }
                  `}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#1B4332]/8"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/appointments"
            className="shrink-0 bg-[#D4A017] text-[#1A1A1A] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e8b931] transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/40 active:scale-95"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile bar */}
        <div
          className={`
            md:hidden flex w-full max-w-sm items-center justify-between px-5 py-3 rounded-full
            transition-all duration-500
            ${scrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-lg border border-black/5'
              : 'bg-white/80 backdrop-blur-xl border border-white/40 shadow-md'
            }
          `}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#1B4332]">
              <span className="text-white font-display font-bold text-sm leading-none">S</span>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#D4A017]" />
            </span>
            <span className="font-display text-[#1B4332] font-semibold text-base leading-none tracking-tight">
              Sparklight
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1 p-2 rounded-lg hover:bg-[#1B4332]/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-[#1B4332] transition-all duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1B4332] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1B4332] transition-all duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden rounded-2xl bg-white/95 backdrop-blur-2xl shadow-xl border border-black/5 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.href ? 'bg-[#1B4332]/8 text-[#1B4332]' : 'text-[#1A1A1A]/70 hover:bg-[#1B4332]/5 hover:text-[#1B4332]'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="mt-2 pt-2 border-t border-[#1B4332]/10"
              >
                <Link
                  href="/appointments"
                  className="block w-full text-center bg-[#D4A017] text-[#1A1A1A] font-semibold px-5 py-3 rounded-full hover:bg-[#e8b931] transition-colors"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
