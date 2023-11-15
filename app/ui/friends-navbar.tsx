'use client'
import { useEffect, useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Divider from './Divider'
import NavButton, { INavButton } from './navigationbutton'
import ToolBar from './toolbar'
import { MdInbox, MdMarkChatUnread, MdOutlineHelp } from 'react-icons/md'
interface INavbarProps {
  selectedScreen(screen: string): void
}

export default function NavBar(props: INavbarProps) {
  const [navButtons, setNavButtons] = useState<INavButton[]>([])

  const buttonHoverClass = ['hover:bg-[#3b3d44]', 'hover:text-[#f2f4f7]']
  const focusClass = ['bg-[#3b3d44]', 'text-[#f2f4f7]']

  const Buttons: INavButton[] = [
    {
      title: 'En línea',
      id: 'screen-1',
      className: ['bg-[#313338]', 'text-[#949ba4]', 'rounded-md', ...buttonHoverClass, ...focusClass]
    },
    {
      title: 'Todos',
      id: 'screen-2',
      className: ['bg-[#313338]', 'text-[#949ba4]', 'rounded-md', ...buttonHoverClass]
    },
    {
      title: 'Pendiente',
      id: 'screen-3',
      className: ['bg-[#313338]', 'text-[#949ba4]', 'rounded-md', ...buttonHoverClass]
    },
    {
      title: 'Bloqueado',
      id: 'screen-4',
      className: ['bg-[#313338]', 'text-[#949ba4]', 'rounded-md', ...buttonHoverClass]
    },
    {
      title: 'Añadir amigo',
      id: 'screen-5',
      className: ['bg-[#248046]', 'text-white', 'rounded-md']
    }
  ]
  const toolbarButtons: INavButton[] = [
    {
      id: 'md',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdMarkChatUnread />,
      tooltipMessage: 'Nuevo grupo de MD',
      tooltipPosition: 'bottom'
    },
    {
      id: 'be',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdInbox />,
      tooltipMessage: 'Bandeja de entrada',
      tooltipPosition: 'bottom'
    },
    {
      id: 'hp',
      className: [...buttonHoverClass, 'rounded-md'],
      icon: <MdOutlineHelp />,
      tooltipMessage: 'Ayuda',
      tooltipPosition: 'bottom'
    }
  ]
  function selectedScreen(screen: string) {
    props.selectedScreen(screen)
    const buttonIndex = navButtons.findIndex(btn => btn.id === screen)
    if (buttonIndex !== -1) {
      navButtons.map((btn, i) => {
        if (i === buttonIndex) {
          const buttons = [...navButtons]
          addClass(buttons[i])
          setNavButtons([...buttons])
        } else {
          const buttons = [...navButtons]
          removeClass(buttons[i], focusClass)
          setNavButtons(buttons)
        }
      })
    }
  }

  function addClass(button: INavButton) {
    const btn = button

    btn.className = [...(btn.className ?? []), ...focusClass]
  }
  function removeClass(button: INavButton, btnClases: string | string[]) {
    const btn = button
    const clases = btnClases
    if (clases instanceof Array) {
      clases.forEach(cls => {
        const result = [...(btn.className?.filter(cl => cl !== cls) ?? [])]
        console.log('las clases')
        btn.className = result
      })
      return btn
    }
    btn.className = btn.className?.filter(cls => cls !== clases) ?? []
    return btn
  }

  useEffect(() => {
    setNavButtons(Buttons)
  }, [])

  return (
    <section className="w-[100%] min-h-[48px] flex justify-start items-center gap-3 border-b-[1px] border-b-solid border-[#1f2124] pl-5">
      <FaUserFriends color="#949ba4" />
      <p>Amigos</p>
      <>{console.log('se renderiza nav')}</>
      <Divider orientation="v" size="h-[50%]" />
      {navButtons.map(button => (
        <NavButton
          key={button.id}
          id={button.id}
          title={button.title}
          onClick={selectedScreen}
          className={button.className}
        />
      ))}
      <ToolBar navButton={toolbarButtons} className="ml-auto" />
    </section>
  )
}
