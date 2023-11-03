'use client'
import buttonStyles from './navbutton.module.css';
import { INavButton } from './navbutton.interfaces';


export default function NavButton(props:INavButton){
    let buttonClases!:string;
    props.classes.forEach(cl=>{
        buttonClases = buttonClases + " " + buttonStyles[cl];
    })
    return(
        <div className={buttonClases}>
            <button className={buttonStyles.button} onClick={props.onClick}>{props.icon}{props.title}</button>
        </div>
    )
    
}