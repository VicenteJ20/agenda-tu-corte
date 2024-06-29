'use client'

import { RiDeleteBack2Line, RiNotification2Line } from "@remixicon/react";
import { Card, Icon } from "@tremor/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import msj from '@/messages/es.json'

const HeaderBarTitle = () => {
  const { title: T, description } = msj.NotificationsAlert
  const router = usePathname()

  const arrayRoute = router.split('/').filter(Boolean)
  const lastItem = arrayRoute[arrayRoute.length - 1]

  const title = lastItem.charAt(0).toUpperCase() + lastItem.slice(1)

  const [openNotificationPanel, setOpenNotificationPanel] = useState(false)
  const handleClick = () => {
    setOpenNotificationPanel(!openNotificationPanel)
  }


  return (
    <header className='bg-white border-b border-b-zinc-200  w-full pl-24 pr-6 py-5 flex flex-row gap-4 items-center justify-between'>
      <h2 className='text-xl font-semibold text-black'>{title}</h2>
      <div>
        <div
          className='relative'
        >
          <button
            onClick={handleClick}>
            <Icon
              icon={RiNotification2Line}
              className='text-zinc-600'
              variant='shadow'
            />
          </button>
          <Card
            className={`absolute top-11 z-20 right-0 w-96 ${openNotificationPanel ? 'block' : 'hidden'}`}
            decoration='top'
          >
            <div className='flex flex-col gap-1 mb-4'>
              <h3 className='text-lg font-medium'>{T}</h3>
              <p className='text-sm font-normal text-zinc-700'>{description}</p>
            </div>
          </Card>
        </div>
      </div>
    </header>
  )
}

export { HeaderBarTitle }