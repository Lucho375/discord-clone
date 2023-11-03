import styles from "./tobar.module.css"
import { IButtonLinks } from "./ITopbar";
import LinkBar from "./linkBar";
import {TbCarTurbine} from 'react-icons/tb'
import {FaStore,FaUserFriends} from 'react-icons/fa'

const buttonsLinks:IButtonLinks[]=
[
    {
        href: '/channels/messages/amigos',
        title: 'Amigos',
        icon: <FaUserFriends />
    },
    {
        href: '/channels/messages/nitro',
        title: 'Nitro',
        icon: <TbCarTurbine />
    },
    {
        href: '/channels/messages/tienda',
        title: 'Tienda',
        icon: <FaStore />
    }
]

export default function TopBar(){

    return(
        <div className={styles.topbar}>
            <div className={styles.searchContainer}>
                <input type="text" id={styles.searchInput} placeholder="Busca o inicia una conversación"></input>
            </div>
            {buttonsLinks.map((link,i)=><LinkBar key={i} href={link.href} icon={link.icon} title={link.title} />)}
        </div>
    )
}