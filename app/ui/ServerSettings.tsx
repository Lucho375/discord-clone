'use client'
import { AiFillFolderAdd, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillCalendarPlusFill } from 'react-icons/bs'
import { FcSettings } from 'react-icons/fc'
import { GoPersonAdd } from 'react-icons/go'
import { IoIosNotifications } from 'react-icons/io'
import { MdModeEditOutline, MdPrivacyTip, MdUpgrade } from 'react-icons/md'
import { LiaRobotSolid } from 'react-icons/lia'

export default function ServerSettings() {
  return (
    <section className="absolute top-[60px] left-[80px]">
      <ul className="min-w-[210px] bg-black text-white text-xs rounded">
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Mejora del servidor</span>
          <MdUpgrade className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between w-[210px] text-blue-300">
          <span className="w-full">Invitar gente</span>
          <GoPersonAdd className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Ajustes del servidor</span>
          <FcSettings className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Crear canal</span>
          <AiFillPlusCircle className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Crear categoria</span>
          <AiFillFolderAdd className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Crear evento</span>
          <BsFillCalendarPlusFill className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Directorio de apps</span>
          <LiaRobotSolid className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Ajustes de notificaciones</span>
          <IoIosNotifications className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Ajustes de privacidad</span>
          <MdPrivacyTip className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Editar perfil de servidor</span>
          <MdModeEditOutline className="text-lg" />
        </li>
        <li className="p-2 hover:bg-blue-500 hover:cursor-pointer flex justify-between">
          <span className="w-full">Ocultar canales silenciados</span>
          <input type="checkbox" name="hideSilencedChannels" id="hideSilencedChannels" />
        </li>
      </ul>
    </section>
  )
}
