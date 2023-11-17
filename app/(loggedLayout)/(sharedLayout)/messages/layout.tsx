'use client'
import MessagesNavbar, { IUser } from '@/app/ui/MessagesNavbar'
import userProfile from '/public/giovi-perfil.jpg'
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
    <section className="w-full h-full bg-background-100 pt-2">
      <MessagesNavbar user={user} />
      {children}
    </section>
  )
}
