import { ReactElement,FunctionComponent } from "react"

interface IInputProps{
    type?:string,
    placeHolder?: string ,
    id?:string,
    className?:string[],
    icon?: ReactElement,
    width?:string,
    height?: string

}
const defaultContainerStyle=[
    "w-[200px]",
    "h-[35px]",
    "bg-[#1e1f22]",
    "focus: border-none",
]
const defaultInputStyle=[
    "w-[200px]",
    "h-[100%]",
    "bg-[#1e1f22]",
    "focus: border-none",
]

const Input:FunctionComponent<IInputProps>= ({placeHolder="Buscar",className=[...defaultContainerStyle],icon,type="text",id})=>{



    return (
        <div className={className.join(" ")}>
            <input className={className.join(" ")} type={type} id={id} placeholder={placeHolder}>{icon}</input>
        </div>
    )
}

export default Input;