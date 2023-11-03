'use client'
import { ReactElement, useState } from 'react'
import styles from './amigos.module.css'
import NavBar from './NavBar/navbar'

interface Screen{
    [key:string]:ReactElement
}

export default function Amigos(){
    const [screen, setScreen] = useState("screen-1");

    const screens:Screen={
        "screen-1":<div className='w-[90%] h-[90%] bg-slate-600 flex justify-center items-center border-white m-5'> <h1>En línea!</h1></div>,
        "screen-2":<div className='w-[90%] h-[90%] bg-red-600 flex justify-center items-center border-white m-5'> <h1>Todos!</h1></div>,
        "screen-3":<div className='w-[90%] h-[90%] bg-amber-400 flex justify-center items-center border-white m-5'> <h1>Pendiente!</h1></div>,
        "screen-4":<div className='w-[90%] h-[90%] bg-lime-600 flex justify-center items-center border-white m-5'> <h1>Bloqueado!</h1></div>,
    }

    function selectScreen(screen:string){
        setScreen(screen)
    }

    return(
        <div className={styles.mainPage}>
            <NavBar selectedScreen={selectScreen}/>
            {screens[screen]}
        </div>
    )
}