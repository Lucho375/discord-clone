interface Params {
  params: { id: string }
}

function ChannelPage({ params }: Params) {
  return <div>Channel {params.id}</div>
}

export default ChannelPage
