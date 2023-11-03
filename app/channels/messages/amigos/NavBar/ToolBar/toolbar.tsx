import NavButton from "../NavButton/navigationbutton";
import { MdMarkChatUnread, MdOutlineHelp,MdInbox } from 'react-icons/md'
import toolbarStyle from '../navbar.module.css';

export default function ToolBar(){


    return(
        <section className={toolbarStyle.toolbar}>
            <div className={toolbarStyle.divider}></div>
            <NavButton classes={["buttonContainer","buttonHover"]} icon={<MdMarkChatUnread />}/>
            <NavButton classes={["buttonContainer","buttonHover"]} icon={<MdInbox />}/>
            <NavButton classes={["buttonContainer","buttonHover"]} icon={<MdOutlineHelp />}/>
        </section>
    )
}