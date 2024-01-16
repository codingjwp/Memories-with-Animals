'use client';

import cn from 'classnames';
import { useEffect, useState } from 'react';

type ToastProps = {
  showToast: boolean
  status: 'error' | 'warning' | 'sucess';
  message?: string;
  delay?: number;
}

/** 
 * 타입 아웃 부분 및 닫기 버튼 추가
 * 전역 상태관리를 통한 토스트 실행 필요
*/ 
export default function Toast({
  showToast = false, 
  status, 
  message,
  delay = 3000
}: ToastProps) {
  const toastCover = {
    'fixed -top-96 left-1/2 -translate-x-1/2 z-20': true,
    'top-2': showToast,
    'flex flex-col w-[240px] py-[10px] px-[15px] rounded-md': true,
    'bg-red-300': status === 'error',
    'bg-amber-300': status === 'warning',
    'bg-emerald-300': status === 'sucess',
  }
  const toastStatus = {
    'uppercase font-semibold': true,
    'text-red-700 ': status === 'error',
    'text-amber-700': status === 'warning',
    'text-emerald-700': status === 'sucess',    
  }
  const toastMsg = {
    'p-[10px] rounded-md' : true,
    'bg-red-400 text-white': status === 'error',
    'bg-amber-400 text-black': status === 'warning',
    'bg-emerald-500 text-white': status === 'sucess',
  }

  return (
    <div className={cn(toastCover)} role="alert" aria-live="polite" aria-hidden={!showToast ? true : false}>
      <span className={cn(toastStatus)}>{status}</span>
      <span className={cn(toastMsg)}>{message}</span>
    </div>
  )
}