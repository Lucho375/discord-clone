import UserChat from '@/app/components/UserChat'
import Image from 'next/image'

export default function Channel() {
  return (
    <section className="bg-slate-800 pl-4">
      <h2>
        Mensajes Directos <span>+</span>
      </h2>

      <ul className="mt-2">
        <UserChat isActive={true} />
        <UserChat isActive={false} />
      </ul>
    </section>
  )
}
