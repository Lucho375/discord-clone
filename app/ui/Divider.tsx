import { FunctionComponent, useEffect, useState } from 'react'

interface IDivider {
  width?: string
  size?: string
  borderColor?: string
  borderWidth?: string
  borderType?: string
  className?: string[]
  orientation?: string
}

interface DividerOrientation {
  [O: string]: string
}
//{orientation="v",size="[100%]",color="[#3f4147]",borderType="solid",borderWidth="[1px]"}
const Divider = (props: IDivider) => {
  const defaultStyle: DividerOrientation = {
    v: `${props.size ?? 'h-[100%]'} border-[#3f4147] border-solid border-[1px]  border-${props.borderColor}`,
    h: `${props.size ?? 'w-[100%]'} border-[#3f4147] border-solid border-[1px]  border-${props.borderColor}`
  }

  return (
    <div className={`flex justify-center items-center ${props.orientation === 'v' ? 'w-0 h-full' : 'w-full h-0'}`}>
      <div className={props.className?.join(' ') ?? defaultStyle[props.orientation ?? 'h']}></div>
    </div>
  )
}

export default Divider
