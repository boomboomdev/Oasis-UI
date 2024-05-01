import { FC } from "react"
// assets
import Vector from "../../../assets/home/ongoing/Vector.png";
interface Props {
  image: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="w-full relative border-2 border-[#848383] rounded-md">
            <img className="w-full"  src={props.image}  />
            <p className="text-white text-xl leading-relaxed m-4" >Competition Name</p>
            <div className=" p-4 pt-0 pb-0">
              <p className="text-[#C1BDBD] text-sm w-full line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum voluptate nostrum ea natus cumque id. Beatae provident rerum similique tenetur nihil voluptates eum quae perspiciatis, sit ducimus hic aliquid!</p>
            </div>

            <div className="flex justify-between m-4">
              <div>
                <p className="text-xl leading-relaxed" style={{"background": "-webkit-linear-gradient(left, #E73583, #7C65FF, #50B4FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Ends: 03: 16: 34</p>
              </div>
              <div className="flex space-x-2">
                <div>
                  <p className="text-[#D9D9D9] text-sm">Vote here</p>
                  <p className="text-sm leading-relaxed" style={{"background": "-webkit-linear-gradient(left, #E73583, #7C65FF, #50B4FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                  }}>1, 293</p>
                </div>
                <div className="flex items-center">
                  <img className=""  src={Vector}  />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default Card