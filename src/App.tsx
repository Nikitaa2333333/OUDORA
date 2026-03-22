import React, { useState } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // ФОРМА БУДЕТ ОТПРАВЛЯТЬСЯ СЮДА
  const FORMSPREE_URL = "https://formspree.io/f/ВАШ_АЙДИ_ЗДЕСЬ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif overflow-x-hidden">
      {/* 
          MONUMENTAL HERO SECTION
      */}
      <header className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] p-6 lg:p-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full 
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="relative z-10 text-center w-full max-w-screen-2xl mx-auto">


          <h1 className="relative inline-block mt-4 mb-12">
            <span className="
              text-[18vw] md:text-[16vw] lg:text-[14vw] 
              tracking-[0.15em] leading-[0.85] uppercase 
              font-light font-serif 
              animate-reveal animate-gold
              drop-shadow-[0_2px_45px_rgba(212,175,55,0.25)]
              -ml-[0.15em]
            ">
              OUDORA
            </span>
            <div className="absolute -bottom-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent animate-line"></div>
          </h1>

          <div className="animate-reveal opacity-0" style={{ animationDelay: '1s' }}>
            <p className="text-xl md:text-3xl mt-12 font-serif italic max-w-3xl mx-auto text-white/70 leading-relaxed font-light">
              «Аромат формирует эмоциональную связь с брендом быстрее, чем визуальные элементы»
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 animate-reveal opacity-0" style={{ animationDelay: '1.5s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 select-none">Découvrir</span>
          <div className="relative w-[1px] h-20 bg-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D4AF37] animate-[scroll-hint_2s_infinite]"></div>
          </div>
        </div>
      </header>

      {/* Main Content — ONLY VISUALS */}
      <main className="px-6 lg:px-12 py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Visual */}
          <div className="md:col-span-2 lg:col-span-2 aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5 group">
            <img 
              src="/f1.jpg" 
              alt="Luxury Aesthetic"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Side Visual */}
          <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5 group">
            <img 
              src="/f2.jpg" 
              alt="Luxury Aesthetic"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Grid */}
          <div className="aspect-square overflow-hidden bg-neutral-900 border border-white/5 group">
            <img 
              src="/f3.jpg" 
              alt="Luxury Aesthetic"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-2 aspect-[16/7] overflow-hidden bg-neutral-900 border border-white/5 group">
            <img 
              src="/f4.jpg" 
              alt="Luxury Aesthetic"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>


      </main>

      {/* FORM SECTION */}
      <section id="contact" className="px-6 lg:px-12 py-32 bg-[#050505]">
        <div className="max-w-2xl mx-auto border border-white/5 p-8 md:p-16 relative">
          <div className="absolute -top-px left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] text-[#D4AF37] uppercase font-sans mb-4 block">Concierge Service</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase mb-4">Связаться с нами</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto"></div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-reveal">
              <h3 className="text-2xl text-[#D4AF37] uppercase tracking-widest mb-4 italic">Благодарим вас</h3>
              <p className="text-white/40 font-light font-serif text-lg">Ваше сообщение получено. Мы свяжемся с вами в ближайшее время.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] opacity-60 hover:opacity-100 transition-opacity">Вернуться</button>
            </div>
          ) : (
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <input name="name" type="text" placeholder="ВАШЕ ИМЯ" required className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-sans text-xs tracking-[0.2em] font-light placeholder:text-white/20" value={formData.name} onChange={handleChange} />
                <input name="phone" type="tel" placeholder="ТЕЛЕФОН" required className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-sans text-xs tracking-[0.2em] font-light placeholder:text-white/20" value={formData.phone} onChange={handleChange} />
                <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#D4AF37] transition-all font-sans text-xs tracking-[0.2em] font-light placeholder:text-white/20" value={formData.email} onChange={handleChange} />
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full group relative overflow-hidden bg-white text-black py-5 font-sans font-bold uppercase text-[11px] tracking-[0.4em] transition-all duration-700 hover:text-white disabled:opacity-50">
                <div className="absolute inset-x-0 bottom-0 h-0 bg-[#D4AF37] transition-all duration-500 group-hover:h-full"></div>
                <span className="relative z-10">{status === 'submitting' ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ ЗАПРОС'}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center mb-8">
          <a href="https://vk.ru/club236933541" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.3em] text-white/40 hover:text-[#D4AF37] transition-colors uppercase font-sans">VK</a>
        </div>
        <p className="text-[9px] tracking-[0.5em] text-white/10 uppercase font-sans">© 2026 OUDORA Maison de Parfum • All Rights Reserved</p>
      </footer>

      <style>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
}
