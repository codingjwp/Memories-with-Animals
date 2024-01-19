import { ReactNode } from "react";

export default function LoginLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col items-center h-full w-full p-5">
      {children}
    </div>
  )
}