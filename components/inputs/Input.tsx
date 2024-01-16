'use client';

import cn from 'classnames';
import ShowPassword from './ShowPassword';
import { MouseEvent, useState } from 'react';

type BaseInputProps = {
  text: string;
  hideText?: boolean;
  required?: boolean;
  type: 'email' | 'password';
  hidePassword?: boolean;
  addStyles?: string;
}

export default function Input({
  text, 
  hideText = false, 
  required = false, 
  type, 
  hidePassword = false,
  addStyles
}: BaseInputProps) {
  const [visible, setVisible] = useState(false);
  const isEmailType = type === 'email';
  const handleClickVisibleChange = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVisible((prev) => !prev);
  }
  
  const baseLabel = 
    <label className={cn(
      'text-slate-400', {
      'after:content-["*"] after:text-red-600 after:font-semibold after:pl-1': required,
      'sr-only after:content-none': hideText,
      })} 
      htmlFor={type}>
      {text}
    </label>
  const showPasswordLabel = 
    <div className='flex justify-between'>
      {baseLabel}
      <ShowPassword visibleValue={visible ? 'unvisibility' : 'visibility'} onClick={handleClickVisibleChange} />
    </div>

  // const 


  return (
    <section className={cn(
      'flex flex-col gap-[2px] accounts w-[270px]',
      {[`${addStyles}`]: typeof addStyles === 'string' }
    )}>
      {!isEmailType && hidePassword ? showPasswordLabel : baseLabel}
      <input
        className={cn(
          'w-full h-9 px-1',
          'outline-none border-b-2 border-slate-400 bg-transparent',
          'focus:border-baseLight',
          'text-black dark:text-white',
        )}
        type={!isEmailType && !visible ? `${type}` : 'text'}
        id={type}
        name={type}
        autoFocus={isEmailType ? true : false}
        autoComplete={isEmailType ? 'username' : 'curent-password'}
        aria-describedby={isEmailType ? undefined : 'password-constraint'}
        placeholder={hideText ? `${text}` : undefined}
        required
        // onChange={}
      />
      {isEmailType ? null : <p className='text-black dark:text-white text-xs'>소문자, 대문자, 8자리 이상 입력해주세요.</p>}
    </section>
  )
}