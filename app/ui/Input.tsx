import { ReactElement, FunctionComponent, useState, useEffect } from 'react'

interface IInputProps {
  type?: string
  placeHolder?: string
  id?: string
  className?: string[]
  icon?: ReactElement
}
const defaultContainerStyle = ['flex', 'justify-start', 'bg-[#1e1f22]', 'active: border-none']
const defaultIconStyle = ['flex', 'justify-center', 'items-center', 'w-[32px]', 'h-[100%]']

export default function Input({ placeHolder = 'Buscar', className = [], icon, type = 'text', id }: IInputProps) {
  return (
    <div className={`flex justify-start bg-background-300 active:border-none px-1 ${className.join(' ')}`}>
      <input
        className="w-full h-full bg-background-300 outline-none"
        type={type}
        id={id}
        placeholder={placeHolder}
      ></input>
      {icon ? <div className={defaultIconStyle.join(' ')}>{icon}</div> : null}
    </div>
  )
}
