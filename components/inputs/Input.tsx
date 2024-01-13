'use client';

import { ChangeEvent, useState } from "react";
import ShowPassword from "./ShowPassword";

type InputProps = {
  label: string,
  inputType: 'email' | 'password',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({label, inputType, onChange}: InputProps) {
  const [showType, setShowType] = useState(false);
  
  const ClickChangeVisibility = () => {
      if (inputType === 'password') {
        setShowType((prev) => !prev);
      }
  }

  const typeLabel = inputType === 'email' 
    ? <label htmlFor={inputType}>{label}</label>
    : (
        <div className="flex justify-between">
          <label htmlFor={inputType}>{label}</label>
          <ShowPassword
            visibleValue={showType ? 'unvisibility' : 'visibility'}
            onClick={ClickChangeVisibility}  />
        </div>
      )

  return (
    <section className="flex flex-col gap-1">
      {typeLabel}
      <input
        className="w-[210px] h-10 rounded-2xl px-2"
        type={inputType === 'password' && showType ? 'text' : inputType} id={inputType} name={inputType}
        autoComplete={inputType === 'email' ? 'username' : 'curent-password'} 
        autoFocus={inputType === 'email' ? true : false}
        onChange={onChange}
        />
    </section>
  )
}