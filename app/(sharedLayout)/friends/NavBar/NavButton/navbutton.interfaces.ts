import { ReactElement } from "react"

export interface INavButton{
    size?:ISize
    title?:string,
    className?:string[],
    onClick?(id:string):void,
    icon?: ReactElement,
    id:string,
    hover?:boolean,
}

interface ISize{
    width:number,
    height:number
}