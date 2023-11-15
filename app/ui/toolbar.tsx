import NavButton, { INavButton } from './navigationbutton'

interface IToolBarProps {
  navButton: INavButton[]
  className?: string
  children?: React.ReactNode
}

export default function ToolBar(props: IToolBarProps) {
  return (
    <section className={`flex h-full justify-evenly items-center mr-5 gap-3 ${props.className}`}>
      {props.navButton.map((button, key) => (
        <NavButton
          key={button.id}
          id={button.id}
          className={button.className}
          icon={button.icon}
          tooltipMessage={button.tooltipMessage}
          tooltipPosition={button.tooltipPosition}
        />
      ))}
      {props.children}
    </section>
  )
}
