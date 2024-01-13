import { ReactNode } from "react";

export default function LoginLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <div className="relative flex gap-10 top-5">
        <div className="w-[74px] h-[74px] bg-baseDark rounded-full"></div>
        <div className="w-[74px] h-[74px] bg-baseDark rounded-full"></div>
      </div>
      <div className="relative flex gap-52 top-5">
        <div className="w-[74px] h-[74px] bg-baseDark rounded-full"></div>
        <div className="w-[74px] h-[74px] bg-baseDark rounded-full"></div>
      </div>
      {children}
    </div>
  )
}