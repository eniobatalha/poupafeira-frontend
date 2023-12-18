import { NextResponse } from 'next/server'


const publicRoutes = ["/", "/register"]

export function middleware(request) {
  const token = request.cookies.get('auth.token')?.value;
  if (token && publicRoutes.includes(request.nextUrl.pathname)) {
    const home_url = request.nextUrl.clone();
    home_url.pathname = '/produtos'
    NextResponse.rewrite(home_url)
    return NextResponse.redirect(home_url)
  }

  if (!token && request.nextUrl.pathname !== '/') {
    const login_url = request.nextUrl.clone();
    login_url.pathname = '/'
    NextResponse.rewrite(login_url)
    return NextResponse.redirect(login_url)
  }

  return NextResponse.next()
}
  
export const config = {
  matcher: ['/','/produtos', '/minha-lista','/poupar']
}