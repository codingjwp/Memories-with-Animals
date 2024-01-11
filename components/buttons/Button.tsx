'use client';

import { MouseEvent, ButtonHTMLAttributes } from "react";
import cx from 'classnames';

type BtnComponentProps = {
  size?: "sm" | "md" | "lr",
  btnColor?: 'baseLight' | 'specialLight' | 'baseDark' | 'specialDark',
  textColor?: "white" | "black",
  textPos?: "vertical" | "horizontal" | "hidden",
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

type ButtonAttributes = BtnComponentProps & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({size='sm', btnColor, textColor='black', textPos='horizontal', onClick, children}: ButtonAttributes) {

  // className={
  //   cx( 'rounded-lg',
  //     {
  //       'w-28': size === 'sm',
  //       'w-60': size === 'md',
  //       'w-full': size === 'lr',
  //       'sr-only': textPos === 'hidden',
  //       'bg-baseDark': btnColor === 'baseDark',
  //       'bg-baseLight': btnColor === 'baseLight',
  //       'bg-specialDark': btnColor === 'specialDark',
  //       'bg-specialLight': btnColor === 'specialLight',
  //       'text-white': textColor === 'white',
  //       'text-black': textColor === 'black',
  //     }
  //   )
  // }

  return (
    <button className="w-60 h-10 bg-baseDark text-white rounded-2xl "  onClick={onClick}>
      {children}
    </button>
  )
}

