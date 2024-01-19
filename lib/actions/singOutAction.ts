'use server'

import createSupabaseServerClient from "@/lib/supabase/serverClient";

export async function signOutAction() {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    return JSON.stringify({ status: 301, message: '로그아웃 하셨습니다.'});
  }catch(error: unknown) {
    console.error("Server error : ", (error as Error).message);
    return JSON.stringify({ status: 500, message: (error as Error).message});
  }
  
}