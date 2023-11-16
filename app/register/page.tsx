'use client'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function RegisterPage() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <section className="min-h-screen bg-register-page flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex bg-slate-800 p-8 max-w-3xl">
        <div>
          <h1 className="text-center text-xl mb-8">Crear una cuenta</h1>

          <div className="flex flex-col my-4 text-xs">
            <label htmlFor="email" className="mb-2">
              CORREO ELECTRONICO <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="text" name="email" id="email" />
          </div>

          <div className="flex flex-col my-4 text-xs">
            <label htmlFor="password" className="mb-2">
              MOSTRAR NOMBRE
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="password" name="password" id="password" />
          </div>

          <div className="flex flex-col my-4 text-xs">
            <label htmlFor="password" className="mb-2">
              NOMBRE DE USUARIO <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="password" name="password" id="password" />
          </div>

          <div className="flex flex-col my-4 text-xs">
            <label htmlFor="password" className="mb-2">
              CONTRASEÑA <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="password" name="password" id="password" />
          </div>

          <div className="flex flex-col my-4 text-xs">
            <label htmlFor="password" className="mb-2">
              FECHA DE NACIMIENTO <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="password" name="password" id="password" />
          </div>

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
