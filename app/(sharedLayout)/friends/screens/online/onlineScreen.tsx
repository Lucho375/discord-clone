import Input from "@/app/ui/Input"
import { BiSearch } from 'react-icons/bi'

export default function OnlineScreen(){

    return(
        <div className="w-[90%] h-[90%] flex justify-start items-start pt-4">
            <Input className={["w-[100%]","h-[35px]","bg-[#1e1f22]","active: border-none","rounded-md","px-1"]} icon={<BiSearch />}/>
        <h1>En línea!</h1>
      </div>
    )
}