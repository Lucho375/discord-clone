import { HTMLInputTypeAttribute } from 'react'

interface IFormInputProps {
  type: HTMLInputTypeAttribute
  name: string
  label: string
  required?: boolean
}

export default function FormInput({ type, name, label, required }: IFormInputProps) {
  return (
    <div className="flex flex-col my-4 text-xs">
      <label htmlFor={name} className="mb-2">
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      <input className="bg-slate-900 p-2 w-[400px] outline-0" type={type} name={name} id={name} />
    </div>
  )
}
