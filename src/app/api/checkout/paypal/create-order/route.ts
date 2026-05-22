import { NextRequest, NextResponse } from 'next/server'
import { CartItem } from '@/store/cartStore'

async function getPayPalToken() {
  const res = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  const data = await res.json()
  return data.access_token as string
}

export async function POST(req: NextRequest) {
  const { items, total }: { items: CartItem[]; total: number } = await req.json()
  const token = await getPayPalToken()

  const order = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2),
            breakdown: {
              item_total: { currency_code: 'USD', value: total.toFixed(2) },
            },
          },
          items: items.map((item) => ({
            name: `${item.name} — Size ${item.size}`,
            quantity: String(item.quantity),
            unit_amount: { currency_code: 'USD', value: item.price.toFixed(2) },
          })),
        },
      ],
    }),
  })

  const data = await order.json()
  return NextResponse.json({ id: data.id })
}
