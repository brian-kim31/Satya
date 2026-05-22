const quickLinks = [
  { href: '#about',    label: 'Our Story'  },
  { href: '#menu',     label: 'Menu'       },
  { href: '#catering', label: 'Catering'   },
  { href: '#gallery',  label: 'Gallery'    },
  { href: '#contact',  label: 'Contact'    },
]

const hours = [
  { day: 'Tue – Fri', time: '4:30 – 10:00 pm' },
  { day: 'Saturday',  time: '4:00 – 10:00 pm' },
  { day: 'Sunday',    time: '4:00 – 9:00 pm'  },
  { day: 'Monday',    time: 'Closed'           },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0604] border-t border-[#2A1E14]">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <img
            src="https://satyarestaurant.co.uk/wp-content/uploads/2023/11/web-logo.png"
            alt="Satya Restaurant"
            className="h-12 w-auto mb-5"
          />
          <p className="text-[#B8A082] text-sm leading-relaxed mb-6">
            Fresh, fine, and truly authentic Indian cuisine in the heart of Great Glen, Leicestershire.
          </p>
          {/* Social placeholders */}
          <div className="flex gap-3">
            {['F', 'I', 'X'].map(s => (
              <div key={s} className="w-9 h-9 border border-[#2A1E14] flex items-center justify-center text-[#B8A082] hover:border-[#D4A843] hover:text-[#D4A843] transition-colors cursor-pointer text-xs font-bold">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-playfair text-[#F5EDD6] font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-[#B8A082] hover:text-[#D4A843] text-sm transition-colors flex items-center gap-2">
                  <span className="text-[#D4A843] text-[10px]">✦</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-playfair text-[#F5EDD6] font-bold mb-5">Opening Hours</h4>
          <ul className="space-y-3">
            {hours.map(h => (
              <li key={h.day} className="flex justify-between text-sm">
                <span className="text-[#B8A082]">{h.day}</span>
                <span className={h.time === 'Closed' ? 'text-[#6B5A44]' : 'text-[#D4A843]'}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h4 className="font-playfair text-[#F5EDD6] font-bold mb-5">Get in Touch</h4>
          <div className="space-y-2 mb-6 text-sm text-[#B8A082]">
            <p>12A London Road, Great Glen</p>
            <p>Leicestershire LE8 9GF</p>
            <a href="tel:01162592765" className="block hover:text-[#D4A843] transition-colors">0116 259 2765</a>
            <a href="mailto:info@satyarestaurant.co.uk" className="block hover:text-[#D4A843] transition-colors text-xs">
              info@satyarestaurant.co.uk
            </a>
          </div>
          {/* Newsletter */}
          <h4 className="font-playfair text-[#F5EDD6] font-bold mb-3 text-sm">Stay in the loop</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-[#1E1008] border border-[#2A1E14] text-[#F5EDD6] placeholder-[#6B5A44] px-3 py-2.5 text-xs focus:outline-none focus:border-[#D4A843] transition-colors min-w-0"
            />
            <button className="bg-[#D4A843] hover:bg-[#E8C864] text-[#0C0604] px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-[#6B5A44] text-[11px] mt-2">Special offers, new menus & events.</p>
        </div>
      </div>

      {/* Gold rule */}
      <hr className="gold-rule mx-6 lg:mx-10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[#6B5A44] text-xs">
        <p>© {new Date().getFullYear()} Satya Restaurant. All rights reserved.</p>
        <p>12A London Road · Great Glen · Leicestershire LE8 9GF</p>
      </div>
    </footer>
  )
}