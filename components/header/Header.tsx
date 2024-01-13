import SvgCollection from "@/components/svgs/SvgCollection";
import Link from 'next/link';

export default function Header(){
  return (
    <header className="fixed top-0 left-0 flex justify-between w-full h-12 bg-baseLight">
      <Link className="inline-block w-14 h-full px-3 py-2" href="/">
        <SvgCollection svgShapes="logo" size={32} />
        <span className="sr-only">Logo</span>
      </Link>
    </header>
  )
}