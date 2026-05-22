const dishes = [
  {
    name: 'Lamb Biryani',
    desc: 'Slow-cooked basmati rice layered with tender, spiced lamb — sealed and dum-cooked for fragrant perfection.',
    tag: "Chef's Signature",
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Chicken Tikka Masala',
    desc: 'Smoky tandoor-kissed chicken in a velvety, hand-ground tomato and cream masala — a timeless classic.',
    tag: 'Most Loved',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Mixed Tandoori Grill',
    desc: 'A showstopper platter of marinated chicken, lamb chops, seekh kebabs and paneer tikka from our clay oven.',
    tag: 'Sharing Platter',
    img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Saag Paneer',
    desc: 'Fresh spinach slow-wilted with aromatic spices, folded through soft cubes of homemade cottage cheese.',
    tag: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Garlic Naan',
    desc: 'Stone-baked to a perfect char, brushed with garlic butter and fresh coriander straight from the tandoor.',
    tag: 'Fresh Baked',
    img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Mango Kulfi',
    desc: 'Dense, creamy frozen dessert infused with Alphonso mango and cardamom — the perfect sweet finish.',
    tag: 'Dessert',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=85&auto=format&fit=crop',
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-[#150A04] py-24 md:py-32 overflow-hidden dot-grid">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A843]/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-eyebrow mb-5 reveal">
            <span className="text-[#D4A843] text-[11px] tracking-[.22em] uppercase font-medium">Our Menu</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight mb-5">
            Taste the Art of<br />
            <em className="text-gold-gradient not-italic">Indian Cooking</em>
          </h2>
          <p className="reveal reveal-delay-2 text-[#B8A082] text-base max-w-lg mx-auto leading-relaxed">
            A handpicked selection of our most-loved dishes — each one made fresh daily from
            traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Dish grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`reveal reveal-delay-${(i % 3) + 1} card-lift group bg-[#1E1008] border border-[#2A1E14] overflow-hidden flex flex-col`}
            >
              {/* Food photo */}
              <div className="img-zoom h-48 overflow-hidden flex-shrink-0">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-playfair text-xl font-bold text-[#F5EDD6] group-hover:text-[#D4A843] transition-colors leading-tight">
                    {dish.name}
                  </h3>
                  <span className="text-[10px] tracking-[.14em] uppercase text-[#D4A843] border border-[#D4A843]/30 px-2.5 py-1 whitespace-nowrap flex-shrink-0">
                    {dish.tag}
                  </span>
                </div>
                <p className="text-[#B8A082] text-sm leading-relaxed flex-1">{dish.desc}</p>
                <div className="h-px bg-gradient-to-r from-[#D4A843]/30 to-transparent mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Menu download CTAs */}
        <div className="mt-14 text-center reveal">
          <p className="text-[#B8A082] text-sm mb-6">View our full menu including weekend specials and drinks</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://satyarestaurant.co.uk/wp-content/uploads/2025/10/New-Menu-scaled.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Full Menu
            </a>
            <a
              href="https://satyarestaurant.co.uk/wp-content/uploads/2025/10/New-Drinks-scaled.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Drinks Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
