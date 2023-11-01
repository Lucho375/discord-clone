import { StaticImageData } from 'next/image'
import ChannelListItem from './ChannelListItem'
import DiscordIcon from 'public/icon.png'

interface IChannelItem {
  id: number
  icon: StaticImageData
  name: string
}

const channels: IChannelItem[] = [
  {
    id: 1,
    icon: DiscordIcon,
    name: 'Mensajes Directos'
  },
  {
    id: 2,
    icon: DiscordIcon,
    name: 'Canal de prueba'
  },
  {
    id: 3,
    icon: DiscordIcon,
    name: 'Canal de prueba 2'
  }
]

export default function Sidebar() {
  return (
    <nav className="p-3 bg-gray-800">
      <ul className="flex flex-col">
        {channels.map(({ id, icon, name }) => (
          <ChannelListItem key={id} id={id} icon={icon} name={name} />
        ))}
      </ul>
    </nav>
  )
}
