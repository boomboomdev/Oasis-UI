import { FC } from "react"
// components
import TransparentButton from "../../common/transparent_button";
// assets
import more_vertical from "../../../assets/marketplace/hot/more-vertical.svg";
import avatar from "../../../assets/marketplace/hot/avatar.png";
import Vector from "../../../assets/marketplace/hot/Vector.png";
import GradientButton from "../../common/gradient_button";
import divider from "../../../assets/marketplace/hot/divider.png";


interface Props {
  image: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="w-full relative border-2 border-[#848383] rounded-[1.25rem] p-4 flex space-x-4">
            <div className="relative flex-none flex items-center">
              <div className="relative">
                <div>
                  <img className=""  src={props.image}  />
                </div>
                <div className="w-full h-[60px] absolute bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur bottom-0  rounded-bl-[0.35rem] rounded-br-[0.35rem] p-2 flex items-center">
                  <div className="w-full flex space-x-2 items-center">
                    <img className=""  src={avatar}  />
                    <div>
                      <p className="text-white text-sm leading-relaxed" >Alexandex Lux</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-white text-xl leading-relaxed" >NFT Name</p>
              <p className="text-[#C1BDBD] text-sm line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum voluptate nostrum ea natus cumque id. Beatae provident rerum similique tenetur nihil voluptates eum quae perspiciatis, sit ducimus hic aliquid! Iusto dolorum voluptate nostrum ea natus cumque id. Beatae provident rerum similique tenetur nihil voluptates eum quae perspiciatis, sit ducimus hic aliquid!</p>

              <div className="bg-[#170F44] rounded-md w-full h-[100px] flex space-x-12 justify-center items-center mt-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-[#8B87A2] text-sm opacity-50">Current Price</p>
                  <p className="text-[#E73583] text-base">1.78 ETH</p>
                  <p className="text-white text-sm">$3,890.6</p>
                </div>
                <div>
                  <img src={divider} />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-[#8B87A2] text-sm opacity-50">Competition Ending in</p>
                  <div className="flex w-full">
                    <div className="basis-1/3 flex">
                      <p className="text-[#E73583] text-base flex-none">12</p>
                      <div className="flex-1 flex justify-center">
                        <p className="text-[#E73583] text-base">:</p>
                      </div>
                    </div>
                    <div className="basis-1/3 flex">
                      <p className="text-[#E73583] text-base flex-none">23</p>
                      <div className="flex-1 flex justify-center">
                        <p className="text-[#E73583] text-base">:</p>
                      </div>
                    </div>
                    <div className="basis-1/3 flex">
                      <p className="text-[#E73583] text-base flex-none">34</p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="basis-1/3 flex justify-start">
                      <p className="text-white text-sm">Hrs</p>
                    </div>
                    <div className="basis-1/3 flex justify-start">
                      <p className="text-white text-sm">Mins</p>
                    </div>
                    <div className="basis-1/3 flex justify-start">
                      <p className="text-white text-sm">Secs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 justify-center mt-2">
                <TransparentButton value="Vote Here" image={Vector} />
                <GradientButton value="Buy Now" />
              </div>
            </div>
            <img className="top-2 right-0 absolute z-10"  src={more_vertical}  />
          </div>
        </>
    )
}
export default Card