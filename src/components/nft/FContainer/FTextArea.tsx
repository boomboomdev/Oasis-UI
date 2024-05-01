import { FC } from "react"
// components
// assets
interface Props{
  placeholder: string;
  label: string;
}
const FTextArea:FC<Props>=(props)=>{
    return (
        <>
          <div className="h-full">
            <p className="text-lg text-white mb-2">{props.label}</p>
            <textarea className="bg-[#1F1D5B] rounded-2xl h-full w-full h-full pt-4 pl-8 text-white" placeholder={props.placeholder} />
          </div>
        </>
    )
}
export default FTextArea