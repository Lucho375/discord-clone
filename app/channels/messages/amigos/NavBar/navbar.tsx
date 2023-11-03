'use client'
import NavButton from "./NavButton/navigationbutton";
import { FaUserFriends } from 'react-icons/fa'
import styles from './navbar.module.css'
import ToolBar from "./ToolBar/toolbar";
import { INavbarProps } from "./navbar.interfaces";

export default function NavBar(props:INavbarProps){

    const navButtons=[
        {
            title:"En línea",
            id:"screen-1",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Todos",
            id:"screen-2",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Pendiente",
            id:"screen-3",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Bloqueado",
            id:"screen-4",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Añadir amigo",
            id:"screen-5",
            classes:["buttonContainer","addFriend"]
        },

    ]

    function selectedScreen(screen:string){
        props.selectedScreen(screen)
    }
    return(
        <section className={styles.navbar}>
            <FaUserFriends color="#949ba4" /> 
            <p>Amigos</p>
            <div className={styles.divider}></div>
            {navButtons.map((button)=> <NavButton key={button.id} id={button.id} title={button.title} onClick={selectedScreen} classes={...button.classes}/>)}
            <ToolBar />
        </section>
    )
}