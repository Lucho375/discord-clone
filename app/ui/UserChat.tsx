'use client'
import Image from 'next/image'
import Link from 'next/link'
import DiscordIcon from 'public/icon.png'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  id: string
  isActive: boolean
  user: string
  removeChat: () => void
}

function UserChat({ isActive, user, removeChat, id }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <li
      className="py-2 px-4 hover:text-[#f2f4f7] hover:bg-[#3b3d44] hover:cursor-pointer flex justify-between items-center focus:text-[#f2f4f7] focus:bg-[#3b3d44]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/messages/${id}`}>
        <div className="flex items-center">
          <Image alt="Username" src={DiscordIcon} className="rounded-full w-8" />
          <div
            className={`relative w-3 h-3 -left-[9px] top-3 rounded-full ${isActive ? 'bg-red-600' : 'bg-green-600'}`}
          ></div>
          <span className="ml-3 text-sm">{user}</span>
        </div>
      </Link>
      {isHovered ? (
        <button onClick={removeChat}>
          <AiOutlineClose />
        </button>
      ) : null}
    </li>
  )
}

export default UserChat
