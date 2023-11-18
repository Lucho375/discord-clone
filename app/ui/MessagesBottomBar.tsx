import Input from '@/app/ui/Input'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosGift } from 'react-icons/io'
import { MdGifBox } from 'react-icons/md'

interface IBottomProps {
  userName: string
}
export default function BottomBar({ userName }: IBottomProps) {
  return (
    <div className="w-full h-10 flex justify-center items-center rounded-md bg-[#383a40] px-4 gap-3 sticky self-end">
      <FaCirclePlus size="1.5rem" color="#b5bac1" />
      <Input
        className={['w-full', 'bg-background-100', 'h-full', 'text-[#b5bac1]', 'text-sm']}
        placeHolder={`Enviar mensaje a ${userName}`}
      />
      <IoIosGift size="1.5rem" color="#b5bac1" />
      <MdGifBox size="1.5rem" color="#b5bac1" />
    </div>
  )
}
