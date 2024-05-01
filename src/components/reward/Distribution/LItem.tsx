import { FC } from "react"
// components
// assets
import divider from "../../../assets/reward/Distribution/divider.png";

interface Props {
  sequence: string;
  name: string;
  win: string;
  date: string;
  image: string;
}
const LItem:FC<Props>=(props)=>{
    return (
        <>
          <hr className="bg-[#D9D9D9] w-full opacity-50" />
          <div className="flex justify-between pl-4 pr-4 pt-2 pb-2">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-white">{props.sequence}</p>
              </div>
              <div>
                <img src={divider} />
              </div>
              <div>
                <img src={props.image} />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-sm">{props.name}</p>
                <p className="text-white text-sm">{props.win}</p>
              </div>
            </div>
            <div className="flex items-end">
              <p className="text-[#8B87A2] text-xs">{props.date}</p>
            </div>
          </div>
        </>
    )
}
export default LItem