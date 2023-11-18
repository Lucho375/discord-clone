import Image from 'next/image'
import qrCode from '@/public/qrCode.png'

export default function LoginWithQR() {
  return (
    <section className="flex flex-col basis-[240px] ml-20 items-center text-center">
      <Image src={qrCode} width={180} height={180} alt="QR code"></Image>
      <h3 className="mb-2 font-bold text-xl mt-5">Iniciar sesion con codigo qr</h3>
      <p className="text-sm">
        Escanealo con la aplicacion de movil de discord para inciair sesion de forma instantanea
      </p>
    </section>
  )
}
