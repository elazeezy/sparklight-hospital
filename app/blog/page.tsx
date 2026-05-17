'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Health Tips', 'Maternity', 'Pediatrics', 'Nutrition', 'Emergency', 'Surgery'];

const posts = [
  {
    slug: 'malaria-prevention',
    category: 'Health Tips',
    title: 'Malaria Prevention in Lagos: What Every Family Should Know in 2026',
    excerpt: 'With rising temperatures and seasonal rains, malaria remains a top health threat in Mushin and across Lagos. Here is your complete prevention guide from our specialists.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    author: 'Dr. Tunde Adeyemi',
    authorRole: 'Internal Medicine',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'antenatal-guide',
    category: 'Maternity',
    title: 'Your Complete Antenatal Care Guide for a Healthy Pregnancy',
    excerpt: 'From your first trimester through delivery, everything you need to know about attending your antenatal clinic and staying healthy during pregnancy.',
    date: 'May 8, 2026',
    readTime: '6 min read',
    author: 'Dr. Aisha Balogun',
    authorRole: 'Obstetrics & Gynecology',
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'child-vaccination',
    category: 'Pediatrics',
    title: "The 2026 Nigerian Immunization Schedule: Your Child's Vaccine Checklist",
    excerpt: 'Keep your child protected. Our paediatricians break down the updated EPI immunization schedule and what each vaccine protects against.',
    date: 'Apr 29, 2026',
    readTime: '5 min read',
    author: 'Dr. Fatima Suleiman',
    authorRole: 'Pediatrics',
    img: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'diabetes-management',
    category: 'Health Tips',
    title: 'Living With Diabetes in Nigeria: Diet, Exercise & Medication Guide',
    excerpt: 'Managing diabetes in Lagos can be challenging, but it is entirely possible to live a full, healthy life with the right approach. Our physicians explain.',
    date: 'Apr 22, 2026',
    readTime: '7 min read',
    author: 'Dr. Tunde Adeyemi',
    authorRole: 'Internal Medicine',
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'healthy-eating-lagos',
    category: 'Nutrition',
    title: 'Eating Healthy on a Lagos Budget: Foods That Prevent Disease',
    excerpt: 'You do not need expensive superfoods. Our nutrition team shares how to build a disease-preventing diet using affordable, locally available Nigerian foods.',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    author: 'Dr. Seun Oladele',
    authorRole: 'General Practice',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    slug: 'emergency-signs',
    category: 'Emergency',
    title: '7 Signs You Should Go to the Emergency Room Immediately',
    excerpt: 'Recognising a true medical emergency can save your life or the life of a loved one. Dr. Eze explains the warning signs you must never ignore.',
    date: 'Apr 8, 2026',
    readTime: '3 min read',
    author: 'Dr. Ngozi Eze',
    authorRole: 'Emergency Medicine',
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format&fit=crop',
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);
  const featured = posts.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="min-h-[100dvh] bg-[#F9F6F0]">
      {/* Hero */}
      <section className="bg-[#1B4332] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full"><defs><pattern id="bgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A8C5A0" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#bgrid)"/></svg>
        </div>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=60&auto=format&fit=crop" alt="Blog hero" fill className="object-cover opacity-10" sizes="100vw" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Blog</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5">
            Health Knowledge<br /><span className="text-[#D4A017]">Hub</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Expert health articles, tips, and guides from our specialist doctors — designed to keep you and your family informed and healthy.
          </motion.p>
        </div>
      </section>

      {/* Featured posts */}
      {activeCategory === 'All' && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#1B4332] text-xs font-semibold tracking-widest uppercase mb-6">Featured Articles</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <motion.article key={post.slug} initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" sizes="700px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4A017] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-[#6B7280] text-xs mb-3 flex items-center gap-2">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#6B7280]/40" />
                      <span>{post.readTime}</span>
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#1B4332] transition-colors">{post.title}</h2>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#1B4332]/10 flex items-center justify-center">
                          <span className="text-[#1B4332] text-xs font-bold">{post.author.split(' ').map(w => w[0]).join('').slice(1, 3)}</span>
                        </div>
                        <div>
                          <p className="text-[#1A1A1A] text-xs font-semibold">{post.author}</p>
                          <p className="text-[#6B7280] text-[10px]">{post.authorRole}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-[#1B4332] text-sm font-semibold hover:text-[#D4A017] transition-colors group/link">
                        Read
                        <svg className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter + all posts */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="sticky top-20 z-30 bg-[#F9F6F0]/95 backdrop-blur py-4 mb-10 -mx-4 px-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-[#1B4332] text-white shadow-md' : 'bg-white text-[#6B7280] hover:text-[#1B4332] border border-[#1B4332]/10'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'All' ? rest : filtered).map((post, i) => (
                <motion.article key={post.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="400px" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#1B4332] text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#6B7280] text-xs mb-3 flex items-center gap-2">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#6B7280]/40" />
                      <span>{post.readTime}</span>
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3 group-hover:text-[#1B4332] transition-colors">{post.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#F9F6F0]">
                      <p className="text-[#6B7280] text-xs">{post.author}</p>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-[#1B4332] text-xs font-semibold hover:text-[#D4A017] transition-colors group/l">
                        Read
                        <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover/l:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Newsletter signup */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="mt-20 bg-[#1B4332] rounded-3xl p-10 text-center">
            <h3 className="font-display text-3xl font-semibold text-white mb-3">Get Health Tips in Your Inbox</h3>
            <p className="text-white/60 mb-7 max-w-md mx-auto">Monthly health articles, seasonal tips, and exclusive advice from our specialist doctors — delivered free.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017]/50 focus:border-[#D4A017]" />
              <button type="submit" className="shrink-0 bg-[#D4A017] text-[#1A1A1A] font-bold px-6 py-3.5 rounded-full hover:bg-[#e8b931] transition-colors text-sm">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
