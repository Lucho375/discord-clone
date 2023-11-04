import styles from './tobar.module.css'
import { IButtonLinks } from './ITopbar'
import LinkBar from './linkBar'
import { TbCarTurbine } from 'react-icons/tb'
import { FaStore, FaUserFriends } from 'react-icons/fa'

const buttonsLinks: IButtonLinks[] = [
  {
    href: '/friends',
    title: 'Amigos',
    icon: <FaUserFriends />
  },
  {
    href: '/nitro',
    title: 'Nitro',
    icon: <TbCarTurbine />
  },
  {
    href: '/shop',
    title: 'Tienda',
    icon: <FaStore />
  }
]

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.searchContainer}>
        <input type="text" id={styles.searchInput} placeholder="Busca o inicia una conversación"></input>
      </div>
      {buttonsLinks.map(({ href, icon, title }, i) => (
        <LinkBar key={i} href={href} icon={icon} title={title} />
      ))}
    </div>
  )
}
