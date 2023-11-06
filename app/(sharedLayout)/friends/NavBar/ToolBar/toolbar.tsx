import { MdInbox, MdMarkChatUnread, MdOutlineHelp } from 'react-icons/md'
import NavButton from '../NavButton/navigationbutton'
import toolbarStyle from '../navbar.module.css'

export default function ToolBar() {

  const toolbarClass = [
    "flex",
    "h-[100%]",
    "justify-evenly",
    "items-center",
    "ml-auto",
    "mr-[20px]",
    "gap-[10px]"
  ];

  const dividerClass = [
    "h-[80%]",
    "border-[1px]",
    "border-solid",
    "border-[#3f4147]"
];
  return (
    <section className={toolbarClass.join(" ")}>
      <div className={dividerClass.join(" ")}></div>
      <NavButton id="md" classes={['buttonContainer', 'buttonHover']} icon={<MdMarkChatUnread />} />
      <NavButton id="be" classes={['buttonContainer', 'buttonHover']} icon={<MdInbox />} />
      <NavButton id="hp" classes={['buttonContainer', 'buttonHover']} icon={<MdOutlineHelp />} />
    </section>
  )
}
