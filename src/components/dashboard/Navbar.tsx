'use client'

import Image from "next/image"
import { useState, createContext } from "react"
import { RiArchive2Line, RiArrowLeftFill, RiArrowRightFill, RiCalendarCheckLine, RiGroup2Line, RiMore2Fill, RiSettings2Line, RiUser3Line } from "@remixicon/react"
import { useSession } from "next-auth/react"
import { SidebarItem } from "./SideBarItem"
import ni from '@/messages/es.json'

const SidebarContext = createContext({
  isOpen: false,
  selected: null as any,
  setSelected: (): any => {}
}) as any

const icons = {
  'dashboard': <RiArchive2Line size={20} />,
  'colaboradores': <RiUser3Line size={20} />,
  'clientes': <RiGroup2Line size={20} />,
  'reservaciones': <RiCalendarCheckLine size={20} />,
  'configuración': <RiSettings2Line size={20} />
} as any

const DashboardNavbar = () => {
  const session = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null);
  return (
    <aside className="h-screen relative">
      <nav className="h-full flex flex-col bg-zinc-900 border-r shadow-sm w-fit border-r-zinc-600 text-white">
        <div className="p-4 pb-2 pt-6 flex justify-between items-center">
          <section className='flex flex-row items-center justify-center'>
            <Image
              src='/images/web-logo.webp'
              className={`overflow-hidden transition-all ${isOpen ? "w-10" : "w-0"
                }`}
              alt=""
              width={100}
              height={100}
            />
            <h2 className={`text-lg whitespace-nowrap font-semibold ${isOpen ? "ml-3" : "hidden"}`}>Agenda tu corte</h2>
          </section>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg transition-all duration-300 ease-in-out text-white"
          >
            {isOpen ? <RiArrowLeftFill /> : <RiArrowRightFill />}
          </button>
        </div>

        <SidebarContext.Provider value={{ isOpen, selected, setSelected }}>
          <ul className="flex-1 px-3 pt-4">
            {
              ni.NavbarInfo && ni.NavbarInfo.links.map((item, index: number) => (
                <SidebarItem
                  key={index}
                  text={item.text}
                  active={item.active}
                  SidebarContext={SidebarContext}
                  icon={icons[item.text.toLowerCase()]}
                  href={item.href}
                />

              ))
            }

          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 border-t-zinc-500">
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
                overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"} relative
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{session.data?.user?.name}</h4>
              <span className="text-xs text-gray-400">{session.data?.user?.email}</span>
            </div>
            <RiMore2Fill size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export { DashboardNavbar }