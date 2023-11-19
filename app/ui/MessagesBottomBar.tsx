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
      <NavButton
        id="add"
        icon={<FaCirclePlus size="1.2rem" />}
        hover
        className={['hover:text-[#f2f4f7]', 'rounded-md', 'text-[#949ba4]']}
      />
      <Input
        className={['w-full', 'bg-[#383a40]', 'h-full', 'text-[#b5bac1]', 'text-sm', 'ml-1']}
        placeHolder={`Enviar mensaje a ${userName}`}
      />
      <NavButton
        id="gift"
        icon={<IoIosGift size="1.5rem" />}
        hover
        className={['hover:text-[#f2f4f7]', 'rounded-md', 'text-[#949ba4]']}
        tooltipPosition="top"
        tooltipMessage="¡Mejora a tus amigos! Regalales increibles ventajas de chat con Nitro."
      />
      <NavButton
        id="gifcard"
        icon={<MdGifBox size="1.5rem" />}
        hover
        className={['hover:text-[#f2f4f7]', 'rounded-md', 'text-[#949ba4]']}
      />
    </div>
  )
}
