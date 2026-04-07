// app/api/contact/route.ts
export const runtime = 'edge';

import { NextResponse } from 'next';

export async function POST(request: Request) {
  // your code here
  return NextResponse.json({ message: 'Contact form submitted' });
}
