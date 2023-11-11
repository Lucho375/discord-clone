import Image from 'next/image'
import DiscordIcon from 'public/icon.png'

interface Params {
  params: { id: string }
}

function ChannelPage({ params }: Params) {
  return (
    <section className="w-full">
      <h1>Channel {params.id}</h1>

      <ol className="w-full p-5">
        <li className="flex justify-between max-w-[250px] items-center mb-5">
          <Image alt="User avatar" src={DiscordIcon} width={30} height={30} className="rounded-full" />
          <div>
            <h3>
              Username
              <span className="text-gray-400 text-sm">
                {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
              </span>
            </h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        <li className="flex justify-between max-w-[250px] items-center">
          <Image alt="User avatar" src={DiscordIcon} width={30} height={30} className="rounded-full" />
          <div>
            <h3>
              Username
              <span className="text-gray-400 text-sm">
                {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
              </span>
            </h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}

export default ChannelPage
