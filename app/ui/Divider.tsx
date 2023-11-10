import { FunctionComponent, useEffect, useState } from 'react';

interface IDivider{
    width?:string,
    size?:string,
    color?:string,
    borderWidth?:string,
    borderType?:string,
    className?:string[],
    orientation?:string
}

interface DividerOrientation{
    [O: string]: string
}
//{orientation="v",size="[100%]",color="[#3f4147]",borderType="solid",borderWidth="[1px]"}
const Divider = (props:IDivider)=>{

        const defaultStyle:DividerOrientation = {
            "v": "h-[100%] border-[#3f4147] border-solid border-[1px] mx-3",
            "h": "w-[100%] border-[#3f4147] border-solid border-[1px] my-3"
        }

    return(
            <div className={props.className?.join(" ") ?? defaultStyle[props.orientation ?? "h"]}></div>
    )
}

export default Divider;