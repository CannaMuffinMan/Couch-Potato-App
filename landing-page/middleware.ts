import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  // Allow public access to the landing page
  if (url.pathname === '/') {
    return NextResponse.next();
  }

  // Require auth for other pages (like /dev)
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');
    if (user === 'admin' && pwd === 'forevercouch') {
      return NextResponse.next();
    }
  }

  url.pathname = '/api/auth';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/', '/((?!_next|static|favicon.ico|api/auth).*)'],
};
