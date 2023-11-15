import MessagesNavbar from '@/app/ui/MessagesNavbar'

interface IMessageLayout {
  children: React.ReactNode
}

export default function MessagesLayout({ children }: IMessageLayout) {
  return (
    <section className="w-full h-full bg-background-100 pt-2">
      <MessagesNavbar />
      {children}
    </section>
  )
}
