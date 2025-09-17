"use client"

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-5">
      <div className="flex justify-between w-3/4 border-b-[2px] border-white relative">
        {/* Logo */}
        <div className="text-white text-2xl font-bold mb-5">F</div>

        {/* Nav Links */}
        <ul className="flex justify-between text-3xl text-white w-3/5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.key} className="relative group ">
                <Link href={link.href}>{link.label}</Link>
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] transition-all duration-300 ease-in-out ${
                    isActive
                      ? "w-full bg-blue-500"
                      : "w-0 bg-blue-500 group-hover:w-full"
                  }`}></span>
              </li>
            )
          })}
        </ul>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
