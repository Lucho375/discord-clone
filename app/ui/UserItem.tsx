'use client'

import { useState } from 'react'
import { BiSolidMessage } from 'react-icons/bi'
import { CiMenuKebab } from 'react-icons/ci'
import NavButton from './navigationbutton'
import Icon from './Icon'
import Link from 'next/link'
interface IListItemProps {
  status: 'online' | 'away' | 'do not disturb' | 'invisible'
  avatar: string
  uid: string
  globalName: string
  userName: string
}

export default function UserItem({ status, avatar, uid, globalName, userName }: IListItemProps) {
  const [userState, setUserState] = useState(status)
  const [showUserName, setShowUserName] = useState(false)

  const states: { [key: string]: string } = {
    invisible: 'bg-[#313338c7]',
    'no molestar': 'bg-red-600',
    'en linea': 'bg-green-600',
    ausente: 'bg-yellow-600'
  }

  return (
    <Link
      href={`/messages/${uid}`}
      className="h-16 w-[100%] hover:bg-[#3b3d44] hover:rounded-md flex gap-2 justify-start items-center px-2 cursor-pointer border-t border-solid border-[#3b3d44]"
      onMouseEnter={() => setShowUserName(true)}
      onMouseLeave={() => setShowUserName(false)}
    >
      <div className=" w-8 h-8">
        <img src={avatar} alt="User image" className="rounded-full w-8 h-8" />
        <div className={`relative w-[10px] h-[10px] left-[18px] bottom-[9px] rounded-full ${states[userState]}`}></div>
      </div>
      <div className="">
        <p className="text-sm">
          {globalName}{' '}
          <span className={`${showUserName ? 'text-[#949ba4]' : 'text-transparent'} text-xs`}>{userName}</span>
        </p>
        <p className="text-[#949ba4] text-xs">{userState}</p>
      </div>
      <div className="h-full flex justify-center items-center text-[#949ba4] gap-3 ml-auto">
        <NavButton
          id="message"
          icon={<BiSolidMessage />}
          className={['bg-[#2b2d31] rounded-full hover:text-[#f2f4f7] w-9 h-9']}
        />
        <NavButton
          id="menu"
          icon={<CiMenuKebab />}
          className={['bg-[#2b2d31] rounded-full hover:text-[#f2f4f7] w-9 h-9']}
        />
        <Icon />
      </div>
    </Link>
  )
}
