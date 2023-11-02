import UserChat from '@/app/components/UserChat'
import TopBar from './topbar/topBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-full w-full">
      <section className="bg-slate-900 flex flex-col w-[230px]">
        <TopBar />
        <h2>
          Mensajes Directos <span>+</span>
        </h2>

        <ul className="mt-2">
          <UserChat isActive={true} />
          <UserChat isActive={false} />
        </ul>
      </section>
      <>{children}</>
    </section>
  )
}
