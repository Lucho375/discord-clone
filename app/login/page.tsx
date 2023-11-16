'use client'
import Link from 'next/link'
import { FormEvent } from 'react'
import qrCode from '@/public/qrCode.png'
import Image from 'next/image'

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

          <div className="flex flex-col my-4 text-sm">
            <label htmlFor="email" className="mb-2">
              CORREO ELECTRONICO O NUMERO DE TELEFONO <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="text" name="email" id="email" />
          </div>

          <div className="flex flex-col my-4 text-sm">
            <label htmlFor="password" className="mb-2">
              CONTRASEÑA <span className="text-red-700">*</span>
            </label>
            <input className="bg-slate-900 p-2 w-[400px] outline-0" type="password" name="password" id="password" />
            <Link href="#" className="mt-2 hover:underline text-xs text-blue-500">
              ¿Has olvidado la contraseña?
            </Link>
          </div>

          <button className="bg-blue-700 w-full p-2 rounded mb-2 hover:bg-blue-800 transition-all" type="submit">
            Iniciar sesion
          </button>
          <p className="mt-4 text-xs">
            ¿Necesitas una cuenta?
            <Link href={'/register'} className="hover:underline text-blue-500 ml-1">
              Registrarse
            </Link>
          </p>
        </div>
        <div className="flex flex-col basis-[240px] ml-20 items-center text-center">
          <Image src={qrCode} width={180} height={180} alt="QR code"></Image>
          <h3 className="mb-2 font-bold text-xl mt-5">Iniciar sesion con codigo qr</h3>
          <p className="text-sm">
            Escanealo con la aplicacion de movil de discord para inciair sesion de forma instantanea
          </p>
        </div>
      </form>
    </section>
  )
}
