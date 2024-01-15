import Button from "@/components/buttons/Button";
import SvgCollection from "../svgs/SvgCollection";

type QauthGroupsProps = {
  pageType?: 'login' | 'register',
}

export default function QauthGroups({pageType}: QauthGroupsProps ) {
  return (
    <section className="absolute -bottom-16 flex flex-row gap-6 mt-3">
      <Button type="submit" size="icon" btnColor="transparent">
        <SvgCollection svgShapes="favorite" size={48} svgFill="white" />
        <span className="sr-only">Google</span>
      </Button>
      <Button type="submit" size="icon" btnColor="transparent">
        <SvgCollection svgShapes="favorite" size={48} svgFill="white" />
        <span className="sr-only">Github</span>
      </Button>
      <Button type="submit" size="icon" btnColor="transparent">
        <SvgCollection svgShapes="favorite" size={48} svgFill="white" />
        <span className="sr-only"> Google</span>
      </Button>
    </section>
  )
}