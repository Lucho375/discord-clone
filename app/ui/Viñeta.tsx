interface IViñetaProps {
  text?: string
}
export default function Viñeta({ text = 'hola mundo' }: IViñetaProps) {
  return (
    <div className="bg-[#1e1f22] w-auto h-7 rounded-md p-1 flex justify-center items-center">
      <span className="bg-[#1e1f22] w-4 h-4 rotate-45 relative top-[9px] left-[35px]"></span>
      <p className="text-xs z-10">{text}</p>
    </div>
  )
}
