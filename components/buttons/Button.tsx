'use client';

import { MouseEvent, ButtonHTMLAttributes } from "react";
import cx from 'classnames';

type BtnComponentProps = {
  size?: "sm" | "md" | "lr" | "icon",
  btnColor?: 'baseLight' | 'specialLight' | 'baseDark' | 'specialDark' | "iconTrans",
  textColor?: "white" | "black",
  textPos?: "vertical" | "horizontal",
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

type ButtonAttributes = BtnComponentProps & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({size='sm', btnColor, textColor='black', textPos='horizontal', onClick, children}: ButtonAttributes) {  
  return (
    <button className={cx( 
      'flex items-center justify-center ', 
      'transition-all duration-200 ease-in',
      {
        'rounded-2xl gap-2 hover:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.6)]': size !== 'icon',
        'w-28 h-10': size === 'sm',
        'w-60 h-12': size === 'md',
        'w-full h-12': size === 'lr',
        'flex-col': textPos === 'vertical',
        'bg-transparent': btnColor === 'iconTrans',
        'bg-baseDark': btnColor === 'baseDark',
        'bg-baseLight': btnColor === 'baseLight',
        'bg-specialDark': btnColor === 'specialDark',
        'bg-specialLight': btnColor === 'specialLight',
        'text-white': textColor === 'white',
        'text-black': textColor === 'black',
      }
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

