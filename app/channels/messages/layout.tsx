import UserChat from '@/app/components/UserChat'
import Image from 'next/image'

export default function DirectMessages({ children }: { children: React.ReactNode }) {
  return (
    <>
        <section className={`bg-slate-800 pl-4 flex flex-col w-[200px] h-[100%]`}>
          <h2>
            Mensajes Directos <span>+</span>
          </h2>
          <hr></hr>
          <ul className="mt-2">
            <UserChat isActive={true} />
            <UserChat isActive={false} />
          </ul>
        </section>
    </>
  )
}