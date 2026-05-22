const stats = [
  { value: 'Est. 2023', label: 'Serving Great Glen' },
  { value: '100+',      label: 'Authentic Dishes'  },
  { value: 'Worldwide', label: 'Destination Catering' },
  { value: '4 Days',    label: 'Open Every Week'   },
]

export default function About() {
  return (
    <section id="about" className="bg-[#0C0604]">

      {/* Stats strip */}
      <div className="border-y border-[#2A1E14] bg-[#150A04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A1E14]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal py-10 px-6 text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="font-playfair text-3xl md:text-4xl font-bold text-gold-gradient mb-1">{s.value}</p>
              <p className="text-[#B8A082] text-[11px] tracking-[.16em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <div className="section-eyebrow justify-start mb-6 reveal">
              <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium">Our Story</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight mb-6">
              A Passion for India's<br />
              <em className="text-gold-gradient not-italic">Finest Flavours</em>
            </h2>
            <p className="reveal reveal-delay-2 text-[#B8A082] text-base leading-relaxed mb-5">
              Tucked in the heart of Great Glen, Leicestershire, Satya was born from a simple conviction:
              that the richest Indian cooking deserves the finest ingredients, prepared with care, and shared
              in a warm, contemporary setting.
            </p>
            <p className="reveal reveal-delay-3 text-[#B8A082] text-base leading-relaxed mb-10">
              Every dish on our menu is a tribute to regional Indian traditions — from slow-cooked
              Mughlai curries to perfectly charred tandoori specialities — crafted fresh each day and
              served with genuine hospitality.
            </p>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-4">
              <a href="#menu" className="btn-gold">View the Menu</a>
              <a href="#contact" className="btn-outline">Book a Table</a>
            </div>
          </div>

          {/* Images */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-3 h-[480px]">
            <div className="img-zoom rounded-sm overflow-hidden row-span-2">
              <img
                src="https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=900&q=85&auto=format&fit=crop"
                alt="Elegant restaurant dining room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-zoom rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596463989140-3b600dab72e5?w=700&q=85&auto=format&fit=crop"
                alt="Cocktails at Satya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-zoom rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1742281257687-092746ad6021?w=700&q=85&auto=format&fit=crop"
                alt="Authentic Indian thali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live sports banner */}
      <div className="border-t border-[#2A1E14] bg-[#150A04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
          <p className="font-playfair text-xl md:text-2xl text-[#F5EDD6] font-semibold">
            Great food <em className="text-[#D4A843]">&amp;</em> live sport — the perfect match.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://satyarestaurant.co.uk/wp-content/uploads/2025/11/Sky_Sports_logo_2020-web-300x90.jpg"
              alt="Sky Sports"
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://satyarestaurant.co.uk/wp-content/uploads/2025/11/TNT_Sports_logo_2020-300x90.jpg"
              alt="TNT Sports"
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}