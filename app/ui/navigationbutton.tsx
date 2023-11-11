'use client'
import { ReactElement } from 'react'

export interface INavButton {
  size?: ISize
  title?: string
  className?: string[]
  onClick?(id: string): void
  icon?: ReactElement
  id: string
  hover?: boolean
}

interface ISize {
  width: number
  height: number
}

const defaultStyle = ['h-[30px]', 'flex', 'justify-center', 'items-center', 'px-[5px]']

const hover = 'hover:bg-[#3b3d44] hover:text-[#f2f4f7]'

export default function NavButton(props: INavButton) {
  function onClic() {
    if (props.onClick) {
      props.onClick(props.id)
    }
  }

  return (
    <div className={`${defaultStyle.join(' ')} ${props?.className?.join(' ')} ${props.hover ? hover : null}`}>
      <button id={props.id} onClick={onClic}>
        {props.icon}
        {props.title}
      </button>
    </div>
  )
}

// className={props.class?.join(" ") ?? containerClass.join(" ")}
