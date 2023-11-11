import LinkBar, { IButtonLinks } from './linkBar'
import { TbCarTurbine } from 'react-icons/tb'
import { FaStore, FaUserFriends } from 'react-icons/fa'
import Input from '../Input'

const buttonsLinks: IButtonLinks[] = [
  {
    href: '/friends',
    title: 'Amigos',
    icon: <FaUserFriends />
  },
  {
    href: '/nitro',
    title: 'Nitro',
    icon: <TbCarTurbine />
  },
  {
    href: '/shop',
    title: 'Tienda',
    icon: <FaStore />
  }
]

export default function TopBar() {
  return (
    <div className="flex flex-col items-center gap-3 pt-[5px] text-white bg-[#2b2d31] pb-3">
      <div className="w-full h-12 flex justify-center items-center border-b border-solid border-[#1f2124]">
        <Input
          placeHolder="Busca o inicia una conversación"
          className={['w-[95%]', 'h-7', 'rounded-md', 'text-xs', 'pl-2']}
        />
      </div>
      {buttonsLinks.map(({ href, icon, title }, i) => (
        <LinkBar key={i} href={href} icon={icon} title={title} />
      ))}
    </div>
  )
}
