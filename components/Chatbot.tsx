'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  time: string;
  quick?: string[];
}

const FAQ_RESPONSES: Record<string, { text: string; quick?: string[] }> = {
  greeting: {
    text: "Hello! 👋 I'm Spark, Sparklight Hospital's virtual assistant. I'm here 24/7 to help you with appointments, services, directions, and general health questions.\n\nHow can I help you today?",
    quick: ['Book an appointment', 'Our services', 'Hospital location', 'Emergency contact'],
  },
  appointment: {
    text: "📅 **Booking an Appointment**\n\nYou can book in 3 ways:\n• **Online:** Use our booking form at /appointments\n• **Call:** +234 807 800 3890\n• **WhatsApp:** Message us directly\n\nWe confirm all appointments within **2 hours** during working hours. Would you like me to take you to the booking form?",
    quick: ['Go to booking form', 'Call hours', 'Departments available', 'Walk-in options'],
  },
  emergency: {
    text: "🚨 **Emergency Care**\n\nOur Emergency department is open **24 hours, 7 days a week** — including weekends and public holidays.\n\n📍 **Address:** 99 Palm Avenue, Mushin, Lagos\n📞 **Emergency line:** +234 807 800 3890\n\nPlease do not delay — come in immediately for any medical emergency. Our triage team is always ready.",
    quick: ['Get directions', 'Non-emergency hours', 'What to bring', 'Ambulance services'],
  },
  services: {
    text: "🏥 **Our 8 Departments:**\n\n1. General Medicine\n2. Maternity & Obstetrics\n3. Pediatrics & Child Health\n4. Emergency & Trauma\n5. Surgery\n6. Diagnostics & Lab\n7. Dental Care\n8. Eye Care\n\nAll departments are staffed by MDCN-registered specialists. Which department would you like to know more about?",
    quick: ['Maternity services', 'Lab tests available', 'Pediatrics', 'Surgery'],
  },
  location: {
    text: "📍 **Find Us**\n\n**Address:** 99 Palm Avenue, Mushin, Lagos, Nigeria\n\n**Landmarks:** We are near Papa Ajao, easily accessible from Agege and across Lagos Mainland.\n\n**Parking:** Available on-site.\n\n**Public transport:** Multiple bus routes stop on Palm Avenue.",
    quick: ['Opening hours', 'Contact number', 'Get directions', 'Book appointment'],
  },
  hours: {
    text: "🕐 **Hospital Hours**\n\n**Emergency:** 24/7, no exceptions\n\n**Outpatient Consultations:**\n• Mon–Fri: 8:00 AM – 8:00 PM\n• Saturday: 8:00 AM – 4:00 PM\n• Sunday: 10:00 AM – 2:00 PM\n\n**Lab & Diagnostics:** Mon–Sat, 7:30 AM – 6:00 PM",
    quick: ['Book appointment', 'Emergency contact', 'Walk-in available?'],
  },
  maternity: {
    text: "🤱 **Maternity & Obstetrics**\n\nOur maternity unit is one of our most trusted departments:\n\n• Full antenatal care (ANC) clinic\n• Safe delivery suite — 24/7\n• Caesarean section facility\n• Postnatal care\n• Family planning\n• High-risk pregnancy management\n\nDr. Aisha Balogun (FWACS) leads our team with 14 years of experience.",
    quick: ['Book ANC appointment', 'Maternity costs', 'What to bring', 'Postnatal care'],
  },
  lab: {
    text: "🧪 **Diagnostics & Laboratory**\n\nOur in-house lab delivers fast, accurate results:\n\n• Full Blood Count (FBC)\n• Malaria (RDT + microscopy)\n• Blood glucose & HbA1c\n• Liver & kidney function\n• HIV, Hepatitis B & C screening\n• Urinalysis\n• Ultrasound imaging\n• And much more\n\nMost results are ready same-day.",
    quick: ['Lab costs', 'Book lab test', 'Ultrasound booking', 'Results turnaround'],
  },
  cost: {
    text: "💳 **Costs & Payments**\n\nWe believe in transparent pricing:\n\n• GP consultation: from **₦3,000**\n• Specialist consultation: from **₦5,000**\n• Lab tests: vary by test\n\nWe accept cash and bank transfer. For any questions about pricing, call us directly at +234 807 800 3890.",
    quick: ['HMO accepted?', 'Payment plans', 'Book appointment'],
  },
  doctors: {
    text: "👨‍⚕️ **Our Doctors**\n\nWe have 20+ MDCN-registered specialists including:\n\n• Dr. Aisha Balogun — Obstetrics (14 yrs)\n• Dr. Emeka Okonkwo — Surgery (11 yrs)\n• Dr. Fatima Suleiman — Pediatrics (9 yrs)\n• Dr. Tunde Adeyemi — Internal Medicine (16 yrs)\n• Dr. Ngozi Eze — Emergency (8 yrs)\n\nAll doctors are board-certified with an average of 12+ years experience.",
    quick: ['Book with specific doctor', 'Doctor availability', 'Specialist list'],
  },
  pediatrics: {
    text: "👶 **Pediatrics & Child Health**\n\nWe provide comprehensive care for infants, children, and adolescents:\n\n• Childhood immunizations (EPI schedule)\n• Growth & nutrition monitoring\n• Neonatal care\n• Treatment of childhood illnesses (malaria, pneumonia, diarrhoea)\n• Adolescent health\n\nDr. Fatima Suleiman (FWACP) leads our paediatric team.",
    quick: ['Immunization schedule', 'Book for child', 'Neonatal care', 'Nutrition advice'],
  },
  default: {
    text: "I'm not sure I understand that question fully. Let me connect you with the right resource.\n\nYou can also:\n• Call us: **+234 807 800 3890**\n• WhatsApp: same number\n• Visit: 99 Palm Avenue, Mushin, Lagos\n\nWould any of these help?",
    quick: ['Book appointment', 'Our services', 'Emergency contact', 'Speak to a human'],
  },
};

function getResponse(input: string): { text: string; quick?: string[] } {
  const lower = input.toLowerCase();
  if (/hello|hi|hey|good|start|help/.test(lower)) return FAQ_RESPONSES.greeting;
  if (/appoint|book|schedule|visit|consult|see a doctor|doctor|when/.test(lower)) return FAQ_RESPONSES.appointment;
  if (/emergency|urgent|critical|accident|trauma|999|911|danger/.test(lower)) return FAQ_RESPONSES.emergency;
  if (/service|department|unit|offer|provide|treatment|care/.test(lower)) return FAQ_RESPONSES.services;
  if (/locat|address|where|direction|find|palm avenue|mushin/.test(lower)) return FAQ_RESPONSES.location;
  if (/hour|time|open|close|when.*open|schedule|days/.test(lower)) return FAQ_RESPONSES.hours;
  if (/matern|obstet|pregnan|delivery|antenatal|anc|birth|baby|midwi/.test(lower)) return FAQ_RESPONSES.maternity;
  if (/lab|test|diagnos|blood|malaria|result|ultrasound|scan/.test(lower)) return FAQ_RESPONSES.lab;
  if (/cost|price|fee|pay|afford|cheap|expensive|how much|naira/.test(lower)) return FAQ_RESPONSES.cost;
  if (/doctor|physician|specialist|surgeon|dr\./.test(lower)) return FAQ_RESPONSES.doctors;
  if (/child|kid|baby|infant|adolescent|teen|pediatric|paediatric/.test(lower)) return FAQ_RESPONSES.pediatrics;
  if (/go to booking|booking form|make appointment/.test(lower)) return { text: "Great! Taking you to our booking form now. 📅", quick: [] };
  if (/speak.*human|talk.*person|real person|customer service/.test(lower)) return { text: "I completely understand. 😊 To speak with a human:\n\n📞 **Call:** +234 807 800 3890\n💬 **WhatsApp:** Same number\n\nOur team is available Mon–Fri 8am–8pm, Sat 8am–4pm, and Emergency line 24/7.", quick: ['Call now', 'WhatsApp us'] };
  return FAQ_RESPONSES.default;
}

function formatTime() {
  return new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
}

function BotMessage({ text }: { text: string }) {
  const lines = text.split('\n').filter(Boolean);
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const formatted = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/^• /, '');
        const isBullet = line.startsWith('•');
        return (
          <p key={i} className={`text-sm leading-relaxed ${isBullet ? 'flex gap-1.5' : ''}`}>
            {isBullet && <span className="text-[#D4A017] mt-0.5">•</span>}
            <span dangerouslySetInnerHTML={{ __html: formatted }} />
          </p>
        );
      })}
    </div>
  );
}

const GREETING_MSG: Message = {
  id: '0',
  role: 'bot',
  text: "Hello! 👋 I'm Spark, Sparklight Hospital's virtual assistant. I'm here 24/7 to help you with appointments, services, directions, and general health questions.\n\nHow can I help you today?",
  time: '',
  quick: ['Book an appointment', 'Our services', 'Hospital location', 'Emergency contact'],
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ ...GREETING_MSG, time: formatTime() }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<AudioContext | null>(null);

  // Play a soft notification chime using Web Audio API
  const playChime = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioRef.current = ctx;

      const playNote = (freq: number, startTime: number, duration: number, vol: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      const now = ctx.currentTime;
      playNote(880, now, 0.3, 0.12);
      playNote(1100, now + 0.12, 0.3, 0.1);
      playNote(1320, now + 0.24, 0.5, 0.08);
    } catch {
      // Audio not available — silently skip
    }
  }, []);

  // Auto-open chatbot after 3s on first visit
  useEffect(() => {
    if (hasAutoOpened) return;
    const timer = setTimeout(() => {
      setHasAutoOpened(true);
      playChime();
      // Brief delay so chime plays before window opens
      setTimeout(() => {
        setOpen(true);
        setUnread(0);
      }, 350);
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasAutoOpened, playChime]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: text.trim(), time: formatTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    await new Promise(r => setTimeout(r, 900 + Math.random() * 600));

    const response = getResponse(text);
    const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'bot', text: response.text, time: formatTime(), quick: response.quick };
    setMessages(prev => [...prev, botMsg]);
    setTyping(false);

    if (!open) setUnread(n => n + 1);

    if (/go to booking|booking form/.test(text.toLowerCase())) {
      setTimeout(() => window.location.href = '/appointments', 1500);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        onClick={() => { setOpen(true); setUnread(0); }}
        className={`fixed bottom-24 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-white border-2 border-[#1B4332]`}
        aria-label="Open chat"
      >
        <svg className="h-6 w-6 text-[#1B4332]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">{unread}</span>
        )}
        {/* Online pulse */}
        <span className="absolute bottom-0.5 right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-5 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-[#1B4332]/10"
            style={{
              width: 'min(360px, calc(100vw - 24px))',
              maxHeight: 'min(580px, calc(100dvh - 120px))',
            }}
          >
            {/* Header */}
            <div className="bg-[#1B4332] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#1B4332]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Spark</p>
                  <p className="text-white/50 text-[11px] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online · 24/7 Assistant
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center" aria-label="Close chat">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-[#F9F6F0] px-4 py-4 space-y-4 min-h-0">
              {messages.map(msg => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="h-7 w-7 rounded-full bg-[#1B4332] flex items-center justify-center shrink-0 mr-2 mt-1">
                      <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    </div>
                  )}
                  <div className="max-w-[78%]">
                    <div className={`px-4 py-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#1B4332] text-white rounded-tr-sm' : 'bg-white text-[#1A1A1A] rounded-tl-sm shadow-sm'}`}>
                      {msg.role === 'bot' ? <BotMessage text={msg.text} /> : <p>{msg.text}</p>}
                    </div>
                    <p className={`text-[10px] mt-1 text-[#6B7280] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                    {/* Quick replies */}
                    {msg.role === 'bot' && msg.quick && msg.quick.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.quick.map(q => (
                          <button key={q} onClick={() => sendMessage(q)}
                            className="text-[11px] font-medium bg-white border border-[#1B4332]/20 text-[#1B4332] px-3 py-1.5 rounded-full hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all duration-200">
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start">
                    <div className="h-7 w-7 rounded-full bg-[#1B4332] flex items-center justify-center mr-2 mt-1 shrink-0">
                      <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.span key={i} className="h-2 w-2 rounded-full bg-[#1B4332]/40"
                          animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.15 }} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={endRef} />
            </div>

            {/* Input — fixed height, no layout shift */}
            <form onSubmit={handleSubmit} className="bg-white border-t border-[#1B4332]/8 px-4 py-3 flex items-center gap-3 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your question..."
                autoComplete="off"
                className="flex-1 min-w-0 text-sm text-[#1A1A1A] placeholder:text-[#6B7280]/50 bg-[#F9F6F0] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20 border border-[#1B4332]/10"
              />
              <button type="submit" disabled={!input.trim() || typing}
                className="h-9 w-9 rounded-full bg-[#1B4332] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#2d6a4f] transition-colors shrink-0">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>

            {/* Footer */}
            <div className="bg-white px-4 py-2 border-t border-[#1B4332]/5 shrink-0">
              <p className="text-center text-[10px] text-[#6B7280]">Powered by Sparklight Hospital · Not a substitute for medical advice</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
