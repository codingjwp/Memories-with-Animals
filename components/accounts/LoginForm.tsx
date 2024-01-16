'use client';

import { userSignIn } from "@/lib/actions/accoutAction";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";

export default function LoginForm() {
  async function clientAction(formData: FormData) {
    const result = await userSignIn(formData);
    if (result?.error.statusCode === 401) {
      console.log('form 에러부분 : ', result.error.message);
    }
  }

  return (
    <form action={clientAction}>
      <Input text="Email" type="email" addStyles="mb-4" />
      <Input text="Password" type="password" required={true} hidePassword={true} addStyles="mb-5" />
      <Button type="submit" size="lr" btnColor="baseDark">
        <span className="text-white">Sign in</span>
      </Button> 
    </form>
  )
}