import ServerSideBar from '../ui/ServerSideBar'

export default function ChannelLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-between">
      <ServerSideBar />
      <>{children}</>
    </section>
  )
}
