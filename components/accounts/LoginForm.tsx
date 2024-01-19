'use client';

import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import OauthGroups from "./OauthGroups";
import cn from 'classnames';
import Link from 'next/link';


type LoginFormProps = {
  serverAction: (formData: FormData) => Promise<void>;
}

export default function LoginForm({serverAction}: LoginFormProps) {
  return (
    <form action={serverAction}>
      <Input text="Email" type="email" addStyles="mb-4" />
      <Input text="Password" type="password" hidePassword={true} addStyles="mb-5" />
      <Button id="login" type="submit" name="action" value="signin" btnColor="dark" size="lr">
        <span className="text-black dark:text-white">Sign in</span>
      </Button>
      <div className={cn(
        "flex text-sm align-middle text-black dark:text-white items-center justify-center my-4", 
        "before:content-[''] before:h-[2px] before:w-[100px] before:mr-2 before:bg-slate-400 before:text-[0px] before:leading-[0px]",
        "after:h-[2px] after:content-[''] after:w-[100px] after:ml-2 after:bg-slate-400 after:text-[0px] after:leading-[0px]")}>
          또는
      </div>
      <OauthGroups />
      <section className="text-black dark:text-white text-sm text-center">
        <span>아직 동료가 아니신가요?</span>
        <Link className="ml-1 underline text-indigo-600 dark:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300" href="register">회원 가입</Link>
      </section>
    </form>
  )
}