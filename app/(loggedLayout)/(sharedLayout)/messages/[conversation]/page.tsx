import Input from '@/app/ui/Input'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosGift } from 'react-icons/io'
import { MdGifBox } from 'react-icons/md'
interface Params {
  params: { conversation: string }
}

function Conversation({ params }: Params) {
  return (
    <section className="h-full w-full flex flex-col bg-background-100 ">
      <section>
        <h1>Conversation {params.conversation}</h1>
      </section>
      <div>
        <FaCirclePlus />
        <Input />
        <IoIosGift />
        <MdGifBox />
      </div>
      <input type="text" name="message" id="message" placeholder="Enviar mensaje a @Username" />
    </section>
  )
}

export default Conversation
