'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <CheckCircle size={64} className="text-[#C9A227] mb-6" />
      <h1 className="text-4xl font-black tracking-tight mb-3 uppercase">Order Confirmed!</h1>
      <p className="text-[#888] max-w-sm mb-8">
        Thanks for supporting NickDee Entertainment &amp; Mohspice. Your merch is on its way!
      </p>
      <Link
        href="/"
        className="bg-[#C9A227] hover:bg-[#E8C547] text-black font-bold px-8 py-3 rounded-lg uppercase tracking-widest text-sm transition-colors"
      >
        Shop More
      </Link>
    </div>
  )
}
