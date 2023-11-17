import { IUser } from './MessagesNavbar'

interface IRightPanel {
  user: IUser
}
export default function RightPanel({ user }: IRightPanel) {
  return <aside className="w-[350px] h-full flex justify-start items-center self-end bg-background-200"></aside>
}
