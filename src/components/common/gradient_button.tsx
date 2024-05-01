import { FC } from "react"
interface Props {
    value: string;
}
const GradientButton:FC<Props>=(props)=>{
    return (
        <>
          <div className="bg-gradient-to-r from-[#E73583] text-center via-[#7C65FF] to-[#50B4FF] w-[180px] h-[60px] rounded-full flex justify-center items-center" >
              <div className="text-white" >{props.value}</div>
          </div>
        </>
    )
}
export default GradientButton