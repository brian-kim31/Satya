const services = [
  {
    icon: '💒',
    title: 'Weddings',
    desc: 'Bespoke menus for your special day — from intimate ceremonies to grand receptions of any size.',
  },
  {
    icon: '🌍',
    title: 'Destination Events',
    desc: 'We travel anywhere in the world. Trust us to deliver an authentic experience wherever you are.',
  },
  {
    icon: '🏢',
    title: 'Corporate Events',
    desc: 'Impress clients and teams alike with elegant Indian catering for conferences, launches, and dinners.',
  },
  {
    icon: '🎉',
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, engagements, wakes — no event is too personal or too large.',
  },
]

export default function Catering() {
  return (
    <section id="catering" className="bg-[#0C0604] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Full-width image banner */}
        <div className="relative rounded-sm overflow-hidden mb-20 reveal h-72 md:h-96 img-zoom">
          <img
            src="https://images.unsplash.com/photo-1772127822525-7eda37383b9f?w=1600&q=85&auto=format&fit=crop"
            alt="Elegant outdoor Indian wedding reception"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0604]/80 via-[#0C0604]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
            <p className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium mb-3">Professional Catering</p>
            <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight max-w-lg">
              Any Wedding.<br />Any Event.<br />
              <em className="text-gold-gradient not-italic">Anywhere.</em>
            </h2>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: description */}
          <div>
            <div className="section-eyebrow justify-start mb-5 reveal">
              <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase">Satya Catering</span>
            </div>
            <h3 className="reveal reveal-delay-1 font-playfair text-3xl md:text-4xl font-bold text-[#F5EDD6] mb-6 leading-tight">
              We bring the restaurant to you
            </h3>
            <p className="reveal reveal-delay-2 text-[#B8A082] leading-relaxed mb-4">
              Our dedicated catering arm brings the same passion and quality from our kitchen
              directly to your event. From 30 guests to 300 — at a local venue, a country estate,
              or a destination abroad — we handle every detail with professionalism and care.
            </p>
            <p className="reveal reveal-delay-3 text-[#B8A082] leading-relaxed mb-10">
              Menus are tailored to your preferences, dietary needs, and budget. We provide full
              setup, service, and takedown so you can be present — not preoccupied.
            </p>

            <div className="reveal reveal-delay-4 space-y-3 mb-10">
              {['Fully customisable menus', 'Professional service staff', 'Complete event setup & takedown', 'Worldwide destination catering available', 'Dietary & allergen requirements catered for'].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#B8A082]">
                  <span className="text-[#D4A843] text-xs">✦</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-5 flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold">Enquire About Catering</a>
              <a href="tel:07540980426" className="btn-outline">
                Call: 07540 980 426
              </a>
            </div>
          </div>

          {/* Right: service cards + images */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`reveal reveal-delay-${i + 1} card-lift bg-[#150A04] border border-[#2A1E14] p-5`}
                >
                  <span className="text-2xl mb-3 block">{s.icon}</span>
                  <h4 className="font-playfair text-base font-bold text-[#F5EDD6] mb-2">{s.title}</h4>
                  <p className="text-[#B8A082] text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Gallery strip */}
            <div className="grid grid-cols-3 gap-2 reveal">
              <div className="img-zoom h-28 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1687369595840-e96a912586f1?w=500&q=80&auto=format&fit=crop" alt="Chef plating catering dishes" className="w-full h-full object-cover" />
              </div>
              <div className="img-zoom h-28 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1576842546422-60562b9242ae?w=500&q=80&auto=format&fit=crop" alt="Catering event spread" className="w-full h-full object-cover" />
              </div>
              <div className="img-zoom h-28 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1660120447916-123439b05c40?w=500&q=80&auto=format&fit=crop" alt="Event buffet service" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Catering logo */}
            <div className="mt-5 flex justify-start reveal">
              <img
                src="https://satyarestaurant.co.uk/wp-content/uploads/2024/01/Satya-Oadby-Catering-Logo-300x164.png"
                alt="Satya Oadby Catering"
                className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}