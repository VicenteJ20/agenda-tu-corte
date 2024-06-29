'use client'
import { useContext } from "react"
import Link from "next/link"

export interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert?: boolean;
  SidebarContext: any;
  href: string;
}

export function SidebarItem({ icon, text, active, alert, SidebarContext, href }: SidebarItemProps) {
  const { isOpen } = useContext(SidebarContext) as any
  
  return (
    <li
      className={`
        relative flex items-center  my-4
        font-normal rounded-md cursor-pointer
        transition-colors group
        hover:text-zinc-900
        ${
          active
            ? "bg-lime-200 text-zinc-900"
            : "hover:bg-lime-50 text-zinc-200"
        }
    `}
    >
      <Link href={href} className='py-2 pl-3'>{icon}</Link>
      <Link href={href}
        className={`overflow-hidden transition-all ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </Link>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-lime-400 ${
            isOpen ? "" : "top-2"
          }`}
        />
      )}

      {!isOpen && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-zinc-100 text-zinc-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}