'use client'
import { INavButton } from './navbutton.interfaces';

const defaultStyle = [
    "h-[30px]",
    "flex",
    "justify-center",
    "items-center",
    "rounded-md",
    "px-[5px]",
];



export default function NavButton(props:INavButton){
    function onClic(){
        if(props.onClick){
            props.onClick(props.id);
        }
    }
    const containerStyle = [
        ...defaultStyle,
        ...props?.className ?? []
    ]

    return(
        <div className={containerStyle.join(" ")}>
            <button id={props.id} onClick={onClic}>{props.icon}{props.title}</button>
        </div>
    )
    
}

// className={props.class?.join(" ") ?? containerClass.join(" ")}