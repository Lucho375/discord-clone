'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  icon: StaticImageData
  name: string
  href: string
}

function ChannelListItem({ id, icon, name, href }: Props) {
  const [popoverStates, setPopoverStates] = useState<{ [key: number]: boolean }>({})

  const showPopover = (id: number) => {
    setPopoverStates({ ...popoverStates, [id]: true })
  }

  const hidePopover = (id: number) => {
    setPopoverStates({ ...popoverStates, [id]: false })
  }

  return (
    <li className="my-1 relative" onMouseEnter={() => showPopover(id)} onMouseLeave={() => hidePopover(id)}>
      <Link href={href}>
        <Image alt="Mensajes directos" src={icon} className="rounded-full w-12" />
      </Link>
      {popoverStates[id] && (
        <p className="absolute text-sm font-semibold top-2 left-16 bg-black py-1 px-2 rounded shadow-md text-white min-w-max">
          {name}
        </p>
      )}
    </li>
  )
}

export default ChannelListItem
