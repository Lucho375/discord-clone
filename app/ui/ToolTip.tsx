'use client'
import { useEffect, useState } from 'react'
interface IToolTipProps {
  text?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  componentRef?: React.RefObject<HTMLElement>
}
export default function ToolTip({ text = 'hola mundo', position = 'top', componentRef }: IToolTipProps) {
  const [toolPosition, setPosition] = useState('50px')
  const tooltipPosition: { [key: string]: string } = {
    top: 'top-[-40px]',
    bottom: 'bottom-[-40px]',
    left: 'top-auto right-[50px]',
    right: `top-auto left-[${componentRef?.current ? (componentRef.current.offsetWidth + 3).toString() : '50'}px]`
  }
  const arrowPosition: { [key: string]: string } = {
    top: 'top-[16px] left-auto',
    bottom: 'top-[-3px] left-auto',
    left: 'top-auto right-[-3px]',
    right: 'top-auto left-[-3px]'
  }

  useEffect(() => {
    if (componentRef?.current) {
      const current = componentRef.current
      console.log('la referencia es: ', componentRef.current.offsetWidth)
      const width = current.offsetWidth
      console.log('El ancho del boton es: ', width)
      switch (position) {
        case 'right':
          console.log('dentro de switch')
          setPosition(`${width + 3}px`)
          console.log(toolPosition)
          break
        default:
          console.log('no hay nada')
      }
    }
  }, [toolPosition])
  return (
    <div
      className={`bg-[#1e1f22] w-max h-7 rounded-md p-1 flex justify-center items-center absolute`}
      style={{ left: `${toolPosition}` }}
    >
      <span className={`bg-[#1e1f22] w-4 h-4 rotate-45 absolute ${arrowPosition[position]}`}></span>
      <p className="text-xs z-10">{text}</p>
    </div>
  )
}
