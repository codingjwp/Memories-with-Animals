import RegisterForm from "@/components/accounts/RegisterForm";
import { signUpAction, SignUpResponse } from '@/lib/actions/singUpAction';
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  async function serverSignUp(formData: FormData) {
    'use server'
    const res = await signUpAction(formData);
    const data: SignUpResponse = JSON.parse(res);
    if (data.status === 400 || data.status === 500) {
      console.error("회원가입 에러 :", data.message);
    } else if(data.status === 301) {
      console.log("회원가입 성공:", data.message);
      redirect('/');
    }
  }

  return (
    <RegisterForm serverAction={serverSignUp} />
  )
}