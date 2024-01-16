'use client';

import cn from 'classnames';
import ShowPassword from './ShowPassword';
import { ChangeEvent, ForwardedRef, MouseEvent, forwardRef, useState } from 'react';

type BaseInputProps = {
  text: string;
  hideText?: boolean;
  required?: boolean;
  type: 'email' | 'password' | 'confirm';
  hidePassword?: boolean;
  addStyles?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  text, 
  hideText = false, 
  required = false, 
  type, 
  hidePassword = false,
  addStyles,
  onChange
}: BaseInputProps,
ref: ForwardedRef<HTMLInputElement>
) {
  const [visible, setVisible] = useState(false);
  const isType = (content: string ) => type === content;
  const isPasswordType = type === 'password';
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

  return (
    <section className={cn(
      'flex flex-col gap-[2px] accounts w-[270px]',
      {[`${addStyles}`]: typeof addStyles === 'string' }
    )}>
      {isType('password') && hidePassword ? showPasswordLabel : baseLabel}
      <input
        ref={ref}
        className={cn(
          'w-full h-9 px-1',
          'outline-none border-b-2 border-slate-400 bg-transparent',
          'focus:border-baseLight',
          'text-black dark:text-white',
        )}
        type={isType('password') && visible ? 'text' : (isType('confirm') ? 'password' : `${type}`)}
        id={type}
        name={type}
        autoFocus={type === 'email' ? true : false}
        autoComplete={type === 'email' ? 'username' : 'curent-password'}
        placeholder={hideText ? `${text}` : undefined}
        required
        onChange={onChange}
      />
      {isType('password') ? <p className='text-black dark:text-white text-xs'>소문자, 대문자, 8자리 이상 입력해주세요.</p> : null}
      {isType('confirm') ? <p className='text-black dark:text-white text-xs'>비밀번호를 재확인 해주요.</p> : null}
    </section>
  )
}

export default forwardRef<HTMLInputElement, BaseInputProps>(Input);