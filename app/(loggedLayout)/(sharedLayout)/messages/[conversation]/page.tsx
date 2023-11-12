interface Params {
  params: { conversation: string }
}

function Conversation({ params }: Params) {
  return (
    <section className="max-h-screen overflow-y-scroll w-full flex flex-col">
      <section>
        <h1>Conversation {params.conversation}</h1>
      </section>

      <input type="text" name="message" id="message" placeholder="Enviar mensaje a @Username" />
    </section>
  )
}

export default Conversation
