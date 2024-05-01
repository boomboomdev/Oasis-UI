import { FC } from "react"
// assets
import more_vertical from "../../../assets/home/featured/more-vertical.svg";
import heart from "../../../assets/home/featured/heart.png";
import avatar from "../../../assets/home/featured/avatar.png";
interface Props {
  image: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="w-full h-[360px] relative">
            <div className="relative">
              <img className="w-full"  src={props.image}  />
              <div className="w-full h-[60px] absolute bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur bottom-0  rounded-bl-[0.35rem] rounded-br-[0.35rem] p-2 flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <img className=""  src={avatar}  />
                  <div>        
                    <p className="text-white text-xs leading-relaxed" >ARC Stellars #234</p>
                    <p className="text-white text-[0.5rem]">Creator: Kevin hart</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end space-y-1">
                  <div>
                    <img className=""  src={heart}  />
                  </div>
                  <p className="text-white text-[0.5rem] font-bold">0.0076ETH</p>
                </div>
              </div>
            </div>
            <img className="top-2 right-0 absolute z-10"  src={more_vertical}  />
          </div>
        </>
    )
}
export default Card