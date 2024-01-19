'use server'

import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { getFormDataAndValidate } from '@/lib/actions/validation';

export type SignInResponse = {
  status: number;
  message: string;
}

/**
 * supabase를 이용한 로그인
 * @param {FormData} formData form 데이터
 * @returns {string} 로그인 에러 및 성공 데이터 반환
 */
export async function signInAction(formData: FormData) {
  try {
    const { value: email, result: emailResult, message: emailMsg } = getFormDataAndValidate(formData, 'email');
    if (!emailResult) {
      return JSON.stringify({ status: 400, message: emailMsg});
    }
    const { value: password, result: pwResult, message: pwMsg } = getFormDataAndValidate(formData, 'password');
    if (!pwResult) {
      return JSON.stringify({ status: 400, message: pwMsg});
    }
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email: email, password: password });
    if (error?.message) {
      return JSON.stringify({ status: error.status, message: error.message});
    }
    return JSON.stringify({ status: 301, message: '로그인에 성공하셨습니다.'})
  } catch(error: unknown) {
    console.error("Server error : ", (error as Error).message);
    return JSON.stringify({ status: 500, message: (error as Error).message});
  }
}