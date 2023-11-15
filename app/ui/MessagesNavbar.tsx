import { BiSolidPhoneCall, BiSolidVideo } from 'react-icons/bi'
import { RiPushpinFill } from 'react-icons/ri'
import { BsPersonPlusFill } from 'react-icons/bs'
import { FaCircleUser } from 'react-icons/fa6'
import { MdInbox, MdOutlineHelp } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import ToolBar from './toolbar'
import { INavButton } from './navigationbutton'
import Input from './Input'

export default function MessagesNavbar() {
  const buttonHoverClass = ['hover:bg-[#3b3d44]', 'hover:text-[#f2f4f7]']
  const toolbarLeft: INavButton[] = [
    {
      id: 'voice call',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <BiSolidPhoneCall />,
      tooltipMessage: 'Iniciar llamada de voz',
      tooltipPosition: 'bottom'
    },
    {
      id: 'video call',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <BiSolidVideo />,
      tooltipMessage: 'Iniciar videollamada',
      tooltipPosition: 'bottom'
    },
    {
      id: 'pin messages',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <RiPushpinFill />,
      tooltipMessage: 'Mensajes fijados',
      tooltipPosition: 'bottom'
    },
    {
      id: 'hp',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdOutlineHelp />,
      tooltipMessage: 'Ayuda',
      tooltipPosition: 'bottom'
    },
    {
      id: 'add friend',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <BsPersonPlusFill />,
      tooltipMessage: 'Añadir amigos a MD',
      tooltipPosition: 'bottom'
    },
    {
      id: 'user profile',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <FaCircleUser />,
      tooltipMessage: 'Ocultar perfil del usuario',
      tooltipPosition: 'bottom'
    }
  ]
  const toolbarRight: INavButton[] = [
    {
      id: 'inbox',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdInbox />,
      tooltipMessage: 'Bandeja de entrada',
      tooltipPosition: 'bottom'
    },
    {
      id: 'help',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdOutlineHelp />,
      tooltipMessage: 'Ayuda',
      tooltipPosition: 'bottom'
    }
  ]
  return (
    <nav className="w-[100%] min-h-[48px] flex justify-end items-center gap-3 border-b-[1px] border-b-solid border-[#1f2124] pl-5">
      <ToolBar navButton={toolbarLeft} />
      <Input
        placeHolder="Buscar"
        className={['w-[250px]', 'h-[35px]', 'bg-[#1e1f22]', 'active: border-none', 'rounded-md', 'px-1']}
        icon={<BiSearch />}
      />
      <ToolBar navButton={toolbarRight} />
    </nav>
  )
}
