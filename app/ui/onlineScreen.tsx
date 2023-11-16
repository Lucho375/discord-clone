import Input from '@/app/ui/Input'
import { BiSearch } from 'react-icons/bi'
import UserItem from './UserItem'
import perfil from '/public/giovi-perfil.jpg'

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
        {getUsers(8).map(user => (
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
      <section className=" h-[100%] px-5 pt-4 w-[30%]">
        <h3 className="text-[#f2f3f5] font-bold self-start mb-4">Activo ahora</h3>
        <div className="flex flex-col justify-center items-center p-4">
          <p className="text-[#f2f3f5] text-xs mb-1">Por ahora está todo tranquilo...</p>
          <p className="text-[#949ba4] text-xs text-center">
            Cuando un amigo empiece a realizar una actividad como jugar o hablar por voz, ¡te lo mostraremos aqui!
          </p>
        </div>
      </section>
    </div>
  )
}
