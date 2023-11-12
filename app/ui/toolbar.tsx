import { MdInbox, MdMarkChatUnread, MdOutlineHelp } from 'react-icons/md'
import NavButton from './navigationbutton'
import Divider from './Divider'

export default function ToolBar() {
  const toolbarClass = ['flex', 'h-[100%]', 'justify-evenly', 'items-center', 'ml-auto', 'mr-[20px]', 'gap-[10px]']

  const buttonHoverClass = ['hover:bg-[#3b3d44]', 'hover:text-[#f2f4f7]']
  return (
    <section className={toolbarClass.join(' ')}>
      <NavButton
        id="md"
        className={[...buttonHoverClass, 'rounded-md']}
        icon={<MdMarkChatUnread />}
        tooltipMessage="Nuevo grupo de MD"
        tooltipPosition="bottom"
      />
      <Divider orientation="v" size="h-[50%]" />
      <NavButton
        id="be"
        className={[...buttonHoverClass, 'rounded-md']}
        icon={<MdInbox />}
        tooltipMessage="Bandeja de entrada"
        tooltipPosition="bottom"
      />
      <NavButton
        id="hp"
        className={[...buttonHoverClass, 'rounded-md']}
        icon={<MdOutlineHelp />}
        tooltipMessage="Ayuda"
        tooltipPosition="bottom"
      />
    </section>
  )
}
