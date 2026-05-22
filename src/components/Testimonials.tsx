const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Satya+Restaurant/@52.571024,-1.033174,17z/data=!4m19!1m10!3m9!1s0x487764fff025878f:0x1d8cfdb2323ceb6!2sSatya+Restaurant!8m2!3d52.5708508!4d-1.0332951!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11vyh6mwvy!3m7!1s0x487764fff025878f:0x1d8cfdb2323ceb6!8m2!3d52.5708508!4d-1.0332951!9m1!1b1!16s%2Fg%2F11vyh6mwvy'

const reviews = [
  {
    name: 'dinkerpatel',
    location: 'TripAdvisor · June 2025',
    stars: 5,
    title: 'Found by chance but have visited FOUR times already',
    text: "This family run place is spotlessly clean and for its physical size the menu is quite extensive — full array of starters, mains and side dishes. The staff are very friendly, polite but thoroughly professional. It is so interesting to see your food being cooked in front of you, the service is excellent and prompt. I cannot praise the venue, service nor the food highly enough — words fail me.",
  },
  {
    name: 'Karen M',
    location: 'TripAdvisor · September 2024',
    stars: 5,
    title: 'Lovely place, lovely food',
    text: "We went to Great Glen as it was halfway for us and our friends to meet. So we chose Satya — we were not disappointed. It's a lovely little place with authentic Indian food. Staff were very friendly and helpful. We all enjoyed our meals. Big portions too. All in all worth a visit.",
  },
  {
    name: 'Gia K',
    location: 'TripAdvisor · June 2024',
    stars: 5,
    title: 'Best Indian I have had',
    text: "Amazing food, very authentic Indian cuisine. Best I have ever had. Service was excellent. Hidden gem in the village — you have to try.",
  },
]

const extraReviews = [
  {
    name: 'Phil H',
    location: 'TripAdvisor · August 2025',
    stars: 5,
    text: 'We have been visiting Satya for 2 years now. Consistent, high quality, full of flavour food with fresh ingredients. Great staff. Cooked with love and pride. Amazing, thank you.',
  },
  {
    name: 'B G',
    location: 'TripAdvisor · October 2024',
    stars: 5,
    text: 'Lovely food, authentic and prepared with care! Friendly staff, clean surroundings, good quality ingredients. Highly recommend.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? '#D4A843' : '#2A1E14'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#0C0604] py-24 md:py-32 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4A843]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-eyebrow mb-5 reveal">
            <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium">Guest Reviews</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-playfair text-4xl md:text-5xl font-bold text-[#F5EDD6]">
            What Our Guests Say
          </h2>
          <p className="reveal reveal-delay-2 text-[#B8A082] text-sm mt-3">
            Verified reviews from TripAdvisor
          </p>
        </div>

        {/* Featured 3 reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-delay-${i + 1} card-lift bg-[#150A04] border border-[#2A1E14] p-8 flex flex-col gap-4`}
            >
              <div className="flex items-start justify-between gap-2">
                <Stars count={r.stars} />
                {/* TripAdvisor owl mark */}
                <svg width="18" height="12" viewBox="0 0 32 20" fill="none" opacity="0.5">
                  <circle cx="8" cy="10" r="8" fill="#34E0A1"/>
                  <circle cx="24" cy="10" r="8" fill="#34E0A1"/>
                  <circle cx="8" cy="10" r="3" fill="white"/>
                  <circle cx="24" cy="10" r="3" fill="white"/>
                  <circle cx="8" cy="10" r="1.5" fill="#1A1A1A"/>
                  <circle cx="24" cy="10" r="1.5" fill="#1A1A1A"/>
                </svg>
              </div>
              <p className="text-[#D4A843] text-xs font-semibold tracking-wide">&ldquo;{r.title}&rdquo;</p>
              <blockquote className="text-[#B8A082] text-sm leading-relaxed flex-1 italic">
                {r.text}
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-[#2A1E14]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A843] to-[#A87D2B] flex items-center justify-center text-[#0C0604] font-bold text-xs flex-shrink-0">
                  {r.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-[#F5EDD6] text-sm font-semibold leading-tight">{r.name}</p>
                  <p className="text-[#6B5A44] text-[11px]">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two smaller reviews */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {extraReviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-delay-${i + 1} card-lift bg-[#150A04] border border-[#2A1E14] px-7 py-5 flex items-start gap-5`}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A843] to-[#A87D2B] flex items-center justify-center text-[#0C0604] font-bold text-sm flex-shrink-0 mt-1">
                {r.name[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-[#F5EDD6] text-sm font-semibold">{r.name}</p>
                  <Stars count={r.stars} />
                </div>
                <p className="text-[#6B5A44] text-[11px] mb-2">{r.location}</p>
                <p className="text-[#B8A082] text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center reveal">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#2A1E14] hover:border-[#D4A843]/40 bg-[#150A04] hover:bg-[#1E1008] px-7 py-4 transition-all duration-300 group"
          >
            {/* Google G icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-[#B8A082] group-hover:text-[#F5EDD6] text-sm transition-colors">
              Read more reviews on Google
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4A843]">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}