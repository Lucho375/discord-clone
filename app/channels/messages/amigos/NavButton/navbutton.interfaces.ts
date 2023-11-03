
export interface INavButton{
    size?:ISize
    title:string,
    classes:string[],
    onClick():void
}

interface ISize{
    width:number,
    height:number
}