import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-authenticate': 'Basic realm="Protected"',
    },
  });
}
