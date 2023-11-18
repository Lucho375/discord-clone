'use client'
import Link from 'next/link'
import { FormEvent } from 'react'
import FormInput from '../ui/FormInput'
import LoginWithQR from '../ui/LoginWithQR'

export default function LoginPage() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <section className="min-h-screen bg-register-page flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex bg-slate-800 p-8 max-w-3xl">
        <div>
          <h1 className="text-center text-xl">¡Hola de nuevo!</h1>
          <h2 className="text-center text-sm">¡Nos alegramos mucho de volver a verte!</h2>

          <FormInput type="text" label="CORREO ELECTRONICO O NUMERO DE TELEFONO" name="email" required />
          <FormInput type="text" label="CONTRASEÑA" name="password" required />

          <Link href="#" className="py-6 hover:underline text-xs text-blue-500">
            ¿Has olvidado la contraseña?
          </Link>

          <button className="bg-blue-700 w-full p-2 rounded my-2 hover:bg-blue-800 transition-all" type="submit">
            Iniciar sesion
          </button>

          <p className="mt-4 text-xs">
            ¿Necesitas una cuenta?
            <Link href={'/register'} className="hover:underline text-blue-500 ml-1">
              Registrarse
            </Link>
          </p>
        </div>
        <LoginWithQR />
      </form>
    </section>
  )
}
