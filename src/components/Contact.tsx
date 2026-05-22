'use client'
import { useState } from 'react'

const hours = [
  { day: 'Monday',            time: 'Closed'       },
  { day: 'Tuesday – Friday',  time: '4:30 – 10:00 pm' },
  { day: 'Saturday',          time: '4:00 – 10:00 pm' },
  { day: 'Sunday',            time: '4:00 – 9:00 pm'  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2', notes: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const input = 'w-full bg-[#1E1008] border border-[#2A1E14] text-[#F5EDD6] placeholder-[#6B5A44] px-4 py-3 text-sm focus:outline-none focus:border-[#D4A843] transition-colors'

  return (
    <section id="contact" className="bg-[#150A04] py-24 md:py-32 border-t border-[#2A1E14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-eyebrow mb-5 reveal">
            <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium">Visit Us</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-playfair text-4xl md:text-5xl font-bold text-[#F5EDD6]">
            Reserve Your Table
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <div className="reveal">

            {/* Address */}
            <div className="mb-10">
              <h3 className="font-playfair text-xl font-bold text-[#F5EDD6] mb-4">Find Us</h3>
              <div className="flex items-start gap-3 text-[#B8A082] mb-3">
                <svg className="w-4 h-4 mt-0.5 text-[#D4A843] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm leading-relaxed">12A London Road, Great Glen,<br />Leicestershire LE8 9GF</span>
              </div>
              <div className="flex items-center gap-3 text-[#B8A082] mb-2">
                <svg className="w-4 h-4 text-[#D4A843] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.18 21 3 13.82 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.23 1.01L6.6 10.8z"/>
                </svg>
                <a href="tel:01162592765" className="text-sm hover:text-[#D4A843] transition-colors">0116 259 2765</a>
              </div>
              <div className="flex items-center gap-3 text-[#B8A082]">
                <svg className="w-4 h-4 text-[#D4A843] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@satyarestaurant.co.uk" className="text-sm hover:text-[#D4A843] transition-colors">info@satyarestaurant.co.uk</a>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="font-playfair text-xl font-bold text-[#F5EDD6] mb-4">Opening Hours</h3>
              <div className="space-y-3">
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between items-center border-b border-[#2A1E14] pb-3">
                    <span className="text-[#B8A082] text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.time === 'Closed' ? 'text-[#6B5A44]' : 'text-[#D4A843]'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mb-10 overflow-hidden rounded-sm border border-[#2A1E14]">
              <iframe
                title="Satya Restaurant location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.2!2d-1.0332951!3d52.5708508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487764fff025878f%3A0x1d8cfdb2323ceb6!2sSatya%20Restaurant!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Catering CTA */}
            <div className="bg-[#1E1008] border border-[#D4A843]/20 p-6">
              <p className="text-[#D4A843] text-[11px] tracking-[.16em] uppercase font-medium mb-2">Catering Enquiries</p>
              <p className="text-[#B8A082] text-sm mb-4">
                Planning a wedding or event? Our dedicated catering team is ready to help.
              </p>
              <a href="tel:07540980426" className="btn-gold text-center block">
                Call: 07540 980 426
              </a>
            </div>
          </div>

          {/* Right: booking form */}
          <div className="reveal reveal-delay-2">
            <h3 className="font-playfair text-xl font-bold text-[#F5EDD6] mb-6">Reserve Online</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 border border-[#D4A843]/20 bg-[#1E1008]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#D4A843" strokeWidth="1.5"/>
                  <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-playfair text-2xl font-bold text-[#F5EDD6]">Thank you, {form.name.split(' ')[0]}!</p>
                <p className="text-[#B8A082] text-sm text-center max-w-xs">
                  We've received your reservation request and will confirm your table by phone or email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className={input} />
                  </div>
                  <div>
                    <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={input} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Preferred Date *</label>
                    <input name="date" type="date" required value={form.date} onChange={handleChange} className={input} />
                  </div>
                  <div>
                    <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Preferred Time</label>
                    <select name="time" value={form.time} onChange={handleChange} className={input}>
                      <option value="">Select time</option>
                      <option>4:30 pm</option>
                      <option>5:00 pm</option>
                      <option>5:30 pm</option>
                      <option>6:00 pm</option>
                      <option>6:30 pm</option>
                      <option>7:00 pm</option>
                      <option>7:30 pm</option>
                      <option>8:00 pm</option>
                      <option>8:30 pm</option>
                      <option>9:00 pm</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Number of Guests *</label>
                  <select name="guests" required value={form.guests} onChange={handleChange} className={input}>
                    {['1','2','3','4','5','6','7','8','9','10+'].map(n => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#B8A082] text-xs tracking-[.1em] uppercase mb-2">Special Requests</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Dietary requirements, allergies, special occasions…"
                    className={`${input} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-gold w-full text-center">
                  Request Reservation
                </button>
                <p className="text-[#6B5A44] text-xs text-center">
                  We'll confirm your booking by phone within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}