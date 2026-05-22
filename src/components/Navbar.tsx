'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about',    label: 'Our Story'  },
  { href: '#menu',     label: 'Menu'       },
  { href: '#catering', label: 'Catering'   },
  { href: '#gallery',  label: 'Gallery'    },
  { href: '#contact',  label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0C0604]/95 backdrop-blur-xl border-b border-[#2A1E14] shadow-[0_4px_40px_rgba(0,0,0,.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" aria-label="Satya Restaurant home">
            <img
              src="https://satyarestaurant.co.uk/wp-content/uploads/2023/11/web-logo.png"
              alt="Satya Restaurant"
              className="h-11 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#B8A082] hover:text-[#D4A843] text-[11px] tracking-[.16em] uppercase font-medium transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:01162592765"
              className="flex items-center gap-2 text-[#B8A082] hover:text-[#D4A843] text-sm transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.18 21 3 13.82 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.23 1.01L6.6 10.8z"/>
              </svg>
              0116 259 2765
            </a>
            <a href="#contact" className="btn-gold">Reserve a Table</a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] p-2 text-[#D4A843]"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0C0604]/98 backdrop-blur-xl border-t border-[#2A1E14]`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-[#1E1008] text-[#B8A082] hover:text-[#D4A843] text-xs tracking-[.14em] uppercase font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold mt-5 text-center">
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  )
}