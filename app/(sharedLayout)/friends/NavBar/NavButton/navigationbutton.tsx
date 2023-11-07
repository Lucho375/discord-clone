'use client'
import { useState,useEffect } from 'react';
import { INavButton } from './navbutton.interfaces';



export default function NavButton(props:INavButton){
    function onClic(){
        if(props.onClick){
            props.onClick(props.id);
        }
    }

    return(
        <div className={props.class.join(" ")}>
            <button id={props.id} onClick={onClic}>{props.icon}{props.title}</button>
        </div>
    )
    
}
