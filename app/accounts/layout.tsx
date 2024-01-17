import { ReactNode } from "react";

export default function LoginLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col items-center h-full w-full p-5">
      <h2 className="text-[25px] text-black dark:text-white mb-9">
        <b>M</b>emories <b>w</b>ith <b>A</b>nimals
      </h2>
      {children}
    </div>
  )
}