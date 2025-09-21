"use client"

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-5">
      <div className="flex justify-between w-3/4 border-b-[2px] border-white relative">
        {/* Logo */}
        <div className="mb-5">
          <img
            src="/foremost-logo.png"
            alt="Foremost Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex justify-between text-3xl text-white w-3/5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.key} className="relative group">
                <Link href={link.href}>{link.label}</Link>
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

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl ml-auto">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full 
          bg-[#022754]/90 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out 
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}>
        <ul className="flex flex-col items-center space-y-6 py-6 text-xl">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <li
                key={link.key}
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-white">
                <Link
                  href={link.href}
                  className="relative group transition-colors duration-300">
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] transition-all duration-300 ease-in-out ${
                      isActive
                        ? "w-full bg-blue-500"
                        : "w-0 bg-blue-500 group-hover:w-full"
                    }`}></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
