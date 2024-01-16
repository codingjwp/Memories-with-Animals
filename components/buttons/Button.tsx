'use client';

import { MouseEvent, ButtonHTMLAttributes } from "react";
import cx from 'classnames';

type BtnComponentProps = {
  size?: "sm" | "md" | "lr" | "icon",
  btnColor?: 'baseLight' | 'baseDark' | 'specialLight' | 'specialDark' | "transparent",
  textPos?: "vertical" | "horizontal",
  customStyle?: string | null,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

type ButtonAttributes = BtnComponentProps & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  size='sm',
  btnColor='baseDark',
  textPos='horizontal',
  customStyle = null,
  onClick,
  children
}: ButtonAttributes) { 
  const isDefaultStyle = customStyle === null;
  const btnBgColor = `bg-${btnColor}`;
  return (
    <button className={cx( 
      {
        'flex items-center justify-center': isDefaultStyle, 
        'transition-all duration-200 ease-in': isDefaultStyle,
        'rounded-2xl gap-2 active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.6)]': isDefaultStyle && size !== 'icon',
        'w-28 h-10': isDefaultStyle && size === 'sm',
        'w-60 h-11': isDefaultStyle && size === 'md',
        'w-full h-11': isDefaultStyle && size === 'lr',
        'flex-col': textPos === 'vertical',
        [`${btnBgColor}`]: true,
        [`${customStyle}`]: !isDefaultStyle
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}

