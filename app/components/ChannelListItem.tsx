'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

function ChannelListItem({ id, icon, name, href }: { id: number; icon: StaticImageData; name: string; href: string }) {
  const [popoverStates, setPopoverStates] = useState<{ [key: number]: boolean }>({})

  const showPopover = (id: number) => {
    setPopoverStates({ ...popoverStates, [id]: true })
  }

  const hidePopover = (id: number) => {
    setPopoverStates({ ...popoverStates, [id]: false })
  }

  return (
    <li className="my-1 relative" onMouseEnter={() => showPopover(id)} onMouseLeave={() => hidePopover(id)}>
      <Link href={`/channels/${href}`}>
        <Image alt="Mensajes directos" src={icon} className="rounded-full w-14" />
      </Link>
      {popoverStates[id] && (
        <p className="absolute top-2 left-16 bg-black border py-1 px-2 rounded shadow-md text-white min-w-max">
          {name}
        </p>
      )}
    </li>
  )
}

export default ChannelListItem
