'use client';

import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import { acouuntActions } from "@/lib/actions/accoutAction";
import Link from 'next/link'

export default function RegisterForm() {

  async function clientAction(formData: FormData) {
    const result = await acouuntActions('signup', formData);
    const value = JSON.parse(result);
    if (value.data.session !== null) {
      // toast 관련 내용 추가
    }
    if (value.error.status === 400) {
      // toast 관련 내용 추가
      console.log('register error: ', value.error.message);
    }
  }

  return (
    <form action={clientAction}>
      <Input text="Email" type="email" required={true} addStyles="mb-4" />
      <Input text="Password" type="password" hidePassword={true} required={true} addStyles="mb-5" />
      <Input text="Confirm Password" type="confirm" hidePassword={false} required={true} addStyles="mb-5" />
      <Button id="register" type="submit" name="action" value="signup" btnColor="dark" size="lr" customStyle="mb-4">
        <span className="text-black dark:text-white">Sign Up</span>
      </Button>
      <section className="text-black dark:text-white text-sm text-center">
        <span>동료가 되어있으시다구요?? </span>
        <Link className="ml-1 underline text-indigo-600 dark:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300" href="login">로그인</Link>
      </section>
    </form>
  )
}