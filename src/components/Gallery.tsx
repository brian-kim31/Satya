const images = [
  {
    src:  'https://images.unsplash.com/photo-1772127822514-682aeffcc0d3?w=900&q=85&auto=format&fit=crop',
    alt:  'Elegant outdoor Indian wedding reception',
    tall: true,
  },
  {
    src:  'https://images.unsplash.com/photo-1585742440646-60adcd5a06d0?w=900&q=85&auto=format&fit=crop',
    alt:  'Luxurious wedding banquet hall',
    tall: false,
  },
  {
    src:  'https://images.unsplash.com/photo-1738202321539-9ed4a727f735?w=900&q=85&auto=format&fit=crop',
    alt:  'Chef serving at a catering buffet',
    tall: false,
  },
  {
    src:  'https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=900&q=85&auto=format&fit=crop',
    alt:  'Authentic Indian thali',
    tall: true,
  },
  {
    src:  'https://images.unsplash.com/photo-1666453814025-f7e8a01c1aa3?w=900&q=85&auto=format&fit=crop',
    alt:  'Catering event appetiser display',
    tall: false,
  },
  {
    src:  'https://images.unsplash.com/photo-1728910156510-77488f19b152?w=900&q=85&auto=format&fit=crop',
    alt:  'Indian feast — hands and copper pots',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#150A04] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-eyebrow mb-5 reveal">
            <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium">Gallery</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-playfair text-4xl md:text-5xl font-bold text-[#F5EDD6]">
            Moments at <em className="text-gold-gradient not-italic">Satya</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3 reveal">
          {images.map((img, i) => (
            <div
              key={i}
              className={`img-zoom overflow-hidden rounded-sm break-inside-avoid ${img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Full-width CTA banner */}
        <div className="mt-20 relative overflow-hidden rounded-sm reveal">
          <img
            src="https://images.unsplash.com/photo-1665660710687-b44c50751054?w=1600&q=85&auto=format&fit=crop"
            alt="South Indian feast — dosa and sides"
            className="w-full h-64 md:h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#0C0604]/65 flex flex-col items-center justify-center text-center px-6">
            <p className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase mb-3">Dine with us</p>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5EDD6] mb-6">
              Your table is waiting
            </h3>
            <a href="#contact" className="btn-gold">Reserve Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}