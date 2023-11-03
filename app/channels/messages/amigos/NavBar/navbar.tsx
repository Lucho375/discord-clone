'use client'
import NavButton from "./NavButton/navigationbutton";
import { FaUserFriends } from 'react-icons/fa'
import styles from './navbar.module.css'
import ToolBar from "./ToolBar/toolbar";

export default function NavBar(){

    const navButtons=[
        {
            title:"En línea",
            id:"btn-1",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Todos",
            id:"btn-2",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Pendiente",
            id:"btn-3",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Bloqueado",
            id:"btn-4",
            classes:["buttonContainer","buttonFocus","buttonHover"]
        },
        {
            title:"Añadir amigo",
            id:"btn-5",
            classes:["buttonContainer","addFriend"]
        },

    ]

    function selectedScreen(){

    }
    return(
        <section className={styles.navbar}>
            <FaUserFriends color="#949ba4" /> 
            <p>Amigos</p>
            <div className={styles.divider}></div>
            {navButtons.map((button)=> <NavButton key={button.id} title={button.title} onClick={selectedScreen} classes={...button.classes}/>)}
            <ToolBar />
        </section>
    )
}