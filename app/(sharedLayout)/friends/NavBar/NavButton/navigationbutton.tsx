'use client'
import buttonStyles from './navbutton.module.css';
import { INavButton } from './navbutton.interfaces';


export default function NavButton(props:INavButton){
    let buttonClases!:string;
    props.classes.forEach(cl=>{
        buttonClases = buttonClases + " " + buttonStyles[cl];
    })

    function onClic(){
        if(props.onClick){
            props.onClick(props.id)
        }
    }
    return(
        <div className={buttonClases}>
            <button id={props.id} className={buttonStyles.button} onClick={onClic}>{props.icon}{props.title}</button>
        </div>
    )
    
}