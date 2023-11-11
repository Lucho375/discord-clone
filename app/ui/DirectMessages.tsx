'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import UserChat from './UserChat'
import { useState } from 'react'

interface IMessage {
  id: string
  user: string
  isActive: boolean
}

const dbMessages: IMessage[] = [
  {
    id: crypto.randomUUID(),
    user: 'User1',
    isActive: true
  },
  {
    id: crypto.randomUUID(),
    user: 'User2',
    isActive: true
  },
  {
    id: crypto.randomUUID(),
    user: 'User3',
    isActive: false
  },
  {
    id: crypto.randomUUID(),
    user: 'User4',
    isActive: false
  }
]

function DirectMessages() {
  const [messages, setMessages] = useState<IMessage[]>([...dbMessages])

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(message => message.id !== id))
  }

  return (
    <section>
      <div className="flex justify-between max-w-[200px] mx-auto">
        <h2 className="text-gray-400 hover:text-white text-xs uppercase">Mensajes Directos</h2>
        <AiOutlinePlus className="hover:text-white text-gray-300 hover:cursor-pointer" />
      </div>
      <ul className="mt-2">
        {messages.map(message => (
          <UserChat key={message.id} {...message} removeChat={() => deleteMessage(message.id)} />
        ))}
      </ul>
    </section>
  )
}

export default DirectMessages
