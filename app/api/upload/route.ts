import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // TODO: implement secure file uploads to Supabase Storage
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 })
}
