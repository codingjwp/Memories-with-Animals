'use client';

import cn from 'classnames';
import ShowPassword from './ShowPassword';
import { ChangeEvent, ForwardedRef, MouseEvent, forwardRef, useState } from 'react';

type BaseInputProps = {
  text: string;
  hideText?: boolean;
  required?: boolean;
  type: 'email' | 'password' | 'confirm' | 'text';
  hidePassword?: boolean;
  addStyles?: string;
  description?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  text, 
  hideText = false, 
  required = false, 
  type, 
  hidePassword = false,
  addStyles,
  description,
  onChange
}: BaseInputProps,
ref: ForwardedRef<HTMLInputElement>
) {
  const [visible, setVisible] = useState(false);
  const isType = (content: string ) => type === content;
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
        autoFocus={isType('email') ? true : false}
        autoComplete={isType('email') ? 'username' : (isType('password') ? 'curent-password' : undefined)}
        placeholder={hideText ? `${text}` : undefined}
        required
        onChange={onChange}
      />
      {description ? <p className='text-black dark:text-white text-xs'>{description}</p> : null}
    </section>
  )
}

export default forwardRef<HTMLInputElement, BaseInputProps>(Input);