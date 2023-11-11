import Image, { StaticImageData } from "next/image";
//import icon from "/public/icon.png"
import { useState } from "react";
import { BiSolidMessage } from 'react-icons/bi';
import { CiMenuKebab } from 'react-icons/ci';
import NavButton from "../../NavBar/NavButton/navigationbutton";
interface IListItemProps{
    status?: "en linea" | "ausente" | "no molestar" | "invisible";
    icon?:string | StaticImageData;
}

const ListItem = ({status="invisible",icon=""}:IListItemProps)=>{
        const [userState,setUserState] = useState(status);

    const states:{[key:string]:string}={
        "invisible":"bg-[#313338c7]",
        "no molestar":"bg-red-600",
        "en linea":"bg-green-600",
        "ausente":"bg-yellow-600"
    }

    return(
        <div className="h-16 w-[100%] hover:bg-[#3b3d44] rounded-md flex gap-2 justify-start items-center px-2" >
            <div className=" w-8 h-8">
                <Image className="rounded-full" src={icon} style={{width:"auto",height:"auto",maxWidth:"32px"}} alt="User image" objectFit="cover"/>
                <div className={`relative w-[10px] h-[10px] left-[18px] bottom-[9px] rounded-full ${states[userState]}`}></div>
            </div>
            <div className="">
                <p className="text-sm">User</p>
                <p className="text-[#949ba4] text-xs">{userState}</p>
            </div>
            <div className="h-full flex justify-center items-center text-[#949ba4] gap-3">
                <NavButton id="message" icon={<BiSolidMessage  />} hover={true} />
                <CiMenuKebab />
            </div>
        </div>
    )
}

export default ListItem;

//<Image className="rounded-full" src={icon} style={{width:"auto",height:"auto",maxWidth:"32px"}} alt="User image" objectFit="cover"/>