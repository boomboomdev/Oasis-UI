import { FC } from "react"
import ArrowDown from "../../common/svg/ArrowDown"
interface Props{
  title: string;
}
const DropButton:FC<Props>=(props)=>{
    return (
        <>
          <li className="text-medium whitespace-nowrap box-border list-none">
            <button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none min-w-20 h-10 text-small gap-2 rounded-small [&>svg]:max-w-[2rem] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased p-0 bg-transparent">
              <p>{props.title}</p>
              <ArrowDown />
            </button>
          </li>
        </>
    )
}
export default DropButton