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

const buttonContainerClass = [
  "h-[30px]",
  "bg-[#313338]",
  "flex",
  "justify-center",
  "items-center",
  "rounded-md",
  "px-[5px]"
];
const buttonHoverClass=[
  "hover:bg-[#3b3d44]",
  "hover:text-[#f2f4f7]"
];
  return (
    <section className={toolbarClass.join(" ")}>
      <div className={dividerClass.join(" ")}></div>
      <NavButton id="md" class={[...buttonContainerClass,...buttonHoverClass]} icon={<MdMarkChatUnread />} />
      <NavButton id="be" class={[...buttonContainerClass,...buttonHoverClass]} icon={<MdInbox />} />
      <NavButton id="hp" class={[...buttonContainerClass,...buttonHoverClass]} icon={<MdOutlineHelp />} />
    </section>
  )
}
