import { BiSolidPhoneCall } from 'react-icons/bi'
import { BiSolidVideo } from 'react-icons/bi'
import { RiPushpinFill } from 'react-icons/ri'
import { BsPersonPlusFill } from 'react-icons/bs'
import { FaCircleUser } from 'react-icons/fa6'
import { MdInbox, MdOutlineHelp } from 'react-icons/md'
export default function MessagesNavbar() {
  return (
    <nav className="w-[100%] min-h-[48px] flex justify-end items-center gap-3 border-b-[1px] border-b-solid border-[#1f2124] pl-5">
      <BiSolidPhoneCall />
      <BiSolidVideo />
      <RiPushpinFill />
      <BsPersonPlusFill />
      <FaCircleUser />
      <MdInbox />
      <MdOutlineHelp />
    </nav>
  )
}
