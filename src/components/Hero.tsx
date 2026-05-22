'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex items-center justify-center h-screen min-h-[680px] overflow-hidden">

      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ top: '-10%', bottom: '-10%' }}>
        <img
          src="https://images.unsplash.com/photo-1728910156510-77488f19b152?w=1920&q=85&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ animation: 'panSlow 30s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Overlays — let the food and hands breathe through */}
      <div className="absolute inset-0 bg-[#0C0604]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0604]/60 via-[#0C0604]/20 to-[#0C0604]" />

      {/* Top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Ornament */}
        <div
          className="flex items-center justify-center gap-5 mb-8"
          style={{ animation: 'fadeIn .9s ease both .2s', opacity: 0 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A843]" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" fill="#D4A843"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A843]" />
        </div>

        {/* Location tag */}
        <p
          className="text-[#D4A843] text-[11px] tracking-[.35em] uppercase font-medium mb-5"
          style={{ animation: 'fadeInUp .8s ease both .4s', opacity: 0 }}
        >
          Great Glen · Leicestershire
        </p>

        {/* Main title */}
        <h1
          className="font-playfair font-black leading-none mb-5 tracking-tight"
          style={{
            fontSize: 'clamp(5rem, 16vw, 13rem)',
            animation: 'fadeInUp .9s ease both .5s',
            opacity: 0,
          }}
        >
          <span className="text-gold-shimmer">SATYA</span>
        </h1>

        {/* Subtitle divider */}
        <div
          className="section-eyebrow mb-5"
          style={{ animation: 'fadeIn .9s ease both .7s', opacity: 0 }}
        >
          <span className="text-[#B8A082] text-xs tracking-[.22em] uppercase font-light">
            Authentic Indian Cuisine
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-[#B8A082] text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ animation: 'fadeInUp .8s ease both .85s', opacity: 0 }}
        >
          Fresh, fine, and truly authentic — where every dish tells the story of India.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp .8s ease both 1.05s', opacity: 0 }}
        >
          <a href="#contact" className="btn-gold">Reserve a Table</a>
          <a href="#menu" className="btn-outline">Explore the Menu</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s ease both 1.6s', opacity: 0 }}
      >
        <span className="text-[#B8A082] text-[10px] tracking-[.22em] uppercase">Discover</span>
        <div className="w-px h-10 relative overflow-hidden bg-[#2A1E14]">
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#D4A843] to-transparent"
            style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}