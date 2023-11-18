'use client'
import { useState } from 'react'
import { RiArrowDropDownLine, RiCloseFill } from 'react-icons/ri'
import ServerSettings from '../ui/ServerSettings'

export default function ServerSideBar() {
  const [visible, setVisible] = useState<boolean>(false)

  const dropDownSettings = () => {
    setVisible(!visible)
  }

  return (
    <section className="w-[230px] min-h-screen bg-[#2b2d31]">
      <button className="w-full hover:bg-[#3b3d44]" onClick={dropDownSettings}>
        <div className="flex items-center justify-between p-3">
          <h1 className="font-semibold">Server name</h1>
          {visible ? <RiCloseFill className="text-xl" /> : <RiArrowDropDownLine className="text-xl" />}
        </div>
      </button>
      {visible ? <ServerSettings /> : null}
    </section>
  )
}
