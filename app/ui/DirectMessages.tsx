import { AiOutlinePlus } from 'react-icons/ai'
import UserChat from './UserChat'

function DirectMessages() {
  // TODO: fetch messages
  return (
    <section>
      <div className="flex justify-between max-w-[200px] mx-auto">
        <h2 className="text-gray-400 hover:text-white text-xs uppercase">Mensajes Directos</h2>
        <AiOutlinePlus className="hover:text-white text-gray-300 hover:cursor-pointer" />
      </div>
      <ul className="mt-2">
        <UserChat isActive={true} />
        <UserChat isActive={false} />
      </ul>
    </section>
  )
}

export default DirectMessages
