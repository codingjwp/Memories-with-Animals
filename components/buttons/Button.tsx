'use client';

import { MouseEvent, ButtonHTMLAttributes } from "react";
import cx from 'classnames';

type BtnComponentProps = {
  size: "sm" | "md" | "lr" | "icon",
  btnColor: 'light' | 'dark' | 'sp-light' | 'sp-dark' | "transparent",
  textPos?: "vertical" | "horizontal",
  customStyle?: string | undefined,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

type ButtonAttributes = BtnComponentProps & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  size='sm',
  btnColor,
  textPos='horizontal',
  customStyle = undefined,
  onClick,
  children
}: ButtonAttributes) { 
  const btnBgColor = `bg-${btnColor}`;
  return (
    <button className={cx( 
      'flex items-center justify-center transition-all duration-200 ease-in',
      {
        'rounded-2xl gap-2 active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.6)]': size !== 'icon',
        'w-28 h-10': size === 'sm',
        'w-60 h-11': size === 'md',
        'w-full h-11': size === 'lr',
        'flex-col': textPos === 'vertical',
        'bg-baseLight': btnColor === 'light',
        'bg-baseDark': btnColor === 'dark',
        'bg-specialLight': btnColor === 'sp-light',
        'bg-specialDark': btnColor === 'sp-dark',
        'bg-transparent': btnColor === 'transparent',
        [`${customStyle}`]: customStyle !== undefined
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}

