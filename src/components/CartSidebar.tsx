'use client'

import { useCartStore } from '@/store/cartStore'
import { X, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CartSidebar() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total, itemCount } = useCartStore()
  const router = useRouter()
  const count = itemCount()

  const handleCheckout = () => {
    toggleCart()
    router.push('/checkout')
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={toggleCart}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#141414] z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#2a2a2a]">
          <h2 className="font-bold text-lg tracking-widest uppercase">
            Cart {count > 0 && <span className="text-[#C9A227]">({count})</span>}
          </h2>
          <button onClick={toggleCart} className="text-[#888] hover:text-white transition-colors">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <p className="text-[#888] text-center mt-20">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 bg-[#1e1e1e] rounded-lg p-3"
              >
                <div className={`w-16 h-16 rounded bg-gradient-to-br ${item.placeholderGradient} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-[#888] text-xs">Size: {item.size}</p>
                  <p className="text-[#C9A227] text-sm font-bold mt-1">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="w-6 h-6 bg-[#2a2a2a] rounded text-sm hover:bg-[#3a3a3a] transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="w-6 h-6 bg-[#2a2a2a] rounded text-sm hover:bg-[#3a3a3a] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-[#888] hover:text-red-400 transition-colors self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-[#2a2a2a] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#888] uppercase tracking-wider text-sm">Total</span>
              <span className="text-xl font-bold text-[#C9A227]">${total().toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#C9A227] hover:bg-[#E8C547] text-black font-bold py-3 rounded-lg uppercase tracking-widest transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
