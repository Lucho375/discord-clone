import BottomBar from '@/app/ui/MessagesBottomBar'

interface Params {
  params: { conversation: string }
}

function Conversation({ params }: Params) {
  return (
    <section className="h-full w-full flex flex-col bg-background-100 justify-start items-center px-5">
      <section className="h-[90%] overflow-y-scroll w-full">
        <h1>Conversation {params.conversation}</h1>
      </section>
      <BottomBar userName="Lucho" />
    </section>
  )
}

export default Conversation
