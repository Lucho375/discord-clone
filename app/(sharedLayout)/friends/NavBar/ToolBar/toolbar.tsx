import { MdInbox, MdMarkChatUnread, MdOutlineHelp } from 'react-icons/md'
import NavButton from '../NavButton/navigationbutton'

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

const buttonHoverClass=[
  "hover:bg-[#3b3d44]",
  "hover:text-[#f2f4f7]"
];
  return (
    <section className={toolbarClass.join(" ")}>
      <div className={dividerClass.join(" ")}></div>
      <NavButton id="md" className={[...buttonHoverClass]} icon={<MdMarkChatUnread />} />
      <NavButton id="be" className={[...buttonHoverClass]} icon={<MdInbox />} />
      <NavButton id="hp" className={[...buttonHoverClass]} icon={<MdOutlineHelp />} />
    </section>
  )
}
