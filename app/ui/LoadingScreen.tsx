import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#21252b]">
      <Image src="/loading.gif" alt="Discord loading logo" width={250} height={250} />
    </section>
  )
}
