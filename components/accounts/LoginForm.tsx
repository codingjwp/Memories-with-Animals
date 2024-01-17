'use client';

import { acouuntActions } from "@/lib/actions/accoutAction";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import cn from 'classnames';
import Link from 'next/link';
import SvgCollection from "../svgs/SvgCollection";

export default function LoginForm() {
  async function clientAction(formData: FormData) {
    const btnName = formData.get('action');
    if (btnName === 'signin') {
      const result = await acouuntActions(btnName, formData);
      const value = JSON.parse(result);

      if (value.data.session !== null) {
        // toast 관련 내용 추가
      }
      if (value.error && value.error.status === 400) {
        // console.log 삭제 후 toast 관련 내용 추가
        console.log('login error : ', value.error.message);
      }
    }
  }

  return (
    <form action={clientAction}>
      <Input text="Email" type="email" addStyles="mb-4" />
      <Input text="Password" type="password" hidePassword={true} addStyles="mb-5" />
      <Button id="login" type="submit" name="action" value="signin" btnColor="dark" size="lr">
        <span className="text-black dark:text-white">Sign in</span>
      </Button>
      <div className={cn(
        "flex text-sm align-middle text-black dark:text-white items-center justify-center my-4", 
        "before:content-[''] before:h-[2px] before:w-[100px] before:mr-2 before:bg-slate-400 before:text-[0px] before:leading-[0px]",
        "after:h-[2px] after:content-[''] after:w-[100px] after:ml-2 after:bg-slate-400 after:text-[0px] after:leading-[0px]")}>또는</div>
      <Button id="google" type="submit" name="action" value="google" size="lr" btnColor="sp-dark" customStyle="mb-4">
        <span className="text-black dark:text-white">Google과 연결하기</span>
      </Button>
      <Button id="github" type="submit" name="action" value="github" size="lr" btnColor="sp-dark" customStyle="mb-4">
        <SvgCollection svgShapes="github-white" size={32}/>
        <span className="text-black dark:text-white">Github와 연결하기</span>
      </Button>
      <section className="text-black dark:text-white text-sm text-center">
        <span>아직 동료가 아니신가요?</span>
        <Link className="ml-1 underline text-indigo-600 dark:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300" href="register">회원 가입</Link>
      </section>
    </form>
  )
}