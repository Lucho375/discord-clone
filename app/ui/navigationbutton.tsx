'use client'
import { ReactElement, useState, useRef } from 'react'
import ToolTip from './ToolTip'

export interface INavButton {
  size?: ISize
  title?: string
  className?: string[]
  onClick?(id: string): void
  icon?: ReactElement
  id: string
  hover?: boolean
  tooltipMessage?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}

interface ISize {
  width: number
  height: number
}

const defaultStyle = ['h-[30px]', 'flex', 'justify-center', 'items-center', 'px-[5px]', 'relative']

const hover = 'hover:bg-[#3b3d44] hover:text-[#f2f4f7]'

export default function NavButton(props: INavButton) {
  const [onHover, setHover] = useState(true)
  const buttonRef = useRef<HTMLDivElement>(null)

  function onClic() {
    if (props.onClick) {
      props.onClick(props.id)
    }
  }

  return (
    <div
      ref={buttonRef}
      className={`${defaultStyle.join(' ')} ${props?.className?.join(' ')} ${props.hover ? hover : null}`}
    >
      <button id={props.id} onClick={onClic} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {props.icon}
        {props.title}
      </button>
      {props.tooltipMessage ? (
        onHover ? (
          <ToolTip text={props.tooltipMessage} position={props.tooltipPosition} componentRef={buttonRef} />
        ) : null
      ) : null}
    </div>
  )
}

// className={props.class?.join(" ") ?? containerClass.join(" ")}
