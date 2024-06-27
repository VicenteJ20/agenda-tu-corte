'use client'

import Link from "next/link"
import { HeaderAuth } from "../auth/Header"
import Image from "next/image"
import { useState, createContext } from "react"
import { RiArchive2Fill, RiArrowLeftFill, RiArrowRightFill, RiMenu2Fill, RiMore2Fill } from "@remixicon/react"
import { useSession } from "next-auth/react"
import { SidebarItem } from "./SideBarItem"

const SidebarContext = createContext({ isOpen: false })

const DashboardNavbar = () => {
  const session = useSession()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <aside className="h-screen relative max-w-72">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm w-fit">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${isOpen ? "w-32" : "w-0"
              }`}
            alt=""
            width={100}
            height={100}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {isOpen ? <RiArrowLeftFill /> : <RiArrowRightFill />}
          </button>
        </div>

        <SidebarContext.Provider value={{ isOpen }}>
          <ul className="flex-1 px-3">
            <SidebarItem
              icon={<RiArchive2Fill size={20} />}
              text="Dashboard"
              active={true}
              SidebarContext={SidebarContext}
            />
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <Image
            src={session?.data?.user?.image || ''}
            alt=""
            className="w-10 h-10 rounded-md"
            width={50}
            height={50}
          />
          <div
            className={`
                flex justify-between items-center
                overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{session.data?.user?.name}</h4>
              <span className="text-xs text-gray-600">{session.data?.user?.email}</span>
            </div>
            <RiMore2Fill size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export { DashboardNavbar }