import { FC } from "react"
// components
// assets


interface Props {
  title: string;
  value: string;
  color: string;
}
const LItem:FC<Props>=(props)=>{
    return (
        <>
          <hr className="bg-[#D9D9D9] w-full opacity-50" />
          <div className="flex justify-between items-center pl-4 pr-4 h-full">
            <p className="text-white">{props.title}</p>
            <p className={props.color}>{props.value}</p>
          </div>
        </>
    )
}
export default LItem