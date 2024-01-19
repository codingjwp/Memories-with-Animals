import { NextResponse, NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|sprites|favicon.ico).*)'
  ]
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  let response = NextResponse.next({
    request: { headers: request.headers }
  });

  const apiPath =  /\/api/.test(request.nextUrl.pathname);
  const testPath =  /\/accounts\/profile/.test(request.nextUrl.pathname);
  if (apiPath) return response;
  if (testPath) return response;
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          const httpOnlyOptions = { ...options, httpOnly: true}
          request.cookies.set({name, value, ...httpOnlyOptions})
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value, ...httpOnlyOptions })
        },
        remove(name: string, options: CookieOptions) {
          const httpOnlyOptions = { ...options, httpOnly: true}
          request.cookies.set({ name, value: '', ...httpOnlyOptions })
          response = NextResponse.next({
            request: { headers: request.headers},
          })
          response.cookies.set({ name, value: '', ...httpOnlyOptions})
        },
      }
    }
  );

  const { data, error } = await supabase.auth.getSession();
  const url = request.nextUrl.pathname;
  if (['/accounts/login', '/accounts/register'].includes(url) && data.session) {
    return NextResponse.redirect(new URL('/', request.url))
  } else if (!['/accounts/login', '/accounts/register'].includes(url) && !data.session) {
    return NextResponse.redirect(new URL('/accounts/login', request.url))
  }
  if (error?.status) {
    console.log(error.message);
  }

  return response;
}