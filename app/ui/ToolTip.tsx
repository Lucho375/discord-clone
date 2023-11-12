import { ReactElement } from 'react'
interface IToolTipProps {
  text?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  componentRef: React.RefObject<HTMLElement>
  width?: number
  visibility: boolean
  icon?: ReactElement
}
export default function ToolTip({
  text = 'hola mundo',
  position = 'top',
  componentRef,
  width = 0,
  visibility,
  icon
}: IToolTipProps) {
  const sidePosition: { [key: string]: object } = {
    left: { right: `${(componentRef.current?.offsetWidth ?? width) + 10}px` },
    right: { left: `${(componentRef.current?.offsetWidth ?? width) + 10}px` }
  }

  const tooltipPosition: { [key: string]: string } = {
    top: 'top-[-40px]',
    bottom: 'bottom-[-40px]',
    left: 'top-auto',
    right: `top-auto`
  }
  const arrowPosition: { [key: string]: string } = {
    top: 'top-[16px] left-auto',
    bottom: 'top-[-3px] left-auto',
    left: 'top-auto right-[-3px]',
    right: 'top-auto left-[-3px]'
  }

  return (
    <div
      className={`bg-[#1e1f22] w-max h-7 rounded-md p-1 flex justify-center items-center absolute gap-2 ${
        tooltipPosition[position]
      } ${visibility ? 'visible' : 'invisible'}`}
      style={sidePosition[position]}
    >
      <span className={`bg-[#1e1f22] w-4 h-4 rotate-45 absolute ${arrowPosition[position]}`}></span>
      {icon}
      <p className="text-xs z-10">{text}</p>
    </div>
  )
}
