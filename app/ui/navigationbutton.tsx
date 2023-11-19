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
  tooltipIcon?: ReactElement
}

interface ISize {
  width: number
  height: number
}

export default function NavButton(props: INavButton) {
  const [onHover, setHover] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)

  function onClic() {
    if (props.onClick) {
      props.onClick(props.id)
    }
  }

  return (
    <div ref={buttonRef} className="w-auto h-auto flex justify-center items-center relative">
      <button
        id={props.id}
        onClick={onClic}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`h-[30px] flex justify-center items-center px-2 ${props?.className?.join(' ')} ${
          props.hover ? 'hover:bg-[#3b3d44] hover:text-[#f2f4f7]' : null
        }`}
      >
        {props.icon}
        {props.title}
      </button>

      {props.tooltipMessage ? (
        <ToolTip
          text={props.tooltipMessage}
          position={props.tooltipPosition}
          componentRef={buttonRef}
          visibility={onHover}
          icon={props.tooltipIcon}
        />
      ) : null}
    </div>
  )
}

/*

  return (
    <div
      ref={buttonRef}
      className={`h-[30px] flex justify-center items-center px-2 relative ${props?.className?.join(' ')} ${
        props.hover ? 'hover:bg-[#3b3d44] hover:text-[#f2f4f7]' : null
      }`}
    >
      <button
        id={props.id}
        onClick={onClic}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`h-[30px] flex justify-center items-center px-2 relative ${props?.className?.join(' ')} ${
          props.hover ? 'hover:bg-[#3b3d44] hover:text-[#f2f4f7]' : null
        }`}
      >
        {props.icon}
        {props.title}
      </button>

      {props.tooltipMessage ? (
        <ToolTip
          text={props.tooltipMessage}
          position={props.tooltipPosition}
          componentRef={buttonRef}
          visibility={onHover}
          icon={props.tooltipIcon}
        />
      ) : null}
    </div>
  )
  */
