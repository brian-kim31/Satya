'use client'

import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function CheckoutPage() {
  const { items, total, clearCart, itemCount } = useCartStore()
  const router = useRouter()
  const [stripeLoading, setStripeLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && itemCount() === 0) {
      router.push('/')
    }
  }, [mounted, items, router, itemCount])

  const handleStripe = async () => {
    setStripeLoading(true)
    try {
      const res = await fetch('/api/checkout/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setStripeLoading(false)
    }
  }

  if (!mounted) return null

  const orderTotal = total()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight mb-8 uppercase">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#888]">Order Summary</h2>
          <div className="bg-[#141414] rounded-xl border border-[#2a2a2a] divide-y divide-[#2a2a2a]">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 p-4">
                <div className={`w-12 h-12 rounded bg-gradient-to-br ${item.placeholderGradient} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-[#888] text-xs">Size: {item.size} · Qty: {item.quantity}</p>
                </div>
                <p className="text-[#C9A227] font-bold text-sm whitespace-nowrap">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between p-4">
              <span className="font-bold uppercase tracking-wider text-sm">Total</span>
              <span className="text-[#C9A227] font-black text-lg">${orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#888]">Payment</h2>

          <button
            onClick={handleStripe}
            disabled={stripeLoading}
            className="w-full bg-[#C9A227] hover:bg-[#E8C547] disabled:opacity-60 text-black font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2"
          >
            {stripeLoading ? (
              <span className="animate-pulse">Redirecting…</span>
            ) : (
              <>Pay with Card (Stripe)</>
            )}
          </button>

          <div className="flex items-center gap-3 text-[#888] text-xs">
            <div className="flex-1 border-t border-[#2a2a2a]" />
            <span>OR</span>
            <div className="flex-1 border-t border-[#2a2a2a]" />
          </div>

          <div className="bg-[#141414] rounded-xl border border-[#2a2a2a] p-4">
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb',
                currency: 'USD',
              }}
            >
              <PayPalButtons
                style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
                createOrder={async () => {
                  const res = await fetch('/api/checkout/paypal/create-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ items, total: orderTotal }),
                  })
                  const data = await res.json()
                  return data.id
                }}
                onApprove={async (data) => {
                  await fetch('/api/checkout/paypal/capture-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ orderID: data.orderID }),
                  })
                  clearCart()
                  router.push('/success')
                }}
              />
            </PayPalScriptProvider>
          </div>

          <p className="text-[#888] text-xs text-center">
            Secure checkout. Your info is never stored on our servers.
          </p>
        </div>
      </div>
    </div>
  )
}
