import LoginForm from "@/components/accounts/LoginForm"
import { signInAction, SignInResponse } from '@/lib/actions/singInAction';
import { redirect } from "next/navigation";

export default async function LoginPage() {

  async function serverSignIn(formData: FormData) {
    'use server'
    const clickBtn = String(formData.get('action'));
    const res = await signInAction(formData);
    const data: SignInResponse = JSON.parse(res);
    if (data.status === 400 || data.status === 500) {
      console.error("로그인 에러 :", data.message);
      return;
    }
    redirect(`/?type=${clickBtn}`);
  }

  return (<LoginForm serverAction={serverSignIn} />)
}