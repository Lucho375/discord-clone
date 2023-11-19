import BottomBar from '@/app/ui/MessagesBottomBar'
import { IUser } from '@/app/ui/MessagesNavbar'
import Image from 'next/image'
import perfil from '/public/giovi-perfil.jpg'
import Divider from '@/app/ui/Divider'
interface Params {
  params: { conversation: string }
}

const user = {
  uid: crypto.randomUUID(),
  avatar: perfil.src,
  status: 'online',
  globalName: crypto.randomUUID().slice(0, 8),
  userName: 'Giovanni-Barolin'
}
function Conversation({ params }: Params) {
  return (
    <section className="h-full w-full flex flex-col bg-background-100 justify-start items-center px-5">
      <section className="h-[90%] overflow-y-scroll w-full py-2">
        <article className="w-full h-[250px] flex flex-col justify-evenly items-start">
          <Image
            src={user.avatar}
            alt="User avatar"
            width={80}
            height={80}
            className="rounded-full max-w-[80px] max-h-[80px] my-2"
          />
          <h1 className="font-bold text-xl">{user.userName}</h1>
          <h3>{user.globalName}</h3>
          <p className="text-sm text-[#949ba4]">
            Este es el comienzo de tu historial de mensajes directos con {user.userName}
          </p>
        </article>
        <Divider orientation="h" />
      </section>
      <BottomBar userName="Lucho" />
    </section>
  )
}

export default Conversation
