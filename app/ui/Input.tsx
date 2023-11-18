import { ReactElement, FunctionComponent, useState, useEffect } from 'react'

interface IInputProps {
  type?: string
  placeHolder?: string
  id?: string
  className?: string[]
  icon?: ReactElement
}

export default function Input({ placeHolder = 'Buscar', className = [], icon, type = 'text', id }: IInputProps) {
  return (
    <div className={`flex justify-start bg-background-300 active:border-none px-1 ${className.join(' ')}`}>
      <input
        className={`w-full h-full bg-background-300 outline-none ${className.join(' ')}`}
        type={type}
        id={id}
        placeholder={placeHolder}
      ></input>
      {icon ? <div className="flex justify-center items-center w-[32px] h-full">{icon}</div> : null}
    </div>
  )
}
