'use server'

import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { getFormDataAndValidate } from '@/lib/actions/validation';

export type SignUpResponse = {
  status: number;
  message: string;
}

/**
 * supabase를 이용한 회원가입
 * @param {FormData} formData form 데이터
 * @returns {string} 회원가입 에러 및 성공 데이터 반환
 */
export async function signUpAction(formData: FormData) {
  try {
    const { value: email, result: emailResult, message: emailMsg } = getFormDataAndValidate(formData, 'email');
    if (!emailResult) {
      return JSON.stringify({ status: 400, message: emailMsg});
    }
    const { value: password, result: pwResult, message: pwMsg } = getFormDataAndValidate(formData, 'password');
    if (!pwResult) {
      return JSON.stringify({ status: 400, message: pwMsg});
    }
    const { result: confirmResult, message: confirmMsg } = getFormDataAndValidate(formData, 'confirm', password);
    if (!confirmResult) {
      return JSON.stringify({ status: 400, message: confirmMsg});
    }
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signUp({ email: email, password: password });
    if (error?.message) {
      return JSON.stringify({ status: error.status, message: error.message});
    }
    return JSON.stringify({ status: 301, message: '회원가입에 성공하셨습니다.'})
  } catch(error: unknown) {
    console.error("Server error : ", (error as Error).message);
    return JSON.stringify({ status: 500, message: (error as Error).message});
  }
}

// const result = await supabase.auth.signInWithPassword({
//   email: email,
//   password: password
// })