import { FC } from "react"
import arrow_right from "../../../assets/common/sidebar/arrow-right.svg";
import arrow_right_active from "../../../assets/common/sidebar/arrow-right-active.svg";
interface Props{
  title: string;
  active?: boolean | undefined;
  image?: string;
  active_image?: string;
}
const Item:FC<Props>=(props)=>{
    return (
        <>
          <div className={`w-[250px] pl-4 py-4 flex pr-4 items-center ${props.active ? "bg-[#05042D]" : "bg-transparent"}`}>
            <div className="flex-none mr-4 flex items-center">
              <img src={props.active ? props.active_image : props.image} />
            </div>
            <div className="flex-1 flex items-center">
              <p className={`text-lg ${props.active ? "text-[#E73583]" : "text-[#85878D]"}`}>{props.title}</p>
            </div>
            <div className="flex-none">
              <img src={props.active ? arrow_right_active : arrow_right} />
            </div>
          </div>
        </>
    )
}
export default Item