import Divider from "@/app/ui/Divider"
import Input from "@/app/ui/Input"
import { BiSearch } from 'react-icons/bi'

export default function OnlineScreen(){

    return(
        <div className="w-[100%] h-[100%] flex justify-start items-start">
            <section className="flex flex-col justify-start items-start w-[70%] h-[100%] px-5 border-r-2 border-solid border-[#3f4147] pt-4">
            <Input className={["w-[100%]","h-[35px]","bg-[#1e1f22]","active: border-none","rounded-md","px-1"]} icon={<BiSearch />}/>
            <h6 className="text-[#949ba4] pt-8 text-xs">CONECTADO - 3</h6>
            <Divider orientation="h"/>
            </section>
            <section className=" h-[100%] px-5 pt-4 w-[30%]">
                <h3 className="text-[#f2f3f5] font-bold self-start mb-4">Activo ahora</h3>
                <div className="flex flex-col justify-center items-center p-4">
                    <p className="text-[#f2f3f5] text-xs mb-1">Por ahora está todo tranquilo...</p>
                    <p className="text-[#949ba4] text-xs text-center">
                        Cuando un amigo empiece a realizar una actividad como jugar o hablar por voz, ¡te lo mostraremos aqui!
                    </p>
                </div>
            </section>

      </div>
    )
}