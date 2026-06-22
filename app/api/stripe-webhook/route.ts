import { NextResponse } from 'next/server'
import { stripe } from '../../../lib/stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature') || ''

  try {
    // TODO: verify using STRIPE_WEBHOOK_SECRET
    // const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
    // handle event types (invoice.paid, customer.subscription.deleted, etc.)
    return NextResponse.json({ received: true })
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }
}
