import { MdInbox, MdMarkChatUnread, MdOutlineHelp } from 'react-icons/md'
import NavButton from '../NavButton/navigationbutton'
import toolbarStyle from '../navbar.module.css'

export default function ToolBar() {
  return (
    <section className={toolbarStyle.toolbar}>
      <div className={toolbarStyle.divider}></div>
      <NavButton id="md" classes={['buttonContainer', 'buttonHover']} icon={<MdMarkChatUnread />} />
      <NavButton id="be" classes={['buttonContainer', 'buttonHover']} icon={<MdInbox />} />
      <NavButton id="hp" classes={['buttonContainer', 'buttonHover']} icon={<MdOutlineHelp />} />
    </section>
  )
}
