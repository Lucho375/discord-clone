'use client'
import { ReactElement, useState } from 'react'
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs'
import Viñeta from './Viñeta'

interface IIconProps {
  icon?: ReactElement
}
export default function Icon({ icon = <BsFillEmojiSmileUpsideDownFill /> }: IIconProps) {
  const [onHover, setHover] = useState(false)
  return (
    <div className="" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {icon}
      <Viñeta />
    </div>
  )
}
