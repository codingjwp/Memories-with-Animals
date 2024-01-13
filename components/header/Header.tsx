'use client';

import SvgCollection from "@/components/svgs/SvgCollection";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import { useState } from "react";

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  const ClickMenuOpen = () => setMenuOpen((prev) => !prev)

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full h-12 bg-baseLight">
      <Link className="inline-block w-14 h-full px-3 py-2" href="/">
        <SvgCollection svgShapes="logo" size={32} />
        <span className="sr-only">Logo</span>
      </Link>
      <Button size="icon" type="button" btnColor="transparent" customStyle={`view_menu ${menuOpen ? 'close_menu' : ''}`} onClick={ClickMenuOpen}>
        <span className="sr-only">Edit Profile, Sign out Menu</span>
      </Button>
    </header>
  )
}