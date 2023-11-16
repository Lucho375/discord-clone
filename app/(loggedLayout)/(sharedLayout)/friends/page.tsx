'use client'
import NavBar from '@/app/ui/friends-navbar'
import OnlineScreen from '@/app/ui/onlineScreen'
import { ReactElement, useState } from 'react'

interface Screen {
  [key: string]: ReactElement
}

const Friends = () => {
  const [currentScreen, setCurrentScreen] = useState('screen-1')

  const screens: Screen = {
    'screen-1': <OnlineScreen />,
    'screen-2': (
      <div className="w-[90%] h-[90%] bg-red-600 flex justify-center items-center border-white m-5">
        <h1>Todos!</h1>
      </div>
    ),
    'screen-3': (
      <div className="w-[90%] h-[90%] bg-amber-400 flex justify-center items-center border-white m-5">
        <h1>Pendiente!</h1>
      </div>
    ),
    'screen-4': (
      <div className="w-[90%] h-[90%] bg-lime-600 flex justify-center items-center border-white m-5">
        <h1>Bloqueado!</h1>
      </div>
    )
  }

  return (
    <div className="bg-[#313338] w-[100%] h-[100vh] flex flex-col justify-start items-center pt-[5px]">
      <NavBar selectedScreen={setCurrentScreen} />
      {screens[currentScreen]}
    </div>
  )
}

export default Friends
