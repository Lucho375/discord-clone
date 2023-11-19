'use client'
import Link from 'next/link'
import { FormEvent } from 'react'
import FormInput from '../ui/FormInput'

export default function RegisterPage() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget as HTMLFormElement)
      const formValues: { [key: string]: string } = {}
      formData.forEach((value, key) => {
        formValues[key] = value as string
      })
      console.log(formValues)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="min-h-screen bg-register-page flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex bg-slate-800 p-8 max-w-3xl">
        <div>
          <h1 className="text-center text-xl mb-8">Crear una cuenta</h1>
          <FormInput type="text" name="email" label="CORREO ELECTRONICO" required />
          <FormInput type="text" name="displayName" label="MOSTRAR NOMBRE" />
          <FormInput type="text" name="userName" label="NOMBRE DE USUARIO" required />
          <FormInput type="password" name="password" label="CONTRASEÑA" required />
          <FormInput type="date" name="birthDate" label="FECHA DE NACIMIENTO" required />

          <button className="bg-blue-700 w-full p-2 rounded mb-2 hover:bg-blue-800 transition-all" type="submit">
            Continuar
          </button>

          <Link href={'/login'} className="hover:underline text-blue-500 text-xs">
            ¿Ya tienes una cuenta?
          </Link>
        </div>
      </form>
    </section>
  )
}
