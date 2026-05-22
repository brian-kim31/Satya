'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { Product } from '@/lib/products'
import { ShoppingBag, Check } from 'lucide-react'
import Image from 'next/image'

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [added, setAdded] = useState(false)
  const [error, setError] = useState(false)
  const { addItem, openCart } = useCartStore()

  const handleAdd = () => {
    if (!selectedSize) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    addItem({
      id: product.id,
      name: product.name,
      artist: product.artist,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      image: product.image,
      placeholderGradient: product.placeholderGradient,
    })
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-[#141414] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#C9A227]/40 transition-all duration-300 group">
      <div className={`relative aspect-square bg-gradient-to-br ${product.placeholderGradient} overflow-hidden`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          onLoad={(e) => ((e.target as HTMLImageElement).style.opacity = '1')}
          onError={() => {}}
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <span className="text-6xl font-black tracking-tighter text-white/20 uppercase">
            {product.artist === 'nickdee' ? 'ND' : 'MS'}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-[#C9A227] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            {product.artist === 'nickdee' ? 'NickDee' : 'Mohspice'}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-sm leading-tight">{product.name}</h3>
          <span className="text-[#C9A227] font-bold text-sm whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-[#888] text-xs leading-relaxed">{product.description}</p>

        <div className="space-y-1">
          <p className={`text-xs uppercase tracking-wider ${error ? 'text-red-400' : 'text-[#888]'}`}>
            {error ? 'Please select a size' : 'Select size'}
          </p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => { setSelectedSize(size); setError(false) }}
                className={`w-9 h-9 rounded text-xs font-bold border transition-all ${
                  selectedSize === size
                    ? 'bg-[#C9A227] border-[#C9A227] text-black'
                    : 'border-[#2a2a2a] text-[#888] hover:border-[#C9A227] hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-[#C9A227] hover:bg-[#E8C547] text-black'
          }`}
        >
          {added ? (
            <>
              <Check size={16} />
              Added
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  )
}
