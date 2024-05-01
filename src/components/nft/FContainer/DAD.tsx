import { FC } from "react"
import GradientButton from "../../common/gradient_button"
// components
// assets
import cloud from "../../../assets/nft/FContainer/DAD/cloud.png";
interface Props{

}
const DAD:FC<Props>=()=>{
    return (
        <>
          <div className="border-dotted border-2 rounded-md border-[#50B4FF] w-full flex flex-col items-center space-y-8 pt-16 pb-8">
            <img src={cloud} />
            <p className="text-white text-xl leading-relaxed" >Drop your artwork here</p>
            <p className="text-white text-xl leading-relaxed opacity-50" >OR</p>
            <GradientButton value="Browse File" />
            <p className="text-[#E73583] text-lg">Upload only PNG, JPEG file</p>
          </div>
        </>
    )
}
export default DAD