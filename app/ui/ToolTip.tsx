import { ReactElement } from 'react'
interface IToolTipProps {
  text?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  componentRef: React.RefObject<HTMLElement>
  visibility: boolean
  icon?: ReactElement
}
export default function ToolTip({
  text = 'hola mundo',
  position = 'top',
  componentRef,
  visibility,
  icon
}: IToolTipProps) {
  const parentHeight = componentRef.current?.offsetHeight ?? 10
  const parentWidth = componentRef.current?.offsetWidth ?? 10
  const topPosition = parentHeight - 30 > 0 ? parentHeight / 2 - 15 : parentHeight / 2 - 30 / 2

  const sidePosition: { [key: string]: object } = {
    left: { right: `${Math.round(parentWidth + 10)}px`, top: `${topPosition}px` },
    right: { left: `${Math.round(parentWidth + 10)}px`, top: `${topPosition}px` },
    top: { top: `-${parentHeight + 8}px` },
    bottom: { bottom: `-${parentHeight + 8}px` }
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
        visibility ? 'visible' : 'invisible'
      }`}
      style={sidePosition[position]}
    >
      <span className={`bg-[#1e1f22] w-4 h-4 rotate-45 absolute ${arrowPosition[position]}`}></span>
      {icon}
      <p className="text-xs z-10">{text}</p>
    </div>
  )
}
