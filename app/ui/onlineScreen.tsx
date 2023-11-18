import Input from '@/app/ui/Input'
import { BiSearch } from 'react-icons/bi'
import UserItem from './UserItem'
import perfil from '/public/giovi-perfil.jpg'
import OfflineUsers from './OfflineUsers'

interface IUser {
  uid: string
  avatar: string
  status: 'online' | 'away' | 'do not disturb' | 'invisible'
  globalName: string
  userName: string
}

function getUsers(length: number = 5) {
  const arr: IUser[] = []
  for (let i = 0; i < length; i++) {
    arr.push({
      uid: crypto.randomUUID(),
      avatar: perfil.src,
      status: 'online',
      globalName: crypto.randomUUID().slice(0, 8),
      userName: 'egGio22'
    })
  }
  return arr
}

export default function OnlineFriends() {
  return (
    <div className="w-[100%] h-[100%] flex justify-start items-start">
      <section className="flex flex-col justify-start items-start w-[70%] h-[100%] px-5 border-r-2 border-solid border-[#3f4147] pt-4">
        <Input
          className={['w-[100%]', 'h-[35px]', 'bg-[#1e1f22]', 'active: border-none', 'rounded-md', 'px-1']}
          icon={<BiSearch />}
        />
        <h6 className="text-[#949ba4] pt-8 text-xs mb-4">CONECTADO - 3</h6>
        {getUsers(3).map(user => (
          <UserItem
            key={user.uid}
            status={user.status}
            avatar={user.avatar}
            uid={user.uid}
            globalName={user.globalName}
            userName={user.userName}
          />
        ))}
      </section>
      <OfflineUsers />
    </div>
  )
}
