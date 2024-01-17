'use server'

import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";

const EMAIL_REG = [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/];
const EMAIL_ERRORMSG = ['이메일 양식을 맞춰주세요.'];
const PASSWORD_REG = [/.{8,}/, /.*[A-Z].*/, /.*[a-z].*/];
const PASSWORD_ERRORMSG = ['8자리 이상 입력하셔야 햡니다.', '대문자를 포함해서 작성해주세요.', '소문자를 포함해서 작성해주세요.'];

/** 
 * 유효성 검사를 합니다.
 * @param {string} value 검사할 값
 * @param {(email, password, confirm)} fieldName 검사할 타입
 * @param {(string, undefined)} comparison confirm시 비교 할 값
 * @return {object} 검증 결과
*/
function validation(value: string, fieldName: 'email' | 'password' | 'confirm', comparison?: string,) {
  const responeMsg = { status: true, message: '' };
  const validationREG = fieldName === 'email' ? EMAIL_REG : PASSWORD_REG;
  const errorMsg = fieldName === 'email' ? EMAIL_ERRORMSG : PASSWORD_ERRORMSG;

  if (fieldName === 'confirm' && value !== comparison) {
    return {
      status: false,
      message: '패스워드와 재확인 패스워드가 동일하지 않습니다.'
    }
  }

  for (let i = 0; i < validationREG.length; i++ ) {
    if (!validationREG[i].test(value)) {
      responeMsg.status = false;
      responeMsg.message = errorMsg[i];
      break;
    }
  }
  return responeMsg;
}

function getFormDataAndValidate(formData: FormData, fieldName: 'email' | 'password' | 'confirm', relatedValue?: string) {
  const value = formData.get(fieldName) as string;
  if (value) {
    const validateRes = validation(value, fieldName, relatedValue)
    if (!validateRes.status) {
      throw new Error (validateRes.message);
    }
  }
  return value;
}

/**
 * supabase를 이용한 로그인 및 회원가입
 * @param {string} fieldName 회원가입, 로그인 여부 판단
 * @param {FormData} formData form 데이터
 * @returns {string} 회원가입, 로그인 에러 및 성공 데이터 반환
 */
export async function acouuntActions(fieldName: string, formData: FormData) {
  try {
    const email = getFormDataAndValidate(formData, 'email');
    const password = getFormDataAndValidate(formData, 'password');
    getFormDataAndValidate(formData, 'confirm', password);

    const supabase = await createSupabaseServerClient();
    if (fieldName === 'signup') {
      const result = await supabase.auth.signUp({
        email: email,
        password: password
      })
      return JSON.stringify(result);
    } else {
      const result = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      return JSON.stringify(result);
    }
  } catch(error: unknown) {
    return JSON.stringify({error: { status: 400, message: (error as Error).message} });
  }
}

/**
 * Oauth를 이용한 로그인 및 회원가입
 * @param {string} fieldName Oauth 사이트
 */
export async function accountsOauths(fieldName: 'google' | 'github') {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: fieldName,
    })
  } catch (error: unknown) {
    
  }
}

/**
 * 로그인 한 session 정보
 * @return {object} sesion 정보
 */
export async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}

/**
 * 로그인 한 사용자 로그아웃 및 login 화면으로 이동
 */
export async function userLogout() {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }catch(error: unknown) {

  }
  redirect('/accounts/login') 
}