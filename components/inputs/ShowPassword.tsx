'use clinet'
import Button from "../buttons/Button"
import SvgCollection from "../svgs/SvgCollection"
import { MouseEvent } from "react"

type ShowPwProps = {
  visibleValue: 'visibility' | 'unvisibility',
  onClick: (evet: MouseEvent<HTMLButtonElement>) => void
}

export default function ShowPassword({visibleValue, onClick}: ShowPwProps) {
  return (
    <Button type="button" onClick={onClick} size="icon" btnColor="transparent" >
      <SvgCollection svgShapes={`${visibleValue}`} svgFill="white" size={24} />
      <span className="sr-only">
        {visibleValue === 'visibility' ? 'show password' : 'hide passworkd'}
      </span>
    </Button>
  )
}