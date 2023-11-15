interface IMessageLayout {
  children: React.ReactNode
}

export default function MessagesLayout({ children }: IMessageLayout) {
  return <section className="w-full h-full bg-background-300">{children}</section>
}
