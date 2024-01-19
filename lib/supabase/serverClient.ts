'use server';

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * supabase 클라이언트 연결
 * @returns supabaseClient 정보
 */
export default async function createSupabaseServerClient () {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          const httpOnlyOptions = { ...options, httpOnly: true};
          cookieStore.set({ name, value, ...httpOnlyOptions })
        },
        remove(name: string, options: CookieOptions) {
          const httpOnlyOptions = { ...options, httpOnly: true};
          cookieStore.set({ name, value: '', ...httpOnlyOptions })
        },
      },
    }
  )

  return supabase;
}