'use client'
import NavButton from "./NavButton/navigationbutton";
import { FaUserFriends } from 'react-icons/fa'
import styles from './navbar.module.css'
import ToolBar from "./ToolBar/toolbar";
import { INavbarProps } from "./navbar.interfaces";


export default function NavBar(props:INavbarProps){
    const navbarClass = [
        "w-[100%]",
        "h-[48px]",
        "flex",
        "justify-start",
        "items-center",
        "gap-[10px]",
        "border-b-[1px]",
        "border-b-solid",
        "border-[#1f2124]",
        "pl-[20px]",
    ];
    const dividerClass = [
        "h-[80%]",
        "border-[1px]",
        "border-solid",
        "border-[#3f4147]"
    ];
    const buttonContainerClass = [
        "h-[30px]",
        "bg-[#313338]",
        "flex",
        "justify-center",
        "items-center",
        "rounded-md",
        "px-[5px]"
    ];
    const buttonHoverClass=[
        "hover:bg-[#3b3d44]",
        "hover:text-[#f2f4f7]"
    ];
    const navButtons=[
        {
            title:"En línea",
            id:"screen-1",
            class:[...buttonContainerClass,"text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Todos",
            id:"screen-2",
            class:[...buttonContainerClass,"text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Pendiente",
            id:"screen-3",
            class:[...buttonContainerClass,"text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Bloqueado",
            id:"screen-4",
            class:[...buttonContainerClass,"text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Añadir amigo",
            id:"screen-5",
            class:[...buttonContainerClass,"bg-[#248046]","text-white"]
        },

    ]


    function selectedScreen(screen:string){
        props.selectedScreen(screen)
    }
    return(
        <section className={navbarClass.join(" ")}>
            <FaUserFriends color="#949ba4" /> 
            <p>Amigos</p>
            <div className={dividerClass.join(" ")}></div>
            {navButtons.map((button)=> <NavButton key={button.id} id={button.id} title={button.title} onClick={selectedScreen} class={button.class.join(" ")}/>)}
            <ToolBar />
        </section>
    )
}