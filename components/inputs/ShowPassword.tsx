'use clinet'
import Button from "../buttons/Button"
import SvgCollection from "../svgs/SvgCollection"
import { RefObject, useState } from "react"

type VisibleValue = 'visibility' | 'unvisibility'
type ShowPwProps = {
  passwordRef: RefObject<HTMLInputElement>
}

export default function ShowPassword({passwordRef}: ShowPwProps) {
  const [visible, setVisible] = useState<VisibleValue>('visibility')

  const ClickChangeVisibility = () => {
    if (passwordRef.current && passwordRef.current.id === 'password') {
      passwordRef.current.type = passwordRef.current.type === 'password' ? 'text' : 'password'
      setVisible((prev) => prev === 'visibility' ? 'unvisibility' : 'visibility');
    }
  }

  return (
    <Button type="button" onClick={ClickChangeVisibility} size="icon">
      <SvgCollection svgShapes={`${visible}`} svgFill="white" size={24} />
      <span className="sr-only">
        {visible === 'visibility' ? 'show password' : 'hide passworkd'}
      </span>
    </Button>
  )
}