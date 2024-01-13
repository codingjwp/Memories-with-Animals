'use client';

import { MouseEvent, ChangeEvent, useState } from "react";
import ShowPassword from "./ShowPassword";
import Link from "next/link";
import cn from "classnames"

type InputProps = {
  label: string,
  page: 'login' | 'register',
  inputType: 'email' | 'password',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({label, page, inputType, onChange}: InputProps) {
  const conditions = {
    "useType": inputType === 'email',
    "usePage": page === 'login',
  };
  const [showType, setShowType] = useState(false);
  
  const ClickChangeVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();    
    if (!conditions.useType) {
      setShowType((prev) => !prev);
    }
  }

  const typeLabel = conditions.useType 
    ? <label
        className={cn({"after:content-['*'] after:pl-1 after:font-bold after:text-red-600": !conditions.usePage})}
        htmlFor={inputType}>{label}</label>
    : (
        <div className="flex justify-between">
          <label 
            className={cn({"after:content-['*'] after:pl-1 after:font-bold after:text-red-600": !conditions.usePage})}
            htmlFor={inputType}>{label}</label>
          <ShowPassword
            visibleValue={showType ? 'unvisibility' : 'visibility'}
            onClick={ClickChangeVisibility}  />
        </div>
      )
  const registerLink = (!conditions.useType && conditions.usePage)
    ? <Link 
        className={cn(
          'w-full text-[12px] text-blue-800 text-end',
          'hover:underline'
        )}
        href='/register'>회원가입</Link>
    : null

  return (
    <section className="flex flex-col gap-1">
      {typeLabel}
      <input
        className={cn(
          'w-[210px] h-10 rounded-2xl px-2',
          {'mb-5': !conditions.usePage && !conditions.useType }
        )}
        type={!conditions.useType && showType ? 'text' : inputType}
        id={inputType}
        name={inputType}
        autoComplete={conditions.useType ? 'username' : 'curent-password'} 
        autoFocus={conditions.useType ? true : false}
        aria-describedby={!conditions.useType ? 'password-constraint' : undefined}
        required
        onChange={onChange}
        />
        {registerLink}
    </section>
  )
}