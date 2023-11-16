'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [user, setUser] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
      setUser(false)
      router.push('/friends')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [router])

  if (loading)
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#21252b]">
        <Image src="/loading.gif" alt="" width={250} height={250} />
      </section>
    )
}
