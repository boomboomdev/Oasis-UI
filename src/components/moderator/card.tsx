import { FC } from "react"
// assets
import Vector from "../../assets/home/ongoing/Vector.png";
interface Props {
  image: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="w-full relative border-2 border-[#848383] rounded-md">
            <img className="w-full"  src={props.image}  />
            <div className="flex justify-between pl-4 pr-4 pt-4">
              <div className="flex items-end space-x-2">
                <p className="text-white text-xl leading-relaxed">Art Name</p>
                <p className="text-[#979797] text-sm">(Artist)</p>
              </div>
              <div>
                <p className="text-[#E73583] text-xl leading-relaxed">$4.56</p>
              </div>
            </div>
            <div className=" p-4 pt-0 pb-0">
              <p className="text-[#C1BDBD] text-sm w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum voluptate nostrum ea natus cumque id. Beatae provident rerum similique tenetur nihil voluptates eum quae perspiciatis, sit ducimus hic aliquid!</p>
            </div>

            <div className="flex justify-between m-4">
              <div>
                <p className="text-white text-xl leading-relaxed" >Ends: 03: 16: 34</p>
              </div>
              <div className="flex space-x-2">
                <div>
                  <p className="text-white text-sm">Vote here</p>
                  <p className="text-white text-sm">1, 293</p>
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