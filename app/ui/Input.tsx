import { ReactElement, FunctionComponent, useState, useEffect } from 'react'

interface IInputProps {
  type?: string
  placeHolder?: string
  id?: string
  className?: string[]
  icon?: ReactElement
}
const defaultContainerStyle = ['flex', 'justify-center', 'bg-[#1e1f22]', 'active: border-none']
const defaultInputStyle = ['grow', 'h-[100%]', 'bg-[#1e1f22]', 'outline-none']
const defaultIconStyle = ['flex', 'justify-center', 'items-center', 'w-[32px]', 'h-[100%]']

export default function Input({ placeHolder = 'Buscar', className = [], icon, type = 'text', id }: IInputProps) {
  const containerStyle = `${defaultContainerStyle.join(' ')} ${className.join(' ')}`

  return (
    <div className={containerStyle}>
      <input className={defaultInputStyle.join(' ')} type={type} id={id} placeholder={placeHolder}></input>
      <div className={defaultIconStyle.join(' ')}>{icon}</div>
    </div>
  )
}
