import { StaticImageData } from 'next/image'
import ChannelListItem from './ChannelListItem'
import DiscordIcon from 'public/icon.png'

interface IChannelItem {
  id: number
  icon: StaticImageData
  name: string
  href: string
}

const channels: IChannelItem[] = [
  {
    id: 1,
    icon: DiscordIcon,
    name: 'Mensajes Directos',
    href: 'messages'
  },
  {
    id: 2,
    icon: DiscordIcon,
    name: 'Canal de prueba',
    href: '1321321'
  },
  {
    id: 3,
    icon: DiscordIcon,
    name: 'Canal de prueba 2',
    href: '3122312323'
  }
]

export default function Sidebar() {
  return (
    <nav className="p-3 bg-gray-800">
      <ul className="flex flex-col">
        {channels.map(({ id, icon, name, href }) => (
          <ChannelListItem key={id} id={id} icon={icon} name={name} href={href} />
        ))}
        <li className="flex items-center justify-center rounded-full w-14 h-14 hover:bg-green-500 bg-slate-700 hover:cursor-pointer transition-all">
          <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
            ></path>
          </svg>
        </li>
      </ul>
    </nav>
  )
}
