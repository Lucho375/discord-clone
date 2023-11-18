import { BiSolidPhoneCall, BiSolidVideo } from 'react-icons/bi'
import { RiPushpinFill } from 'react-icons/ri'
import { BsPersonPlusFill } from 'react-icons/bs'
import { FaCircleUser } from 'react-icons/fa6'
import { MdInbox, MdOutlineHelp } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import ToolBar from './toolbar'
import { INavButton } from './navigationbutton'
import Input from './Input'
import Image from 'next/image'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import ToolTip from './ToolTip'

export interface IUser {
  name: string
  userName: string
  globalName: string
  avatar: StaticImport | string
  status: 'online' | 'do not disturb' | 'away' | 'unavailable'
  isConnected: boolean
}
interface IMessageNavbar {
  user: Partial<IUser>
}
export default function MessagesNavbar({ user }: IMessageNavbar) {
  const userNameRef = useRef(null)
  const [hover, setHover] = useState(false)
  const buttonHoverClass = ['hover:bg-[#3b3d44]', 'hover:text-[#f2f4f7]']

  const toolbarLeft: INavButton[] = [
    {
      id: 'voice call',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <BiSolidPhoneCall />,
      tooltipMessage: 'Iniciar llamada de voz',
      tooltipPosition: 'bottom'
    },
    {
      id: 'video call',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <BiSolidVideo />,
      tooltipMessage: 'Iniciar videollamada',
      tooltipPosition: 'bottom'
    },
    {
      id: 'pin messages',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <RiPushpinFill />,
      tooltipMessage: 'Mensajes fijados',
      tooltipPosition: 'bottom'
    },
    {
      id: 'add friend',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <BsPersonPlusFill />,
      tooltipMessage: 'Añadir amigos a MD',
      tooltipPosition: 'bottom'
    },
    {
      id: 'user profile',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <FaCircleUser />,
      tooltipMessage: 'Ocultar perfil del usuario',
      tooltipPosition: 'bottom'
    }
  ]
  const toolbarRight: INavButton[] = [
    {
      id: 'inbox',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <MdInbox />,
      tooltipMessage: 'Bandeja de entrada',
      tooltipPosition: 'bottom'
    },
    {
      id: 'help',
      className: [...buttonHoverClass, 'rounded-md', 'text-[#949ba4]'],
      icon: <MdOutlineHelp />,
      tooltipMessage: 'Ayuda',
      tooltipPosition: 'bottom'
    }
  ]

  return (
    <nav className="w-[100%] h-[48px] flex justify-end items-center gap-3 border-b-[1px] border-b-solid border-[#1f2124] pl-5">
      <div className="flex justify-center items-center h-full mr-auto">
        <Image
          src={user.avatar ?? ''}
          alt="User profile image"
          width={40}
          height={40}
          className="rounded-full max-w-[40px] max-h-[40px] mr-1"
        />
        <p
          ref={userNameRef}
          className="relative text-sm"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {user.userName}
          <ToolTip componentRef={userNameRef} visibility={hover} position="bottom" text={user.globalName} />
        </p>
      </div>
      <ToolBar navButton={toolbarLeft} className="gap-[5px] mr-0" />
      <div className={`w-[130px] h-full flex justify-center items-center`}>
        <Input
          placeHolder="Buscar"
          className={['w-full', 'h-[30px]', 'bg-[#1e1f22]', 'active: border-none', 'rounded-md', 'px-1']}
          icon={<BiSearch />}
        />
      </div>
      <ToolBar navButton={toolbarRight} />
    </nav>
  )
}
