'use client'
import Input from '@/app/ui/Input'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosGift } from 'react-icons/io'
import { MdGifBox } from 'react-icons/md'
import NavButton from './navigationbutton'
import { useState } from 'react'

interface IBottomProps {
  userName: string
}
export default function BottomBar({ userName }: IBottomProps) {
  const [hover, setHover] = useState(false)
  return (
    <div className="w-full h-10 flex justify-center items-center rounded-md bg-[#383a40] px-4 sticky self-end">
      <NavButton id="add" icon={<FaCirclePlus size="1.5rem" color={`${hover ? '#f2f4f7' : '#b5bac1'}`} />} hover />
      <Input
        className={['w-full', 'bg-background-100', 'h-full', 'text-[#b5bac1]', 'text-sm']}
        placeHolder={`Enviar mensaje a ${userName}`}
      />
      <NavButton
        id="gift"
        icon={<IoIosGift size="1.5rem" color={`${hover ? '#f2f4f7' : '#b5bac1'}`} />}
        hover
        tooltipPosition="top"
        tooltipMessage="¡Mejora a tus amigos! Regalales increibles ventajas de chat con Nitro."
      />
      <NavButton id="gifcard" icon={<MdGifBox size="1.5rem" color={`${hover ? '#f2f4f7' : '#b5bac1'}`} />} hover />
    </div>
  )
}
