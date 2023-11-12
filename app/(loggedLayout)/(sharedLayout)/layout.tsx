import DirectMessages from '@/app/ui/DirectMessages'
import TopBar from '@/app/ui/friends-topbar/topBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-full w-full">
      <section className="w-[230px] bg-[#2b2d31]">
        <TopBar />
        <DirectMessages />
      </section>
      <div className="flex flex-grow">{children}</div>
    </section>
  )
}
