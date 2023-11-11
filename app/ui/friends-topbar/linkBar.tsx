import Link from 'next/link'

interface IButtonLinks {
  href: string
  title: string
  icon: React.ReactNode
}

export default function LinkBar({ icon, title, href }: IButtonLinks) {
  return (
    <Link
      className="flex justify-start items-center w-[95%] h-[40px] py-0 px-[10px] rounded-[5px] gap-5 text-[#949ba4] focus:text-[#f2f4f7] focus:bg-[#3b3d44] hover:text-[#f2f4f7] hover:bg-[#3b3d44]"
      href={href}
    >
      {icon}
      {title}
    </Link>
  )
}
