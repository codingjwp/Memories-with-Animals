import { ReactNode } from "react";

export default function LoginLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col items-center h-full w-full p-5">
      <h2 className="text-[25px] text-black dark:text-white mb-9">Memories With Animals</h2>
      {children}
    </div>
  )
}