'use client'
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

  if (loading) return <h1>Loading</h1>
}
