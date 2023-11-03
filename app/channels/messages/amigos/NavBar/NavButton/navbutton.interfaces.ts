import { ReactElement } from "react"

export interface INavButton{
    size?:ISize
    title?:string,
    classes:string[],
    onClick?():void,
    icon?: ReactElement
}

interface ISize{
    width:number,
    height:number
}