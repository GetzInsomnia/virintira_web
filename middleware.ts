import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
    return NextResponse.next();
  }

  // Redirect ไปยัง default locale
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|apple-icon|.*\\..*).*)'
  ]
}; 