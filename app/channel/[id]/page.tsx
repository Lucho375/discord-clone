'use client'
import { useParams } from 'next/navigation'

function ChannelPage() {
  const { id } = useParams()
  return <div>Channel {id}</div>
}

export default ChannelPage
