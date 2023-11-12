'use client'
import { ReactElement, useState } from 'react'
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs'
import Viñeta from './ToolTip'

interface IIconProps {
  icon?: ReactElement
}
export default function Icon({ icon = <BsFillEmojiSmileUpsideDownFill /> }: IIconProps) {
  const [onHover, setHover] = useState(false)
  return (
    <div
      className="relative flex justify-center items-center w-8 h-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {onHover ? <Viñeta /> : null}
    </div>
  )
}
