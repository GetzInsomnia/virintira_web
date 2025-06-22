import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Debug log
  console.log('Middleware called for pathname:', pathname);

  // ถ้าเป็น root path ให้ redirect ไปยัง default locale
  if (pathname === '/') {
    console.log('Redirecting root to:', `/${defaultLocale}`);
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // ถ้ามี locale อยู่แล้วหรือเป็น static files ก็ไม่ redirect
  if (
    locales.some(locale => pathname.startsWith(`/${locale}`)) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.startsWith('/manifest.json') ||
    pathname.startsWith('/apple-icon') ||
    pathname.includes('.')
  ) {
    console.log('Skipping redirect for:', pathname);
    return NextResponse.next();
  }

  // Redirect ไปยัง default locale
  console.log('Redirecting to:', `/${defaultLocale}${pathname}`);
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}; 