import { FC } from "react"
interface Props {
    value: string;
    image?: string;
}
const TransparentButton:FC<Props>=(props)=>{
    return (
        <>
          <div className={`bg-transparent text-center rounded-full w-[180px] h-[60px] border-2 border-[#848383] flex justify-center items-center ${props.image ? "flex space-x-2" : ""}`} >
              <div className="text-white opacity-50" >{props.value}</div>
              <img src={props.image} />
          </div>
        </>
    )
}
export default TransparentButton