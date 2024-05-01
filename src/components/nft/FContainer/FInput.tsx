import { FC } from "react"
// components
// assets
interface Props{
  placeholder: string;
  label: string;
}
const FInput:FC<Props>=(props)=>{
    return (
        <>
          <div>
            <p className="text-lg text-white mb-2">{props.label}</p>
            <input className="bg-[#1F1D5B] rounded-full w-full h-[65px] pl-8 text-white" placeholder={props.placeholder} />
          </div>
        </>
    )
}
export default FInput