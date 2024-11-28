import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Define rutas públicas
  const publicPaths = ['/login'];

  // Verifica si el usuario tiene un token de autenticación
  const token = req.cookies.get('authToken');

  if (token) {
    // Si el usuario está autenticado y visita una página pública, redirige al dashboard
    if (publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // Permitir acceso a rutas públicas para usuarios no autenticados
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Si no está autenticado y no está en una ruta pública, redirige al login
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
