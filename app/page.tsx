import Button from "@/components/buttons/Button"
import SvgCollection from "@/components/svgs/SvgCollection"

export default async function Index() {
  return (
    <div className="flex gap-2">
      <Button type="button" size="sm" btnColor="baseDark" textColor="white">
        <SvgCollection svgShapes="visibility" size={48}/>
        <span className="sr-only">visibility</span>
      </Button>
    </div>
  )
}
