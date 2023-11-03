import { ReactElement } from "react"

export interface INavButton{
    size?:ISize
    title?:string,
    classes:string[],
    onClick?(id:string):void,
    icon?: ReactElement,
    id:string,
}

interface ISize{
    width:number,
    height:number
}