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
    <div className={`${className.join(' ')} flex justify-start active:border-none px-1 `}>
      <input
        className={`${className.join(' ')} w-full h-full outline-none `}
        type={type}
        id={id}
        placeholder={placeHolder}
      ></input>
      {icon ? <div className="flex justify-center items-center w-[32px] h-full">{icon}</div> : null}
    </div>
  )
}
