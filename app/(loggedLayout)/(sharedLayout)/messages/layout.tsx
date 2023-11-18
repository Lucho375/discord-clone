'use client'
import MessagesNavbar, { IUser } from '@/app/ui/MessagesNavbar'
import userProfile from '/public/giovi-perfil.jpg'
import RightPanel from '@/app/ui/MessagesRightPanel'
interface IMessageLayout {
  children: React.ReactNode
}
const user: IUser = {
  avatar: userProfile,
  globalName: 'giovanni-barolin',
  isConnected: true,
  name: 'Giovanni',
  status: 'online',
  userName: 'Giovanni-Barolin'
}

export default function MessagesLayout({ children }: IMessageLayout) {
  return (
    <section className="w-full h-full bg-background-100 pt-2 flex flex-col justify-start items-center">
      <MessagesNavbar user={user} />
      <div className="w-full h-full flex justify-start items-center">
        {children}
        <RightPanel user={user} />
      </div>
    </section>
  )
}
