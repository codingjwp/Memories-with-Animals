'use server'

import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { Provider } from "@supabase/supabase-js";

export type OauthResponse = {
  status: number;
  message: string;
}

/**
 * supabase를 이용한 Oauth
 * @param {string} formData form 데이터
 * @returns {string} Oauth 에러 및 성공 데이터 반환
 */
export async function oauthAction(oauthType: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: oauthType as Provider
    })
    if (error?.message) {
      return JSON.stringify({ status: 400, message: error.message})  
    }
    console.log(oauthType, data);
    return JSON.stringify({ status: 301, message: '로그인에 성공하셨습니다.'})
  } catch(error: unknown) {
    console.error("Server error : ", (error as Error).message);
    return JSON.stringify({ status: 500, message: (error as Error).message});
  }
}