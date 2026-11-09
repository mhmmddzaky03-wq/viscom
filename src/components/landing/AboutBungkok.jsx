import React from 'react';
import { Camera, Bell, BarChart } from '../common/Icons';

/**
 * AboutBungkok Component
 * Edge-to-edge ("ujung ke ujung") responsive layout matching Figma.
 * Seamlessly spans full viewport width on desktop, tablet, and mobile.
 */
export default function AboutBungkok() {
  const floatingPhotos = [
    // 1. Top-Left: Hands typing on keyboard (bleeds off left screen edge)
    {
      id: 'keyboard',
      src: '/assets/landing/mosaic/keyboard.jpg',
      alt: 'Keyboard desk typing posture',
      wrapperClass:
        'absolute top-4 sm:top-8 md:top-10 left-0 w-24 sm:w-36 md:w-44 lg:w-56 xl:w-64 h-20 sm:h-28 md:h-36 lg:h-44 rounded-r-2xl sm:rounded-r-3xl overflow-hidden shadow-lg border-y border-r border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]',
    },
    // 2. Top-Center: Ergonomic chair wheels (bleeds off top edge)
    {
      id: 'chair',
      src: '/assets/landing/mosaic/chair.jpg',
      alt: 'Ergonomic chair and desk setup',
      wrapperClass:
        'absolute top-0 left-[18%] sm:left-[22%] md:left-[28%] w-32 sm:w-44 md:w-56 lg:w-64 h-14 sm:h-20 md:h-24 rounded-b-2xl sm:rounded-b-3xl overflow-hidden shadow-md border-x border-b border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02] hidden sm:block',
    },
    // 3. Top-Right: Woman sitting upright (bleeds off right screen edge)
    {
      id: 'sitting_upright',
      src: '/assets/landing/mosaic/sitting_upright.jpg',
      alt: 'Upright sitting posture at white desk',
      wrapperClass:
        'absolute top-4 sm:top-8 md:top-10 right-0 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-24 sm:h-32 md:h-40 lg:h-52 rounded-l-2xl sm:rounded-l-3xl overflow-hidden shadow-lg border-y border-l border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]',
    },
    // 4. Middle-Left: Laptop dashboard (bleeds off left screen edge)
    {
      id: 'laptop',
      src: '/assets/landing/mosaic/laptop.jpg',
      alt: 'Laptop showing posture analytics dashboard',
      wrapperClass:
        'absolute top-[50%] -translate-y-1/2 left-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 h-24 sm:h-32 md:h-40 lg:h-48 rounded-r-2xl sm:rounded-r-3xl overflow-hidden shadow-lg border-y border-r border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02] hidden md:block',
    },
    // 5. Middle-Right: Doctor spine consultation (bleeds off right screen edge)
    {
      id: 'doctor_spine',
      src: '/assets/landing/mosaic/doctor_spine.jpg',
      alt: 'Doctor and patient spine anatomy consultation',
      wrapperClass:
        'absolute top-[50%] -translate-y-1/2 right-0 w-32 sm:w-44 md:w-56 lg:w-72 xl:w-80 h-28 sm:h-36 md:h-48 lg:h-56 rounded-l-2xl sm:rounded-l-3xl overflow-hidden shadow-lg border-y border-l border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02] hidden md:block',
    },
    // 6. Bottom-Left: Woman stretching at desk
    {
      id: 'stretching',
      src: '/assets/landing/mosaic/stretching.jpg',
      alt: 'Woman stretching back and arms at work desk',
      wrapperClass:
        'absolute bottom-2 sm:bottom-4 md:bottom-6 left-4 sm:left-10 md:left-24 lg:left-36 w-32 sm:w-44 md:w-56 lg:w-64 h-24 sm:h-32 md:h-40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]',
    },
    // 7. Bottom-Right: Man working at standing desk
    {
      id: 'standing_desk',
      src: '/assets/landing/mosaic/standing_desk.jpg',
      alt: 'Man standing at adjustable height standing desk',
      wrapperClass:
        'absolute bottom-2 sm:bottom-4 md:bottom-6 right-4 sm:right-10 md:right-24 lg:right-36 w-32 sm:w-44 md:w-56 lg:w-64 h-24 sm:h-32 md:h-40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/90 bg-white z-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]',
    },
  ];

  return (
    <section id="about" className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden min-h-[640px] sm:min-h-[720px] flex items-center justify-center">
      {/* 7 Floating Surrounding Mosaic Photos spanning full edge-to-edge */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingPhotos.map((photo) => (
          <div key={photo.id} className={photo.wrapperClass}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover select-none pointer-events-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Central Glassmorphic Card (Figma Exact Typography & Layout) */}
      <div className="relative z-10 w-full max-w-xl sm:max-w-2xl mx-auto rounded-[32px] sm:rounded-[36px] overflow-hidden bg-white/92 backdrop-blur-md shadow-2xl border border-white/80 p-6 sm:py-12 sm:px-12 text-center transition-transform duration-500 hover:scale-[1.01]">
        {/* Soft watermarked background photo of woman at desk */}
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-multiply">
          <img
            src="/assets/woman_desk_working.jpg"
            alt="Posture awareness in workspace"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10">
          {/* Main Title: Classic Serif font matching Figma */}
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-[0.16em] text-[#2d628d] uppercase mb-4 drop-shadow-sm">
            ABOUT BUNGKOK
          </h2>

          {/* Subtitle Description */}
          <p className="font-sans text-[11px] sm:text-xs md:text-sm font-bold text-slate-800 tracking-wider uppercase leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
            BUNGKOK ADALAH WEB APP UNTUK MEMBANTU KAMU MEMBANGUN KESADARAN SAAT DUDUK MELALUI PEMANTAUAN POSTUR BERBASIS WEB CAM
          </p>

          {/* 3 Core Value Items with Dividers */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200/60">
            {/* Item 1: Pantau postur */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-left">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-pink-200 bg-pink-50/80 text-brand-pink flex items-center justify-center shrink-0 shadow-sm">
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff4d8d]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-600 leading-tight">
                  Pantau
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">
                  postur
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-6 sm:h-7 w-px bg-slate-200" />

            {/* Item 2: Ingatkan dengan lembut */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-left">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-pink-200 bg-pink-50/80 text-brand-pink flex items-center justify-center shrink-0 shadow-sm">
                <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff4d8d]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-600 leading-tight">
                  Ingatkan
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">
                  dengan lembut
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-6 sm:h-7 w-px bg-slate-200" />

            {/* Item 3: Lacak kebiasaan */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-left">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-pink-200 bg-pink-50/80 text-brand-pink flex items-center justify-center shrink-0 shadow-sm">
                <BarChart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff4d8d]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-600 leading-tight">
                  Lacak
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">
                  kebiasaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
