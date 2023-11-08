'use client'
import NavButton from "./NavButton/navigationbutton";
import { FaUserFriends } from 'react-icons/fa'
import ToolBar from "./ToolBar/toolbar";
import { INavbarProps } from "./navbar.interfaces";
import { useEffect, useState } from 'react';
import { INavButton } from './NavButton/navbutton.interfaces';



export default function NavBar(props:INavbarProps){
    const [navButtons,setNavButtons]= useState<INavButton[]>([]);

    
    const navbarClass = [
        "w-[100%]",
        "min-h-[48px]",
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
    const focusClass = ["bg-[#3b3d44]","text-[#f2f4f7]"];

    const Buttons=[
        {
            title:"En línea",
            id:"screen-1",
            class:[...buttonContainerClass,"bg-[#313338]","text-[#949ba4]",...buttonHoverClass,...focusClass]
        },
        {
            title:"Todos",
            id:"screen-2",
            class:[...buttonContainerClass,"bg-[#313338]","text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Pendiente",
            id:"screen-3",
            class:[...buttonContainerClass,"bg-[#313338]","text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Bloqueado",
            id:"screen-4",
            class:[...buttonContainerClass,"bg-[#313338]","text-[#949ba4]",...buttonHoverClass]
        },
        {
            title:"Añadir amigo",
            id:"screen-5",
            class:[...buttonContainerClass,"bg-[#248046]","text-white"]
        }

    ]


    function selectedScreen(screen:string){
        props.selectedScreen(screen);
        const buttonIndex = navButtons.findIndex(btn=>btn.id === screen);
        if(buttonIndex !== -1){
            navButtons.map((btn,i)=>{
                if(i === buttonIndex){
                    const buttons = [...navButtons];
                    addClass(buttons[i])
                    setNavButtons([...buttons]);
                }else{
                    const buttons = [...navButtons];
                    removeClass(buttons[i],focusClass);
                    setNavButtons(buttons);
                }
            })
        }
    }

    function addClass(button:INavButton){
            const btn = button;
            btn.class = [...btn.class,...focusClass];
    }
    function removeClass(button:INavButton,btnClases: string | string[]){
        const btn = button;
        const clases = btnClases;
        if(clases instanceof Array){
            clases.forEach((cls)=>
            {
                const result =  [...btn.class.filter(cl=>cl !== cls)];
                console.log("las clases")
                btn.class = result;
            })
            return btn;
        }
        btn.class = btn.class.filter(cls=>cls !== clases)
        return btn;
        }

        useEffect(()=>
        {
            setNavButtons(Buttons);
        },[]);

    return(
        <section className={navbarClass.join(" ")}>
            <FaUserFriends color="#949ba4" /> 
            <p>Amigos</p>
            <>{console.log("se renderiza nav")}</>
            <div className={dividerClass.join(" ")}></div>
            {navButtons.map((button)=> <NavButton key={button.id} id={button.id} title={button.title} onClick={selectedScreen} class={button.class}/>)}
            <ToolBar />
        </section>
    )
}