import Image from 'next/image'
import DiscordIcon from 'public/icon.png'

interface Props {
  isActive: boolean
}

function UserChat({ isActive }: Props) {
  return (
    <li className="my-4 flex items-center hover:bg-slate-700">
      <Image alt="Username" src={DiscordIcon} className="rounded-full w-10" />
      <span className="ml-3">Username</span>
      <div
        className={`relative w-3 h-3 -left-[107px] top-3 rounded-full ${isActive ? 'bg-red-600' : 'bg-green-600'}`}
      ></div>
    </li>
  )
}

export default UserChat
