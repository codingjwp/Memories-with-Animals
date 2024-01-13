'use client';

import { ChangeEvent, useRef } from "react";
import ShowPassword from "./ShowPassword";

type InputProps = {
  label: string,
  inputType: 'email' | 'password',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({label, inputType, onChange}: InputProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const typeLabel = inputType === 'email' 
    ? <label htmlFor={inputType}>{label}</label>
    : (
        <div className="flex justify-between">
          <label htmlFor={inputType}>{label}</label>
          <ShowPassword passwordRef={passwordRef} />
        </div>
      )

  return (
    <section className="flex flex-col gap-1">
      {typeLabel}
      <input
        ref={inputType === 'password' ? passwordRef : null} 
        className="w-[210px] h-10 rounded-2xl px-2"
        type={inputType} id={inputType} name={inputType}
        autoComplete={inputType === 'email' ? 'username' : 'curent-password'} 
        autoFocus={inputType === 'email' ? true : false}
        onChange={onChange}
        />
    </section>
  )
}