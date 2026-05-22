'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { ShoppingBag } from 'lucide-react'

export default function Header() {
  const { itemCount, toggleCart } = useCartStore()
  const count = itemCount()

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[#C9A227] font-bold text-lg tracking-widest uppercase">
            NickDee × Mohspice
          </span>
          <span className="text-[#888] text-xs tracking-widest uppercase">Official Merch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#888] tracking-wider uppercase">
          <Link href="/#nickdee" className="hover:text-[#C9A227] transition-colors">NickDee</Link>
          <Link href="/#mohspice" className="hover:text-[#C9A227] transition-colors">Mohspice</Link>
        </nav>

        <button
          onClick={toggleCart}
          className="relative flex items-center gap-2 text-sm text-white hover:text-[#C9A227] transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag size={22} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C9A227] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
