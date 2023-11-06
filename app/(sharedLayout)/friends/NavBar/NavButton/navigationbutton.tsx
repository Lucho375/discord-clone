'use client'
import { useState,useEffect } from 'react';
import { INavButton } from './navbutton.interfaces';



export default function NavButton(props:INavButton){
    const [btnClass,setBtnClass] = useState(props.class);

    function onClic(){
        if(props.onClick){
            props.onClick(props.id)
        }
    }

    useEffect(()=>
    {
        if(props.class.length === 0){
           setBtnClass([
                "h-[30px]",
                "bg-[#313338]",
                "flex",
                "justify-center",
                "items-center",
                "rounded-md",
                "px-[5px]"
            ].join(" "));
        }
    },[props.class])
    return(
        <div className={btnClass}>
            <button id={props.id} onClick={onClic}>{props.icon}{props.title}</button>
        </div>
    )
    
}