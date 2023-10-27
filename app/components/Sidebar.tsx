import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav>
      <ul className="flex flex-col">
        <li>
          <Link href="/channels/messages">Mensajes Directos</Link>
        </li>
      </ul>
    </nav>
  )
}
